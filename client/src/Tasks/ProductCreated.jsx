
import styled from "styled-components";

import { useState, useEffect } from "react";
import { createCategories, createProduct } from "../utils/ApiRoutes";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"; 
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';


export const ProductCreated = () => {

    const [ id1, setId1 ] = useState("Electronic");
    const [ id2, setId2 ] = useState("Cell_Phone");
    const [ id3, setId3 ] = useState("Samsung");
    console.log('id2:', id2)
    console.log('id1:', id1)
    const [formData, setFormData] = useState({
        productName : "",
        productPrice : "",
        productImage : "",
        productDescription : "",
    });
    const navigate = useNavigate();

    
    const ErrorStyled = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }

    const handleChange = (event) => {
        const { name, value} = event.target;
        setFormData({
            ...formData,
            [ name ] : value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await axios.post(createProduct, {
            id1 : id1,
            id2 : id2,
            id3 : id3,
            productName : formData.productName,
            productPrice : formData.productPrice,
            productImage : formData.productImage,
            productDescription : formData.productDescription,
        })
        .then((res) => {
            console.log('res:', res)
            alert(res.data.message);
            navigate("/");
        })

        .catch((error) => {
            console.log('error:', error)
            toast.error(error.response.data.message, ErrorStyled);
            // navigate("/categories/create")
            // alert(error.response.data.message);
            // alert("There might be some problem")
        })
    }

    return (
        <Box>
            <p>PRODUCT CREATE</p>
            <form onSubmit={handleSubmit} action="">
                <label className="id1__label" htmlFor="">Category Select</label>
                <select value={id1} onChange={(event) => {
                    setId1(event.target.value);
                }} name="id1" id="" className="id1__select">
                    <option value="">Categories Select</option>

                    <option value="Electronic">Electronic</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Sports">Sports</option>
                    <option value="Clothes">Clothes</option>
                </select>
                {
                    id1 === "Electronic" ?
                    <>
                        <label className="id1__label" htmlFor="">Electronic Section</label>
                        <select value={id2} onChange={(event) => {
                            setId2(event.target.value);
                        }} name="id2" id="" className="id1__select">
                            <option value="">Section Select</option>
                            <option value="Cell_Phone">Cell Phone</option>
                            <option value="AC">AC</option>
                            <option value="Freez">Freez</option>
                            <option value="Laptop">Laptop</option>
                        </select>
                    </>
                    :
                    id1 === "Bakery" ?
                    <>
                        <label className="id1__label" htmlFor="">Bakery Section</label>
                        <select value={id2} onChange={(event) => {
                            setId2(event.target.value);
                        }} name="id2" id="" className="id1__select">
                            <option value="">Section Select</option>
                            <option value="Biscuits">Biscuits</option>
                            <option value="Namkeen">Namkeen</option>
                        </select>
                    </>
                    :
                    id1 === "Sports" ?
                    <>
                        <label className="id1__label" htmlFor="">Sports Section</label>
                        <select value={id2} onChange={(event) => {
                            setId2(event.target.value);
                        }} name="id2" id="" className="id1__select">

                            <option value="">Section Select</option>
                            <option value="Bat">Bat</option>
                            <option value="Football">Football</option>
                        </select>
                    </>
                    :
                    id1 === "Clothes" ?
                    <>
                        <label className="id1__label" htmlFor="">Clothes Section</label>
                        <select value={id2} onChange={(event) => {
                            setId2(event.target.value);
                        }} name="id2" id="" className="id1__select">

                            <option value="">Section Select</option>
                            <option value="Mens_Clothes">Men's Clothes</option>
                            <option value="Womens_Clothes">Women's Clothes</option>
                        </select>
                    </>
                    :
                    ""
                }

                {
                    id2 === "Cell_Phone" ? 
                    <>
                        <label className="id1__label" htmlFor="">Cell Phone Section</label>
                        <select value={id3} onChange={(event) => {
                            setId3(event.target.value);
                        }} name="id3" id="" className="id1__select">

                            <option value="">Section Select</option>
                            <option value="Samsung">Samsung</option>
                            <option value="i+">i+</option>
                            <option value="Apple">Apple</option>
                            <option value="MI">MI</option>
                        </select>
                    </>
                    :
                    id2 === "AC" ? 
                    <>
                        <label className="id1__label" htmlFor="">AC Section</label>
                        <select value={id3} onChange={(event) => {
                            setId3(event.target.value);
                        }} name="id3" id="" className="id1__select">

                            <option value="">Section Select</option>
                            <option value="Samsung">Samsung</option>
                            <option value="Hitachi">Hitachi</option>
                        </select>
                    </>
                    :
                    id2 === "Freez" ? 
                    <>
                        <label className="id1__label" htmlFor="">Freez Section</label>
                        <select value={id3} onChange={(event) => {
                            setId3(event.target.value);
                        }} name="id3" id="" className="id1__select">

                            <option value="">Section Select</option>
                            <option value="Samsung">Samsung</option>
                            <option value="Wirphool">Wirphool</option>
                        </select>
                    </>
                    :
                    id2 === "Laptop" ? 
                    <>
                        <label className="id1__label" htmlFor="">Laptop Section</label>
                        <select value={id3} onChange={(event) => {
                            setId3(event.target.value);
                        }} name="id3" id="" className="id1__select">

                            <option value="">Section Select</option>
                            <option value="HP">HP</option>
                            <option value="DELL">DELL</option>
                            <option value="ASUS">ASUS</option>
                            <option value="APPLE">APPLE</option>
                        </select>
                    </>
                    :
                    id2 === "Biscuits" ? 
                    <>
                        <label className="id1__label" htmlFor="">Biscuits Section</label>
                        <select value={id3} onChange={(event) => {
                            setId3(event.target.value);
                        }} name="id3" id="" className="id1__select">

                            <option value="">Section Select</option>
                            <option value="Sunfist">Sunfist</option>
                            <option value="Britanis">Britania</option>
                        </select>
                    </>
                    :
                    id2 === "Namkeen" ? 
                    <>
                        <label className="id1__label" htmlFor="">Namkeen Section</label>
                        <select value={id3} onChange={(event) => {
                            setId3(event.target.value);
                        }} name="id3" id="" className="id1__select">

                            <option value="">Section Select</option>
                            <option value="Bickano">Bickano</option>
                            <option value="Bikaji">Bikaji</option>
                        </select>
                    </>
                    :
                    id2 === "Bat" ? 
                    <>
                        <label className="id1__label" htmlFor="">Bat Section</label>
                        <select value={id3} onChange={(event) => {
                            setId3(event.target.value);
                        }} name="id3" id="" className="id1__select">

                            <option value="">Section Select</option>
                            <option value="SS">SS</option>
                            <option value="BAS">BAS</option>
                        </select>
                    </>
                    :
                    id2 === "Football" ? 
                    <>
                        <label className="id1__label" htmlFor="">Football Section</label>
                        <select value={id3} onChange={(event) => {
                            setId3(event.target.value);
                        }} name="id3" id="" className="id1__select">

                            <option value="">Section Select</option>
                            <option value="Nivia_Storm_Football">Nivia Storm Football</option>
                            <option value="Vector_X_Street_Soccer_Football">Vector X Street Soccer Football</option>
                        </select>
                    </>
                    :
                    id2 === "Mens_Clothes" ? 
                    <>
                        <label className="id1__label" htmlFor="">Mens Clothes Section</label>
                        <select value={id3} onChange={(event) => {
                            setId3(event.target.value);
                        }} name="id3" id="" className="id1__select">
                            <option value="">Section Select</option>
                            <option value="Roadster">Roadster</option>
                            <option value="Levis">Levi's</option>
                        </select>
                    </>
                    :
                    id2 === "Womens_Clothes" ? 
                    <>
                        <label className="id1__label" htmlFor="">Womens ClothesSection</label>
                        <select value={id3} onChange={(event) => {
                            setId3(event.target.value);
                        }} name="id3" id="" className="id1__select">
                            <option value="">Section Select</option>
                            <option value="Ethnic_basket">Ethnic basket</option>
                            <option value="Ramonds">Ramond's</option>
                        </select>
                    </>
                    :
                    ""
                }
                
                <label className="id1__label" htmlFor="">Product Name</label>
                <input onChange={handleChange} type="text" name="productName" placeholder="Product Name" value={formData.productName} />
                <label className="id1__label" htmlFor="">Product Price</label>
                <input onChange={handleChange} type="number" name="productPrice" placeholder="Product Price" value={formData.productPrice} />
                <label className="id1__label" htmlFor="">Product Image</label>
                <input onChange={handleChange} type="text" name="productImage" placeholder="Product Image" value={formData.productImage} />
                <label htmlFor="" className="id1__label">Product Description</label>
                <input onChange={handleChange} type="text" name="productDescription" placeholder="productDescription" id={formData.productDescription} />
                <button type="submit">Add Product</button>
            </form>
            <ToastContainer></ToastContainer>
        </Box>
    )

}

const Box = styled.div`
    border : 1px solid;
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
        border : 1px solid;
        width : 99%;
        padding : .5vw;
        display : flex;
        flex-direction: column;
        gap: .5vw;
        .id1__label {
            border : 1px solid;
            font-size: 1vw;
        }
        .id1__select {
            border : 1px solid;
            width: 99.88%;
            padding : .4vw .6vw;
            border-radius: .4vw;

            font-size: 1.2vw;

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