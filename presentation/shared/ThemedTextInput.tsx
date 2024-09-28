import { TextInput, type TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  className?: string;
}

const ThemedTextInput = ({ className, ...rest }: Props) => {
  return (
    <TextInput
      className="px-2 py-4 text-black dark:text-white"
      placeholderTextColor="gray"
      {...rest}
    />
  );
};

export default ThemedTextInput;
