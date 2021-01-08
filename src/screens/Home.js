import React, { Component } from 'react';
import { SafeAreaView, TouchableOpacity,StyleSheet } from 'react-native';
import ReadData from '../components/ReadData'
import StoryFrom from '../components/StoryFrom'
import Icon2 from 'react-native-vector-icons/Ionicons';

class Home extends Component {
  render() {
    const {navigate,route} = this.props.navigation;

    return (
        <SafeAreaView style={{flex:1}} >
            <StoryFrom navigate={navigate} />
            <ReadData navigate={navigate} />
            <TouchableOpacity style={styles.FixButton} 
            onPress={() => navigate('SendTweet')}>
              <Icon2 name="add-circle-sharp" size={50} color={'#1FA4CF'}></Icon2>
          </TouchableOpacity>
        </SafeAreaView>
      );
  }
}

const styles =StyleSheet.create({
  FixButton:{
    position:'absolute',
    right:0,
    bottom:0,
    marginHorizontal:8,
    marginVertical:8
  }
 

});
export default Home;
