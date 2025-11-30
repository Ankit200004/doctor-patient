import React from 'react';
import { View } from 'react-native';
import { ZegoUIKitPrebuiltCall } from '@zegocloud/zego-uikit-prebuilt-call-rn';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'CallScreen'>;

export default function CallScreen({ route }: Props) {
  const { userId, userName, callId } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <ZegoUIKitPrebuiltCall
        appID={1139217362} // your AppID
        appSign="YOUR_APP_SIGN"
        userID={userId}
        userName={userName}
        callID={callId}
        config={{
          turnOnCameraWhenJoining: true,
          turnOnMicrophoneWhenJoining: true,
        }}
      />
    </View>
  );
}
