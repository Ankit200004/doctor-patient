// import React, { useEffect } from 'react';
// import { View, BackHandler, Platform } from 'react-native';
// import PipAndroid from 'react-native-pip-android';
// import {
//   ZegoUIKitPrebuiltCall,
//   ONE_ON_ONE_VIDEO_CALL_CONFIG,
// } from '@zegocloud/zego-uikit-prebuilt-call-rn';

// export default function CallScreen({ route, navigation }: any) {
//   const { userId, userName, callId } = route.params;

//   useEffect(() => {
//     const backHandler = BackHandler.addEventListener(
//       'hardwareBackPress',
//       () => {
//         if (Platform.OS === 'android') {
//           PipAndroid.enterPictureInPicture(); // ✅ Correct API
//           return true;
//         }
//         return false;
//       },
//     );
//     return () => backHandler.remove();
//   }, []);

//   return (
//     <View style={{ flex: 1 }}>
//       <ZegoUIKitPrebuiltCall
//         appID={1139217362}
//         appSign="YOUR_REAL_APP_SIGN"
//         userID={userId}
//         userName={userName}
//         callID={callId}
//         config={{
//           ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
//           turnOnCameraWhenJoining: false,
//         }}
//       />
//     </View>
//   );
// }

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CallScreen = () => {
  return (
    <View>
      <Text>CallScreen</Text>
    </View>
  );
};

export default CallScreen;

const styles = StyleSheet.create({});
