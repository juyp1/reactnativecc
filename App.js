/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Platform,
} from 'react-native';
import { Button,Tip } from 'beeshell';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


 
const state = {
  str: 'Hello world'
}
const { str } = state
handletip=()=>{
  Tip.show('hello美团插件', 2000, 'center')
}
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.mainSafeView}>
        {/* <View>
          <Text>测试测试我是react native</Text>
        </View>
        <View>
          <Text>{str}</Text>
        </View> */}
        <View >
          <Text>高度 {Dimensions.get('window').height}</Text>
          <Text>宽度 {Dimensions.get('window').width}</Text>
          <Text>宽度 {Dimensions.get('window').scale}</Text>
          <Text>平台 {Platform.OS}</Text>
          <Button type="primary" size="md" onPress={handletip}>首选项 primary</Button>
        </View>
        {/* <View style={styles.boxContainer}>
          <View style={styles.boxone}>
            <Text>hello</Text>
          </View>
          <View style={styles.boxtwo}>
            <Text>hello</Text>
          </View>
        </View> */}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainSafeView: {
    display: 'flex',
    
     flex: 1, 
     flexDirection: "row", 
     alignItems: "center", 
     justifyContent: "center"
  },
  boxContainer: {
    display: 'flex',
    backgroundColor: 'red',
    justifyContent: "center",
    flexDirection: 'row'

  },
  boxone: { width: 90, height: 90, backgroundColor: 'green' },
  boxtwo: { width: 90, height: 90, backgroundColor: 'blue' }
});

export default App;
