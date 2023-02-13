import styled from 'styled-components';
import BoloSamu from '../images/boloSamuel.jpg'
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${BoloSamu})
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
   

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;


const Login = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [button, setButton] = useState(false);
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state)=> state.user);

    const handleClick = (e) =>{
        e.preventDefault()
        try {
          login(dispatch, {username, password});
          navigate("/");
        } catch (error) {
          console.log(error);
          navigate("/register")
        }
    }

    useEffect(()=>{
      const disabledButton = () =>{
          if( username || password  ){
              setButton(false)
          }else{
              setButton(true)
          }
      };
      
      disabledButton();
      
  }, [ username  && password])

  return (
    <Container>
                <Wrapper>
            <Title>
                SIGN IN
            </Title>
            <Form>
                <Input placeholder='username' 
                onChange={(e) => setUsername(e.target.value)}
                />
                <Input placeholder='password' 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={handleClick} disabled={button || isFetching}>LOGIN</Button>
                {/* {!error ? <Error>Something went wrong...</Error>:""} */}
                <Link href='/register'>GREAT A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login