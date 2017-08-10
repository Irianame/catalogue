import angular from 'angular';

export default angular.module('app.mainTable', [])
.component('mainTable', {
	controller: mainTableController,
	template: require('./main-table.template.html')
}).name;

function mainTableController(){alert(123);}