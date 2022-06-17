import { ThemeUICSSObject } from 'theme-ui'

const Divider = ({ sx, ...rest }: { sx?: ThemeUICSSObject }) => (
  <hr sx={{
    mx: 5,
    border: 0,
    height: 2,
    backgroundColor: 'gray.3',
    ...sx,
  }} {...rest} />
)

Divider.defaultProps = {
  sx: {}
}

export default Divider;
