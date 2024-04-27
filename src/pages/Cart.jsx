import React from 'react'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcements"
import styled from "styled-components"
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'



import { mobile } from "../responsive"




const Container=styled.div`

`;
const Wrapper=styled.div`
    padding:20px;
    ${mobile({padding:"10px"})}
`;
const Title=styled.h1`
    font-weight:300;
    text-align:center;
`;
const Top=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`;

const TopButton=styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border:${props=>props.type==="filled"&&"none"};
    background-color:${props=>props.type==="filled"? "black" :"transparent"};
    color:${props=>props.type==="filled"&&"white"};
`;
const TopTexts=styled.div`
    ${mobile({display:"none"})}
`;

const TopText=styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin:0px 10px;
`;
const Bottom=styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({flexDirection:"Column"})}
`;

const Info=styled.div`
    flex:3;
`;
const Summary=styled.div`
    flex:1;
    border:0.5px solid lightgray;
    bordder-radius:10px;
    padding:20px;
    height:50vh;
`;


const Product=styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({flexDirection:"Column"})}
`;
const ProductDetails=styled.div`
    flex:2;
    display:flex;
`;
const Image=styled.img`
    width:200px;

`;
const Details=styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`;
const ProductName=styled.span``;
const ProductId=styled.span``;
const ProductColor=styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${(props)=>props.color}
`;
const ProductSize=styled.span``;
const PriceDetails=styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;


const ProductAmountContainer=styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`;
const ProductAmount=styled.div`
    font-size:24px;
    margin:5px;
    ${mobile({margin:"5px 15px"})}
`;
const ProductPrice=styled.div`
    font-size:30px;
    font-weight:200;
    ${mobile({marginBottom:"20px"})}
`;

const Hr=styled.hr`
    background-color:#eee;
    border:none;
    height:1px;
`;

const SummaryTitle=styled.h1`
    font-weight:200;
`;
const SummaryItem=styled.div`
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight:${props=>props.type==="totla"&&"500"};
    font-size:${props=>props.type==="totla"&&"24px"};
`;
const SummaryItemText=styled.span``;
const SummaryItemPrice=styled.span``;
const Button=styled.button`
    width:100%;
    padding:10px;
    background-color:black;
    color:white;
    font-weight:600;
`;


const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
            <TopButton>Continue Shopping</TopButton>
            <TopTexts>
                <TopText>shopping bag(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">Check out now</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetails>
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKVxrgZ9G0PJ02zoHCTogPsTF6PiRp8h2AUA&s"/>
                    <Details>
                        <ProductName><b>Product:</b>running shoes</ProductName>
                        <ProductId><b>ID:</b>938313718293</ProductId>
                        <ProductColor color="black"/>
                        <ProductSize><b>Size:</b>37.5</ProductSize>
                    </Details>
                    </ProductDetails>
                    <PriceDetails>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>$30</ProductPrice>
                    </PriceDetails>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetails>
                    <Image src="data:image/jpeg;base64,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"/>
                    <Details>
                        <ProductName><b>Product:</b>Headset</ProductName>
                        <ProductId><b>ID:</b>938313718293</ProductId>
                        <ProductColor color="white"/>
                        <ProductSize><b>Size:</b>M</ProductSize>
                    </Details>
                    </ProductDetails>
                    <PriceDetails>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>$30</ProductPrice>
                    </PriceDetails>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>Order Summary</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$80</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>-$5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText >Total</SummaryItemText>
                    <SummaryItemPrice>$80</SummaryItemPrice>
                </SummaryItem>
                <Button>Checkout Now</Button>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
