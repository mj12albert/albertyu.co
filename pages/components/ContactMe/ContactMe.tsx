import { ThemeUICSSObject } from 'theme-ui';
import ExternalLink from 'components/ExternalLink';
import List from 'components/List';

type ItemProps = {
  sx?: ThemeUICSSObject;
  children: React.ReactNode;
};

const Item = ({ sx = {}, children, ...rest }: ItemProps) => {
  return (
    <li
      sx={{
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        fontSize: 1,
        mb: '1px',
        ...sx,
      }}
      {...rest}
    >
      {children}
    </li>
  );
};

const ContactMe = ({ sx = {}, ...rest }: { sx?: ThemeUICSSObject }) => {
  return (
    <section sx={{ ...sx }} {...rest}>
      <h3
        sx={{
          variant: 'typography.headings.h4',
          mt: 0,
          mb: 3,
        }}
      >
        Contact
      </h3>

      <List
        sx={{
          m: 0,
          px: 0,
        }}
      >
        <Item>
          <ExternalLink id="mailto" href="#">
            Email
          </ExternalLink>
        </Item>

        <Item>
          <ExternalLink href="https://github.com/mj12albert">
            Github
          </ExternalLink>
        </Item>

        <Item>
          <ExternalLink
            href="https://www.linkedin.com/in/mj12albert/"
            rel="noopener noreferrer nofollow"
          >
            LinkedIn
          </ExternalLink>
        </Item>
      </List>
    </section>
  );
};

export default ContactMe;
