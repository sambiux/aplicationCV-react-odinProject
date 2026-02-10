import { useState } from 'react';
import '../styles/stylesComponents.css'

function EducationalExp({
    schoolName,
    studyTitle, 
    studyDate, 
    setSchoolName,
    setStudyTitle,
    setStudyDate,
    list,
    setList,
    showList
}){

    

    
    return(
        <div className="containerEducationalInfo">
            <h4>Name School</h4>
            <input type="text" onChange={(e) => setSchoolName(e.target.value)}/>
            <h4>Study title</h4>
            <input type="text" value={studyTitle} onChange={(e) => setStudyTitle(e.target.value)}/>
            <button onClick={showList}>Add Certificates</button>
            <h4>Study date</h4>
            <input type="date" min="1940-01-01" max="2035-12-31" onChange={(e) => setStudyDate(e.target.value)}/>
        </div>
    )

}

export default EducationalExp;