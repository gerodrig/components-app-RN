import React from 'react';
import { Platform } from 'react-native';

import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import ThemedView from '@/presentation/shared/ThemedView';
import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedText from '@/presentation/shared/ThemedText';

const ModalScreen = () => {
  return (
    <ThemedView className="items-center justify-center flex-1">
      <ThemedText>Hello, I am Modal 2, Another Modal</ThemedText>

      <ThemedButton onPress={() => router.dismiss()}>Close Modal</ThemedButton>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </ThemedView>
  );
};

export default ModalScreen;
