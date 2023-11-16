import React, { useState } from 'react'

const App = () => {

    const [nameValue, setNameValue] = useState("");
    const [nameValidation, setNameValidation] = useState(false);

    const [emailValue, setEmailValue] = useState("")
    const [emailValidation, setEmailValidation] = useState(false);
    const [emailRegexVal, setEmailRegexVal] = useState(false);

    const [passwordvalue,setPasswordValue] = useState("")
    const [passwordValidation,setPasswordValidation] = useState(false)
    const [passwordRegexVal,setPasswordRegexVal] = useState(false)



    const checkValidation = () => {

        if (!nameValue.trim()) {
            setNameValidation(true);
        }
        else {
            setNameValidation(false);
        }

        if (!emailValue.trim()) {
            setEmailValidation(true);
        }
        else {
            setEmailValidation(false);
        }

        if (emailValue.trim()) {
            checkEmailRegEx();
        }

        if(!passwordvalue.trim()){
            setPasswordValidation(true);
        }
        else{
            setPasswordValidation(false);
        }
    }

    const handleNameChange = (e) => {
        setNameValue(e.target.value)
        setNameValidation(false)
    }

    const handlePasswordChange = (e) =>{
        setPasswordValue(e.target.value)
        setPasswordValidation(false)
    }

    const checkEmailRegEx = () => {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (emailValue.match(mailformat)) {
            setEmailRegexVal(false);
        }
        else {
            setEmailRegexVal(true)
        }
    };

    const checkPasswordRegEx = () =>{
        var passwordformat = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$";

        if(passwordvalue.match(passwordformat)){
            setPasswordRegexVal(false);
        }
        else{
            set
        }}


    return (
        <div>
            <label htmlFor="">Name :</label>
            <input type="text" value={nameValue} onChange={handleNameChange} />

            {nameValidation ? (
                <p style={{ color: "red" }}>This field is required</p>) : ("")
            }

            <br />
            <label htmlFor="">Email :</label>
            <input type="email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} />
            {emailValidation ? (
                <p style={{ color: "red" }}>This field is required</p>) : ("")}
            {emailRegexVal ? <p style={{ color: "red" }}>Invalid Email</p> : ""}

            <br />

            <label htmlFor="">Password :</label>
            <input type="password" value={passwordvalue} onChange={handlePasswordChange} />

            <br />
            <label htmlFor="">Password Again :</label>
            <input type="password" />
            <br />
            <button onClick={checkValidation}>Submit</button>
        </div>
    )
}

export default App