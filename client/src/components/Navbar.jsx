import React, { useState } from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'
import { Search } from '@mui/icons-material';
import NavBurger from './NavBurger'
import camilaCreative from '../images/camilaCreative.jpg'

export const PrimaryNav = styled.nav`
width: 100%;
  z-index: 5;
  height: 60px;
  display: flex;
  justify-content: space-between;
 ${mobile({height:'50px'})}
`

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 1px solid gray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

`

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`



const Center = styled.div`
  flex: 1
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  ${mobile({ fontSize: "1rem" })}
`
const Image = styled.img`
    z-index: 7;
    width: 5rem;
    align-items: center;
    @media (max-width: 768px) {
      width: 3.5rem;
    }
`

const Right = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Link = styled.a`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleShowNavBar = () =>{
    setIsNavExpanded(!isNavExpanded);
  }

  return (
    <>
    <PrimaryNav>
      <Wrapper>
        
        <Left>
          <Image src={camilaCreative}/>
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search style={{color:'gray, fontSize: 16px'}} />
          </SearchContainer>
        </Left>
        <NavBurger/>
      </Wrapper>
    </PrimaryNav>
    </>
  )
}

export default Navbar