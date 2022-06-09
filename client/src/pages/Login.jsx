
import styled from "styled-components";

import { postNewUser, loginUser } from "../utils/ApiRoutes";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

export const Login = () => {

    const [formData, setFormData] = useState({
        email : "",

        password : "",
    })
    
    const navigate = useNavigate();
    
    console.log('formData:', formData)
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,

            [name] : value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const User = await axios.post(loginUser,{
            formData
        })
        .then((res) => {
            console.log("res :", res);
            setFormData({
                email : "",
                password : "",
            })

            alert(res.data.message);
            navigate("/");
        })
        .catch((error) => {

            console.log('error:', error);
            console.log('error:', error.response.data.error);
            alert(error.response.data.error);
            console.log("error in signUp new User : ", error.message);
        })
    }

    return (
        <Container>
            <p>LOGIN</p>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="email">Email Address</label>
                <input onChange={handleChange} value = {formData.email} type="email" name="email" id="" placeholder="Email Address" />
                <label htmlFor="password">Password</label>
                <input onChange={handleChange} value = {formData.password} type="text" name="password" id="" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </Container>
    )

}

const Container = styled.div`
    border: 1px solid;
    width : 25vw;
    padding : .5vw;
    margin : 1vw auto auto auto;
    border-radius: .25vw;

    p {
        /* border : 1px solid; */
        width : fit-content;
        margin : auto;
        font-size: 1.5vw;
        padding : .2vw .4vw;
    }
    form {
        /* border : 1px solid; */
        width : 99%;
        padding : .5vw;
        display : flex;
        flex-direction: column;
        gap: .5vw;
        label {
            /* border : 1px solid; */
            font-size: 1vw;
        }
        input {
            width: 99.8%;
            padding : .4vw 1vw;
            font-size: 1.2vw;
            border : 1px solid;
            border-radius: .25vw;
        }
        
        button {
            border : 1px solid silver;
            width : fit-content;

            padding : .2vw .8vw;
            font-size: 1.4vw;
            margin : auto;
            border-radius: .25vw;

            cursor: pointer;
            background-color: #8888da;
            color : white;
        }
    }
`