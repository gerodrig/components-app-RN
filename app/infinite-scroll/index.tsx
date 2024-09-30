import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';


import { useThemeColor } from '@/hooks/useThemeColor';
import ListItem from '@/presentation/shared/ListItem';
import ThemedView from '@/presentation/shared/ThemedView';
import { FlatList } from 'react-native-gesture-handler';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);
  const primaryColor = useThemeColor({}, 'primary');

  const loadMore = () => {
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <ThemedView>
      <FlatList 
        data={numbers}
        keyExtractor={(item) => item.toString()}
        renderItem={({item}) => <ListItem number={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        ListFooterComponent={() => (
          <View style={{height: 150, justifyContent: 'center'}}>
            <ActivityIndicator size={40} color={primaryColor} />
          </View>
        )}  
      />
    </ThemedView>
  );
};

export default InfiniteScrollScreen;
