import { DataTable } from "mantine-datatable";
import { Button, Text } from "@mantine/core";
import useGetAllUsers from "./hooks/useGetAllUsers.ts";
import CreateUser from "./CreateUser.tsx";
import useUpdateUser from "./hooks/useUpdateUser.ts";
import { modals } from "@mantine/modals";

function Account() {
  const { data: result } = useGetAllUsers();
  const { isPending, mutate } = useUpdateUser();

  const updateUserHandler = (id, active) => {
    mutate({ id: id, active: !active });
  };

  const confirmModal = (id, active) =>
    modals.openConfirmModal({
      title: "Please confirm your action",
      children: (
        <Text size="sm">
          Are you sure you want to {active ? "deactivate" : "activate"}
        </Text>
      ),
      labels: { confirm: "Confirm", cancel: "Cancel" },
      onConfirm: () => updateUserHandler(id, active)
    });

  // noinspection TypeScriptValidateTypes
  return (
    <>
      <CreateUser />
      <DataTable
        highlightOnHover
        minHeight={150}
        columns={[
          { accessor: "id" },
          { accessor: "username" },
          { accessor: "created_at" },
          { accessor: "updated_at" },
          {
            accessor: "action",
            render: ({ id, active }) => (
              <>
                <Button
                  onClick={() => confirmModal(id, active)}
                  disabled={isPending}
                  fullWidth
                  size="sm"
                  variant="outline"
                  color={active ? "red" : "green"}
                >
                  {active ? "deactivate" : "activate"}
                </Button>
              </>
            )
          }
        ]}
        defaultColumnProps={{
          textAlign: "center",
          cellsStyle: ({ active }) =>
            !active
              ? theme => ({ fontStyle: "italic", color: theme.colors.red[6] })
              : undefined
        }}
        records={result?.data}
        noRecordsText="No records available"
      />
    </>
  );
}

export default Account;
