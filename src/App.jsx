import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import './styles/stylesComponents.css'
import GeneralInfo from './components/general-info'
import EducationalExp from './components/educationalExp'
import PracticalExp from './components/practicalExperience'
import ShowInfoCv from './components/showInfoCV'





function App() {


  /*section general info states*/
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')


  /*section educational experience states*/
  const [schoolName, setSchoolName] = useState('');
  const [studyDate, setStudyDate] = useState('');
  const [studyTitle, setStudyTitle] = useState('');


  /*section practical experience states*/
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [mainTasks, setMainTasks] = useState('');
  const [workPeriodFrom, setWorkPeriodFrom] = useState('');
  const [workPeriodTo, setWorkPeriodTo] = useState('');



  const [list, setList] = useState([]);
  const [listJobTitle, setListJobTitle] = useState([]);



  function showList(){
    setList([...list, studyTitle]);
  }

  function showTasks(){
    setListJobTitle([...listJobTitle, mainTasks ])
  }
  


  
  return (

    <div className='containerAplicationCv'>

      

      <div className='editInfoCv'>
      <h1>General Info</h1> 
     <GeneralInfo
        name={name} 
        setName={setName} 
        setMail={setMail} 
        setPhoneNumber={setPhoneNumber}

     />
     <h2>Educational Experience</h2>
      <EducationalExp 
      schoolName={schoolName}
      studyDate={studyDate}
      studyTitle={studyTitle}
      setSchoolName={setSchoolName} 
      setStudyTitle={setStudyTitle} 
      setStudyDate={setStudyDate} 
      list={list} 
      setList={setList}
      showList={showList}
      />


      <h2>Practical Experience</h2>
      <PracticalExp 
      companyName={companyName} 
      setCompanyName={setCompanyName}
      jobTitle={jobTitle}
      setJobTitle={setJobTitle}
      mainTasks={mainTasks}
      setMainTasks={setMainTasks}
      listJobTitle={listJobTitle}
      setListJobTitle={setListJobTitle}
      showTasks={showTasks}
      workPeriodFrom={workPeriodFrom}
      setWorkPeriodFrom={setWorkPeriodFrom}
      workPeriodTo={workPeriodTo}
      setWorkPeriodTo={setWorkPeriodTo}
      />

      </div>

      <div className="showInfoCv">
        <ShowInfoCv 
        name={name} 
        mail={mail}
        phoneNumber={phoneNumber}
        schoolName={schoolName}
        studyTitle={studyTitle}
        studyDate={studyDate}
        list={list}
        companyName={companyName}
        jobTitle={jobTitle}
        listJobTitle={listJobTitle}
        workPeriodFrom={workPeriodFrom}
        workPeriodTo={workPeriodTo}
        />
      </div>
      
    </div> 
    
  )
}

export default App
