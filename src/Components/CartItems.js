import React from 'react';
import styled from 'styled-components';

function CartItems(props) {
  return (
   
    <Container>
      <Photo>
        <img src={props.elem.assetsUrl}></img>
      </Photo>
      <Content>
        <div>
          <p>Name: {props.elem.name}</p>
          <p>Total: Rs. {props.elem.sum}</p>
        </div>
        <div>
          <p>{props.elem.count}</p>
          <p>cart</p>
        </div>
         
         
      </Content>
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  width:100%;
  display:flex;
`;

const Photo = styled.div`
  height: 100%;
  width:30%;
  display: flex;
  align-items:center;
  img{
    height:100%;
    width:100%;
  }
`;

const Content = styled.div`
  height: 100%;
  width:70%;
  display: flex;
  align-items:center;
  justify-content: space-between;
  &>div:nth-child(1){
    width: 70%;
    height:100%;
    align-items:center;
    p{
      height: 50%;
      font-weight:600;
      @media (max-width:1024px){
        font-size: 13px;
      }
    }

    
  }
  &>div:nth-child(2){
    width: 30%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    font-weight:600;
    @media (max-width:768px){
      font-size: 14px;
    }
  }

  

`;
export default CartItems




