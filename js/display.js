let classList = document.querySelector('.classList')

export class DisplayData{
    displayStudentData(student){
        let classListHTML = ''
        for(let key in student){
            classListHTML+= `
            <div class="classNo" data-id=${key}>Class: ${key}</div>
            ${student[key].sections.map(el => {
                return `<div class="sections" data-sectionid=${key}>
                            <div class="sectionName">Section: ${el}</div>
                            <div class="students"></div>
                        </div>`
            })}
            `
        }
        classList.innerHTML = classListHTML
    }

    getClass(){
        let studentSections = [...document.querySelectorAll(".sections")];
        studentSections.forEach(section => {
            // console.log(section.dataset.sectionid);
        })
    }
}