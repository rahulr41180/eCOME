
import styled from "styled-components";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const Navbar = () => {

    const store = useSelector((store) => store);
    console.log('storeInNavbar:', store.loginUser.loginUser)
    const loginUserData = store.loginUser.loginUser;
    console.log('loginUserData:', loginUserData)

    return (
        <Container>
            <div className="left__box">
                <Link className="home" to="/">eCOME</Link>
            </div>
            <div className="right__box">
                {store.loginUser.loginUser.length === 0 ?
                    <>
                        <Link className="signUp" to="/users/login">Login</Link>
                        <Link className="signUp" to="/users/create">SignUP</Link>
                    </> 

                    :

                    <>
                        <Link className="signUp" to={`/users/${loginUserData[0].firstName+"_"+loginUserData[0].lastName}`}>{loginUserData[0].firstName+"_"+loginUserData[0].lastName}</Link>
                        <Link className="signUp" to={`/users/logout/${loginUserData[0]._id}`}>LogOut</Link>
                    </>
                }
            </div>
        </Container>
    )
}


const Container = styled.div`
    border: 1px solid;
    padding: 1vw;
    margin: auto;
    width: 99.98vw;
    display : flex;
    justify-content: space-between;
    .left__box {
        border : 1px solid;
        width: fit-content;
        display: flex;
        gap: .4vw;
        .home {
            /* border: 1px solid; */
            text-decoration: none;
            font-size: 1.5vw;
            color : black;
        }
    }
    .right__box {
        border : 1px solid;
        width: fit-content;
        display: flex;
        gap: .4vw;
        .signUp {
            text-decoration: none;
            font-size: 1.4vw;
            color : black;
        }
    }
`