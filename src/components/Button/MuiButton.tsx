import ButtonBase from '@mui/material/ButtonBase'
import { ButtonBaseProps } from '@mui/material/ButtonBase'
import styled from '@emotion/styled'

interface Props extends ButtonBaseProps {
  content?: any
  color?: any
  style?: any
  sx?: any
  handleClick?: () => void
  children?: any
}

const CustomButton = styled(ButtonBase)(({ theme }: any) => ({
  borderRadius: '24px',
  width: '70px',
  border: '1px solid',
  borderColor: '#fcba03',

  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}))

const MuiButton = ({ color, sx, style, content, handleClick, children }: Props) => {
  return (
    <CustomButton sx={sx} style={style} disableFocusRipple disableTouchRipple disableRipple onClick={handleClick}>
      {children}
    </CustomButton>
  )
}

export default MuiButton
