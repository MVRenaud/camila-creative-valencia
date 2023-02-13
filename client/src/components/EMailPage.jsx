import { useEffect, useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";
// import { useHistory } from "react-router";
const Container = styled.div`
`;

const Form = styled.form`
display: "flex",
height: "100vh",
justifyContent: "center",
alignItems: "center",
`

const Fieldset = styled.div`
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "50%",
`
const Legend = `
`
const Input = ` 
`
const Textarea = `
minHeight: "200px" 
`
const Button = `
`

const EMailPage = () =>{
    // const history = useHistory();
    const [mailerState, setMailerState] = useState({
        name: "matheus",
        email: "matheus@gmail.com",
        message: "hhhhhhhhh",
      });

      function handleStateChange(e) {
        setMailerState((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };

    //   useEffect(()=>{
    //     const submitEmail = async (e) => {
    //     e.preventDefault();
    //     try{
    //        await publicRequest.post("/mail/send/", {
    //         email: mailerState.email,
    //         name: mailerState.name,
    //         message: mailerState.message});
           
    //     }catch(error){
    //       console.log(error)
    //     }
    //   };
    //   submitEmail();
    // }, [handleStateChange]);
      
    const submitEmail = async (e) => {
      e.preventDefault();
      console.log({ mailerState });
      const response = await fetch("http://localhost:3001/mail/send", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ mailerState }),
      })
        .then((res) => res.json())
        .then(async (res) => {
          const resData = await res;
          console.log(resData);
          if (resData.status === "success") {
            alert("Message Sent");
          } else if (resData.status === "fail") {
            alert("Message failed to send");
          }
        })
        .then(() => {
          setMailerState({
            email: "",
            name: "",
            message: "",
          });
        });
        console.log(mailerState)
    };
      console.log(mailerState)
      return (
        <Container>
          <Form onSubmit={submitEmail}>
            <Fieldset>
              <Legend>React NodeMailer Contact Form</Legend>
              <Input
                placeholder="Name"
                onChange={handleStateChange}
                name="name"
                value={mailerState.name}
              />
              <Input
                placeholder="Email"
                onChange={handleStateChange}
                name="email"
                value={mailerState.email}
              />
              <Textarea
                placeholder="Message"
                onChange={handleStateChange}
                name="message"
                value={mailerState.message}
              />
       <Button>Send Message</Button>
            </Fieldset>
          </Form>
        </Container>
      );
};

export default EMailPage