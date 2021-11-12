import Box from "components/common/Box";
import Table from "components/common/Table/Table";
import React from "react";

interface Props {}

// number
// date
// action
// value
// amount
// status

const Transactions = (props: Props) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Number",
        accessor: "number",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Action",
        accessor: "action",
      },
      {
        Header: "Value",
        accessor: "value",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );

  const data = [
    {
      id: "4325",
      number: "#4325",
      date: "26 AUG - 04:14",
      action: "DEPOSIT",
      value: "100$",
      amount: "100 coins",
      status: "completed",
    },
  ];

  return (
    <Box width="100%" maxWidth="900px" pt="40px">
      <Table columns={columns} data={data} />
    </Box>
  );
};

export default Transactions;
