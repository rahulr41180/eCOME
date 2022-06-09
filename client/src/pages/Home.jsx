
import { useState, useEffect } from "react";

import axios from "axios";
import { getLoginUser } from "../utils/ApiRoutes";
import { useDispatch, useSelector } from "react-redux";
import { addLoginUserData, logoutUser } from "../Redux/Home/action";

export const Home = () => {

    // const [loginUser, setLoginUser] = useState([]);
    // console.log('loginUser:', loginUser)
    
    const store = useSelector((store) => store);
    console.log('store:', store.loginUser.loginUser)

    const dispatch = useDispatch();

    useEffect(() => {
        getLoginUserData();
    },[])

    const getLoginUserData = async () => {
        const LoginUserData = await axios.get(getLoginUser);
        console.log('LoginUserData:', LoginUserData)
        if(LoginUserData.data.message === false) {
            dispatch(logoutUser([]));
        }
        else {
            console.log('LoginUserData.data.message:', LoginUserData.data.message)
            dispatch(addLoginUserData(LoginUserData.data.message));
            // setLoginUser([LoginUserData.data.message])
        }
    }

    return (
        <div>
            Home
        </div>
    )

}