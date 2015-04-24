signIn.controller('AttendanceCtrl', function AttendanceCtrl($scope, StudentsFactory) {
    $scope.students = StudentsFactory.students;

    //this method changes a student's signedin property to true
    $scope.signIn = function(student){
        student.signedin = true;
    };

    //this method changes a student's signedin property to false
    $scope.signOut = function(student){
        student.signedin = false;
    };
});
