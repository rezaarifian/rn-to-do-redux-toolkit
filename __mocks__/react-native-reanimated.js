import { View } from 'react-native';

export const Easing = {
  // Add necessary easing mocks
  ease: jest.fn(),
};

export default {
  // Add mock implementations for the rest of the methods
  View,
  useSharedValue: jest.fn(() => ({ value: 0 })),
  useAnimatedStyle: jest.fn(() => ({})),
  withTiming: jest.fn((value) => value),
  withRepeat: jest.fn((animation) => animation),
  withSequence: jest.fn((...animations) => animations),
};