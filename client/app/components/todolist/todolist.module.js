import angular from 'angular';
import todolistComponent from './todolist.component';

const todolistModule = angular.module('todolist', [])
    .component('todolist', todolistComponent)
    .controller('todolistCtrl', todolistComponent.controller);

export default todolistModule;