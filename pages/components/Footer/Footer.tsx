import { ThemeUICSSObject } from 'theme-ui'

const SmallText = ({ children }: { children: React.ReactNode }) => (
  <code sx={{
    fontSize: 0,
    color: 'gray.4',
  }}>
    {children}
   </code>
)

const Footer = ({ sx = {}, ...rest }: { sx?: ThemeUICSSObject }) => {
  return (
    <footer sx={{
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      p: 5,
      ...sx,
    }} {...rest}>
      <SmallText>&copy; 2022</SmallText>

      <SmallText>{process.env.IMAGE_TAG}</SmallText>
    </footer>
   )
}

export default Footer;
