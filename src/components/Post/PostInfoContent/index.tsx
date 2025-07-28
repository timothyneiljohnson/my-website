import parse from 'html-react-parser';
import { PostInfoDate, PostInfoWrapper } from './styles';

interface PostInfoProps {
  title: string;
  date: string;
}

export const PostInfo = ({ title, date }: PostInfoProps) => {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));

  return (
    <PostInfoWrapper>
      <div>{parse(title)}</div>
      <PostInfoDate>
        {formattedDate}
      </PostInfoDate>
    </PostInfoWrapper>
  );
};

PostInfo.displayName = 'PostInfo';
