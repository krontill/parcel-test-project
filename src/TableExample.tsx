import * as React from "react";
import Table from "./Table/Table";

export const TableExample = () => {
  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        header: 'Column 1',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        header: 'Column 2',
        accessor: 'col2',
      },
    ],
    []
  )


  return (
    <Table columns={columns} data={data} />
  );
};
