import { ThemeUICSSObject } from 'theme-ui';

type Props = {
  sx?: ThemeUICSSObject;
  children: React.ReactNode;
};

const Item = ({ sx = {}, children, ...rest }: Props) => {
  return (
    <li
      sx={{
        pl: 3,
        mb: 1,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </li>
  );
};

const List = ({ sx = {}, children, ...rest }: Props) => {
  return (
    <ul
      sx={{
        listStyleType: '"–"',
        px: 4,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </ul>
  );
};

List.Item = Item;

export default List;
