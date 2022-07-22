import React, { useState } from 'react'
import styled from 'styled-components';

function Modal(props) {

    return (
        <Modals>
            <Photo>
                <img src={props.elem.assetsUrl}></img>
            </Photo>
            <About>
                <div>
                    <span>{props.elem.name}</span>
                    <p>Rs. {props.elem.price}</p>
                </div>
                {
                    (props.elem.count===0)?(<button onClick={()=>props.handleAddItem(props.elem)}>Add to cart</button>)
                    :
                    (<div><button onClick={()=>props.handleAddItem(props.elem)}>+</button>{props.elem.count}<button onClick={()=>props.handleDeleteItem(props.elem)}>-</button></div>)
                }
                
            </About>
            
        </Modals>
    )
}


const Modals = styled.div`
    height:100%;
    width:100%;
   border: 1px solid black;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Photo = styled.div`
    width:100%;
    height:65%;
    img{
        width:100%;
        height:100%;   
    }
`;

const About = styled.div`
    height: 35%;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
     justify-content: space-between;
    div{
        width:100%;
        margin-top: 10px;
        display:flex;
        align-items:center;
        justify-content: space-around;
    }
    div>span{
        font-size:18px;
        font-weight:600;
    }
    div>p{
        font-size:14px;
        font-weight:600;
    }
    button{
        width:100%;
        height: 30px;
        background-color: #efefef;
        border:none;
        cursor: pointer;
    }

    div{
        width:100%;
        height: 30px;
        margin-top:0px;
        // background-color: #efefef;
        border:none;
        cursor: pointer;
        display: flex;
        align-items: center;
        button{
            height:80%;
            border-radius: 5px;
            width:20%;
            border: 1px solid black;
        }

        @media (max-width: 1024px){
            div>span{
                font-size:15px;
                font-weight:600;
            }
            div>p{
                font-size:12px;
                font-weight:600;
            }
            
        }
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

 

export default Modal