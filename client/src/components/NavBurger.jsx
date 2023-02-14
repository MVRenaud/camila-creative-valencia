import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Badge } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/apiCalls';
import { useNavigate } from 'react-router-dom';
import { NavLink as Link } from 'react-router-dom'
import { Search, ShoppingCartCheckoutOutlined } from '@mui/icons-material';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 5;
  display: none;
  @media (max-width: 768px) {
    z-index: 7;
    top: 5%;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? 'red' : 'black'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    z-index: 7;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const Menu = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  margin-right: -25px;
  z-index: 7;
  @media (min-width: 768px){
    justify-content: flex-end;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: gray;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`
export const MenuLink = styled(Link)`
  color: #000;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  &.active {
    color: #000000;
  }
`


const NavBurger = () => {
  const [open, setOpen] = useState(false);
  const quantity = useSelector(state=>state.cart.quantity);
  const user = useSelector(state => state.user.currentUser);
  const dispatch= useDispatch();
  const navigate = useNavigate();

  const logout = useCallback(()=>{
    logOut(dispatch, user)
    navigate("/login")

  }, [dispatch]);
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      {!user?
          
          (<Menu open={open} >
            
            
            <MenuLink to='/'>
              Home
            </MenuLink>
            <MenuLink to='/register'>
              REGISTER
            </MenuLink>
            <MenuLink to='/login'>
              SIGN IN
            </MenuLink>
            <MenuLink to='/login'>
              <Badge badgeContent={quantity} color="secondary">
                <ShoppingCartCheckoutOutlined />
              </Badge>
            </MenuLink>
            </Menu>) :
          (
            <Menu>
            <MenuLink to='/'>
              Home
            </MenuLink>
            <MenuLink to='/login' onClick={logout}>
              SIGN OUT
            </MenuLink>
            <MenuLink to='/cart'>
              <Badge badgeContent={quantity} color="secondary">
                <ShoppingCartCheckoutOutlined />
              </Badge>
            </MenuLink>
            </Menu>
            )
        }
    </>
  )
}

export default NavBurger


