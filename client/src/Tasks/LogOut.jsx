
import { useNavigate, useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { logoutUser } from "../utils/ApiRoutes";
import axios from "axios";

export const LogOut = () => {

    const { id } = useParams();
    console.log('id:', id)
    const navigate = useNavigate();




    useEffect(() => {

        logOutUser();

    },[])

    const logOutUser = async () => {
        try {
            console.log('logoutUser:', logoutUser+`/${id}`);
            const user = await axios.delete(logoutUser+`/${id}`);
            console.log('user:', user)
            navigate("/")
        }
        catch(error) {
            console.log("error :", error);
        }
    }

    return (
        <div>
            
        </div>
    )

}