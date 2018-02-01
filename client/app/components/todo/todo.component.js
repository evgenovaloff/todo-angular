import template from './todo.component.html';
import controller from './todo.controller.js';
import './todo.component.scss';

let todoComponent = {
    restrict: 'E',
    bindings: {
        obj: '='
    },
    scope: {},
    template,
    controller
};

export default todoComponent;