//import liraries
import React, { useRef,useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import ViewShot from 'react-native-view-shot';

// create a component
const TakeScreenshot = () => {
  const ref=useRef();
  const [imageurl, setimageurl] = useState('');
  return (
    <View style={styles.container}>
   <ViewShot 
   ref={ref}
   style={{width:'80%',height:'50%'
  }}>
    <View 
    style={{
      width:'100%',
      height:'100%',
      backgroundColor:'blue',
      }}></View>

   </ViewShot>
   <TouchableOpacity
   style={{
    borderWidth:1.5,
    borderRadius:10,
    padding:10,
    marginTop:50,
   }} onPress={()=>{
    ref.current.capture().then(uri => {
      console.log("Take A ScreenShot ", uri);
      setimageurl(uri);
    });
   }}>
<Text>Take Screenshot</Text>
   </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default TakeScreenshot;
