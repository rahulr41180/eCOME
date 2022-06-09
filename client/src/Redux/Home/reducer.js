
const initialState = {

    loginUser : [],

}

export const homeReducer = ( store = initialState, action ) => {
    // console.log('action:', action)
    // console.log('store:', store)
    switch(action.type) {
        case "ADD_LOGIN_USER_DATA" : return {
            ...store,
            loginUser : [action.payload],
        };
        case "ADD_LOGOUT_USER_DATA" : return {
            ...store,
            loginUser : [],
        }
        default : return store;
    }
}