/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  findNodeHandle,
  FlatList
} from "react-native";

import { Spruce, DefaultSort } from "react-native-spruce";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const items = [
  {
    topicCat: "Wise",
    topicCatData: [
      {
        topicName: "Quotes",
        topicDescription: "Some quotes to inspire you",
        topicSummary: "Simple motivational quotes",
        imageurl: "imageurl",
        topicCategory: "Wise",
        topicId: 0
      }
    ]
  },
  {
    topicCat: "Wise 1"
  },
  {
    topicCat: "Wise 2"
  },
  {
    topicCat: "Wise 3"
  },
  {
    topicCat: "Wise 4"
  },
  {
    topicCat: "Wise 5"
  },
  {
    topicCat: "Wise 6"
  }
];

export default class App extends Component<{}> {

  componentDidMount () {
    setTimeout(() => {
      let spruceBuilder = new Spruce.SpruceBuilder(this.ref);

      let defaultSort = new DefaultSort()

      spruceBuilder.sortWith(defaultSort)
      spruceBuilder.start()
    }, 0);
  }

  renderFlatListItem(item) {
      return (
        <View key={"parentView"+item.topicCat} style={{ flex: 1}}>
          <Text key={"topicCat"+item.topicCat} style={{ flex: 1}}>{item.topicCat}</Text>
        </View>
      )
  }

  render() {
    // return <View style={styles.container} ref={ref => {
    //       this.ref = ref;
    //     }}>
    //     <Text style={styles.welcome}>Welcome to React Native!</Text>
    //     <Text style={styles.instructions}>To get started, edit App.js</Text>
    //     <Text style={styles.instructions}>{instructions}</Text>
    //   </View>;
    return <View>
        <FlatList key={"flatlistexample"} data={items} renderItem={({ item }) => this.renderFlatListItem(item)} ref={ref => {
          this.ref = ref;
        }}/>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
