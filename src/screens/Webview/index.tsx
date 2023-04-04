import React from 'react';
import WebView from 'react-native-webview';
import { trigger } from 'react-native-haptic-feedback';

export default function WebviewScreen() {
  // optional
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const onMessage = event => {
    const { type, text } = JSON.parse(event.nativeEvent.data);
    console.log('On Message', type);

    trigger(type, options);
  };

  return (
    <WebView
      source={{ uri: 'http://localhost:3000' }}
      style={{ flex: 1 }}
      onMessage={onMessage}
    />
  );
}
