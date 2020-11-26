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

export default class DodoAwaitRobot extends Component {

    constructor(props)
    {
        super(props);
        this.sheetRef = React.createRef(null);
        
        this.state = {
        order:'',
        city : 'Санкт-Петербург',
        scanned: 1,
      
        }
    }
    componentDidMount(){
      const storage = async()=>{
        let items = await AsyncStorage.getItem('order');
        let items2 = await AsyncStorage.getItem('status');
        let newstatus =''
        if (items2 == '1') {
             newstatus = "Принят"
            
        }else if (items2 == '2') {
             newstatus = "Готовится"
        }else if (items2 == '3') {
             newstatus = "Приготовлен"
        }else if (items2 == '4') {
             newstatus = "В доставке"
        }
        this.setState({status: newstatus,order: items, scanned: 1})
      }
      
      storage()
        
      console.log(this.state.order)
      console.log(this.state.status)
      console.log(this.state.scanned)
      
       
  }
  onSuccess = e =>{
    console.log(e)
    this.setState({scanned: 2})
    console.log(this.state.scanned)
    try {
        console.log(JSON.parse(e['data'])['robot'])
        const url_add_table = "http://95.181.230.223:5000/checkrobot/" + this.state.order + "/"  + JSON.parse(e['data'])['robot'].toString()
        console.log(url_add_table)
        var render_again = this.state.scanned
        fetch(url_add_table)
        .then((response) => response.text())
        .then((responseJson) => {
        if (responseJson == 'error') {
        Alert.alert(
            "Alert Title",
            "Ошибка повторите попытку",
            [
              {
                text: "Ок",
                onPress: () =>   [console.log('failed'),this.setState({scanned: 2})],
                
              },
            ],
            { cancelable: false }
          );
          console.log(this.state.scanned)
          this.setState({scanned: 2})
        }
        else{
      
      Alert.alert(
        "Alert Title",
        "Ваш код успешно отсканирован",
        [
          {
            text: "Ок",
            onPress: () =>  this.props.navigation.navigate('Додо Пицца Благодарность'),
            
          },
        ],
        { cancelable: false }
      );
        }
      
    })
    .catch((error) =>{
      console.error(error);
      Alert.alert(
        "Alert Title",
        "Ваш код не может быть отсканирован",
        [
          {
            text: "Ок",
            onPress: () =>   [console.log('failed'),this.setState({scanned: 2})],
            
          },
        ],
        { cancelable: false }
      );
      this.setState({scanned: 2})
    });
    } catch (error) {
        Alert.alert(
            "Alert Title",
            "Ваш код не может быть отсканирован",
            [
              {
                text: "Ок",
                onPress: () =>  [console.log('failed'),this.setState({scanned: 2})],
                
              },
            ],
            { cancelable: false }
          );
          this.setState({scanned: 2})
    }
    this.setState({scanned: 2})
    console.log(this.state.scanned)
    

  }
    render(){
        
          
        
          return (
            
            <View style={{backgroundColor:'#ff5a00' , height:windowHeight}}>
            <Text style={{fontSize:20, margin:10}}>Ваш заказ №: </Text>
            <View style={{alignItems:'center'}}>
              <View style={{alignItems:'center',borderWidth:5, borderRadius:10, alignItems:'center', justifyContent:'center', width: windowWidth}}>
                <Text style={{fontSize:20, textAlign:'center'}}>{this.state.order}</Text>
              </View>
            </View>
            <View style={{alignItems:'center', margin:2}}>
              <View style={{alignItems:'center',borderWidth:5, borderRadius:10, alignItems:'center', justifyContent:'center', width: windowWidth/2}}>
                <Text style={{fontSize:20, textAlign:'center'}}>{this.state.status}</Text>
              </View>
            </View>
            <Text style={{fontSize:20, textAlign:'center', marginTop:5}}>По прибытии робота, пожалуйста, отсканируйте QR код, расположенный на нем.</Text>
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

