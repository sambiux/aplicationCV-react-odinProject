import '../styles/stylesComponents.css'

function PracticalExp({
    companyName,
    jobTitle,
    mainTasks,
    workPeriodFrom,
    workPeriodTo,
    setCompanyName, 
    setJobTitle,
    setMainTasks,
    setWorkPeriodFrom,
    setWorkPeriodTo,
    listJobTitle,
    setListJobTitle, 
    showTasks

    }){


   

    return(
       <div className="containerInfPractical">
        <h4>Company Name</h4>
        <input type="text" onChange={(e) => setCompanyName(e.target.value)} />
        <h4>Job Title</h4>
        <input type="text" onChange={(e) => setJobTitle(e.target.value)}/>
        <h4>Tasks</h4>
        <input type="text" onChange={(e) => setMainTasks(e.target.value)} />
        <button onClick={showTasks}>Add tasks</button>
        <h4>Work period</h4>
        <h4>From</h4>
        <input type="date" onChange={(e) => setWorkPeriodFrom(e.target.value)} />
        <h4>To</h4>
        <input type="date" onChange={(e) => setWorkPeriodTo(e.target.value)} />
       </div>
    )

}

export default PracticalExp;