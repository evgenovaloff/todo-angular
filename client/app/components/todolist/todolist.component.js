import template from './todolist.component.html';
import controller from './todolist.controller.js';
import './todolist.component.scss';

let todolistComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller
};
export default todolistComponent;