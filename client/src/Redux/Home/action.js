
const ADD_LOGIN_USER_DATA = "ADD_LOGIN_USER_DATA";

const ADD_LOGOUT_USER_DATA = "ADD_LOGOUT_USER_DATA";

export const addLoginUserData = (data) => {
    return {
        type : ADD_LOGIN_USER_DATA,
        payload : data,
    }
}



export const logoutUser = (data) => {
    return {
        type : ADD_LOGOUT_USER_DATA,
        payload : data,
    }
}