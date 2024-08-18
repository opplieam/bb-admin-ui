import { Button, Divider, Group } from "@mantine/core";
import useGetAllUnmatchedCat, {
  UnmatchedCat
} from "./hooks/useGetAllUnmatchedCat.ts";
import { useState } from "react";
import { DataTable } from "mantine-datatable";
import useGetAllCategory, { Category } from "./hooks/useGetAllCategory.ts";
import useUpdateCategory from "./hooks/useUpdateCategory.ts";

function Category() {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [selectedUnmatchedCat, setSelectedUnmatchedCat] = useState<
    UnmatchedCat[]
  >([]);
  const { data: resultUnmatched } = useGetAllUnmatchedCat({
    page: page,
    page_size: pageSize
  });

  const { data: resultCategory } = useGetAllCategory();
  const [selectedCategory, setSelectedCategory] = useState<Category[]>([]);

  const { isPending, mutate } = useUpdateCategory();

  const handleUpdate = () => {
    const unmatchedCatID = selectedUnmatchedCat.map(v => v.id);
    const catID = selectedCategory[0].id;
    mutate({ unmatched_category_id: unmatchedCatID, category_id: catID });
  };
  // noinspection TypeScriptValidateTypes
  return (
    <>
      <DataTable
        highlightOnHover
        height={270}
        columns={[
          { accessor: "id" },
          { accessor: "path" },
          { accessor: "category_level" }
        ]}
        noRecordsText="No records available"
        records={resultUnmatched?.data}
        page={page}
        recordsPerPage={pageSize}
        totalRecords={resultUnmatched?.metadata.total_records}
        onPageChange={p => setPage(p)}
        selectedRecords={selectedUnmatchedCat}
        onSelectedRecordsChange={setSelectedUnmatchedCat}
      />
      <Divider my="md" />
      <DataTable
        highlightOnHover
        height={270}
        columns={[{ accessor: "id" }, { accessor: "path" }]}
        noRecordsText="No records available"
        records={resultCategory?.data}
        selectedRecords={selectedCategory}
        onSelectedRecordsChange={setSelectedCategory}
        isRecordSelectable={record =>
          record == selectedCategory[0] || selectedCategory.length < 1
        }
      />
      <Divider my="md" />
      <Group justify="center">
        <Button
          variant="light"
          disabled={
            selectedUnmatchedCat.length === 0 || selectedCategory.length !== 1
          }
          loading={isPending}
          onClick={handleUpdate}
        >
          Update Category
        </Button>
      </Group>
    </>
  );
}

export default Category;
