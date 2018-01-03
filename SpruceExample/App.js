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

import {
  Spruce,
  DefaultSort,
  RandomSort,
  CorneredSort,
  LinearSort,
  RadialSort,
  DefaultAnimations
} from "react-native-spruce";
import Placeholder from 'rn-placeholder';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const items = [
  {
    topicCat: "Wise",
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

  renderFlatListItem(item) {
    return <Spruce>
        <View key={"parentView" + item.topicCat} style={{ flex: 1, height: 100, backgroundColor: "#ffffff", alignItems: "center", margin: 5 }}>
          <Placeholder.ImageContent key={"placeholder" + item.topicCat} size={60} lineNumber={4} lineSpacing={5} lastLineWidth="30%" onReady={false} color={"#c7e3f2"}>
            <Text key={"text" + item.topicCat}>
              Placeholder has finished :D
            </Text>
          </Placeholder.ImageContent>
        </View>
      </Spruce>;
  }

  renderSeparator () {
    return <View style={{ flex: 1, height: 2, backgroundColor: "#ededed" }} />;
  }

  render() {
    let sortWith = new CorneredSort(100);
    let animateWith = DefaultAnimations.shrinkAnimator(1000)

    return <View style={{ flex: 1, backgroundColor: "#ededed" }}>
        <Spruce sortWith={sortWith} animateWith={animateWith} animator={{ propertyName: "translationX", values: [5000, 0], duration: 800 }}>
          <FlatList key={"flatlistexample"} data={items} renderItem={({ item }) => this.renderFlatListItem(item)} ItemSeparatorComponent={this.renderSeparator} style={{ backgroundColor: "#ededed" }} keyExtractor={(item, index) => index} />
        </Spruce>
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
