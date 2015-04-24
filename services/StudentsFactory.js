signIn.factory('StudentsFactory', function StudentsFactory() {
    var factory = {};

    //hard-coded list of students
    factory.students =  [
                            {name: 'John', signedin: false},
                            {name: 'Jane', signedin: false},
                            {name: 'David', signedin: false},
                            {name: 'Lucy', signedin: false},
                            {name: 'Alex', signedin: false},
                            {name: 'Greta', signedin: false},
                            {name: 'Samson', signedin: false},
                            {name: 'Ashley', signedin: false},
                            {name: 'Tim', signedin: false},
                            {name: 'Francine', signedin: false},
                        ];

    return factory;
});
