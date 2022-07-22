import styled from 'styled-components';
import React, { useState } from 'react'
import logo from '../assets/websitelogo.png'
import user from '../assets/user.svg'


function Header(props) {
    const[activ,setActive] = useState("Team");   

    function handleClick(e,str){
        setActive(str);
        let id = document.getElementById(str);
        let divs = document.getElementsByClassName("Header");
        for(let i=0;i<divs.length;i++){
            if(id===divs[i]){
                id.style.borderBottom = "3px solid";
                id.style.borderImage = "linear-gradient(96deg, rgb(0, 0, 0) 80%, rgb(255, 255, 255) 30%) 2% / 1 / 0 stretch";
            }else{
                divs[i].style.borderBottom = "none";
            }
        }
        props.handleClick(e,str);
    }

  return (
    <Container>
        <Logo>
            <img src={logo}></img>
        </Logo>
        <Content>
                <div className="Header" id="Home" onClick={(e)=>handleClick(e,"Home")}>Home</div>
                <div className="Header" id="Journey" onClick={(e)=>handleClick(e,"Journey")}>The Journey</div>
                <div className="Header" id="Team" onClick={(e)=>handleClick(e,"Team")}>Team</div>
                <div  className="Header" id="Store"onClick={(e)=>handleClick(e,"Store")}>Store</div>
                <div className="Header" id="Contact"onClick={(e)=>handleClick(e,"Contact")}>Contact</div>
        </Content>
        <UserInfo>
            <User>
                <img src={user}/>
                <span>GAGAN</span>
            </User>
        </UserInfo>
    </Container>
  )
}

const Container = styled.div`
    // border: 1px solid red;
    width:100%;
    height: 15vh;
    display:flex;
    justify-content: space-around;
    align-items:center;
`;
const Logo = styled.div`
    height:100%;
    width: 20%;
    // border : 1px solid green;
    display:flex;
    align-items: center;
    justify-content:center;
    img{
        width:48px;
        height:48px;
    }
`;
const Content = styled.div`
    // border: 1px solid yellow;
    height:100%;
    width:50%;
    display:flex;
    align-items: center;
    justify-content: space-around;
    @media (max-width:768px){
        width:60%;
    }
    div{
        font-size:17px;
        font-weight:600;
        cursor: pointer;
    }    
    &>div:nth-child(3){
        border-bottom : 3px solid;
        border-image : linear-gradient(96deg, rgb(0, 0, 0) 80%, rgb(255, 255, 255) 30%) 2% / 1 / 0 stretch;
    }     
  
    



`;

const UserInfo = styled.div`
    // border: 1px solid red;
    height:100%;
    width: 20%;
    display:flex;
    align-items: center;
    justify-content:center
`;

const User = styled.div`
    display:flex;
    align-items: center;
    // border: 1px solid red;
    img{
        height:30px;
        width:30px;
        border-radius: 50%
    }
    span{
        font-size:17px;
        font-weight:600;
        margin-left:7px
    }

`;
export default Header