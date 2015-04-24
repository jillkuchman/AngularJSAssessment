signIn.controller('AttendanceCtrl', function AttendanceCtrl($scope, StudentsFactory) {
    $scope.students = StudentsFactory.students;

    $scope.signIn = function(student){
        student.signedIn = true;
    };
});
