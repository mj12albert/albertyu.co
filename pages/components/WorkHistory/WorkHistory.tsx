import { ThemeUICSSObject } from 'theme-ui';
import List from 'components/List';
import Text from 'components/Text';
import ExternalLink from 'components/ExternalLink';

type CommonProps = {
  sx?: ThemeUICSSObject;
  children: React.ReactNode;
};

const Title = ({ sx, children, ...rest }: CommonProps) => (
  <strong
    sx={{
      color: 'gray.8',
      ...sx,
    }}
    {...rest}
  >
    {children}
  </strong>
);

const Item = ({ sx = {}, children, ...rest }: CommonProps) => {
  return (
    <List.Item
      sx={{
        mb: 3,
        ...sx,
      }}
      {...rest}
    >
      <Text sx={{ variant: 'typography.text.body', m: 0, color: 'gray.5' }}>
        {children}
      </Text>
    </List.Item>
  );
};

const Link = ({
  sx = {},
  children,
  ...rest
}: React.ComponentProps<typeof ExternalLink>) => (
  <ExternalLink
    sx={{
      color: 'gray.5',
      textDecoration: 'none',
      '&:hover, &:focus': {
        textDecoration: 'underline',
      },
      ...sx,
    }}
    rel="noopener noreferrer nofollow"
    {...rest}
  >
    {children}
  </ExternalLink>
);

const WorkHistory = ({ sx, ...rest }: { sx?: ThemeUICSSObject }) => (
  <List sx={sx} {...rest}>
    <Item>
      <Title>Product Designer</Title>&nbsp;&middot;&nbsp;
      <Link href="https://www.rapyd.net">Rapyd</Link>
      <br />
      2022–Now
    </Item>
    <Item>
      <Title>Principal Software Engineer (Front-End)</Title>
      &nbsp;&middot;&nbsp;<Link href="https://www.neatcommerce.com">Neat</Link>
      <br />
      2020–2022
    </Item>
    <Item>
      <Title>Software Engineer (Front-End) / Team Lead</Title>
      &nbsp;&middot;&nbsp;<Link href="https://www.neatcommerce.com">Neat</Link>
      <br />
      2017–2020
    </Item>
    <Item>
      <Title>Software Engineer</Title>&nbsp;&middot;&nbsp;
      <Link href="https://www.hellotoby.com/en">HelloToby</Link>
      <br />
      2016–2017
    </Item>
    <Item>
      <Title>Web Designer / Developer</Title>&nbsp;&middot;&nbsp;Self-employed
      <br />
      2011–2016
    </Item>
  </List>
);

export default WorkHistory;
