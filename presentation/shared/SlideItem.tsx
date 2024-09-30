import {
  ImageSourcePropType,
  useWindowDimensions,
  Image,
} from 'react-native';

import ThemedView from './ThemedView';
import ThemedText from './ThemedText';

export interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

interface SlideItemProps {
  item: Slide;
}

const SlideItem = ({ item }: SlideItemProps) => {
  const { width } = useWindowDimensions();
  const { title, desc, img } = item;

  return (
    <ThemedView
      className="justify-center flex-1 p-10 bg-red-500 rounded"
      style={{ width }}
    >
      <Image
        source={img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: 'center',
          alignSelf: 'center',
        }}
      />
      <ThemedText
        className="text-light-primary dark:text-dark-primary"
        type="h1"
      >
        {title}
      </ThemedText>
      <ThemedText className="m-10">{desc}</ThemedText>
    </ThemedView>
  );
};

export default SlideItem;
