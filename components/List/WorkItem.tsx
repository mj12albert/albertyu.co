import { ThemeUICSSObject } from 'theme-ui';
import { TextItem } from 'components/List';
import ExternalLink from 'components/ExternalLink';

type Props = {
  title: string;
  org: string;
  href?: string;
  period: string;
};

type CommonProps = {
  sx?: ThemeUICSSObject;
  children: React.ReactNode;
};

const Title = ({ children, ...rest }: CommonProps) => (
  <strong
    sx={{
      color: 'fg.default',
    }}
    {...rest}
  >
    {children}
  </strong>
);

const Item = ({ children, ...rest }: CommonProps) => {
  return (
    <TextItem
      sx={{
        mb: 3,
        color: 'fg.subtle',
      }}
      {...rest}
    >
      {children}
    </TextItem>
  );
};

const Link = ({
  children,
  ...rest
}: React.ComponentProps<typeof ExternalLink>) => (
  <ExternalLink
    sx={{
      color: 'inherit',
      textDecoration: 'none',
      '&:hover, &:focus': {
        textDecoration: 'underline',
        color: 'inherit',
      },
    }}
    rel="noopener noreferrer nofollow"
    {...rest}
  >
    {children}
  </ExternalLink>
);

const WorkItem = ({ title, org, href, period }: Props) => {
  return (
    <Item>
      <Title>{title}</Title>&nbsp;&middot;&nbsp;
      {href ? <Link href={href}>{org}</Link> : org}
      <br />
      {period}
    </Item>
  );
};

export default WorkItem;
