
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export const UserDetails = () => {

    const store = useSelector((store) => store);
    console.log('storeinUserDetails:', store.loginUser.loginUser)
    const userDetails = store.loginUser.loginUser;
    console.log('userDetails:', userDetails)

    return (
        <Box>
            <div className="user__details">
                <p className="heading">PROFILE</p>
                <p className="name"><b>Name</b> : {userDetails[0].firstName+" "+userDetails[0].lastName}</p>
                <p className="email"><b>Email</b> : {userDetails[0].email}</p>
                <p className="mobileNumber"><b>Mobile Number</b> : {userDetails[0].mobileNumber}</p>
                {userDetails[0].address.length === 0 ?
                    <p className="address"><b>Address</b> : Please Add Your Full Address</p>
                    :

                    <>
                        {userDetails[0].address.map((element,index) => {
                            return (
                                <p className="address"><b>Address {index + 1}</b> : {element}</p>
                            )
                        })}
                    </>
                }

                
                <Link className="edit__profile" to={`/users/${userDetails[0]._id}/edit`}>EDIT PROFILE</Link>
            </div>
            <div className="user__orders">
                <p className="heading">ORDERS</p>
            </div>
        </Box>
    )

}

const Box = styled.div`
    border : 1px solid;
    width : 90vw;
    margin : .5vw auto auto auto;
    display : flex;
    gap: .5vw;
    padding : 1vw 0;
    .user__details {
        border : 1px solid;
        width : 49.5%;
        padding : .5vw;
        .heading {
            border : 1px solid;
            width: fit-content;

            margin : auto;
            font-size: 1.4vw;
        }

        .address {
            /* border : 1px solid; */
            margin : 0 0 2vw 0;
        }
        .edit__profile {
            border : 1px solid gray;
            padding : .4vw .8vw;
            border-radius: .2vw;
            font-size: 1.2vw;

            margin : 17vw;
            background-color: #8888da;
            color : white;
        }
    }
    .user__orders {
        border : 1px solid;
        width : 50%;
        padding : .5vw;
        .heading {
            border : 1px solid;
            width: fit-content;
            margin : auto;
            font-size: 1.4vw;
        }
    }
`