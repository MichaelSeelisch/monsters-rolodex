var qs = require ('querystring');

// Send HTML response
exports.sendHtml = function(res, html) {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));
  res.end(html);
};

// Parse HTTP POST data
exports.parseReceiveData = function(req, cb) {
  var body = '';
  req.setEncoding('utf8');
  req.on('data', function(chunk) {
    body += chunk;
  });
  req.on('end', function() {
    var data = qs.parse(body);
    cb(data);
  });
};

// Render simple form
exports.actionForm = function(id, path, label) {
  var html =
    '<form method="POST" action="' + path + '">' +
    '<input type="hidden" name="id" value="' + id + '">' +
    '<input type="submit" name="id" value="' + label + '" />' +
    '</form>';

  return html;
};

// Adding a work record
exports.add = function(db, req, res) {
  // Parse HTTP POST data
  exports.parseReceiveData(req, function(work) {
    db.query(
      "INSERT INTO work (hours, date, description)  VALUES (?, ?, ?)",

      // Work record data
      [work.hours, work.date, work.description],
      function(err) {
        if(err) {
          throw err;
        }

        // Show user a list of work records
        exports.show(db, res);
      }
    );
  });
};

// Deleting a work records
exports.delete = function(db, req, res) {
  // Parse HTTP POST data
  exports.parseReceiveData(req, function(work) {
    db.query("DELETE FROM work WHERE id=?",
      [work.id],
      function(err) {
        if(err) {
          throw err;
        }

        // Show user a list of work records
        exports.show(db, res);
      }
    );
  });
};

// Archiving a work record
exports.archive = function(db, req, res) {
  exports.parseReceiveData(req, function(work) {
    db.query(
      "UPDATE work SET archived=1 WHERE id=?",
      [work.id],
      function(err) {
        if(err) {
          throw err;
        }

        // Show user a list of work records
        exports.show(db, res);
      }
    );
  });
};

// Retrieving work records
exports.show = function(db, res, showArchived) {
  var query = "SELECT * FROM work WHERE archived=? ORDER BY date DESC";
  var archiveValue = (showArchived) ? 1 : 0;

  db.query(
    query,
    // Desired work-record archive status
    [archiveValue],
    function(err, rows) {
      if(err) {
        throw err;
      }

      html = (showArchived) ? '' : '<a href="/archived">Archived Work</a><br/>';
      // Format results as HTML table
      html += exports.workHitlistHtml(rows);
      html += exports.workFormHtml();
      // Send HTML response to user
      exports.sendHtml(res, html);
    }
  );
};

exports.showArchived = function(db, res) {
  // Show only archived work records
  exports.show(db, res, true);
};

// Rendering work records to an HTML table
exports.workHitlistHtml = function(rows) {
  var html = '<table>';
  // Render each work record as HTMLtable row
  for(var i in rows) {
    html += '<tr style="vertical-align: initial;">';
    html += '<td>' + rows[i].date + '</td>';
    html += '<td>' + rows[i].hours + '</td>';
    html += '<td>' + rows[i].description + '</td>';

    // Show archive button if work record isn't already archived
    if(!rows[i].archived) {
      html += '<td>' + exports.workArchiveForm(rows[i].id) + '</td>';
    }
    html += '<td>' + exports.workDeleteForm(rows[i].id) + '</td>';
    html += '</tr>';
  }
  html += '</table>';

  return html;
};

// HTML forms for adding, archiving and deleting work records
exports.workFormHtml = function() {
  // Rendering blank HTML form for entering new work record
  var html = '<form method="POST" action="/"' +
    '<p>Date (YYYY-MM-DD):<br/><input name="date" type="text"></p>' +
    '<p>Hours worked:<br/><input name="hours" type="text"></p>' +
    '<p>Description:<br/>' +
    '<p><textarea name="description"></textarea></p>' +
    '<input type="submit" value="Add" />' +
    '</form>';

  return html;
};

// Render Archive button forms
exports.workArchiveForm = function(id) {
  return exports.actionForm(id, '/archive', 'Archive');
};

// Render Delete button forms
exports.workDeleteForm = function(id) {
  return exports.actionForm(id, '/delete', 'Delete');
};
