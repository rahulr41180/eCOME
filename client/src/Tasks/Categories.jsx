
import styled from "styled-components";

import { useState, useEffect } from "react";

export const Categories = () => {

    const [ id1, setId1 ] = useState("Electronic");
    const [ id2, setId2 ] = useState("Cell_Phone");
    const [ id3, setId3 ] = useState("Samsung");
    console.log('id2:', id2)
    console.log('id1:', id1)

    return (
        <Box>
            <p>CATEGORY CREATE</p>
            <form action="">
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
                            <option value="Cricket">Cricket</option>
                            <option value="Chezz">Chezz</option>
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
                            <option value="Men's_Clothes">Men's Clothes</option>
                            <option value="Women's_Clothes">Women's Clothes</option>
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
                    ""
                }
            </form>
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
    }
`