jest.mock('react-native-voice', () => {
  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL: jest.fn(),
  };
});
