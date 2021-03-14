import React from "react";
import styled from "styled-components";






const Card4 = props => (
    
   
    <Container>
        <Cover>
            <Image source={props.image} />
            <Title>{props.title}</Title>
            <Caption>{props.caption}</Caption>
           
            
        </Cover>
        <Content>
        
                <Box>
                    <Text>{props.text}</Text> 
                    <Text1>{props.text1}</Text1>
                </Box>
            
           
        </Content> 
        
    </Container>
    
);




export default Card4;



const Box = styled.View`
    borderRadius: 8px;
    width:220px;
    height:56px;
    top: 30px;
    left: 70px;
    
    background: #394867;
    border-radius: 30px;
`;

const Text = styled.Text`
    color: #FCFCFC;
    font-size: 16px;
    font-weight: bold;
    margin-top: 18px;
    margin-left: 10px;
    width: 200px;
    textAlign:center;
    letter-spacing: 0.75px;


`;
const Text1 = styled.Text`
    color: #4E4B66;;
    font-size: 16px;
    font-weight: bold;
    margin-top: 40px;
    margin-left: 10px;
    width: 200px;
    textAlign:center;
    letter-spacing: 0.75px;


`;



const Content = styled.View`
    padding-left: 20px;
    flex-direction: row;
    
    
`;

const Caption =styled.Text`
    font-size: 18px;
    font-weight: normal;
    textAlign:center;
    color:#4E4B66;
    padding-top:30px;
    line-height:34px;
    letter-spacing:0.75px;    
`;

const Container = styled.View`
    background: white;
    width: 395px;
    height:690px;
    border-radius: 30px;
    top:250px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;


const Cover = styled.View`
    width: 100%;
    height: 230px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    overflow: hidden;
`;

const Image = styled.Image`
    width: 48px;
    height: 8px;
    position: absolute;
    top: 20px;
    left:175px;
    borderRadius: 8px;
    
`;

const Title = styled.Text`
    color: #14274E;
    font-size: 36px;
    font-weight: bold;
    margin-top: 50px;
    margin-left: 100px;
    width: 200px;
    textAlign:center;
    
`;