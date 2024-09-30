import { Text } from 'react-native';

import ThemedView from '@/presentation/shared/ThemedView';
import { Link, router } from 'expo-router';
import ThemedButton from '@/presentation/shared/ThemedButton';

const ModalScreen = () => {
  return (
    <ThemedView>
      <Link asChild href="/modal/modal-window" className="mx-4">
        <Text className="my-2 text-xl text-ligh-text dark:text-dark-text">
          Open Modal
        </Text>
      </Link>

      <ThemedButton
        onPress={() => router.push('/modal/modal-window')}
        className="mx-4"
      >
        Open Modal
      </ThemedButton>
    </ThemedView>
  );
};

export default ModalScreen;
