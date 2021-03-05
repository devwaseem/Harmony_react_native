import React from "react";
import styled from "styled-components/native";

const Card1 = props => (
    <Container>
        <Cover>
            <Image source={props.image} />
            
        </Cover>
        <Content>
            <Caption>{props.caption}</Caption>
            <Subtitle>{props.subtitle}</Subtitle>
            
        </Content> 
         
    </Container>
);




export default Card1;





const Subtitle = styled.Text`
    font-weight: 600;
    font-size: 12px;
    margin-left: -95px;
    margin-top: 20px;
    color: black;
    
`;

const Content = styled.View`
    padding-left: 20px;
    flex-direction: row;
    
`;

const Caption =styled.Text`
    font-size: 16px;
    font-weight: 600;
    color: black;
    
`;

const Container = styled.View`
    top:5px;
    background: white;
    width:170px;
    height:250px;
    border-radius: 14px;
    margin-left: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
   
    
`;


const Cover = styled.View`
    width: 100%;
    height: 200px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    overflow: hidden;
`;

const Image = styled.Image`
    width: 170px;
    height: 187px;
    position: absolute;
    
    
`;

