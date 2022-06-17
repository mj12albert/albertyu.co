import { ThemeUICSSObject } from 'theme-ui'
import ExternalLink from 'components/ExternalLink';

type ItemProps = {
  sx?: ThemeUICSSObject,
  children: React.ReactNode,
}

const Item = ({ sx = {}, children, ...rest }: ItemProps) => {
  return (
    <li sx={{
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center',
      fontSize: 1,
      mb: '1px',
      ...sx,
    }} {...rest}>
      {children}
    </li>
  )
}

const ContactMe = ({ sx = {}, ...rest }: { sx?: ThemeUICSSObject }) => {
  return (
    <section sx={{ mt: 6, mb: 8, px: 5, ...sx }}>
      <h3 sx={{
        variant: 'typography.headings.h4',
        mt: 0,
        mb: 3,
      }}>
        Contact
      </h3>

      <ul
        sx={{
          m: 0,
          px: 0,
        }}
        {...rest}
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
           <ExternalLink href="https://www.linkedin.com/in/mj12albert/" rel="noopener noreferrer nofollow">
              LinkedIn
            </ExternalLink>
         </Item>
      </ul>
    </section>
   )
}

export default ContactMe;
