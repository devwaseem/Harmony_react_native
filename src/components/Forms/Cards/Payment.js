import React from "react";
import styled from "styled-components/native";

const Payment = props => (
    <Container>
        <Cover>
            <Image source={props.image} />
            
            
        </Cover>
        
         
    </Container>
);




export default Payment;




const Container = styled.View`
    top:5px;
    background: white;
    width:170px;
    height:187px;
    margin-left: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    
    
`;


const Cover = styled.View`
    width: 100%;
    height: 200px;
    
    overflow: hidden;
`;

const Image = styled.Image`
    width: 170px;
    height: 187px;
    position: absolute;
    
    
`;

