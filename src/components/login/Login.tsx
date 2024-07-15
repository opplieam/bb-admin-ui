import {
  Button,
  Container,
  Paper,
  PasswordInput,
  TextInput,
  Title
} from "@mantine/core";

function Login() {
  return (
    <Container my={40} size={420}>
      <Title ta="center">Welcome back!</Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius={"md"}>
        <TextInput label="Email" required />
        <PasswordInput label="Password" required mt="md" />
        <Button fullWidth mt="xl">
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}

export default Login;
