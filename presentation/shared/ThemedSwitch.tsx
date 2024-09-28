import { useThemeColor } from '@/hooks/useThemeColor';
import { Platform, Pressable, View } from 'react-native';

import ThemedText from './ThemedText';
import { Switch } from 'react-native-gesture-handler';

interface Props {
  text?: string;
  value: boolean;
  className?: string;

  //? Methods
  onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === 'android';

const ThemedSwitch = ({ text, value, className, onValueChange }: Props) => {
  const switchActiveColor = useThemeColor({}, 'primary');

  return (
    <Pressable
      className={`flex flex-row mx-2 items-center justify-between active:opacity-80 ${className}`}
      onPress={() => onValueChange(!value)}
    >
        {text ? <ThemedText type='h2'>{text}</ThemedText> : <View />}
      <Switch 
        value={value}
        onValueChange={onValueChange}
        thumbColor={isAndroid ? switchActiveColor : undefined}
        // ios_backgroundColor={value ? 'green' : 'red'}
        trackColor={{ false: '#767577', true: switchActiveColor}}
      />
    </Pressable>
  );
};

export default ThemedSwitch;
