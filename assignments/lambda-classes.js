// CODE here for your Lambda Classes
// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

const dave = new Person({
    name: 'Dave',
    age: 30,
    location: 'Memphis'
});
console.log(dave.speak());

const john = new Person({
    name: 'John',
    age: 20,
    location: 'Atlanta'
});
console.log(john.speak());


// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
    constructor(instAttrs) {
        super(instAttrs);
        this.specialty = instAttrs.specialty;
        this.favLanguage = instAttrs.favLanguage;
        this.catchPhrase = instAttrs.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
}

const mike = new Instructor({
    name: 'Mike',
    age: 32,
    location: 'Calgary',
    specialty: 'React Hooks',
    favLanguage: 'JavaScript',
    catchPhrase: 'I am really hungry!'
});
console.log(mike.demo('React'));


const amy = new Instructor({
    name: 'Amber',
    age: 23,
    location: 'Los Angeles',
    specialty: 'Data Structures',
    favLanguage: 'Python',
    catchPhrase: "You don't know Python.....?"
});
console.log(amy.specialty);
console.log(amy.catchPhrase);

// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listsSubjects() {
        return this.favSubjects.join(', ');
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

const aaron = new Student({
    name: 'Aaron',
    age: 24,
    location: 'New Hampshire',
    previousBackground: 'CNC Operator',
    className: 'WebPT8',
    favSubjects: ['JavaScript', 'CSS', 'React']
});
console.log(aaron.listsSubjects());


const kelly = new Student({
    name: 'Kelly',
    age: 35,
    location: 'Boston',
    previousBackground: 'Carpenter',
    className: 'Web12',
    favSubjects: ['JavaScript', 'CSS', 'React', 'Java', 'C++']
});
console.log(kelly.PRAssignment('React-II'));
console.log(mike.grade(kelly, 'react'));

const amanda = new Student({
    name: 'Amanda',
    age: 27,
    location: 'Portlan',
    previousBackground: 'Free Lance Dev',
    className: 'Web12',
    favSubjects: ['React', 'Wordpress', '.NET', 'Algorithms']
});
console.log(amanda.sprintChallenge('Backend-I'));


// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManagers extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const pierre = new ProjectManagers({
    name: 'Pierre',
    age: 52,
    location: 'Nigeria',
    specialty: 'UI/UX',
    favLanguage: 'CSS',
    catchPhrase: 'I love to build UI designed for a11y!',
    gradClassName: 'UI/UX1',
    favInstructor: 'Michael'
});
console.log(pierre.standUp('UI/UX-3'));

const julie = new ProjectManagers({
    name: 'Juliet',
    age: 21,
    location: 'Colorado',
    specialty: 'Backend',
    favLanguage: 'Node',
    catchPhrase: 'Wait I was supposed to do what now?',
    gradClassName: 'Web3',
    favInstructor: 'Larry'
});
console.log(julie.debugsCode(aaron, 'React'))

// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.