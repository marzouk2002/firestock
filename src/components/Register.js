import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import Options from './layout/Options'
import { TextField, Button } from '@material-ui/core';
import { FaGoogle, FaFacebookF } from "react-icons/fa";

function Register() {
    const [ selectedOpt, setSelectedOp ] = useState(null)
    const [ formState, setFormState ] = useState({ name: '', email: '', password: '', password2: ''})

    const handleFormChange = (e) => {
        const { name, value }  = e.target
        setFormState({ ...formState, [name]: value })
    }

    return (
        <div className="container-auth">
            {
                !selectedOpt ? <Options  setSelectedOp={setSelectedOp} selectedOpt={selectedOpt}/> : 
                <div className="regisLoginForm-wrapper">
                    <header>
                        <motion.h2 initial={{opacity:0}}
                        animate={{opacity: 1}} transition={{duration: 0.8}} >
                        {selectedOpt} account</motion.h2>
                    </header>
                    <motion.main initial={{opacity:0, x:100}}
                    animate={{opacity: 1, x: 0}} transition={{duration: 0.5}} >
                        <form autoComplete="off">
                            <TextField onChange={handleFormChange} name="name" value={formState.name} label="Name" style={inputStyle} variant="outlined" />
                            <TextField onChange={handleFormChange} name="email" value={formState.email} label="Email" style={inputStyle} variant="outlined" />
                            <TextField onChange={handleFormChange} name="password" value={formState.password} label="Password" style={inputStyle} type="password" variant="outlined" />
                            <TextField onChange={handleFormChange} name="password2" value={formState.password2} label="Confirm Password" style={inputStyle} type="password" variant="outlined" />
                            <div className="socials">
                                <div>
                                    <FaGoogle/>
                                    <p>Sign in with Google</p>
                                </div>
                                <div>
                                    <FaFacebookF/>
                                    <p>Sign in with Facebook</p>
                                </div>
                            </div>
                            <div className="btns">
                                <Button variant="contained" color="primary" onClick={()=>setSelectedOp(null)} disableElevation>
                                    Go Back
                                </Button>
                                <Button variant="contained" color="primary" type="submit" disableElevation>
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </motion.main>
                    <p>Already registered? <Link to="/login">Login now!</Link></p>
                </div>
            } 
        </div>
    )
}

const inputStyle = {
    width: '95%',
    margin: '0.5rem 0'
}

export default Register