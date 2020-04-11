import {MDCMenu} from '@material/menu';
import {MDCList} from "@material/list";
import {MDCDrawer} from "@material/drawer";
import {MDCDataTable} from '@material/data-table';

const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

const list = MDCList.attachTo(document.querySelector('.mdc-list'));
list.wrapFocus = true;

const menu = new MDCMenu(document.querySelector('.mdc-menu'));
menu.open = true;

(function () {  console.log("hey mister");}());

mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));