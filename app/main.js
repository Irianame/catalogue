import '../build/css/main.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './routing';

import mainTable from './components/main-table/main-table.component';

angular.module('app', [uirouter, mainTable])
.config(routing);