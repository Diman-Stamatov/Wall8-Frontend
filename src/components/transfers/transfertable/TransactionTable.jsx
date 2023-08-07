import React, { useState } from 'react';
import { useTable, usePagination } from 'react-table';

const TransactionTable = ({
  transfers,
  filterText,
  incomingOnly,
  outgoingOnly,
}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'recipientUsername',
      },
      {
        Header: 'Amount',
        accessor: 'amount',
      },
      {
        Header: 'Date',
        accessor: 'timestamp',
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
    ],
    []
  );

  const data = React.useMemo(() => transfers, [transfers]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 }, // Set initial page index and size
    },
    usePagination // Enable pagination
  );

  const filteredTransfers = transfers.filter((transfer) => {
    const textMatch = transfer.recipientUsername
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    return textMatch;
  });

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
      </div>
      <div className="overflow-x-auto shadow-md sm:rounded-lg outline dark:outline-dark-tertiary">
        <table {...getTableProps()} className="table-auto md:table-fixed min-w-full dark:bg-dark-secondary dark:text-white">
          <thead className="text-xs uppercase">
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="dark:bg-dark-primary divide-y dark:divide-dark-tertiary">
            {page.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </button>
          <div>
            Page{' '}
            <input
              type="number"
              value={pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
            />{' '}
            of {pageOptions.length}
          </div>
          <div>
            <select
              value={pageSize}
              onChange={e => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 20].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
