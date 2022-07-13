import { ThemeUICSSObject } from 'theme-ui';

const Divider = ({ sx, ...rest }: { sx?: ThemeUICSSObject }) => (
  <hr
    sx={{
      border: 0,
      backgroundColor: 'border.default',
      height: 2,
      width: '100%',
      m: 0,
      ...sx,
    }}
    {...rest}
  />
);

export default Divider;
