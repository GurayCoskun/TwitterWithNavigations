import React, { Component } from 'react';
import { View, FlatList,ActivityIndicator } from 'react-native';
import data from '../database/Data.json'
import TweetsForm from './TweetsForm'
class ReadData extends Component {  
    constructor(props) {
        super(props);
        this.state = {
          isLoading:true,
          dataSource:[],
        };
      }
      componentDidMount(){
          this.setState({
            isLoading:false,
            dataSource:data.result
          });
    };
    renderContactsItem=(  {item,index})=>{
        return(
          <TweetsForm
            url={item.pp}
            nickname={item.NickName}
            tweet={item.tweet}
            mentionC={item.countMention}
            RTC={item.countRT}
            FAVC={item.countFAV}
            username={item.UserName}
            time={item.time}
            navigate={this.props.navigate}
          ></TweetsForm>
        )
      }
  render() {
    const {navigate}=this.props;

    if(this.state.isLoading){
        return(
          <View style={{flex:1,padding:20}}>
            <ActivityIndicator></ActivityIndicator>
          </View>
        );
      }
    return (
      <View style={{height:'88%' }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderContactsItem}
          keyExtractor={(item,index)=>index.toString()}
        >
        </FlatList>
      </View>
    );
  }
}

export default ReadData;
