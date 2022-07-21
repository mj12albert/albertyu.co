import { useColorMode, SxProp } from 'theme-ui';
import SunIcon from 'assets/svg/sun.svg';
import MoonIcon from 'assets/svg/moon.svg';

const ColorModeButton = (props: SxProp) => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <button
      type="button"
      onClick={() => {
        const nextColorMode = {
          light: 'dark',
          dark: 'light',
        }[colorMode];

        if (nextColorMode) setColorMode(nextColorMode);
      }}
      sx={{
        appearance: 'none',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: 34,
        height: 34,
        outline: 0,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'border.default',
        borderRadius: 10,
        bg: 'transparent',
        p: 0,
        ml: [-1, 5, 6],
        cursor: 'pointer',
        color: 'accent.fg',
        '&:is(:hover, :active, :focus-visible)': {
          color: 'accent.active',
          borderColor: 'border.muted',
          bg: 'canvas.muted',
        },
        '& svg': {
          width: 20,
          height: 20,
        },
      }}
      {...props}
    >
      {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ColorModeButton;
