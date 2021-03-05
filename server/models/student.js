const studentsData = require('../data');

class Student {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.age = data.age;
        this.location = data.location;
        this.Interesting_Fact = data.Interesting_Fact
    }

    static get all() {
        const students = studentsData.map((student) => new Student(student));
        return students;
    }

    static findById(id) {
        try {
            const studentData = studentsData.filter((student) => student.id === id)[0];
            const student = new Cat(studentData);
            return student;
        } catch (err) {
            throw new Error('That student does not exist!');
        }
    }

    static create(student) {
        const newStudentId = studentsData.length + 1;
        const newStudent = new Student({ id: newStudentId, ...student });
        studentsData.push(newStudent);
        return newStudent;
    }

    destroy() {
        const student = studentsData.filter((student) => student.id === this.id)[0];
        studentsData.splice(studentsData.indexOf(student), 1);
    }
}

module.exports = Student;