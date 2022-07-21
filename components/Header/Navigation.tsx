import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Flex from 'components/Flex';

const Navigation = () => {
  const { pathname, isReady } = useRouter();

  const [activePage, setActive] = useState(pathname.replace(/\//g, ''));

  useEffect(() => {
    if (isReady) {
      setActive(pathname.replace(/\//g, ''));
    }
  }, [isReady, pathname]);

  return (
    <Flex as="nav" alignItems="center">
      {[/*'work', 'about',*/ 'resume'].map((key) => {
        const isActive = key === activePage;
        return (
          <Link href={`/${key}`} key={key} passHref>
            <a
              sx={{
                display: 'flex',
                flexFlow: 'row nowrap',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: [44, null, 'auto'],
                px: 1,
                py: 2,
                color: isActive ? 'fg.default' : 'fg.subtle',
                fontSize: 1,
                textDecoration: 'none',
                textTransform: 'capitalize',
                cursor: isActive && 'default',
                '&:is(:hover, :active)': {
                  textDecoration: isActive ? 'none' : 'underline',
                },
                '&:is(:hover, :active, :focus-visible)': {
                  color: 'fg.default',
                },
                '&:not(:last-of-type)': {
                  mr: [4, null, 6],
                },
              }}
            >
              {key}
            </a>
          </Link>
        );
      })}
    </Flex>
  );
};

export default Navigation;
