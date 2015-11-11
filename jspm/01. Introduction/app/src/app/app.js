// JS
import kendo from 'kendo-ui';

// Template
import appTemplate from './appTemplate.html!text';

// Data
import appData from './appData.json!';

// CSS
import 'kendo-ui/styles/kendo.common-bootstrap.min.css!';
import 'kendo-ui/styles/kendo.bootstrap.min.css!';

const view = $('<div class="panel panel-default" style="margin:50px"> <div class="panel-heading">Select:</div> <div class="panel-body"><select></select></div></div>').appendTo('body');

const app = new kendo.ui.DropDownList(view.find('select'),{
    template: kendo.template(appTemplate),
    dataTextField: 'ContactName',
    dataValueField: 'CustomerID',
    dataSource: appData
});

export {app};