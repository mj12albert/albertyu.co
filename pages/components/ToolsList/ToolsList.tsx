import { ThemeUICSSObject } from 'theme-ui';
import List from 'components/List';
import Text from 'components/Text';
import ExternalLink from 'components/ExternalLink';

type ItemProps = {
  sx?: ThemeUICSSObject;
  children: React.ReactNode;
};

const Item = ({ children, ...rest }: ItemProps) => {
  return (
    <List.Item
      sx={{
        mb: 1,
      }}
      {...rest}
    >
      <Text sx={{ variant: 'typography.text.body', m: 0 }}>{children}</Text>
    </List.Item>
  );
};

const ToolsList = (props: { sx?: ThemeUICSSObject }) => (
  <List {...props}>
    <Item>React / Node.js</Item>
    <Item>JavaScript / TypeScript</Item>
    <Item>styled-components / Emotion / Tailwind / Sass</Item>
    <Item>
      <ExternalLink href="https://konigi.com/tools/graph-paper/">
        Konigi graph paper
      </ExternalLink>{' '}
      &amp;{' '}
      <ExternalLink
        href="https://artline.com.au/products/fineliners/fineline-pens/artline-220/"
        rel="noopener noreferrer nofollow"
      >
        Artline 220
      </ExternalLink>
    </Item>
    <Item>Sublime Text / Figma / Miro</Item>
    <Item>git / GitHub / Docker</Item>
    <Item>Slack / Jira / Confluence</Item>
  </List>
);

export default ToolsList;
