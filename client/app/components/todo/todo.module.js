import angular from 'angular';
import todoComponent from './todo.component';

const todoModule = angular.module('todo', [])
    .component('todo', todoComponent);
    // .controller('todoCtrl', todoComponent.controller);
export default todoModule;