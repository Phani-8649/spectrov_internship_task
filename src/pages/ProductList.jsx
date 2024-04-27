import React from 'react'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcements"
import Productings from "../components/productings"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import styled from "styled-components"

import { mobile } from "../responsive"


const Container=styled.div`

`;
const Title=styled.h1`
  margin:20px;
`;
const FilterContainer=styled.div`
  display:flex;
  justify-content:space-between;
  ${mobile({width:"0px 20px",display:"flex",flexDirection:"column" })}
`;
const Filter=styled.div`
  margin:20px;
`;

const Filtertext=styled.span`
  font-size:20px;
  font-weight:600;
  margin-right:20px;
  ${mobile({margin:"0px"})}
`;

const Select=styled.select`
  padding:10px;
  margin-right:20px;
  ${mobile({margin:"10px 0px"})}
`
const Option=styled.option`

`
const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Title>Dressess</Title>
      <FilterContainer>
        <Filter><Filtertext>Filter products</Filtertext>
          <Select>
            <Option disabled selected>
              color
            </Option>
            {/* default option for filters */}
            <Option>white</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter><Filtertext>sort products</Filtertext>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Productings/>
      <Newsletter/>
      <Footer/>
    </Container>

  )
}

export default ProductList
