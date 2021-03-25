// import { StatusBar } from 'expo-status-bar'
import React, {useState, Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput,ScrollView } from 'react-native';
// import AppLoading from 'expo-app-loading';  //figure out AppLoading
import styled from 'styled-components';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useLinkProps} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BarCodeScanner} from 'expo-barcode-scanner';
// <--------------HOME PAGE------------------------>

export const Container= styled.View `
flex:1;

background-color: #272727;
`;

const Header=styled.Text `
width: 315px;
height: 73px;
left: 30px;
top: 52px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 62px;
line-height: 73px;
/* identical to box height */

text-align: center;

color: #03DAC5;
`;

export const Subtitle=styled.Text `
position: absolute;
width: 282px;
height: 40px;
left: 47px;
top: 136px;

font-style: normal;
font-weight: normal;
font-size: 27px;
line-height: 30px;
text-align: center;

color: #BB86FC;

`;


const LoginButton=props =>(
  <LoginButtonContainer onPress={props.onPress}>
  <LoginButtonText>{props.title}</LoginButtonText>
  </LoginButtonContainer>
);

export const LoginButtonText=styled.Text `
position: absolute;
width: 130px;
height: 70px;
padding-left:40px;
padding-top:4px;


font-style: normal;
font-weight: normal;
font-size: 31px;
line-height: 40px;
text-align: center;

color: #03DAC5;

`;

export const LoginButtonContainer=styled.TouchableOpacity `
position: relative;
width: 162px;
height: 54px;
margin-left: auto;
margin-right:auto;
top: 235px;
background: #3700B3;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 28px;
`;

export const SignupButtonContainer=styled.TouchableOpacity `
width: 162px;
height: 54px;
left: 106px;
top: 333px;

background: #03DAC5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 28px;
`;

export const SignupButtonText=styled.Text `
width: 145px;
height: 70px;
padding-left:15px;
padding-top:4px;

font-style: normal;
font-weight: normal;
font-size: 31px;
line-height: 40px;
text-align: center;

color: #3700B3;
`;

const SignupButton = props =>(
  <SignupButtonContainer onPress={props.onPress}>
  <SignupButtonText>{props.title}</SignupButtonText>
  </SignupButtonContainer>
);

export function HomePage({navigation}){
  return(
    <Container>
      <Header>STDetector</Header>
      <Subtitle>Be safe, not sorry.</Subtitle>
      <LoginButton
       title="Login"
      onPress={()=>navigation.navigate("Login Page")}
      />
      <SignupButton 
        title="Signup"
        onPress={()=>navigation.navigate("Signup Page")}
        />

     
    </Container>
  );
}

//<-----------------------END OF HOME PAGE------------------->

//<---------------------------  login page-------------------------->
const Credentials_Container= styled.View `
position: absolute;
width: 341px;
height: 348px;
left: 18px;
top: 173px;

background: #000000;
border-radius: 30px;
`;

const Credentials_Username=styled.Text `
position: absolute;
width: 126px;
height: 32px;
left: 15px;
top: 0px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 32px;
text-align: center;

color: #03DAC5;
`;

const Credentials_Password=styled(Credentials_Username) `
width: 126px;
height: 32px;
left: 15px;
top: 141px;

`;

const TextBox=styled.TextInput `
position: absolute;
width: 87%;
height: 45px;
left: 20px;
top:${props=>props.top};

background: #FFFFFF;
`;

const ErrorMessage=styled.Text `
position: absolute;
width: 230px;
height: 32px;
left: 68px;
top: 141px;

font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 32px;
text-align: center;

color: #03DAC5;
`;

const ButtonContainerforLoginPage=styled(LoginButtonContainer) `
top: 420px;
`

const LoginButtonforLoginPage= props=>(
<ButtonContainerforLoginPage onPress={props.onPress}>
   <LoginButtonText>{props.title}</LoginButtonText>
  </ButtonContainerforLoginPage>
);
// const LoginButton=props =>(
//   <LoginButtonContainer onPress={props.onPress}>
//   <LoginButtonText>{props.title}</LoginButtonText>
//   </LoginButtonContainer>
// );
export function LoginPage({navigation}){
    return(
        <Container>
            <Credentials_Container>
                <Credentials_Username>
                    Username: 
                </Credentials_Username>
                <TextBox top='32px'/>
                <Credentials_Password>
                    Password:
                </Credentials_Password>
                <TextBox top='180px' secureTextEntry={true}/>
            </Credentials_Container>
            <LoginButtonforLoginPage 
            title='Login'
            onPress={()=>navigation.navigate("Scan Page")}/>  
            {/* need to implement failed authentication here! */}
        </Container>
    );
}
//<---------------------------------------END OF LOGIN PAGE-------------------->
//<--------------------------------------Beginning of Signup Page------------------------>
const ButtonContainerforSignupPage=styled(SignupButtonContainer) `
top: 420px;
`

