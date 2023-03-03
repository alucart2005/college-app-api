const Professor = require("./Professor");
const Student = require("./Student");
const Course = require("./Course");


Professor.belongsToMany(Student, { through: "ProfessorsStudents" });
Student.belongsToMany(Professor, { through: "ProfessorsStudents" });

Course.belongsToMany(Student, { through: "CoursesStudent" });
Student.belongsToMany(Course, { through: "CoursesStudent" });