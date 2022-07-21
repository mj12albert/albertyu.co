import Link from 'next/link';

const Navigation = () => {
  return (
    <nav
      sx={{
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
      }}
    >
      {['Work', 'About', 'Resume'].map((key) => {
        return (
          <Link href={`/${key.toLowerCase()}`} key={key} passHref>
            <a
              sx={{
                display: 'flex',
                flexFlow: 'row nowrap',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: [44, null, 'auto'],
                px: 1,
                py: 2,
                color: 'fg.subtle',
                fontSize: 1,
                textDecoration: 'none',
                '&:is(:hover, :focus)': {
                  textDecoration: 'underline',
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
    </nav>
  );
};

export default Navigation;
