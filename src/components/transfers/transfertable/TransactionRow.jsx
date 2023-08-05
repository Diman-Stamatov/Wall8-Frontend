const TransactionRow = ({ transaction }) => {
  const { name, type, amount, date } = transaction;

  return (
    <tr className="dark:bg-dark-primary dark:hover:bg-dark-secondary">
      <th
        scope="row"
        className={
          type === "incoming"
            ? "px-12 py-4 font-medium text-green-900 whitespace-nowrap dark:text-green-400"
            : "px-12 py-4 font-medium text-red-900 whitespace-nowrap dark:text-red-500"
        }
      >
        {name}
      </th>
      <td className="px-12 py-4 whitespace-nowrap text-center">${amount.toFixed(2)}</td>
      <td className="px-12 py-4 whitespace-nowrap text-center">{date}</td>
      <td className="px-12 py-4 whitespace-nowrap text-center">{type}</td>
    </tr>
  );
};

export default TransactionRow;
