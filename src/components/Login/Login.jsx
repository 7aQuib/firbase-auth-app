import React, {useState } from 'react';
import styles from './Login.module.css';
import InputControl from '../InputControl/InputControl';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../firebase';

const Login = () => {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        email:"",
        password:""
    });

    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handelSubmission = ()=> {
        if(!values.email || !values.password){
            setErrorMsg("Somthing Missing...");
            return;
        }
        setErrorMsg("");
        setSubmitButtonDisabled(true);

        signInWithEmailAndPassword(auth,values.email,values.password)
        .then(async(response) => {
                setSubmitButtonDisabled(false);

                navigate("/");
            })
        .catch((err) => {
            setSubmitButtonDisabled(false);
            setErrorMsg(err.massage);
        })
    }

return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
            <h1 className={styles.heading}>Login</h1>

            <InputControl label="Email" placeholder="example@gmail.com" 
            onChange={event=>setValues(prev=>({...prev, email:event.target.value}))}
            />
            <InputControl label="Password" placeholder="Password" 
            onChange={event=>setValues(prev=>({...prev, password:event.target.value}))}
            />

            <div className={styles.footer}>
            <b className={styles.error}>{errorMsg}</b>
                <button onClick={handelSubmission} disabled={submitButtonDisabled}>Login</button>
                <p>
                    Don't have an account?{" "}
                    <span>
                        <Link to="/signup">Sign Up</Link>
                    </span>
                </p>
            </div>

        </div>
    </div>
)
}

export default Login
