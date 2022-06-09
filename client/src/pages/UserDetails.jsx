
import styled from "styled-components";

export const UserDetails = () => {

    return (
        <Box>
            <div className="user__details">
                <p className="heading">PROFILE</p>
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