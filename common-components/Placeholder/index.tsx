import { useStorageDarkMode } from '../../components/storage-dark-mode-context';
import { StyledPlaceholder } from './styles';

interface PlaceholderProps {
  className?: string;
  height?: number;
  width?: number;
  topMargin?: number;
}
export const Placeholder = ({
  className,
  height,
  width,
  topMargin,
}: PlaceholderProps) => {
  const { isDarkMode } = useStorageDarkMode();
  return (
    <StyledPlaceholder
      className={className}
      height={height}
      isDarkMode={isDarkMode}
      topMargin={topMargin}
      width={width}
    />
  );
};

Placeholder.displayName = 'Placeholder';
