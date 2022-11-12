import { InputLabel } from '@mui/material';
import { InputLabelProps } from '@mui/material';
import styled from '@emotion/styled';

interface Props extends InputLabelProps {
  children: any;
}

const StyledLabel = styled(InputLabel)(({ theme }: any) => ({
  fontSize: theme.fontSize.small,
  display: 'block',
  '& 	.MuiInputLabel-asterisk': {
    color: 'red'
  }
}));

const Label = (props: Props) => {
  return <StyledLabel />;
};

export default Label;
