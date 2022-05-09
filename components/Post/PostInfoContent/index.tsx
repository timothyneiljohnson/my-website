import { PostInfoDate, PostInfoWrapper } from './styles';

interface PostInfoProps {
  title: string;
  date: string;
}

export const PostInfo = ({ title, date }: PostInfoProps) => {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));

  return (
    <PostInfoWrapper>
      <div>{title}</div>
      <PostInfoDate>
        {formattedDate}
      </PostInfoDate>
    </PostInfoWrapper>
  );
};

PostInfo.displayName = 'PostInfo';
