import { VStack } from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import PressableCard from '../components/PressableCard';
import { colorPalette } from '../utils/colorPalette';

export default function HomeScreen({ navigation }): JSX.Element {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
      <VStack space={4} alignItems="center">
        <PressableCard
          onPress={() => navigation.navigate('common')}
          colors={[colorPalette[10], colorPalette[11]]}>
          Common Haptic Effects
        </PressableCard>
        <PressableCard
          onPress={() => navigation.navigate('ios')}
          colors={[colorPalette[12], colorPalette[13]]}>
          IOS Haptic Effects
        </PressableCard>
        <PressableCard
          onPress={() => navigation.navigate('android')}
          colors={[colorPalette[14], colorPalette[15]]}>
          Android Haptic Effects
        </PressableCard>
      </VStack>
    </ScrollView>
  );
}
