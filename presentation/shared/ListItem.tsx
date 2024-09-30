import FadeInImage from '../images/FadeInImage';

interface Props {
  number: number;
}

const ListItem = ({ number }: Props) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{ height: 400, width: '100%' }}
    >
      {
        // <Image
        //   source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
        //   style={{
        //     height: 400,
        //     width: '100%',
        //   }}
        // />
      }
    </FadeInImage>
  );
};

export default ListItem;
