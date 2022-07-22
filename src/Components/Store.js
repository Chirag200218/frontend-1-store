import React from 'react';
import styled from 'styled-components';
import {data} from './db'
import Modal from './Modal';
import { useState } from 'react';
import CartItems from './CartItems';

export default function Store() {
    const[intRange,setIntRange] = useState(0);
    const[finalRange,setFinalRange] = useState(1000000);
    const[style,setStyle] = useState("");
    const[color,setColor] = useState("");
    const[total,setTotal] = useState(0);
    const [cartItems,setCartItems] = useState([]);

    


    const handleAddItem =(item)=>{
        console.log(cartItems);
        let items = [...cartItems];
        console.log(item.count);
        item.count++;
        item.sum = item.count*item.price;
        setTotal(total+item.price);
        let index = items.findIndex(i => i.name === item.name);
        if(index > -1) {
            items[index] = item
        }else{
            items.push(item)
        }
        setCartItems([...items]);
    }

    const handleDeleteItem = (item)=>{
        let items = [...cartItems];
        item.count--;
        setTotal(total-item.price);
        item.sum = item.count*item.price;
        let index = items.findIndex(i => i.name === item.name)
        if(items[index].count === 0) {
            items.splice(index, 1)
        }else{
            item[index] = item;
        }
        setCartItems([...items]);

    }

    const ranges =[{i:1500,f:4000},{i:4001,f:7000},{i:7001,f:1000000}]
    function handleInput(e,str){
        let id = document.getElementById(str);
        let divs = document.getElementsByClassName("check");
        for(let i=0;divs.length;i++){
            if(divs[i]==id){
                console.log(id.checked)
                if(id.checked===true){
                    setIntRange(ranges[i].i);
                    setFinalRange(ranges[i].f);
                }else{
                    setIntRange(0);
                    setFinalRange(1000000);
                }
            }else{
                divs[i].checked = false;
            }
        }
    }

    function handleStyle(e,str){
        let id = document.getElementById(str);
        let divs = document.getElementsByClassName("checkStyle");
        for(let i=0;divs.length;i++){
            if(divs[i]==id){
                if(id.checked===true){
                    setStyle(str);
                }else{
                    setStyle("");
                }    
            }else{
                divs[i].checked = false;
            }
        }
    }

    function handleColour(e,colour){
        let id = document.getElementById(colour);
        let divs = document.getElementsByClassName("col");
       
        for(let i=0;i<divs.length;i++){
           
            if(id===divs[i]){
                console.log(color!==colour);
                if(color==="" || color!==colour){
                    id.style.borderRadius="50%";
                    console.log(id);
                    setColor(colour);
                }else{
                    console.log("leave");
                    id.style.borderRadius="0%";
                    setColor("");
                }
            }else{
                divs[i].style.borderRadius="0%";
            }
        }
    }
  return (
    <Container>
        <Left>
            <Top>
                <a>FILTERS</a>
                <a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M3.853 54.87C10.47 40.9 24.54 32 40 32H472C487.5 32 501.5 40.9 508.1 54.87C514.8 68.84 512.7 85.37 502.1 97.33L320 320.9V448C320 460.1 313.2 471.2 302.3 476.6C291.5 482 278.5 480.9 268.8 473.6L204.8 425.6C196.7 419.6 192 410.1 192 400V320.9L9.042 97.33C-.745 85.37-2.765 68.84 3.854 54.87L3.853 54.87z"/></svg></a>
            </Top>
            <CheckBox>
                <div><a>Cost</a></div>
                <div>
                    <div><input class="check" id= "1" type='checkbox' onClick={(e)=>handleInput(e,"1")}></input><span>Rs. 1500-4000</span></div>
                    <div><input class="check" id="2" type='checkbox' onClick={(e)=>handleInput(e,"2")}></input><span>Rs. 4001-7000</span></div>
                    <div><input class="check" id="3" type='checkbox' onClick={(e)=>handleInput(e,"3")}></input><span>Rs. 7001+</span></div>
                </div>
            </CheckBox>
            <Colour>
                <div><a>Colour</a></div>
                <div>
                    <div className="col" id="red" style={{backgroundColor:'red'}} onClick={(e)=>handleColour(e,"red")}></div>
                    <div className="col" id="blue" style={{backgroundColor:'blue'}} onClick={(e)=>handleColour(e,"blue")}></div>
                    <div className="col" id="black" style={{backgroundColor:'black'}} onClick={(e)=>handleColour(e,"black")}></div>
                    <div className="col" id="green" style={{backgroundColor:'green'}} onClick={(e)=>handleColour(e,"green")}></div>
                    <div className="col" id="orange" style={{backgroundColor:'orange'}} onClick={(e)=>handleColour(e,"orange")}></div>
                </div>
            </Colour>

            <CheckBox>
                <div><a>Design templates</a></div>
                <div>
                    <div><input type='checkbox'></input><span>2</span></div>
                    <div><input type='checkbox'></input><span>3</span></div>
                    <div><input type='checkbox'></input><span>3+</span></div>
                </div>
            </CheckBox>

            <CheckBox>
                <div><a>Type</a></div>
                <div>
                    <div><input class='checkStyle' id='Sports' type='checkbox' onClick={(e)=>handleStyle(e,"Sports")}></input><span>Sports Shoe</span></div>
                    <div><input class='checkStyle' id='Sneakers'  type='checkbox' onClick={(e)=>handleStyle(e,"Sneakers")}></input><span>Sneaker</span></div>
                </div>
            </CheckBox>

        </Left>


        <Main>
            <Top>
                <a>SHOES</a>
                <a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
                    <button>sort by</button>
                </a>
            </Top>
            <StoreElem>
                    {
                        data.map((elem)=>(
                            (intRange<=elem.price && finalRange>=elem.price && (style===elem.type||style==="") && (color===elem.colour || color=="") ) ?
                            (<StorePlace>
                                <Modal  elem={elem} handleAddItem={handleAddItem} handleDeleteItem ={handleDeleteItem}/>
                            </StorePlace>)
                            :
                            (<span></span>)
                        ))
                    }
            </StoreElem>
        </Main>


        <Right>
            <Top>
                <a>CART</a>
                <a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM272 180H316V224C316 235 324.1 244 336 244C347 244 356 235 356 224V180H400C411 180 420 171 420 160C420 148.1 411 140 400 140H356V96C356 84.95 347 76 336 76C324.1 76 316 84.95 316 96V140H272C260.1 140 252 148.1 252 160C252 171 260.1 180 272 180zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"/></svg></a>
            </Top>
            <Middle>
                {
                    (cartItems.length===0)?(<p>What's stopping you, designer?</p>):
                    (
                        cartItems.map((elem)=>(
                            (<CartItem>
                                <CartItems elem={elem}/>
                            </CartItem>)
                        ))
                       
                    )
                }
                
            </Middle>
            <Bottom>
                <a>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg> <span>Home</span>
                    </div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32zM448 464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192H448V464z"/></svg> <span>select date</span>
                    </div>
                </a>
                <button>{(total===0)?('Order Now'): ('Pay Rs.'+total)}</button>
            </Bottom>
        </Right>
    </Container>
  )
}

const Container = styled.div`
    // border: 1px solid blue;
    height: 85vh;
    width:100%;
    display:flex;
    align-items: center;
    justify-content:space-around;
`;

const Left = styled.div`
    height: 80%;
    width: 20%;
    // border: 1px solid green;

    display: flex;
    flex-direction:column;
    align-items:center;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const Main = styled.div`
        height: 80%;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (max-width:920px){
            width:40%;
        }
`;

const Right =styled.div`
    height: 80%;
    width: 22%;
    display: flex;
    flex-direction:column;
    align-items:center;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    @media (max-width:920px){
        width:30%;
    }

`;
const Top = styled.div`
    height: 10%;
    width: 95%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    a{
        width:aotu;
        display: flex;
    }
    a>svg{
        height: 20px;
        width:20px;
    }

    a> button{
        width: 60px;
        margin-left: 15px;
        background: transparent;
    }
    
`;

const Middle = styled.div`
    height: 70%;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items:flex-start;
    // border: 1px solid pink;
    overflow-y:scroll;
    p{
        height:100%;
        width:100%;
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
    }
    -ms-overflow-style: none; 
    scrollbar-width: none;   
`;

const CartItem = styled.div`
    width:100%;
    height:20%;
    margin-bottom: 5px;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    // border: 1px solid black;
`;

const Bottom  = styled.div`
    height: 20%;
    width: 95%;
    // border: 1px solid yellow;
    
    a{
        width:90%;
        height: 30%;
        display : flex;
        align-items: flex-start;
        // border : 1px solid red;
    }
   div>svg{
        height: 10px;
        width:10px;
   }
   div>span{
        margin-right: 20px;
   }

   button{
        margin-left: 30%;
        margin-top: 4%;
        height:40%;
        width: 40%

        @media (max-width:1024px){
            width:50%;
        }
   }
`;


const CheckBox = styled.div`
    width: 90%;
    height: auto;
    // border: 1px solid red;
    
    div > a{
        font-size:16px;
        font-weight:600;
    }

    div{
        margin: 5px 0px;
    }

    @media (max-width:768px){
        span{
            font-size: 12px
        }
    }
`;

const Colour = styled.div`
    width: 90%;
    height: auto;

    div{
        height: auto;
        display : flex;
        align-items: flex-start;
        justify-content: space-between;
        margin: 5px 0px; 
    }
    div>div{
        height: 27px;
        width: 10%;
        cursor:pointer;
    }

    div > a{
        font-size:16px;
        font-weight:600;
    }
`;

const StoreElem = styled.div`
    height: 90%;
    width: 90%;
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    //border: 1px solid red;
    @media (max-width: 920px){
        justify-content:center;
    }
    @media (max-width: 768px){
        justify-content:center;
    }
   
`;

const StorePlace = styled.div`
    height: 200px;
    width: 205px;
    margin: 0px 10px 10px 0;
    @media (max-width:768px){
        height: 150px;
        width: 155px;
    }
    // border: 1px solid red;
`;