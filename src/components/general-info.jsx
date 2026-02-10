import '../styles/stylesComponents.css'

function GeneralInfo({
        name,
        mail,
        phoneNumber,
        setName,
        setMail,
        setPhoneNumber
    }){

    return(
        <div className="containerInfoGeneral">
            <h4>Name</h4>
            <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} minLength={3} maxLength={10}/>
            <h4>Mail</h4>
            <input type='text' placeholder="Enter your mail" onChange={(e) => setMail(e.target.value)}  maxLength={30}/>
            <h4>Phone numner</h4>
            <input type="text" placeholder="Enter your Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} minLength={10} maxLength={16} />
        </div>
    )

}

export default GeneralInfo;