import React, { Component }  from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
  Alert
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class DodoThx extends Component {

    constructor(props)
    {
        super(props);
        this.sheetRef = React.createRef(null);
        
        this.state = {

      
        }
    }
    componentDidMount(){

       
  }

    render(){
        
          
        
          return (
            
            <View style={{backgroundColor:'#ff5a00' , height:windowHeight}}>
            <Text style={{fontSize:20, margin:10}}>Спасибо, что воспользовались нашим сервисом!</Text>
            <Text style={{fontSize:20, margin:10}}>После того, как заберете заказ, пожалуйста, закройте двери отсека</Text>
            <View>
                <TouchableOpacity  underlayColor="#FF6900">
                  <Image resizeMode={"contain"} style={{width:windowWidth,height:windowHeight/3}} source ={{uri:'https://brandbook.dodopizza.info/Logo%E2%80%94Background%E2%80%94Main%E2%80%94Orange.22af795b.jpg'}}/>
                </TouchableOpacity>
              </View>
      
          </View>
        );
            
          
    }
    
    
}

