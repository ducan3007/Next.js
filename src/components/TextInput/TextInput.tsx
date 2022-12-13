import React from 'react'
import InputBase from '@mui/material/InputBase'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'
import styled from '@emotion/styled'

interface Props {
  label?: string
  type?: string
}

// Now we want to
const StyledInput = styled(InputBase)(({ theme }: any) => ({
  '& .MuiInputBase-input': {
    border: '1px solid #e0e0e0',
    borderRadius: '4px'
  }
}))

const StyledOutlinedInput = styled(OutlinedInput)(({ theme }: any) => ({
  // CSS here
}))

const MuiInputBase = ({ label, type, ...props }: Props) => {
  return <StyledInput type={type ?? 'text'} {...props} />
}

const MuiOutlinedInput = ({ label, ...props }: Props) => {
  return <StyledOutlinedInput position='start' {...props} />
}

export { MuiInputBase, MuiOutlinedInput }