const SignupButtonforLoginPage= props=>(
  <ButtonContainerforSignupPage onPress={props.onPress}>
     <SignupButtonText>{props.title}</SignupButtonText>
    </ButtonContainerforSignupPage>
  );

export function SignupPage({navigation}){
  return(
    <Container>
        <Credentials_Container>
            <Credentials_Username>
                Username: 
            </Credentials_Username>
            <TextBox top='32px'/>
            <Credentials_Password>
                Password:
            </Credentials_Password>
            <TextBox top='180px' secureTextEntry={true}/>
        </Credentials_Container>
        <SignupButtonforLoginPage 
        title='Signup'
        onPress={()=>navigation.navigate("Login Page")}/>  
        {/* need to implement failed authentication here! */}
    </Container>
);
}

//<-------------------------------SCAN/UPLOAD PAGE----------------------------->

const QuestionPrompt= styled.Text `
position: absolute;
width: 326px;
height: 108px;
left: 25px;
top: 156px;

font-style: normal;
font-weight: normal;
font-size: 42px;
line-height: 54px;
text-align: center;

color: #03DAC5;

`;

const OptionContainer=styled.TouchableOpacity `
position: absolute;
width: 257px;
height: 36px;
left: 59px;
top: ${props=>props.box_top};

background: #404040;
border-radius: 30px;

`;

const OptionButton=props =>(
  <OptionContainer box_top={props.box_top} onPress={props.onPress}>
  <TopOption text_top={props.text_top}>{props.title}</TopOption>
  </OptionContainer>
);

const TopOption=styled.Text `
position: absolute;
width: 252px;
height: 39px;
top: ${props=>props.text_top}; 

font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 31px;
text-align: center;

color: #BB86FC;

`;

export function ScanPage({navigation}){
  return(
    <Container>
    <QuestionPrompt>What do you want to do?</QuestionPrompt>
    <OptionButton box_top='56%' text_top='7%'title="Scan QR Code" onPress={()=>navigation.navigate("Scan QR Code")}/>
    <OptionButton box_top='63.5%' text_top='7%' title="Upload Results" onPress={()=>navigation.navigate("Upload and View Results")}/>
    <OptionButton box_top='71%' text_top='7%' title="Display QR Code" onPress={()=>navigation.navigate("Display QR Code")}/>
    </Container>
  )
}

//<----------------------END OF SCAN/UPLOAD PAGE-------------->

//<----------------------Upload Results Page------------------->


export const UploadButtonContainer =styled.TouchableOpacity `
  width: 90px;
  height: 23.33px;
  opacity: 0.67;
  background: #03DAC5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 28px;
  margin-left: 140px;
  margin-top: 20px;


`;

export const UploadButton=props=>(
<UploadButtonContainer>
  <UploadResultsText>
    {props.title}
    </UploadResultsText>
</UploadButtonContainer>
);



const STDText=styled.Text `


font-style: normal;
font-weight: normal;
font-size: 24px;

margin-top: 15px;

/* identical to box height */

text-align: center;

color: rgba(3, 218, 197, 0.6);
`;

