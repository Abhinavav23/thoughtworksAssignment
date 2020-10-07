import { Storage } from './storage.js'

let classList = document.querySelector('.classList')
let studentDetails = document.querySelector('.studentDetails')
let studentHover = document.querySelector('.hover')

export class DisplayData{
    displayStudentData(student){
        let classListHTML = ''
        for(let key in student){
            classListHTML+= `
            <div class="classNo">Class: ${key}</div>
            ${student[key].sections.map(el => {
                return `<div class="sections">
                            <div class="sectionName">Section: ${el}</div>
                            ${student[key].students.map(ele => {
                                if(ele.section === el){
                                    return `<div class="student" data-rollnumber=${ele.rollNumber}>${ele.name}</div>`
                                }
                            })}
                        </div>`
            })}
            `
        }
        classList.innerHTML = classListHTML
    }

    displayStudentDetails(id){
        let studentList = Storage.getStudents()
        let student = {}
        for(let key in studentList){
            if(key === id){
                student = studentList[key]
            }
        }
        let studentHtml = 
        `<aside>
        <i class="fas window-close" ></i>
            <p>Name: ${student.name}</p>
            <p>Age: ${student.age}<p>
            <p>Gender: ${student.gender}<p>
            <p>Sports: ${student.sports}<p>
        </aside>`
        studentDetails.innerHTML = studentHtml
    }

    displayOnHover(id){
        let studentList = Storage.getStudents()
        let student = {}
        for(let key in studentList){
            if(key === id){
                student = studentList[key]
            }
        }
        let studentHoverHtml = 
        `<aside>
            <p>Name: ${student.name}</p>
            <p>Age: ${student.age}<p>
            <p>Gender: ${student.gender}<p>
            <p>Sports: ${student.sports}<p>
        </aside>`
        studentHover.innerHTML = studentHoverHtml
    }

    getClass(){
        let student = [...document.querySelectorAll(".student")];
        student.forEach(st => {
            st.addEventListener('click', (e) => {
                e.preventDefault()
                studentDetails.style.display = "block"
                this.displayStudentDetails(e.target.dataset.rollnumber)
            })

            st.addEventListener('onmouseover', (e) => {
                this.displayOnHover(e.target.dataset.rollnumber)
            })
        })
    }
}