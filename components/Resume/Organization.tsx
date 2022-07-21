import LinkIcon from 'assets/svg/link.svg';
import Flex from 'components/Flex';
import ExternalLink from 'components/ExternalLink';

type Props = {
  href?: string;
  children: React.ReactNode;
};

const Header = ({ children, href, ...rest }: Props) => {
  return (
    <Flex
      alignItems="center"
      sx={{
        mb: 5,
      }}
      {...rest}
    >
      <h3
        sx={{
          variant: 'typography.headings.h3',
          fontSize: [2, 3],
        }}
      >
        {children}
      </h3>

      {href && (
        <ExternalLink
          href={href}
          sx={{
            width: 20,
            height: 20,
            ml: 2,
            transform: 'rotate(-45deg)',
            '& svg': {
              width: 20,
              height: 20,
            },
            '@media print': {
              display: 'none',
            },
          }}
        >
          <LinkIcon />
        </ExternalLink>
      )}
    </Flex>
  );
};

const Organization = ({ children, ...rest }: { children: React.ReactNode }) => (
  <li sx={{ mb: 8 }} {...rest}>
    {children}
  </li>
);

Organization.Header = Header;

export default Organization;
