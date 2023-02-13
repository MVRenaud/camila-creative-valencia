// import { Input } from '@mui/material';
import styled from 'styled-components';
import axios from "../util/axiosInstance";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from '../components/Common/ErrorMessage/index';
import MainLogo from '../images/legoSamuel.jpg'
import { publicRequest } from '../requestMethods';
import { useDispatch, useSelector } from "react-redux";
import { addUser } from '../redux/apiCalls';
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${MainLogo});
    background-size: cover;
    display:flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
    font-weight: 300;
    font-size: 24px;
`;

const Form = styled.form`
    display:flex;
    flex-wrap: wrap;

`;



const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const FormMessage = styled.span`
    color: red;
    font-weight: bold;
    font-size: 12px;
    margin: 20px 0px;
    padding-left: 2vw;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: White;
    cursor: pointer;
    :disabled {
        cursor: not-allowed; 
        opacity: 0.45;
      }
      ${mobile({ fontSize: "3re" })}
`;
// cursor: Pointer;
const Register = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [button, setButton] = useState(false);
    const [inputMessages, setInputMessages] = useState("To creat an account, please complete the form!")
    const { isFetching, error } = useSelector((state)=> state.user);
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("");

    const handleRegister = async (e)=>{
        e.preventDefault();
        try {
            addUser(dispatch, {firstname,lastname,username, email, password});
            navigate("/login")
          } catch (error) {
            setIsError(true)
            setErrorMessage(error.response.data.message);
            navigate("/register")
          }
    };

    useEffect(()=>{
        const disabledButton = () =>{
            if(firstname || username || password || lastname ){
                setButton(false)
                setInputMessages("")
            }else{
                setButton(true)
            }
        };
        
        disabledButton();
        
    }, [firstname && lastname && username  && password && email])

    // useEffect(()=>{
    //     const inputFieldMesssage = () =>{
    //         switch(button){
    //             case (firstname== ""):
    //                 setInputMessages("Please type first Name")
    //                 break;
    //             case (firstname && !lastname):
    //                 setInputMessages("Please type last Name")
    //                 break;
    //         }
    //     };
    //     inputFieldMesssage();
    // }, [])




        console.log("first", firstname, lastname, username, email, password)
        console.log(addUser)
        console.log(button)
        console.log(inputMessages)
  return (
    <Container>
        <Wrapper>
            <Title>
                CREAT AN ACCOUNT
            </Title>
                <Form>
                        
                        <Input 
                        name='firstname' 
                        type='text'
                        value={firstname}
                        placeholder='First Name'
                        onChange={(e) => setFirstname(e.target.value)}
                        />

                        <Input 
                        name='lastname' 
                        type='text'
                        value={lastname}
                        placeholder='Last Name'
                        onChange={(e) => setLastname(e.target.value)}
                         />
                         <Input 
                        name='username' 
                        type='text'
                        value={username}
                        placeholder='User Name'
                        onChange={(e) => setUsername(e.target.value)}
                         />
                         <Input 
                        name='email' 
                        type='email'
                        id='email'
                        required
                        placeholder='E-mail'
                        onChange={(e) => setEmail(e.target.value)}
                         />
                         <Input 
                        name='password' 
                        type='password'
                        value={password}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                         />
                        <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                        </Agreement>
                        
                        <ErrorMessage isVisible={isError} errorMessage={errorMessage} />
                <Button onClick={handleRegister
                } disabled={button || isFetching}>CREAT</Button>
                <FormMessage>{inputMessages}</FormMessage>
                    
                
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register