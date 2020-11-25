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
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class DododScreen extends Component {

    constructor(props)
    {
        super(props);
        this.sheetRef = React.createRef(null);
        
        this.state = {
        dataRestaurant:[],
        city : 'Санкт-Петербург',
      
        }
    }

    ComponentDidMount(){
    }
    show = () => {
    
        this.sheetRef.current && this.sheetRef.current.snapTo(0);
      };
    
      hide = () => {
        console.log("here")
        this.sheetRef.current && this.sheetRef.current.snapTo(1);
      }
    
      renderContent = () => (
        <View
          style={{
            backgroundColor: '#212021',
            
            height: windowHeight,
          }}
        >
            <TouchableHighlight
                  onPress={() =>  this.setState({city:'Санкт-Петербург'}, this.hide())}
                  style={{backgroundColor:'#ff5a00', marginVertical: 10, height: windowHeight/20, width:windowWidth, borderRadius: 10, paddingVertical: 3, paddingHorizontal:5,  alignSelf:'flex-end',alignItems:'center', justifyContent:'center' }}
                >   
                    <Text style = {{fontSize: 15, color: "#fff"}}>Санкт-Петербург</Text>
            </TouchableHighlight>
            <View></View>
            <TouchableHighlight
                  onPress={() => this.setState({city:'Москва'}, this.hide())}
                  style={{backgroundColor:'#ff5a00', marginVertical: 10, height: windowHeight/20, width:windowWidth, borderRadius: 10, paddingVertical: 3, paddingHorizontal:5,  alignSelf:'flex-end', alignItems:'center', justifyContent:'center' }}
                >   
                    <Text style = {{fontSize: 15, color: "#fff"}}>Москва</Text>
            </TouchableHighlight>
          
        </View>
      );
      getRestaurants(city){
        const url_food = "http://95.181.230.223:5000/dodo/restaurants/" + city
        fetch(url_food)
        .then((response) => response.json())
        .then((responseJson) => {
        this.setState({
            isLoading: false,
            dataRestaurant:responseJson
        });
      

        })
        .catch((error) =>{
        console.error(error);
      
        })
        return(
        <FlatList showsHorizontalScrollIndicator={false}
        centerContent={true}
        horizontal={true}
        data={this.state.dataRestaurant}
        renderItem={({ item }) => this.renderRestaurantList(item)}
        keyExtractor = { (item,index) => index.toString() }
/>)
      }
    render(){
        
          
        
          return (
            <>
                <View style={{borderBottomWidth:1, borderColor:'gray', backgroundColor:"#ff5a00", width:windowWidth, height:windowHeight }}>
                <View   style={{flexDirection:'row', justifyContent:'flex-end', marginLeft: windowWidth/1.8 }}>
                <TouchableHighlight
                  onPress={() => this.show()}
                  style={{backgroundColor:'#212021', marginVertical: 10, height: windowHeight/25, borderRadius: 10, paddingVertical: 3, paddingHorizontal:5, marginHorizontal: 10, alignSelf:'flex-end' }}
                >   
                    <View style={{flexDirection:'row'}}>
                        <Text style = {{fontSize: 15, color: "#fff"}}>{this.state.city}</Text>
                        <Icon name="arrow-down"  color='#fff' size={26} />
                    </View>
                </TouchableHighlight>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize: 20}}>Выберите ресторан</Text>
                    <TouchableHighlight
                  onPress={() =>  [this.props.navigation.navigate('Додо Пицца Заказ'),AsyncStorage.setItem('Restaurant', '1'), AsyncStorage.setItem('City', this.state.city)] }
                  style={{backgroundColor:'#212021', marginVertical: 10, height: windowHeight/20, width:windowWidth/1.2, borderRadius: 10, paddingVertical: 3, paddingHorizontal:5,  alignSelf:'flex-end', alignItems:'center', justifyContent:'center' }}
                >   

                    <Text style = {{fontSize: 15, color: "#fff"}}>Большой проспект П.С., 33</Text>
            </TouchableHighlight>
                </View>
              </View>
              <BottomSheet
                ref={this.sheetRef}
                snapPoints={[680,0]}
                borderRadius={10}
                initialSnap={1}
                renderContent={this.renderContent}
              />
            </>
          );
    }
    
    
}

