import { View, Platform, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';

const isIOS = Platform.OS === 'ios';

const TextInputsScreen = () => {
  const [form, seForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  return (
    <KeyboardAvoidingView behavior={isIOS ? 'height' : undefined}>
      <ScrollView>
        <ThemedView margin>
          <ThemedCard className="mb-5">
            <ThemedTextInput
              placeholder="Full Name"
              autoCapitalize={'words'}
              autoCorrect={false}
              onChangeText={(text) => seForm({ ...form, name: text })}
            />
            <ThemedTextInput
              placeholder="Email"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => seForm({ ...form, email: text })}
            />
            <ThemedTextInput
              placeholder="Phone"
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={(text) => seForm({ ...form, phone: text })}
            />
            <ThemedTextInput
              placeholder="Password"
              secureTextEntry
              onChangeText={(text) => seForm({ ...form, password: text })}
            />
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard>
            <ThemedTextInput
              placeholder="Phone"
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={(text) => seForm({ ...form, phone: text })}
            />
          </ThemedCard>
        </ThemedView>

        {isIOS && <View style={{ marginBottom: 100 }} />}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TextInputsScreen;
