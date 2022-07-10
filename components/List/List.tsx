import { ThemeUICSSObject } from 'theme-ui';

type Props = {
  sx?: ThemeUICSSObject;
  children: React.ReactNode;
};

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
