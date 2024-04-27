// import React from 'react'
// import styled from "styled-components"
// import { popularProducts } from '../data'
// import Producting from './Producting'
// const Container=styled.div`
//     padding:20px;
//     display:flex;
// `

// const Productings = () => {
//   return (
//     <Container>
//       {popularProducts.map((item)=>(
//         <producting item={item} key={item.id}/>
//       ))}
//     </Container>
//   )
// }

// export default Productings

import React from 'react';
import styled from "styled-components";
import { popularProducts } from '../data';
import Producting from './Producting';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap:wrap;
  justify-content:space-between;
`;

const Productings = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Producting item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Productings;
