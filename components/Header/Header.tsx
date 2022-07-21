import ColorModeButton from './ColorModeButton';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header
      sx={{
        height: [64, null, 60],
        display: 'flex',
        flexDirection: ['row', 'row-reverse'],
        flexWrap: 'nowrap',
        justifyContent: ['space-between', 'flex-start'],
        alignItems: 'center',
        gridColumn: [null, null, '1/span 12'],
        px: [5, 6],
        '@media print': {
          display: 'none',
        },
      }}
    >
      <ColorModeButton />

      <Navigation />

      <div
        sx={{
          display: ['none', 'flex'],
          mr: 'auto',
          textTransform: 'uppercase',
          fontSize: 1,
          fontWeight: 600,
        }}
      >
        Albert Yu
      </div>
    </header>
  );
};

export default Header;
