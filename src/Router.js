import React, { Component } from 'react';
import { Text, View,TouchableOpacity,TextInput,StyleSheet ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Details from './screens/Details'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from './screens/Search'
import Notification from './screens/Notifications'
import DirectMessage from './screens/DirectMessage'
import SendTweet from './screens/SendTweet'
import { Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class TitleLogo extends Component{
    render(){
        return( 
            <Ionicons name={'logo-twitter'} size={30} color={'#4AB4EC'}/>
        )
    }
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
const RootStack = createStackNavigator();
function ModalScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image 
          style={{height,width}}
          source={{uri:'https://i.pinimg.com/originals/98/88/a2/9888a2e448a3d890ecd4cc81ac32db69.jpg'}}></Image>
      </View>
    );
  }
function RootStackScreen() {
    return (
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={TabBar}
          options={{
            headerShown: false 
        }}
        />
        <RootStack.Screen name="MyModal" component={ModalScreen} options={{
            headerShown: false,
            gestureEnabled:true
        }} />
      </RootStack.Navigator>
    );
  }
const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeStack({navigation}){
    return(
       <MainStack.Navigator initialRouteName="Home">
           <MainStack.Screen name="Home" 
               component={Home} 
               options={{ 
                headerTitle: props => <TitleLogo {...props} />, 
                headerTitleAlign:'center',
                headerLeft: () => (
                  <TouchableOpacity
                  onPress={() => navigation.toggleDrawer()}>
                    <Ionicons name="menu" size={30} color={'#4AB4EC'} style={{marginLeft:5}}></Ionicons>
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity
                    onPress={() => navigation.toggleDrawer()}>
                      <Icon name="star-four-points-outline" size={30} color={'#4AB4EC'} style={{marginRight:5}}></Icon>
                      </TouchableOpacity>
                  )
              }}
                />
           <MainStack.Screen name="Details" 
               component={Details}
               options={{
                    headerTintColor:'#000',
                   headerTitle:'Tweet'
               }} 
                />
            <MainStack.Screen name="SendTweet" 
                component={SendTweet}
                options={{
                    headerStyle:{
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    headerTitle:null,
                    headerRight:()=>(
                        <TouchableOpacity
                            style={styles.SubmitButtonStyle}
                            activeOpacity = { .5 }
                        >
                                <Text style={styles.TextStyle}> Tweetle </Text>
                                
                        </TouchableOpacity>
                    )
                }} 
                />
               
     </MainStack.Navigator>
    )
}
function SearchStack({navigation}){
    return(
       <MainStack.Navigator initialRouteName="Search">
           <MainStack.Screen name="Search" 
               component={Search} 
               options={{ 
                headerTitle:()=>(
                    <TextInput
                    style={{borderWidth:0.5,borderColor:'#838688',borderRadius:30,height:'50%',backgroundColor:'#D5E0E6',fontSize:13,marginTop:'7%'}}
                    placeholder="Twitter'da Ara"
                    placeholderTextColor="#000"
                    />
                ) , 
                headerTitleAlign:'left',
                headerTitleStyle: {
                    height:'50%',
                  },
                headerLeft: () => (
                  <TouchableOpacity
                  onPress={() => navigation.toggleDrawer()}>
                    <Ionicons name="menu" size={30} color={'#4AB4EC'} style={{marginLeft:5}}></Ionicons>
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity
                    onPress={() => navigation.toggleDrawer()}>
                    <Ionicons name="settings-outline" size={30} color={'#4AB4EC'} style={{marginRight:5}}></Ionicons>
                      </TouchableOpacity>
                  )
              }}
                />
     </MainStack.Navigator>
    )
}
function NotificationStack({navigation}){
    return(
       <MainStack.Navigator initialRouteName="Notification">
           <MainStack.Screen name="Notification" 
               component={Notification} 
               options={{ 
                headerTitle:'Bildirimler', 
                headerTitleAlign:'left',
                headerLeft: () => (
                  <TouchableOpacity
                  onPress={() => navigation.toggleDrawer()}>
                    <Ionicons name="menu" size={30} color={'#4AB4EC'} style={{marginLeft:5}}></Ionicons>
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity
                    onPress={() => navigation.toggleDrawer()}>
                    <Ionicons name="settings-outline" size={30} color={'#4AB4EC'} style={{marginRight:5}}></Ionicons>
                      </TouchableOpacity>
                  )
              }}
                />
     </MainStack.Navigator>
    )
}
function DirectMessageStack({navigation}){
    return(
       <MainStack.Navigator initialRouteName="DirectMessage">
           <MainStack.Screen name="DirectMessage" 
               component={DirectMessage} 
               options={{ 
                headerTitle: 'Mesajlar', 
                headerTitleAlign:'left',
                headerLeft: () => (
                  <TouchableOpacity
                  onPress={() => navigation.toggleDrawer()}>
                    <Ionicons name="menu" size={30} color={'#4AB4EC'} style={{marginLeft:5}}></Ionicons>
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity
                    onPress={() => navigation.toggleDrawer()}>
                    <Ionicons name="settings-outline" size={30} color={'#4AB4EC'} style={{marginRight:5}}></Ionicons>
                      </TouchableOpacity>
                  )
              }}
                />
     </MainStack.Navigator>
    )
}
function TabBar(){
    return (
          <Tab.Navigator
                initialRouteName="Home"
               screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {  
                    if(route.name==='Home'){
                        if(focused){
                            return <Ionicons name={'home'} size={size} color={color} />;
                        }
                        else{
                            return <Ionicons name={'home-outline'} size={size} color={color} />;
                        }
                    }
                    else if(route.name==='Search'){
                        if(focused){
                            return <Ionicons name={'search'} size={size} color={color}  />;
                        }
                        else{
                            return <Ionicons name={'search-outline'} size={size} color={color}  />;
                        }
                    }
                    else if(route.name==='Notification'){
                        if(focused){
                            return <Ionicons name={'notifications'} size={size} color={color} />;
                        }
                        else{
                            return <Ionicons name={'notifications-outline'} size={size} color={color} />;
                        }
                    }
                    else{
                        if(focused){
                            return <Ionicons name={'mail'} size={size} color={color} />;
                        }
                        else{
                            return <Ionicons name={'mail-outline'} size={size} color={color} />;
                        }
                    }
                },
              })}
              tabBarOptions={{
                showLabel:false, 
                activeTintColor: '#4AB4EC',
                inactiveTintColor: '#282C2E',
                style:{
                    backgroundColor:'#fff'
                }
              }}
          >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Search" component={SearchStack} />
            <Tab.Screen name="Notification" component={NotificationStack} />
            <Tab.Screen name="DirectMessage" component={DirectMessageStack} />

          </Tab.Navigator>
      );
}
 class Router extends Component {
  render() {
    return (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={RootStackScreen} />
            <Drawer.Screen name="Setting" component={SettingsScreen} />
            
          </Drawer.Navigator>
        </NavigationContainer>
      );
  }
}
const styles = StyleSheet.create({
    
    SubmitButtonStyle: {
        width:80,
        height:30,
        backgroundColor:'#00BCD4',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
      },
     
      TextStyle:{
          color:'#fff',
          textAlign:'center',
      }
});
export default Router;

