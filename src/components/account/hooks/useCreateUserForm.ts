import { hasLength, isNotEmpty, matchesField, useForm } from "@mantine/form";

type CreateUserForm = {
  username: string | null;
  password: string | null;
  confirmPassword: string | null;
};

function useCreateUserForm() {
  return useForm<CreateUserForm>({
    mode: "uncontrolled",
    initialValues: {
      username: null,
      password: null,
      confirmPassword: null
    },
    validate: {
      username: isNotEmpty("Invalid Username"),
      password: hasLength({ min: 8 }, "Invalid Password"),
      confirmPassword: matchesField("password", "Password not match")
    }
  });
}

export default useCreateUserForm;
