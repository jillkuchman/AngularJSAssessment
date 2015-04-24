signIn.controller('AttendanceCtrl', function AttendanceCtrl($scope, StudentsFactory) {
    $scope.students = StudentsFactory.students;

    $scope.signIn = function(student){
        student.signedin = true;
    };

    $scope.signOut = function(student){
        student.signedin = false;
    };
});
