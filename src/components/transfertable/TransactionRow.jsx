const TransactionRow = ({ transaction }) => {
  const { name, type, amount, date } = transaction;

  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        class="px-12 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </th>
      <td class="px-12 py-4">{amount}</td>
      <td class="px-12 py-4">{date}</td>
      <td class="px-12 py-4">{type}</td>
    </tr>
  );
};

export default TransactionRow;
