import React from "react";
import styled from "styled-components/native";



const Cardmain = props => (
   
   <Container>
        
        <Content>
            <Title>{props.title}</Title>
            <Caption>{props.caption}</Caption>
            <Box>
            <Subtitle>{props.subtitle}</Subtitle>
            </Box>
            
         <Cover>
            <Image source={props.image} />
           
         </Cover>
        </Content> 
         
    </Container>
);


export default Cardmain;

const Box =styled.View`
    
    ${'' /* for box line in(Shop Now)
    or if it is button import from git */}
`;

const Subtitle = styled.Text`
    font-weight: 600;
    font-size: 12px;
    margin-left: -100px;
    margin-top: 200px;
    color: black;
    width: 170px;
    right: 220px;
`;

const Content = styled.View`
    padding-left: 20px;
    flex-direction: row;
    
`;

const Caption =styled.Text`
    font-size: 14px;
    font-weight: 600;
    color: black;
    margin-top: 20px;
    margin-left: 20px;
    width: 170px;
    top:80px;
    right:190px;
    padding-top:20px;
    
`;

const Container = styled.View`
   
    top: 5px;
    background: white;
    width:372px;
    height:270px;
    border-radius: 18px;
    margin-left: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    
`;


const Cover = styled.View`
    width: 100%;
    height: 200px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    overflow: hidden;
    top: 40px;
    right:270px;
`;

const Image = styled.Image`
    width: 150px;
    height: 200px;
    position: absolute;
    
    
`;

const Title = styled.Text`
    color: black;
    font-size: 32px;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 20px;
    width: 170px;
`;