const UploadResultsText=styled.Text`
color: #3700B3;
font-size:18px;
height: 28px;
text-align: center;
`;
const PickerFormer=()=>{
  const [selectedValue, setSelectedValue] = useState("No Result");
  return(
    <Picker
      selectedValue={selectedValue}
      style={{ height: 50, backgroundColor:'#003366', color:'#03DAC5', }}
      onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
    >
    <Picker.Item label="Positive" value="+ve" selected='true' />
    <Picker.Item label="Negative" value="-ve"/>
    <Picker.Item label="No Result" value= "--"/>
    <Picker.Item label="Not applicable" value="NA"/>
  </Picker>
  );
}
const Resultblock= props=>(
  <View>

  <View style={{display:'flex', flexDirection:'row'}}>
    <View style={{height: 69}}>
      <STDText>{props.STDText}</STDText>
    </View>
    <View >
      <UploadButton title='Upload'/>
    </View>
  </View>

    <View>
      <PickerFormer/>
    </View>
  </View>
  // <View style={{backgroundColor:'white'}}>
  //   <View style={{flex: 1, flexDirection:"column"}}>

  //     <View style={{flex: 1, flexDirection:"row"}}>
  //       <View style={{width:160, height: 69, backgroundColor:'yellow' }}/>
  //         {/* <STDText>{props.STD}</STDText> */}
  //       {/* </View> */}

  //       <View style={{width:160.5, height: 69, backgroundColor:'blue'}}/>
  //         {/* <UploadButton title="Upload"/> */}
  //       {/* </View> */}
  //    </View>
  //    <View style={{flex: 1, flexDirection:"column"}}></View>

  //     <View style={{width: 100, height:69,backgroundColor:'red'}}/>  
  //       {/* <PickerFormer/> */}
  //     {/* </View> */}

  //   </View>


  // </View>
)

function ResultPage({navigation}){
  return (
    <ScrollView>
    <Container>
    <Resultblock STDText='Chlamydia  '/>
    <Resultblock STDText='Syphilis       '/>
    <Resultblock STDText='Herpes        '/>
    <Resultblock STDText='HIV              '/>
    <Resultblock STDText='Hepatitis B'/>
    <Resultblock STDText='Hepatitis C'/>
    <Resultblock STDText='HPV            '/>
    <Resultblock STDText='Gonorrhea '/>
    <Resultblock STDText='Syphilis     '/>
    <Resultblock STDText='Syphilis     '/>
    <Resultblock STDText='Syphilis     '/>
    </Container>
    </ScrollView>
  );
}

{/* <Picker       
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex)=>this.setState({status:itemValue})}
        style={{height:81, width: 218, color:'white', marginLeft: 34}}>

        <Picker.Item label="Positive" value="+ve"/>
        <Picker.Item label="Negative" value="-ve"/>
        <Picker.Item label="No Result" value= "--"/>
        <Picker.Item label="Not applicable" value="NA"/>
      </Picker> */}

//<------------------------------END OF UPLOAD/ RESULTS PAGE----------------------->

//<-------------------------------BEGINNING OF SCAN QR PAGE------------------------->

const QRPanel=styled.View `
position: absolute;
width: 341px;
height: 364px;
left: 0px;
top: 52px;

background: #000000;
border-radius: 30px;

`
function ScanQRPage({navigation}){
  return(
    <Container>
      <QRPanel>
        <BarCodeScanner/>
      </QRPanel>
    </Container>
  );
}
//<--------------------------END OF SCAN QR PAGE--------------------------->

//<-------------------------------BEGINNING OF Profile QR PAGE-------------------->

function displayQRCode({navigation}){
 return(
  <Container>
    <QRPanel/>
  </Container>
 );
}
//<-----------------------------END OF SCAN QR PAGE-------------------------------------->

//<-------------------------REACT NAVIGATION---------------------->
const Stack=createStackNavigator();
const Tab=createBottomTabNavigator();

export function MyStack(){
  return(
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#121212'
      },
      headerTitleStyle:{
        color: '#03DAC5'
      }
    }}>
      <Stack.Screen
        name="Home Page"
        component={HomePage}
      />
      <Stack.Screen
        name="Login Page"
        component={LoginPage}
      />
      <Stack.Screen
        name="Scan Page"
        component={ScanPage}
      />
      <Stack.Screen
        name="Signup Page"
        component={SignupPage}
      />

      <Stack.Screen
        name="Scan QR Code"
        component={MyTab}
        />
      <Stack.Screen
        name="Display QR Code"
        component={MyTab}
      />
      <Stack.Screen
        name="Upload and View Results"
        component={MyTab}
        />
    </Stack.Navigator>

  );

}

export function MyTab(){
  return(
    <Tab.Navigator tabBarOptions={{
      tabStyle:{
        backgroundColor: '#121212'
      },
      labelStyle:{
        color: '#03DAC5'
      }
    }}>
      <Tab.Screen
        name= "Scan QR Code"
        component={ScanQRPage}
      />
      <Tab.Screen
        name="Upload and View Results"
        component={ResultPage}
      />
      <Tab.Screen
        name="Display QR Code"
        component={displayQRCode}
      />
    </Tab.Navigator>

  );
}
export default function RenderedFrontEnd(){
  return(
  <NavigationContainer>
    <MyStack/>
  </NavigationContainer>
  );

}


