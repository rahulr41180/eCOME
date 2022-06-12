
import styled from "styled-components";

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { brandCreate, getOneProductInBrand } from "../utils/ApiRoutes";
import axios from "axios";

export const BrandCreate = () => {

    const { id } = useParams();
    console.log('id:', id)

    const [brandData, setBrandData] = useState([]);
    console.log('brandData:', brandData)

    useEffect(() => {

        getProduct();
    },[]);
    
    const getProduct = async () => {
        try {
            const Product = await axios.get(`${getOneProductInBrand}/${id}`);
            console.log('Product:', Product)

            setBrandData([Product.data.productOne]);

        }
        catch(error) {

        }
    }

    return (
        <Box>
            <div className="brand__add__box"></div>
            <div className="product__show__box"></div>
        </Box>
    )

}

const Box = styled.div`
    border : 1px solid;
    width : 95vw;
    padding : 1vw;
    margin : 1vw auto auto auto;
    border-radius: .25vw;


`