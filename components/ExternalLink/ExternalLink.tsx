import { ThemeUICSSObject } from 'theme-ui';

type Props = {
  href: string;
  sx?: ThemeUICSSObject;
  rel?: string;
  id?: string | undefined;
  children: React.ReactNode;
};

const ExternalLink = ({ href, children, ...rest }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        variant: 'typography.text.body',
        color: 'accent.fg',
        fontSize: 'inherit',
        '&:hover, &:focus': {
          color: 'accent.active',
        },
      }}
      {...rest}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
