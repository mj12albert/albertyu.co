import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Flex from 'components/Flex';
import ColorModeButton from './ColorModeButton';
import Navigation from './Navigation';

const Header = () => {
  const { pathname, isReady } = useRouter();

  const [activePage, setActive] = useState(pathname.replace(/\//g, ''));

  useEffect(() => {
    if (isReady) {
      setActive(pathname.replace(/\//g, ''));
    }
  }, [isReady, pathname]);

  const isActive = activePage === '';

  return (
    <Flex
      as="header"
      flexDirection={['row', 'row-reverse']}
      justifyContent={['space-between', 'flex-start']}
      alignItems="center"
      sx={{
        height: [64, null, 60],
        gridColumn: [null, null, '1/span 12'],
        px: [5, 6],
        '@media print': {
          display: 'none',
        },
      }}
    >
      <ColorModeButton />

      <Navigation activePage={activePage} />

      <Link href="/" passHref>
        <a
          sx={{
            display: ['none', 'flex'],
            mr: 'auto',
            textTransform: 'uppercase',
            fontSize: 1,
            fontWeight: 600,
            color: 'fg.default',
            textDecoration: 'none',
            cursor: isActive && 'default',
            '&:is(:hover, :active)': {
              color: !isActive && 'accent.fg',
            },
            '&:focus-visible': {
              outlineWidth: 2,
              outlineColor: 'fg.default',
              outlineStyle: 'solid',
              outlineOffset: '8px',
              borderRadius: 1,
              color: 'fg.default',
            },
          }}
        >
          Albert Yu
        </a>
      </Link>
    </Flex>
  );
};

export default Header;
