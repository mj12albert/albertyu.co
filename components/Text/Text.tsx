import { ThemeUICSSObject } from 'theme-ui';

type Props = {
  sx?: ThemeUICSSObject;
  children: React.ReactNode;
};

const Text = ({ sx = {}, children, ...rest }: Props) => {
  return (
    <p
      sx={{
        variant: 'typography.text',
        ...sx,
      }}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Text;
