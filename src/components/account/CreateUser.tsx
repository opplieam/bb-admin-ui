import { Button, Group, Modal, PasswordInput, TextInput } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import useCreateUserForm from "./hooks/useCreateUserForm.ts";
import useCreateUser from "./hooks/useCreateUser.ts";

function CreateUser() {
  const form = useCreateUserForm();
  const { isPending, mutate } = useCreateUser();
  const [opened, { open, close }] = useDisclosure(false);

  const submitHandler = data => {
    mutate({ username: data.username, password: data.password });
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Create admin" centered>
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
          <PasswordInput
            label="Confirm password"
            required
            mt="md"
            keys={form.key("confirmPassword")}
            {...form.getInputProps("confirmPassword")}
          />
          <Button disabled={isPending} fullWidth mt="xl" type="submit">
            Create
          </Button>
        </form>
      </Modal>
      <Group justify="left" mb={15}>
        <Button onClick={open} rightSection={<IconUser size={14} />}>
          Create User
        </Button>
      </Group>
    </>
  );
}

export default CreateUser;
