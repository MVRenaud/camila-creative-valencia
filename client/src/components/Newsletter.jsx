import { Send } from '@mui/icons-material'
import styled from 'styled-components';
import { mobile } from "../responsive";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px
`;

const Desc = styled.div`
    margin: 50px 0px;
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center" })};
`
 

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display:flex;
    justify-content: space-between;
    border:1px solid light-gray;
    ${mobile({ width: "80%" })}
`;
 

const Input = styled.input`
    border: none;
    flex: 8;
    panding-left:20px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color:white;
`


const Newsletter = () => {
    // const [email, setEmail]= useState("")
    // const navigate = useNavigate();

    // const navigateToMail = () =>{
    //     alert("Thankyou for your email address, you will be redirect")
    //     navigate("/mail", {email:email})
    // }
  return (
    <Container>
        <Title>
            Newsletter
        </Title>
        <Desc>
            Get timely updates from your favorite products
        </Desc>
        <InputContainer>
            <Input placeholder='Your email'
            onChange={(e)=> setEmail(e.target.value)} />
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter