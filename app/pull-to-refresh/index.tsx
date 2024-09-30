import { useState } from 'react';
import { RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { useThemeColor } from '@/hooks/useThemeColor';
import ThemedView from '@/presentation/shared/ThemedView';
import ThemedText from '@/presentation/shared/ThemedText';

const PullToRefreshScreen = () => {
  const primaryColor = useThemeColor({}, 'primary');
  const backgroundColor = useThemeColor({
    dark: 'black',
    light: 'white',
  }, 'background');

  const [isRefreshing, setIsRefreshing] = useState(false)

  const onRefresh = async() => {
    setIsRefreshing(true);

    // Simulate a fetch
    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl 
        refreshing={isRefreshing}
        onRefresh={onRefresh}
        colors={[primaryColor, 'red', 'orange', 'green']}
        progressBackgroundColor={backgroundColor}
        />
      }
    >
      <ThemedView margin>
        <ThemedText>
          Pull down to refresh
        </ThemedText>
      </ThemedView>

    </ScrollView>
  );
};

export default PullToRefreshScreen;
