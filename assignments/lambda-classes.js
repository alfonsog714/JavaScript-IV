// CODE here for your Lambda Classes
class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
    this.gender = attr.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
} // Person

class Instructor extends Person {
  constructor(attr) {
    super(attr);
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase = attr.catchPhrase;
  }
  demo(subjectString) {
    return `Today we are learning about ${subjectString}.`;
  }
  grade(studentObject, subjectString) {
    return `${
      studentObject.name
    } receives a perfect score on ${subjectString}.`;
  }
} // Instructor

class Student extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
  }

  listSubjects() {
    for (let i = 0; i < this.favSubjects.length; i++) {
      console.log(this.favSubjects[i]);
    }
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`;
  }
} //Student

class ProjectManager extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }

  debugsCode(studentObj, subject) {
    return `${this.name} debugs ${studentObj.name}'s code on ${subject}.`;
  }
} // PM

const josh = new Instructor({
  name: "Josh Knell",
  age: 29,
  location: "Utah",
  gender: "Male",
  specialty: "Teaching",
  favLanguage: "Javascript",
  catchPhrase: "Special sauce"
});

const dan = new Instructor({
  name: "Dan",
  age: 29,
  location: "United States",
  gender: "Male",
  specialty: "Teaching",
  favLanguage: "Node JS",
  catchPhrase: "Unknown"
});

const alfonso = new Student({
  name: "Alfonso",
  age: 20,
  location: "Anaheim",
  gender: "Male",
  previousBackground: "Some programming",
  className: "Web 19",
  favSubjects: ["Javascript", "CSS", "Python"]
});

const mack = new Student({
  name: "Mack",
  age: 25,
  location: "United States",
  gender: "Male",
  previousBackground: "Some programming",
  className: "Web 19",
  favSubjects: ["Javascript", "Swift", "HTML"]
});

const angel = new ProjectManager({
  name: "Angel Torres",
  age: 21,
  location: "Houston",
  gender: "Male",
  specialty: "Javascript",
  favLanguage: "Javascript",
  catchPhrase: "I'm happy you had a good day!",
  gradClassName: "Web19",
  favInstructor: "Josh Knell"
});

console.log(josh.demo("javascript"));
console.log(dan.demo("node js"));
alfonso.listSubjects();
mack.listSubjects();
console.log(angel.standUp("team"));
console.log(angel.debugsCode(alfonso, "CSS"));
console.log(angel.debugsCode(mack, "HTML"));
console.log(josh.grade(alfonso, "Javascript"));
console.log(josh.grade(mack, "Javascript"));
