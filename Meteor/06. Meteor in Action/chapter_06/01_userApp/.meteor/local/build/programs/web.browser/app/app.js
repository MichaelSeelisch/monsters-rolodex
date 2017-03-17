var require = meteorInstall({"client":{"template.templates.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// client/template.templates.js                                      //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
                                                                     // 1
Template.body.addContent((function() {                               // 2
  var view = this;                                                   // 3
  return HTML.DIV({                                                  // 4
    class: "container"                                               // 5
  }, "\n      ", HTML.DIV({                                          // 6
    class: "navbar"                                                  // 7
  }, "\n        ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n      "), HTML.Raw("\n      <h1>Working with users</h1>\n    "));
}));                                                                 // 9
Meteor.startup(Template.body.renderToDocument);                      // 10
                                                                     // 11
///////////////////////////////////////////////////////////////////////

},"client.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// client/client.js                                                  //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
// Configuration                                                     // 1
Accounts.ui.config({                                                 // 2
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'                // 3
});                                                                  // 2
///////////////////////////////////////////////////////////////////////

}},"collections":{"collections.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// collections/collections.js                                        //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
                                                                     //
///////////////////////////////////////////////////////////////////////

}},"common":{"common.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// common/common.js                                                  //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
                                                                     //
///////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/template.templates.js");
require("./client/client.js");
require("./collections/collections.js");
require("./common/common.js");