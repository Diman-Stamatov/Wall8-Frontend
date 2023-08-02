const TransactionRow = ({ transaction }) => {
  const { name, type, amount, date } = transaction;

  return (
    <tr className="dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
      <td className="px-12 py-4 whitespace-nowrap">${amount.toFixed(2)}</td>
      <td className="px-12 py-4 whitespace-nowrap">{date}</td>
      <td className="px-12 py-4 whitespace-nowrap">{type}</td>
    </tr>
  );
};

export default TransactionRow;
