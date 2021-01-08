import React, { Component } from 'react';
import { View, Image ,StyleSheet,Text,TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/EvilIcons';
const width = Dimensions.get('window').width;
function Details ({ route, navigation }){
    const {nickname,tweet,mentionC,RTC,FAVC,username,time,navigate,url}=route.params;

    return (
      <View style={styles.Container}>
          <View style={styles.TweetContainer}>
            <View style={styles.UserInfo}>
              <Image source={{uri:url}} style={styles.ProfilImage}></Image>
              <View style={styles.nicknameContainer}>
                  <Text>{nickname}</Text>
                  <Text style={styles.usernameStyle}>{username}</Text>
              </View>
              <TouchableOpacity style={{position:'absolute',right:0}}>
                                <Icon2 name="caret-down" size={15} color={'#7C8283'}></Icon2>
              </TouchableOpacity>
            </View>
            <View style={styles.TweetDetails}>
                <Text style={{fontSize:20}}>{tweet}</Text>
                <Text style={styles.usernameStyle}>{time} ago</Text>
            </View>
          </View>
          <View style={styles.StatisticContainer}>
              <View style={styles.RT}>
                    <Text>{RTC}</Text>
                    <Text style={styles.StatiscticText}>Retweet</Text>
              </View>
              <View style={styles.RT}>
                    <Text>{FAVC}</Text>
                    <Text style={styles.StatiscticText}>Beğeni</Text>
              </View>
          </View>
          <View style={styles.InteractionsContainer}>
              <View style={{paddingHorizontal:50,paddingVertical:10}}>
                <View style={styles.Interactions}>
                  <TouchableOpacity>
                    <Icon2 name="chatbubble-outline" size={20} color={'#4F5050'}></Icon2>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon3 name="retweet" size={30} color={'#4F5050'}></Icon3>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon2 name="heart-outline" size={20} color={'#4F5050'}></Icon2>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon2 name="share-social-outline" size={20} color={'#4F5050'} ></Icon2>
                  </TouchableOpacity>
                </View>
              </View>
          </View>

          
          
      </View>
    );
}
const styles = StyleSheet.create({
  Container:{
    flex:1,
  },
  TweetContainer:{
    padding:10,
    borderBottomWidth:1,
    borderBottomColor:'#A4B5B7',
  },
  UserInfo:{
    flexDirection:'row'
  },
  ProfilImage:{
    height:60,
    width:60,
    borderRadius:80,
  },
  nicknameContainer:{
    marginHorizontal:15
  },
  usernameStyle:{
    color:'#808384'
  },
  TweetDetails:{
    marginTop:15,
  },
  StatisticContainer:{
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#A4B5B7'
  },
  RT:{
    padding:10,
    flexDirection:'row'
  },
  StatiscticText:{
    color:'#808384',
    marginLeft:5
  },
  InteractionsContainer:{
    borderBottomWidth:1,
    borderBottomColor:'#A4B5B7'
  },
  Interactions:{
    flexDirection:'row',
    justifyContent:'space-between',
  }
});


export default Details;
