
import styled from "styled-components";

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { brandCreate, getOneProductInBrand } from "../utils/ApiRoutes";
import axios from "axios";

export const BrandCreate = () => {

    const { id } = useParams();
    console.log('id:', id)

    const [brandData, setBrandData] = useState([]);
    const [cateIdData, setCateIdData] = useState({});
    console.log('cateIdData:', cateIdData)
    // console.log('cateIdData:', cateIdData.ancestors[0])
    console.log('brandData:', brandData)

    useEffect(() => {
        getProduct();
    },[]);
    
    const getProduct = async () => {
        try {

            const Product = await axios.get(`${getOneProductInBrand}/${id}`);

            console.log('Product:', Product)

            setBrandData([Product.data.productOne]);
            setCateIdData(Product.data.productOne.cateId);

        }
        catch(error) {

        }
    }

    const handleChange = (event) => {

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            
        }
        catch(error) {

        }

    }


    return (
        <Box>
            <div className="brand__add__box">
                <p>BRAND CREATE</p>
                <form onSubmit={handleSubmit} action="">

                    <label htmlFor="" className="id1__label">Category</label>
                    <select value={cateIdData.ancestors === undefined ? "" : cateIdData.ancestors[0]} onChange={handleChange} name="" id="" className="id1__select">
                        <option value="">Category</option>
                        <option value={cateIdData.ancestors === undefined ? "" : cateIdData.ancestors[0]}>{cateIdData.ancestors === undefined ? "" : cateIdData.ancestors[0]}</option>
                    </select>
                    <label htmlFor="" className="id1__label">Category Section</label>
                    <select value={cateIdData.ancestors === undefined ? "" : cateIdData.ancestors[0]} onChange={handleChange} name="" id="" className="id1__select">
                        <option value="">Category Section</option>
                        <option value={cateIdData.ancestors === undefined ? "" : cateIdData.ancestors[0]}>{cateIdData.ancestors === undefined ? "" : cateIdData.ancestors[1]}</option>
                    </select>
                    <label htmlFor="" className="id1__label">Select Brand</label>
                    <select value={cateIdData._id === undefined ? "" : cateIdData._id} onChange={handleChange} name="" id="" className="id1__select">
                        <option value="">Category Section</option>
                        <option value={cateIdData._id === undefined ? "" : cateIdData._id}>{cateIdData._id === undefined ? "" : cateIdData._id}</option>
                    </select>
                    <button>Create Brand</button>
                </form>
            </div>
            <div className="product__show__box">
                <img src={brandData.length === 0 ? "" : brandData[0].productImage[0].productImage} alt="" />
                <div className="product__content">
                    <p className="name"><b>Name</b> : {brandData.length === 0 ? "" : brandData[0].productName}</p>
                    <p className="price"><b>Price</b> : {brandData.length === 0 ? "" : brandData[0].productPrice}</p>
                    <p className="brand"></p>
                </div>
            </div>
        </Box>
    )

}

const Box = styled.div`
    border : 1px solid;
    width : 45vw;
    padding : 1vw;
    margin : 1vw auto auto auto;
    border-radius: .25vw;
    display: flex;
    justify-content: space-between;
    gap: .4vw;

    .brand__add__box {
        border : 1px solid;
        width: 38%;
        border-radius: .25vw;
        padding : .5vw;
        p {
        /* border : 1px solid; */
        width : fit-content;
        margin : auto;
        font-size: 1.2vw;
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
                padding : .2vw .6vw;
                border-radius: .4vw;
                font-size: 1.2vw;
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
    }
    .product__show__box {
        border : 1px solid;
        width : 60%;
        height : 15vw;
        display : flex;

        img {
            border : 1px solid;
            width : 40%;
            height : 14.8vw;
        }
        .product__content {
            border : 1px solid;
            width : 59.9%;
            height : 14.8vw;

            padding : .5vw;
            .name {
                border : 1px solid;
                font-size: 1vw;
            }
        }
    }

`