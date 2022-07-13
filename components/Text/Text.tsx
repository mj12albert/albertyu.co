import { ThemeUICSSObject } from 'theme-ui';

type Props = {
  sx?: ThemeUICSSObject;
  children: React.ReactNode;
};

const Text = ({ children, ...rest }: Props) => {
  return (
    <p
      sx={{
        variant: 'typography.text.body',
        mt: 0,
        mb: 5,
      }}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Text;
