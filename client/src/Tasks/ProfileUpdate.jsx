
import styled from "styled-components";

import { postNewUser, updateProfile } from "../utils/ApiRoutes";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import axios from "axios";

export const ProfileUpdate = () => {


    const [formData, setFormData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        mobileNumber : "",
        address : "",
    });
    const { id } = useParams();
    console.log("idinfrontend :", id);

    const navigate = useNavigate();

    const store = useSelector((store) => store);
    console.log('storeinUserDetails:', store.loginUser.loginUser)
    const userDetails = store.loginUser.loginUser;
    console.log('userDetails:', userDetails)

    useEffect(() => {
        setFormData({
            ...formData,
            firstName : userDetails[0].firstName,
            lastName : userDetails[0].lastName,
            email : userDetails[0].email,
            mobileNumber : userDetails[0].mobileNumber,
        })
    },[])
    
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
        const User = await axios.put(`${updateProfile}/${id}`,{
            formData
        })
        .then((res) => {
            console.log("res :", res);
            setFormData({
                firstName : "",
                lastName : "",
                email : "",
                mobileNumber : "",
                address : "",
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
            <p>PROFILE UPDATE</p>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="firstName">First Name</label>
                <input onChange={handleChange} value={formData.firstName} type="text" name="firstName" id="" placeholder="First Name" />
                <label htmlFor="lastName">Last Name</label>
                <input onChange={handleChange} value={formData.lastName} type="text" name="lastName" id="" placeholder="Last Name" />
                <label htmlFor="email">Email Address</label>
                <input onChange={handleChange} value = {formData.email} type="email" name="email" id="" placeholder="Email Address" />
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input onChange={handleChange} value = {formData.mobileNumber} type="number" name="mobileNumber" id="" placeholder="Mobile Number" />
                <label htmlFor="address">Address</label>
                <input onChange={handleChange} value = {formData.address} type="text" name="address" id="" placeholder="Address" />
                <button type="submit">PROFILE UPDATE</button>
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