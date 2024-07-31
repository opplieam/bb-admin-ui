import { hasLength, isNotEmpty, useForm } from "@mantine/form";

type CredentialForm = {
  username: string;
  password: string;
};

function useLoginForm() {
  return useForm<CredentialForm>({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      password: ""
    },
    validate: {
      username: isNotEmpty("Invalid Username"),
      password: hasLength({ min: 8 }, "Invalid Password")
    }
  });
}

export default useLoginForm;
