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

export default class DododScreenQR extends Component {

    constructor(props)
    {
        super(props);
        this.sheetRef = React.createRef(null);
        
        this.state = {
        order:'',
        city : 'Санкт-Петербург',
      
        }
    }
    componentDidMount(){
      const storage = async()=>{
        let items = await AsyncStorage.getItem('order');
        console.log(items)
        this.setState({order: items})
      }
      storage()
      console.log(this.state.order)
      
  }
  onSuccess = e =>{
    console.log(JSON.parse(e['data'])['table'])
    const url_add_table = "http://95.181.230.223:5000/addtable/" + this.state.order + "/" +  "/" + JSON.parse(e['data'])['table'].toString()
    fetch(url_add_table)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        new_order_data:responseJson
      });
      
      this.setState({readed: true})
      AsyncStorage.setItem('new_order',JSON.stringify(this.state.new_order_data));
      Alert.alert(
        "Alert Title",
        "Ваш код успешно отсканирован",
        [
          {
            text: "Ок",
            onPress: () =>  this.props.navigation.navigate('Додо Пицца Ожидание робота'),
            
          },
        ],
        { cancelable: false }
      );
      
    })
    .catch((error) =>{
      console.error(error);
      Alert.alert(
        "Alert Title",
        "Ваш код не может быть отсканирован",
        [
          {
            text: "Ок",
            onPress: () =>  this.props.navigation.navigate('Додо Пицца Заказ'),
            
          },
        ],
        { cancelable: false }
      );
    
    });

  }
    render(){
        
          
        
          return (
            
            <View style={{backgroundColor:'#ff5a00' , height:windowHeight}}>
            <Text style={{fontSize:20, margin:10}}>Ваш заказ №: </Text>
            <View style={{alignItems:'center'}}>
              <View style={{alignItems:'center',borderWidth:5, borderRadius:10, alignItems:'center', justifyContent:'center', width: windowWidth/2}}>
                <Text style={{fontSize:20, textAlign:'center'}}>{this.state.order}</Text>
              </View>
            </View>
            <Text style={{fontSize:20, textAlign:'center', margin:5}}>Пожалуйста, отсканируйте QR код, который находится на столе.</Text>
            <QRCodeScanner 
              containerStyle={{ backgroundColor:'#ff5a00' }}
              onRead={this.onSuccess}
              cameraStyle={{ height: 100, width: 200, alignSelf: 'center', justifyContent: 'center', marginTop:windowHeight/6}}
              flashMode={RNCamera.Constants.FlashMode.auto}
            />
            <View>
                <TouchableOpacity  underlayColor="#FF6900">
                  <Image resizeMode={"contain"} style={{width:windowWidth,height:windowHeight/3}} source ={{uri:'https://brandbook.dodopizza.info/Logo%E2%80%94Background%E2%80%94Main%E2%80%94Orange.22af795b.jpg'}}/>
                </TouchableOpacity>
              </View>
      
          </View>
        );
            
          
    }
    
    
}

