import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView ,Image,Text} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

class SendTweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={{flex:1}}>
          <View style={styles.Container}>
                <View >
                    <Image source={{uri:'https://i.pinimg.com/originals/98/88/a2/9888a2e448a3d890ecd4cc81ac32db69.jpg'}} style={styles.ProfilImage}></Image>
                </View>
                <View >
                    <TextInput
                        placeholderTextColor='#454646'
                        placeholder='Neler olup bitiyor?'
                        multiline={true}
                        
                    ></TextInput>
                </View>
                
          </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    Container:{
        flexDirection:'row',
        width:'100%',
        padding:10,
    },
    ProfilImage:{
        height:50,
        width:50,
        borderRadius:40,
    },
    SubmitButtonStyle: {
 
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:30,
        marginRight:30,
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
export default SendTweet;
