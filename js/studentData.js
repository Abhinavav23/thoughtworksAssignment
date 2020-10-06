import { DisplayData } from './display.js'
export class StudentData{
    async getStudentData(){
        let result = await fetch('https://student-management-api-1u3cd4j7s.now.sh/students')
        result = await result.json()
        let studentClass = {}
        result.map(el => {
            if(studentClass[el.class]){
                studentClass[el.class].push(el)
            }else{
                studentClass[el.class] = [el]
            }
            studentClass[el.class].forEach(el => {
                if(studentClass[el.class].sections){
                    if(!studentClass[el.class].sections.includes(el.section)){
                        studentClass[el.class].sections.push(el.section)
                    }
                }else{
                    studentClass[el.class].sections = [el.section]
                }
                if(studentClass[el.class].studentsRoll){
                    if(!studentClass[el.class].studentsRoll.includes(el.rollNumber)){
                        studentClass[el.class].studentsRoll.push(el.rollNumber)
                    }
                }else{
                    studentClass[el.class].studentsRoll = [el.rollNumber]
                }
            })
        });
        console.log(studentClass);
        return studentClass
    }

}