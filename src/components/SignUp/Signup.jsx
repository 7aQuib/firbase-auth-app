import React, { useState } from 'react';
import styles from './Signup.module.css';
import InputControl from '../InputControl/InputControl';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {auth} from '../../firebase';

const SignUp = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name:"",
        email:"",
        password:""
    });

    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handelSubmission = ()=> {
        if(!values.name || !values.email || !values.password){
            setErrorMsg("Somthing Missing...");
            return;
        }
        setErrorMsg("");
        setSubmitButtonDisabled(true);

        createUserWithEmailAndPassword(auth,values.email,values.password)
        .then(async(response) => {
                setSubmitButtonDisabled(false);
                const user = response.user;
                await updateProfile(user, {
                    displayName: values.name,
                });
                navigate("/")
            }
        ).catch((err) => {
            setSubmitButtonDisabled(false);
            setErrorMsg(err.massage);
        })
    } 

return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
            <h1 className={styles.heading}>Sign Up</h1>

            <InputControl label="Name" placeholder="John Doe"
            onChange={event=>setValues(prev=>({...prev, name:event.target.value}))}
            />
            <InputControl label="Email" placeholder="example@gmail.com"
            onChange={event=>setValues(prev=>({...prev, email:event.target.value}))}
            />
            <InputControl label="Password" placeholder="Password"
            onChange={event=>setValues(prev=>({...prev, password:event.target.value}))}
            />

            <div className={styles.footer}>
                <b className={styles.error}>{errorMsg}</b>
                <button onClick={handelSubmission} disabled={submitButtonDisabled}>
                    Sign Up
                </button>
                <p>
                    Already have an account?{" "}
                    <span>
                        <Link to="/login">Login</Link>
                    </span>
                </p>
            </div>

        </div>
    </div>
)
};

export default SignUp;
