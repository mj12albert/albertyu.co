import Link from 'next/link';
import Flex from 'components/Flex';

const Navigation = ({ activePage, ...rest }: { activePage: string | null }) => {
  return (
    <Flex as="nav" alignItems="center" {...rest}>
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
                  color: 'fg.default',
                },
                '&:focus-visible': {
                  outlineWidth: 2,
                  outlineColor: 'fg.default',
                  outlineStyle: 'solid',
                  outlineOffset: '8px',
                  borderRadius: 1,
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
