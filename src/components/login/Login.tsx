import {
  Button,
  Container,
  Paper,
  PasswordInput,
  TextInput,
  Title
} from "@mantine/core";
import useLoginForm from "./hooks/useLoginForm.ts";
import useAuthed from "./hooks/useAuthed.ts";
import ShowNotification, {
  NotiStyle
} from "../notification/ShowNotification.ts";

function Login() {
  const form = useLoginForm();
  const { mutate, isPending, isError } = useAuthed();

  const submitHandler = data => {
    mutate(data);
  };

  if (isError) {
    ShowNotification(NotiStyle.red, "Error", "Wrong username and/or password");
  }

  return (
    <Container my={40} size={420}>
      <Title ta="center">Welcome back!</Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius={"md"}>
        <form onSubmit={form.onSubmit(values => submitHandler(values))}>
          <TextInput
            label="Username"
            required
            keys={form.key("username")}
            {...form.getInputProps("username")}
          />
          <PasswordInput
            label="Password"
            required
            mt="md"
            keys={form.key("password")}
            {...form.getInputProps("password")}
          />
          <Button disabled={isPending} fullWidth mt="xl" type="submit">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Login;
