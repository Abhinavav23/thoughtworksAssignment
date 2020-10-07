import { Storage } from './storage.js'
export class StudentData{
    async getStudentData(){
        let result = await fetch('https://student-management-api-1u3cd4j7s.now.sh/students')
        result = await result.json()
        let studentClass = {}
        let StudentData = {}
        result.forEach(el => {
            if(studentClass[el.class]){
                if(!studentClass[el.class].sections.includes(el.section)){
                    studentClass[el.class].sections.push(el.section)
                }
                studentClass[el.class].students.push(el)
                studentClass[el.class].rollNumbers.push(el.rollNumber)
            }else{
                studentClass[el.class]= {sections: [el.section], students: [el], rollNumbers: [el.rollNumber]}
            }
            StudentData[el.rollNumber] = el
        });
        console.log(studentClass);
        Storage.saveStudents(StudentData)
        return studentClass
    }
}