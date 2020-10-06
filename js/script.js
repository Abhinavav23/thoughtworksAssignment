import { StudentData} from './studentData.js'
import { DisplayData } from './display.js'

document.addEventListener('DOMContentLoaded', () => {
    let sdata = new StudentData()
    let dis = new DisplayData()
    sdata.getStudentData().then(data => {
        dis.displayStudentData(data)
        dis.getClass()
    })
})