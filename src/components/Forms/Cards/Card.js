import React from "react";
import styled from "styled-components/native";

const Card = props => (
    <Container>
        <Cover>
            <Image source={props.image} />
            <Title>{props.title}</Title>
        </Cover>
        <Content>
            <Caption>{props.caption}</Caption>
            <Subtitle>{props.subtitle}</Subtitle>
            
        </Content> 
         
    </Container>
);




export default Card;





const Subtitle = styled.Text`
    font-weight: 600;
    font-size: 12px;
    margin-left: -100px;
    margin-top: 30px;
    color: black;
    
`;

const Content = styled.View`
    padding-left: 20px;
    flex-direction: row;
    
`;

const Caption =styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: black;
`;

const Container = styled.View`
    background: white;
    width:315px;
    height:300px;
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
    width: 330px;
    height: 187px;
    position: absolute;
    top: 0;
    left: 0;
    
`;

const Title = styled.Text`
    color: black;
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 20px;
    width: 170px;
`;