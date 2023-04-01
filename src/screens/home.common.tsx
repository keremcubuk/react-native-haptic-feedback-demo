import { VStack } from 'native-base';
import React from 'react';
import { trigger } from 'react-native-haptic-feedback';
import { ScrollView } from 'react-native-gesture-handler';
import PressableCard from '../components/PressableCard';

export default function Common() {
  // optional
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const hapticTypes = [
    { type: 'impactLight', text: 'Impact Light' },
    { type: 'impactMedium', text: 'impactMedium' },
    { type: 'impactHeavy', text: 'impactHeavy' },
    { type: 'rigid', text: 'rigid' },
    { type: 'soft', text: 'soft' },
    { type: 'notificationSuccess', text: 'notificationSuccess' },
    { type: 'notificationWarning', text: 'notificationWarning' },
    { type: 'notificationError', text: 'notificationError' },
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
      <VStack space={4} alignItems="center">
        {hapticTypes.map((item, index) => {
          return (
            <PressableCard
              key={index}
              onPress={() => trigger(item.type, options)}>
              {item.text}
            </PressableCard>
          );
        })}
      </VStack>
    </ScrollView>
  );
}
