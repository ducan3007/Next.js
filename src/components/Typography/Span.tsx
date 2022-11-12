import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { TypographyProps } from '@mui/material/Typography';

interface Props extends TypographyProps {
  children: any;
  type?: string;
  weight?: string;
}

const StyledText = styled(Typography)(({ theme }: any) => ({
  fontWeight: theme.fontWeight['bold']
}));

const Text = (props: Props) => {
  return (
    <StyledText type={props.type} {...props}>
      {props.children}
    </StyledText>
  );
};
export default Text;
