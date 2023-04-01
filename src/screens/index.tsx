import { VStack } from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import PressableCard from '../components/PressableCard';

export default function HomeScreen({ navigation }): JSX.Element {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
      <VStack space={4} alignItems="center">
        <PressableCard onPress={() => navigation.navigate('common')}>
          Common Haptic Effects
        </PressableCard>
        <PressableCard onPress={() => navigation.navigate('ios')}>
          IOS Haptic Effects
        </PressableCard>
        <PressableCard onPress={() => navigation.navigate('android')}>
          Android Haptic Effects
        </PressableCard>
      </VStack>
    </ScrollView>
  );
}
