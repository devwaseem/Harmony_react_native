import React from "react";
import Card2 from "../components/Forms/Cards/Card2"
import styled from "styled-components/native";
import Payment from "../components/Forms/Cards/Payment";
import Card from "../components/Forms/Cards/Card";
import Card1 from "../components/Forms/Cards/Card1";
import Cardmain from "../components/Forms/Cards/Cardmain";

import { SafeAreaView, ScrollView, } from "react-native";


export default class HomeScreen extends React.Component {


render(){
  return(
    <Container>
      <SafeAreaView>
        <ScrollView style={{height : "100%"}}>
          <TitleBar>
            <Title>Cards</Title>
          </TitleBar>
          <Card
            
            image={require("../../assets/Group.jpg")}
            caption="Waffle cone"
            subtitle="12-pack box"
          />
         
          <Cardmain
            title="Summer Sale"
            image={require("../../assets/Photos.jpg")}
            caption="25% off now through sunday for all in-store purchase."
            subtitle="Shop Now"

          />
          <Align>
          <Card1 
          
            image={require("../../assets/Rectangle.jpg")}
            caption="Tinder1 clone"
            subtitle="fe beauty"
    
          />
          <Card1 
            image={require("../../assets/Rectangle.jpg")}
            caption="Tinder2 clone"
            subtitle="fe beauty"
    
          />
          </Align>
          <Align>
          <Card1 
            image={require("../../assets/Rectangle.jpg")}
            caption="Tinder3 clone" 
            subtitle="fe beauty"
    
          />
          <Card1 
            image={require("../../assets/Rectangle.jpg")}
            caption="Tinder4 clone"
            subtitle="fe beauty"
    
          /> 
          </Align>




          <Align>
          
          <Card2 
          
            image={require("../../assets/Rectangleblack.png")}
            caption="Tinder1 clone"
            subtitle="fe beauty"
    
          />
          <Card2 
            image={require("../../assets/Rectangleblack.png")}
            caption="Tinder2 clone"
            subtitle="fe beauty"
    
          />
          
          </Align>
          
          <Align>
          
          <Card2 
            image={require("../../assets/Rectangleblack.png")}
            caption="Tinder3 clone" 
            subtitle="fe beauty"
    
          />
          <Card2 
            image={require("../../assets/Rectangleblack.png")}
            caption="Tinder4 clone"
            subtitle="fe beauty"
    
          /> 
          
          </Align>
          
           <Payment
            image={require("../../assets/Payment.jpg")}
            
          />
          <Align>
           <Payment
            image={require("../../assets/Paypal.jpg")}
          />
          </Align>
        </ScrollView>
      </SafeAreaView>
    </Container>
    
    
  );
}



}
  
    
      
    
const Container = styled.View`
  flex: 1;
  background-color: #f2f2f2;
  

`;
const TitleBar = styled.View`
  width:100%;
  margin-top: 50px;
  padding-left: 20px;

`;

const Title = styled.Text`
  font-size: 16px;
  color: black  ;
  font-weight: 500;

`;
const Align = styled.View`

  padding-bottom: 10px;
  flex-direction:row;
  padding-top:10px;
`;



