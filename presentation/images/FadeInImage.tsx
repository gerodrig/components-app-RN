import { useState } from 'react';
import { View, StyleProp, ImageStyle, ActivityIndicator } from 'react-native';
import Animated from 'react-native-reanimated';

import { useAnimation } from '@/hooks/useAnimation';

interface Props {
  uri: string;
  style: StyleProp<ImageStyle>;
}

const FadeInImage = ({ uri, style }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const { animatedOpacity, fadeIn } = useAnimation();

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {isLoading && (
        <ActivityIndicator
          style={{ position: 'absolute' }}
          color="#5856D6"
          size={30}
        />
      )}
      <Animated.Image
        source={{ uri }}
        style={[style, { opacity: animatedOpacity }]}
        onLoadEnd={() => {
          fadeIn({});
          setIsLoading(false);
        }}
      />
    </View>
  );
};

export default FadeInImage;
