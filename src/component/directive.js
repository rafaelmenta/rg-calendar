import angular from 'angular';
import template from 'raw-loader!./template.html';

function calendarDirective() {
  return {
    restrict : 'E',
    template : template
  }
};

export default angular
  .module('rg-calendar.directive', [])
  .directive('rgCalendar', [calendarDirective])
  .name;