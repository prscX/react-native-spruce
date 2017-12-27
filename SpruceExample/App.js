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

  componentDidMount () {
    setTimeout(() => {
      let spruceBuilder = new Spruce.SpruceBuilder(this.ref);

      let defaultSort = new CorneredSort(100);
      let defaultAnimations = DefaultAnimations.shrinkAnimator(800);

      spruceBuilder.sortWith(defaultSort)
      spruceBuilder.animateWith(defaultAnimations);
      
      spruceBuilder.start({ propertyName: "translationX", values: [ 5000, 0 ], duration: 800 });
    }, 100);
  }

  renderFlatListItem(item) {
      return <View 
      ref={ref => {this.refItem = ref}}
      key={"parentView" + item.topicCat} style={{ flex: 1, height: 100, backgroundColor: "#ffffff", alignItems: "center", margin: 5 }}
      >
          <Placeholder.ImageContent key={"placeholder" + item.topicCat} size={60} lineNumber={4} lineSpacing={5} lastLineWidth="30%" onReady={false} color={"#c7e3f2"}>
            <Text key={"text" + item.topicCat}>
              Placeholder has finished :D
            </Text>
          </Placeholder.ImageContent>
        </View>;
  }

  renderSeparator () {
    return <View style={{ flex: 1, height: 2, backgroundColor: "#ededed" }} />;
  }

  render() {
    // return <View style={styles.container} ref={ref => {
    //       this.ref = ref;
    //     }}>
    //     <Text style={styles.welcome}>Welcome to React Native!</Text>
    //     <Text style={styles.instructions}>To get started, edit App.js</Text>
    //     <Text style={styles.instructions}>{instructions}</Text>
    //   </View>;
    return <View style={{ flex: 1, backgroundColor: "#ededed" }}>
        <FlatList key={"flatlistexample"} data={items} renderItem={({ item }) => this.renderFlatListItem(item)} ref={ref => {
            this.ref = ref;
          }} ItemSeparatorComponent={this.renderSeparator} style={{ backgroundColor: "#ededed" }} keyExtractor={(item, index) => index} />
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
