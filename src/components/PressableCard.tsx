import { Box, Pressable } from 'native-base';
import React from 'react';

const createHex = () => {
  let hexCode1 = '';
  let hexValues1 = '0123456789abcdef';

  for (var i = 0; i < 6; i++) {
    hexCode1 += hexValues1.charAt(
      Math.floor(Math.random() * hexValues1.length),
    );
  }

  return '#' + String(hexCode1);
};

export default function PressableCard(props: any) {
  return (
    <Pressable onPress={props.onPress}>
      <Box
        bg={{
          linearGradient: {
            colors: props.colors ? props.colors : [createHex(), createHex()],
            start: [0, 0],
            end: [1, 0],
          },
        }}
        p="8"
        rounded="xl"
        _text={{
          fontSize: 'md',
          fontWeight: 'medium',
          color: 'warmGray.50',
          textAlign: 'center',
        }}>
        {props.children}
      </Box>
    </Pressable>
  );
}
