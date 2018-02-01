import angular from 'angular';
    import TodoModule from './todo/todo.module';
    import TodolistModule from './todolist/todolist.module';

const ComponentsModule = angular.module('app.components',[
       TodoModule.name, 
     TodolistModule.name
]);

export default ComponentsModule;