// Register `phoneList` component, along with its associated controller and template
angular.
module('phoneList').
component('phoneList', { // This name is what AngularJS uses to match to the `<phone-list>` element.
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone',
      function PhoneListController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
});