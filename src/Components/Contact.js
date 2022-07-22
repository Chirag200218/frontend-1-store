import React from 'react';
import styled from 'styled-components';

import Instagram from '../assets/insta.svg';
import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg'

function Contact() {
  return (
    <Container>
            <Modal>
                <Option>
                    <span>REACH US AT</span>
                </Option>
                <Option>
                    <span>support@Kicksup.com</span>
                    <p>for any technical support</p>
                </Option>
                <Option>
                    <span>info@Kicksup.com</span>
                    <p>for more information</p>
                </Option>
                <Option>
                    <span>feedback@Kicksup.com</span>
                    <p>to send your feedback</p>
                </Option>
                <Option>
                    <span>jobs@Kicksup.com</span>
                    <p>to work with us</p>
                </Option>
            </Modal>
            <Social>
                <span>stay in touch</span>
                <Icon>
                    <a><img src={twitter}/></a>
                    <a><img src={Instagram}/></a>
                    <a><img src={facebook}/></a>
                </Icon>
            </Social>
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
    justify-content:center;
`;

const Modal = styled.div`
    // border: 1px solid black;
    height:70%;
    width:25%;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-around;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    @media (max-width:1024px){
        width: 35%;
    }

    @media (max-width:768px){
        width: 50%;
    }


`;

const Option = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    // border: 1px solid red;
    span{
        display: block;
        font-size: 23px;
        font-weight:700;
    }
    p{
        margin-top:-1px;
        display:block;
    }
`;

const Social = styled.div`
    height:15%;
    width: 25%;
    // border: 1px solid orange;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    @media (max-width:768px){
        width: 50%;
    }

    span{
        display:block;
    }

`;

const Icon= styled.div`
    // border: 1px solid black;
    height: 40%;
    width:30%;
    display:flex;
    align-items: center;
    justify-content:space-between;
    a>img{
        height:20px;
        width:20px;
    }
`;

export default Contact