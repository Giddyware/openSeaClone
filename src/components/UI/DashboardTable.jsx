import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";

function createTransactionData(id, transaction, atm, date, status) {
  return { transaction, atm, date, status };
}

const transactionRows = [
  createTransactionData(1, "deposit", 5, 2, "completed"),
  createTransactionData(2, "withdrawal", -4, 2, "pending"),
  createTransactionData(3, "mint", -2, 5, "cancelled"),
];

const DashboardTable = () => {
  return (
    <TableContainer className="bg-gray-200 px-10 py-5 rounded-3xl">
      <Table aria-label="dashboard-table" className="rounded">
        <TableHead className="bg-gray-400 rounded ">
          <TableRow className="rounded">
            <TableCell className="text-black border-none">
              Transaction
            </TableCell>
            <TableCell className="text-black border-none">Amount</TableCell>
            <TableCell className="text-black border-none">Date</TableCell>
            <TableCell className="text-black border-none">Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody className="">
          {transactionRows.map(({ id, transaction, atm, date, status }) => (
            <TableRow className="" key={id}>
              <TableCell className="text-black capitalize">
                {transaction === "withdrawal" ? (
                  <div className="flex gap-x-3">
                    <BsArrowUpRight color="hsla(0, 79%, 63%, 1)" />
                    {transaction}
                  </div>
                ) : transaction === "deposit" || transaction === "mint" ? (
                  <div className="flex gap-x-3">
                    <BsArrowDownLeft color="hsla(84, 100%, 44%, 1)" />
                    {transaction}
                  </div>
                ) : (
                  "undefined"
                )}
              </TableCell>
              <TableCell className="text-black">{atm}</TableCell>
              <TableCell className="text-black">{date}</TableCell>
              <TableCell
                className={`capitalize ${
                  status === "pending"
                    ? "text-[hsla(28,_87%,_62%,_1)]"
                    : status === "completed"
                    ? "text-[hsla(84,_100%,_44%,_1)]"
                    : status === "cancelled"
                    ? "text-[hsla(0,_79%,_63%,_1)]"
                    : "undefined"
                }`}
              >
                {status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DashboardTable;
