import { DataTable } from "mantine-datatable";
import { Button } from "@mantine/core";
import useGetAllUsers from "./hooks/useGetAllUsers.ts";
import CreateUser from "./CreateUser.tsx";

function Account() {
  const { data: result } = useGetAllUsers();
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
            render: ({ active }) => (
              <>
                <Button
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
