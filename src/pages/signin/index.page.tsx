import type { NextPage } from 'next';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

import { MuiInputBase, MuiOutlinedInput } from 'components/TextInput/TextInput';
import Label from 'components/InputLabel/MuiLabel';

type FormData = {
  email: string;
  password: string;
  dob: string;
};

const LoginPage: NextPage = (props) => {
  const { register, handleSubmit } = useForm<FormData>();

  return (
    <>
      <Typography>Signup</Typography>
      <form>
        <Label required>Email</Label>
        <MuiInputBase />
        <Label required>Usename</Label>
        <MuiInputBase />
        <Label required>Password</Label>
        <MuiInputBase />
        <Label required>Confirm Password</Label>
        <MuiInputBase />
        <Label>Phone</Label>
        <MuiInputBase />
        <Label>Birthday</Label>
        <MuiInputBase />
      </form>
    </>
  );
};

// for server side rendering
export function getServerSideProps() {
  return {
    props: {}
  };
}

export default LoginPage;
