import {
  Button,
  Container,
  Paper,
  PasswordInput,
  TextInput,
  Title
} from "@mantine/core";
import { hasLength, isEmail, useForm } from "@mantine/form";

function Login() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: ""
    },
    validate: {
      email: isEmail("Invalid Email"),
      password: hasLength({ min: 8 }, "Invalid Password")
    }
  });

  const submitHandler = values => {
    console.log(values);
  };

  return (
    <Container my={40} size={420}>
      <Title ta="center">Welcome back!</Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius={"md"}>
        <form onSubmit={form.onSubmit(values => submitHandler(values))}>
          <TextInput
            label="Email"
            required
            keys={form.key("email")}
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            required
            mt="md"
            keys={form.key("password")}
            {...form.getInputProps("password")}
          />
          <Button fullWidth mt="xl" type="submit">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Login;
