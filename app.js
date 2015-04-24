var signIn = angular.module('signIn', ['ui.router']);

signIn.config(function($stateProvider) {

    //route to home page
    $stateProvider.state('home', {
        url: '',
        templateUrl: 'partials/home.html'
    });

    //route to sign in page
    $stateProvider.state('sign-in', {
        url: 'sign-in',
        templateUrl: 'partials/sign-in.html',
        controller: 'AttendanceCtrl'
    });

    //route to attendance page
    $stateProvider.state('attendance', {
        url: 'attendance',
        templateUrl: 'partials/attendance.html'
    });
});
