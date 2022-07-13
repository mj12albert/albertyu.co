import { ThemeUICSSObject } from 'theme-ui';
import Text from 'components/Text';

type Props = {
  sx?: ThemeUICSSObject;
  children: React.ReactNode;
};

export const TextItem = ({ children, ...rest }: Props) => (
  <List.Item
    sx={{
      mb: 1,
    }}
    {...rest}
  >
    <Text sx={{ variant: 'typography.text.body', m: 0, color: 'inherit' }}>
      {children}
    </Text>
  </List.Item>
);

export const ContactItem = ({ children, ...rest }: Props) => (
  <li
    sx={{
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center',
      fontSize: 1,
      mb: 1,
    }}
    {...rest}
  >
    {children}
  </li>
);

const Item = ({ children, ...rest }: Props) => {
  return (
    <li
      sx={{
        pl: 3,
        mb: 1,
      }}
      {...rest}
    >
      {children}
    </li>
  );
};

const List = ({ children, ...rest }: Props) => {
  return (
    <ul
      sx={{
        listStyleType: '"–"',
        px: 4,
      }}
      {...rest}
    >
      {children}
    </ul>
  );
};

List.Item = Item;

export default List;
