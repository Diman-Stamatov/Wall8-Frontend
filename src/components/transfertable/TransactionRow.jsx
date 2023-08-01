const TransactionRow = ({ transaction }) => {
  const { name, type, amount, date } = transaction;

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-12 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </th>
      <td className="px-12 py-4">{date}</td>
      <td className="px-12 py-4">{type}</td>
      <td className="px-12 py-4">{amount}</td>
    </tr>
  );
};

export default TransactionRow;
