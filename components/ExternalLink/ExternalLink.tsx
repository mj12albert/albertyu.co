import { ThemeUICSSObject } from 'theme-ui';

type Props = {
  href: string;
  sx?: ThemeUICSSObject;
  rel?: string;
  id?: string | undefined;
  children: React.ReactNode;
};

const ExternalLink = ({ href, sx = {}, children, ...rest }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        variant: 'typography.text',
        color: 'blue.6',
        fontSize: 'inherit',
        ...sx,
      }}
      {...rest}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
