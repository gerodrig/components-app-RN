import { View, Text, TextProps } from 'react-native';

type Texttype = 'normal' | 'h1' | 'h2' | 'semi-bold' | 'link';

/*
font-normal
text-3xl
text-xl

font-bold
font-normal underline
*/

interface Props extends TextProps {
  className?: string;
  type?: Texttype;
}

const ThemedText = ({ className, type, ...rest }: Props) => {
  return (
    <Text
      className={[
        'text-ligh-text dark:text-dark-text',
        type === 'normal' ? 'font-normal' : undefined,
        type === 'h1' ? 'text-3xl' : undefined,
        type === 'h2' ? 'text-xl' : undefined,
        type === 'semi-bold' ? 'font-bold' : undefined,
        type === 'link' ? 'font-normal underline' : undefined,
        className,
      ].join(' ')}
      {...rest}
    />
  );
};

export default ThemedText;
