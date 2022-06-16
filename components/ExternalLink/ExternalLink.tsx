import { ThemeUICSSObject } from 'theme-ui'

type Props = {
  href: string,
  sx: ThemeUICSSObject,
  children: React.ReactNode,
};

const ExternalLink = ({ href, sx, children, ...rest }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        variant: 'typography.text',
        color: 'blue',
        ...sx,
      }}
      {...rest}
     >
       {children}
     </a>
  )
}

ExternalLink.defaultProps = {
  sx: {}
}

export default ExternalLink;
