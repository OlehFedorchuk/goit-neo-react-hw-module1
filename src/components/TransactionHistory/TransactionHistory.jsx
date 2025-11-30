import clsx from "clsx";
import css from "./TransactionHistory.module.css";
const TransactionHistory = ({ items }) => {
  return (
    <table className={clsx(css.table)}>
      <thead className={clsx(css.head)}>
        <tr>
          <th className={clsx(css.cell)}>Type</th>
          <th className={clsx(css.cell)}>Amount</th>
          <th className={clsx(css.cell)}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={clsx(css.row)}>
            <td className={clsx(css.cell)}>
              {type[0].toUpperCase() + type.slice(1)}
            </td>
            <td className={clsx(css.cell)}>{amount}</td>
            <td className={clsx(css.cell)}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
