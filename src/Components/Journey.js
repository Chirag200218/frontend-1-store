 import React from 'react'
 import styled from 'styled-components';
 import grass  from '../assets/grasspic.jpg'
 import logo from '../assets/websitelogo.png'
 
 export default function Journey() {
   return (
     <Container>
            <Box>
                <Up>
                    <span>The Journey</span>
                </Up>
                <Down>
                    <Left>
                        <Sidebar></Sidebar>
                    </Left>
                    <Right>
                        <Content> 
                            <span>THE ROOTS</span>
                            <p>Ourentire life when we shop, we are limited by choices that are there in a store. We are oftenon the side where we buy our favourite coloured shoes made by someone else but what if we designed it? What if we could involove in the making of a shoe we want to buy? this little thought sprouted to become what we are today, KICKSUP! ;) </p>
                        </Content>

                        <Content> 
                            <span>CHAPTER I</span>
                            <p>Understanding the trends in industry and what the users think when they buy were out top priorities before we moved furthur in th building. After weeks of fruitfukl research, we stepped into the user's shoes and look at what we plan to do. it's great joy for the users if they are involved in making. We're heading into era of technology and people prefer online shopping to shopping in an outlet.</p>
                        </Content>

                        <Content> 
                            <span>CHAPTER II</span>
                            <p>Every milestone begins with a single step and before KICKSUP sprouted, the team manufactured in small scale with two users a month. This experience was crucial to our brand as this is out first practical experience. Interacting with the users was the best thing ever. The positive reviews and support from people motivated us to push our limits further.</p>
                        </Content>

                        <Content> 
                            <span>KICKSUP</span>
                            <p> Here we are, made a perfect platform for you to involve in the making of a shoe you want to buy! We have evolved ever since we started out. We wish to help you more and make KICKSUP a bigger team.Design your shoe and be part of our journey!</p>
                        </Content>

                    </Right>
                </Down>
            </Box>
     </Container>
   )
 }
 
 const Container = styled.div`
    // border: 1px solid blue;
    height: 85vh;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:space-around;
`;

const Box = styled.div`
    // border: 1px solid blue;
    height: 80vh;
    width:90%;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:space-around;
    background-color:black;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

`;

const Up = styled.div`
    // border : 1px solid green;
    height:40%; 
    width:100%;
    display:flex;
    align-items: center;
    justify-content:center;
    background-image: url(${grass});
    background-size:cover;
    span{
        font-size:40px;
        font-weight:600;
        color:white;
    }
`;

const Down = styled.div`
// border : 1px solid red;
    position:relative;
    height:60%;
    width:100%;
    display:flex;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
    box-shadow: 0 -7px 9px 3px black;
`;

const Left = styled.div`
    height:100%;
    width: 5%;
    // border: 1px solid pink;
    display:flex;
    align-items:center;
    justify-content: center;
`;
const Sidebar = styled.div`
    height: 85%;
    width: 0%;
    border: 1px solid white;
    background-color:white;
`;


const Right = styled.div`
    height:100%;
    width: 95%;
    display: flex;
    flex-direction:column;
    justify-content:space-around;
`;

const Content = styled.div`
    color:white;
    position:relative;
    span{
        font-weight:600;
    }
    span::before{
        position: absolute;
        content: "";
        height: 0.7rem;
        width: 0.7rem;
        left: -38px;
        top: 5px;
        border-radius: 50%;
        background-color: white;

        @media (max-width:1024px){
            left:-28px;
        }

        @media (max-width:768px){
            left:-23px;
        }
    }
    p{
        font-size:12px
    }
`;