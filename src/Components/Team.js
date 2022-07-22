import React from 'react'
import styled from 'styled-components';

import zidane  from '../assets/zidane.jpg';
import toni from '../assets/tonikroos.jpg';
import christiano from '../assets/christiano.jpg'
import  ikar from '../assets/ikercasillas.jpg';
import james  from '../assets/james.jpg';

import Instagram from '../assets/insta.svg';
import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';
import linkedIn  from '../assets/linkedin.png';
import medium from '../assets/medium.png';

function Team() {
  return (
    <Container>
        <Qoute>
            <span>Without bonding and coordination, every project is a failue.Look at who makes KICKSUP great. :)</span>
        </Qoute>
        <Worker>
            <Modal>
                <Photo>
                    <img src={zidane}></img>
                </Photo>  
                <About>
                    <span>Zidane</span>
                    <p> Management</p>
                    <Icon>
                        <img src={linkedIn}></img>
                        <img src={medium}></img>
                        <img src={facebook}></img>
                    </Icon>

                </About>
            </Modal>

            <Modal>
                <Photo>
                    <img src={toni}></img>
                </Photo>  
                <About>
                    <span>Toni Kroos</span>
                    <p>Product Developer</p>
                    <Icon>
                        <img src={linkedIn}></img>
                        <img src={medium}></img>
                    </Icon>

                </About>
            </Modal>

            <Modal>
                <Photo>
                    <img src={ikar}></img>
                </Photo>  
                <About>
                    <span>Iker Casillas</span>
                    <p>Marketing strategy</p>
                    <Icon>
                        <img src={medium}></img>
                    </Icon>

                </About>
            </Modal>

            <Modal>
                <Photo>
                    <img src={james}></img>
                </Photo>  
                <About>
                    <span>James</span>
                    <p>Product designer</p>
                    <Icon>
                        <img src={twitter}></img>
                        <img src={Instagram}></img>
                    </Icon>

                </About>
            </Modal>

            <Modal>
                <Photo>
                    <img src={christiano}></img>
                </Photo>  
                <About>
                    <span>Christiano</span>
                    <p>Financial operation</p>
                    <Icon>
                        <img src={facebook}></img>
                        <img src={Instagram}></img>
                    </Icon>

                </About>
            </Modal>

        </Worker>
        <Qoute>
            <span>and You! :)</span>
        </Qoute>
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

const Qoute = styled.div`
    height: 10%;
    width:100%;
    // border: 1px solid blue;
    display:flex;
    align-items:center;
    font-size:24px;
    font-weight:600;
    justify-content:center;
    span{
        display:block;
    }
    @media (max-width:1024px){
        font-size:20px;
    }
    @media (max-width:768px){
        font-size:16px;
    }
`;

const Worker = styled.div`
    height: 50%;
    width: 100%;
    // border: 1px solid green;
    display:flex;
    align-items:center;
    justify-content: space-around;
`;

const Modal = styled.div`
    height:100%;
    width:15%;
   // border: 1px solid black;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    @media (max-width:768px){
        width:19%;
    }
`;

const Photo = styled.div`
    width:100%;
    height:70%;
    img{
        width:100%;
        height:100%;   
    }
`;

const About = styled.div`
    height: 30%;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    span{
        font-size:18px;
        font-weight:600;
    }
    p{
        font-size:14px
        font-weight:600;
    }

`;

const Icon= styled.div`
    // border: 1px solid black;
    height: 40%;
    width:40%;
    display:flex;
    align-items: center;
    justify-content:space-around;
    img{
        height:20px;
        width:20px;
    }
    @media (max-width:768px){
        width:65%;
    }
`;
 
export default Team