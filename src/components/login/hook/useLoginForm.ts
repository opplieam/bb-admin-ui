import { hasLength, isEmail, useForm } from "@mantine/form";

type CredentialForm = {
  email: string;
  password: string;
};

function useLoginForm() {
  return useForm<CredentialForm>({
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
}

export default useLoginForm;
