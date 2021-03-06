
const host = "http://localhost:5000";

export const postNewUser = `${host}/users/create`;
export const loginUser = `${host}/users/login`;
export const getLoginUser = `${host}/users/user`;
export const logoutUser = `${host}/users/logout`;
export const updateProfile = `${host}/users/edit`;
export const createCategories = `${host}/categories/create`;
export const createProduct = `${host}/product/create`;
export const getProduct = `${host}/product/get`;
export const brandCreate = `${host}/brand/create`;

export const getOneProductInBrand = `${host}/brand/get`;