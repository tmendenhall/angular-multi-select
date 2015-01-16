/* global angular:false */
'use strict';

var myApp = angular.module('myApp',['multi-select'])
.controller('MyCtrl', function($scope) {
  $scope.roles = [
    {roleId: 1, roleName: "Administrator", roleDescription: "Can do a bunch of stuff",mx:[]},
    {roleId: 2, roleName: "Super User", roleDescription: "Ultimate power!",mx:[]},
    {roleId:3, roleName:"Unlimited Cosmic Power", roleDescription:"Ultimate power",mx:[4,5]},
    {roleId:4, roleName:"Itty Bitty Living Space", roleDescription:"a tiny bottle",mx:[3,5]},
    {roleId:5, roleName:"Normal User", roleDescription:"a normal user",mx:[3,4]},
    {roleId:6,roleName:"Exclusive",roleDescription:"mutually exclusive test",mx:[1,2]}
  ];

   $scope.otherroles = [
                {roleId: 1, roleName: "Administrator", roleDescription: "Can do a bunch of stuff",mx:[6]},
                {roleId: 2, roleName: "Super User", roleDescription: "Ultimate power!",mx:[6]},
                {roleId:3, roleName:"Unlimited Cosmic Power", roleDescription:"Ultimate power",mx:[4,5]},
                {roleId:4, roleName:"Itty Bitty Living Space", roleDescription:"a tiny bottle",mx:[3,5]},
                {roleId:5, roleName:"Normal User", roleDescription:"a normal user",mx:[3,4]},
                {roleId:6,roleName:"Exclusive",roleDescription:"mutually exclusive test",mx:[1,2]}
   ];

  
  $scope.user = {
    userId: 1, 
    username: "JimBob",
    roles: [$scope.roles[1], $scope.roles[0], {roleId:5,roleName:"Legacy Role",roleDescription:"a legacy role",mx:[]}]
  };

  $scope.others = [];

  var other1 = {
      otherId: 1,
      othername: "edward",
      roles:[]
  };

  var other2 = {
      otherId: 2,
      othername: "fredrick",
      roles:[]
  };

  $scope.others.push(other1);
  $scope.others.push(other2);

  $scope.selectConfig = {
    requiredMin: 1,
    selectAll: true
  };

  $scope.selectOtherConfig = {
      requiredMin: 0,
      selectAll: true
  };
})
;