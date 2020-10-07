export class Storage {
    //storing student details in local storage
    static saveStudents(student) {
      localStorage.setItem("studentList", JSON.stringify(student));
    }
    //retrieving data from localstorage
    static getStudents() {
      return localStorage.getItem("studentList")
        ? JSON.parse(localStorage.getItem("studentList"))
        : [];
    }
  }