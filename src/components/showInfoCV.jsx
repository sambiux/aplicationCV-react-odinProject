import '../styles/stylesComponents.css'
import imagenCorreo from '../imgs/correo.png'
import imagenTelefono from '../imgs/llamar.png'


    function ShowInfoCv({
        name, 
        mail, 
        phoneNumber,
        schoolName,
        studyTitle, 
        studyDate, 
        companyName,
        jobTitle,
        mainTasks,
        workPeriodFrom,
        workPeriodTo,
        list,
        listJobTitle
    }){

    
  

    return(
        <>
        
        <h1>General Info</h1>
        <div className="infoGeneral-info">
            <p>Name: {name}</p>
            <div>
            <div>
                <img src={imagenCorreo} alt="img correo" />
                <p>Email: <br></br> {mail}</p>
            </div>
            <div>
                <img src={imagenTelefono} alt="img telefono"/>
                <p>Number phone: {phoneNumber} </p>
            </div>
            </div>
        </div>
        <h1>Educational Section</h1>
        <div className="educationalInfo">
            <p>Name School: {schoolName}</p>
            <div>   
                <p>degrees/studies:</p>
                <ul>
                    {list.map((item, index)=>{
                        return(
                            <li key={index}>{item}</li>
                        )
                    })}
                </ul>
                
            </div>
            <p>Study date: {studyDate}</p>
        </div>
        <h1>Practical Experience Section</h1>
        <div className='practicalExp-info'>

            <p>Company Name: {companyName}</p>
            <p>Job Title: {jobTitle}</p>
            <div>   
                <p>Tasks:</p>
                <ul>
                    {listJobTitle.map((item, index)=>{
                        return(
                            <li key={index}>{item}</li>
                        )
                    })}
                </ul>
                <p>{"Work Period: "+workPeriodFrom+" => "+workPeriodTo}</p>
            </div>
        </div>
        </>
    )
    
}

export default ShowInfoCv;