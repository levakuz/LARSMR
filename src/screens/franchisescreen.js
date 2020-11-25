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
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class FranchiseScreen extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
        dataFranchises:[],
      
      
        }
    }

    ComponentDidMount(){
    }
    render(){
        return(
            <View style={{flex:1}}>
            <View style={{ flex:0.99}}>
            <ScrollView>
            <TouchableOpacity  onPress={() => { this.props.navigation.navigate('Додо Пицца')}}>
              <View >
                 <Image resizeMode={"cover"} style={{width:windowWidth,height:windowHeight/5,}} source={{uri: 'https://brandbook.dodopizza.info/Logo%E2%80%94Background%E2%80%94Main%E2%80%94Orange.22af795b.jpg'}} />
              </View>
            
            </TouchableOpacity>
            <View style={{width:windowWidth, height:windowHeight/20, backgroundColor: "#212021"}}/>

            <TouchableOpacity  onPress={() => { this.props.navigation.navigate('Додо Пицца')}}>
              <View >
                 <Image resizeMode={"cover"} style={{width:windowWidth,height:windowHeight/5}} source={{uri: 'https://brandbook.dodopizza.info/Logo%E2%80%94Background%E2%80%94Main%E2%80%94Orange.22af795b.jpg'}} />
              </View>
            </TouchableOpacity>
            <View style={{width:windowWidth, height:windowHeight/20, backgroundColor: "#212021"}}/>
            <TouchableOpacity  onPress={() => { this.props.navigation.navigate('Додо Пицца')}}>
              <View >
                 <Image resizeMode={"cover"} style={{width:windowWidth,height:windowHeight/5}} source={{uri: 'https://brandbook.dodopizza.info/Logo%E2%80%94Background%E2%80%94Main%E2%80%94Orange.22af795b.jpg'}} />
              </View>
            </TouchableOpacity>
            <View style={{width:windowWidth, height:windowHeight/20, backgroundColor: "#212021"}}/>
            <TouchableOpacity  onPress={() => { this.props.navigation.navigate('Додо Пицца')}}>
              <View >
                 <Image resizeMode={"cover"} style={{width:windowWidth,height:windowHeight/5}} source={{uri: 'https://brandbook.dodopizza.info/Logo%E2%80%94Background%E2%80%94Main%E2%80%94Orange.22af795b.jpg'}} />
              </View>
            </TouchableOpacity>
            <View style={{width:windowWidth, height:windowHeight/20, backgroundColor: "#212021"}}/>
            <TouchableOpacity  onPress={() => { this.props.navigation.navigate('Додо Пицца')}}>
              <View >
                 <Image resizeMode={"cover"} style={{width:windowWidth,height:windowHeight/5}} source={{uri: 'https://brandbook.dodopizza.info/Logo%E2%80%94Background%E2%80%94Main%E2%80%94Orange.22af795b.jpg'}} />
              </View>
            </TouchableOpacity>
            <View style={{width:windowWidth, height:windowHeight/20, backgroundColor: "#212021"}}/>
            
            </ScrollView>
            </View>
                <View style={{alignSelf:'flex-end'}}>
                    <Image resizeMode={"cover"} style={{width:windowWidth,height:windowHeight/7}} source={{uri:"http://robotics.nw.ru/bitrix/templates/empty/images/labs/lars_slider_1.png"}}></Image>
                </View>
            </View>


        )
    }
    
    
}

