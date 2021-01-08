import React, { Component } from 'react';
import { View, Text,StyleSheet,ScrollView } from 'react-native';
import ImageForm from './ImageForm'
class StoryForm extends Component {
  render() {
    const {navigate}=this.props;
    return (

      <View style={styles.StoryContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.StoryBar}>
            <ImageForm sources={require('../images/oneguy.jpeg')} navigate={navigate}/>
            <ImageForm sources={require('../images/secondguy.jpg')} navigate={navigate} />
            <ImageForm sources={require('../images/thirdguy.jpg')} navigate={navigate}/>
          </View>
        </ScrollView>

      </View>
    );
  }
}
const styles =StyleSheet.create({
    StoryContainer:{
        borderBottomWidth:1,
        borderBottomColor:'#DBE5E8',
        height:'12%'
    },
    StoryBar:{
        flexDirection:'row',
    }
});
export default StoryForm;