import React from "react";
import styled from "styled-components";

const Avatar = props => (
    <Container>
         <Status/>
            <TitleBar>
                <Image source={props.image} />
                
                
                <Title>{props.title}</Title>
                <Lname>{props.lname}</Lname>
                <Online>{props.online}</Online>
            </TitleBar>
        
        
    </Container>
);



export default Avatar;


const Container = styled.View`
   flex:1;
   background-color:  #f2f2f2;
`;

const Image = styled.Image`
    width:44px;
    height:44px;
    border: 2px solid #394867;
    
    border-radius:22px;
    margin-left:22px;
    position:absolute;
    top:0;
    left:0;


`;
const Status = styled.View`
    width:15px;
    height:15px;
    border: 2px solid white;
    background: #839B97;
    border-radius:22px;
    margin-left:22px;
    position:absolute;
    top:45px;
    left:27px;
`;

const TitleBar =styled.View`
    width: 100%;
    
    margin-top:50px;
    padding-left:80px;
    padding-top:10px;

`;

const Title = styled.Text`

  font-size: 14px;
  color: #14274E ;
  font-weight: 500;
  align-items: center;
  letter-spacing: 0.75px;
`;



const Lname = styled.Text`

  font-size: 14px;
  color: #14274E ;
  font-weight: 500;
  align-items: center;
  letter-spacing: 0.75px;
  right:70px;
  top:20px;
`;

const Online= styled.Text`
  font-size: 14px;
  color: #394867 ;
  font-weight: 500;
  align-items: center;
  letter-spacing: 0.75px;
  bottom:15px;
`;
