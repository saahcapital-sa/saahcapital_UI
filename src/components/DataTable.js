import React, {useState} from 'react';
import { Form } from 'react-bootstrap'
import { useTable, useFilters, useRowSelect, usePagination, useGlobalFilter, useSortBy } from 'react-table';
import { BiSearch } from 'react-icons/bi'
import {FiChevronDown} from 'react-icons/fi';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import SortDropdown from '../components/SortDropdown';
import DownloadDropdown from '../components/DownloadDropdown';
import FilterDropdown from "../components/FilterDropdown";

const DataTable = ({ columns, data, search, downloadDropdown, sortby, filter, filterArray, pagination, perpage }) => {  
  const [totalCount, setTotalCount] = useState(data.length);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    state,
    setGlobalFilter,
    pageOptions,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageCount,
    gotoPage,
    setFilter,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <input type="checkbox" {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <input type="checkbox" {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );
  const { globalFilter, pageIndex, pageSize } = state;

  const countPage = Math.ceil(rows.length / pageSize);
  const handlePageChange = ({ selected }) => {
    gotoPage(selected);
  };

  return (
    <div className='dataTableWrap customform'>
      {(search || downloadDropdown || sortby || filter) && 
       <div className='tableFilterWrap'>
       {search && <div className='searchWrap mb-0'>
        <BiSearch />
        <Form.Control  
          type="search" 
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)} 
          placeholder="Search..." 
          />
        </div>}
        <div className='tableFilter'>
          {filter && <FilterDropdown filterArray={filterArray} />}
          {sortby && <SortDropdown />}
          {downloadDropdown && <DownloadDropdown />}
        </div>
      </div>}
      <div className="responsive-table">
        <table {...getTableProps()} className="table equity-fund-table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {(pagination || perpage) && <div className='tableNav'>
        {perpage && <div className='totalEntries'>
          <span>Show</span>
            <div className='selectWrap'>
              <Form.Select 
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
              >
                {[5, 10, 20, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </Form.Select>
              <FiChevronDown/>
            </div>
          <span>entries of {totalCount} entries</span>
        </div>}
        {pagination && <ReactPaginate
          previousLabel= {<FaAngleLeft/>}
          nextLabel= {<FaAngleRight/>}
          breakLabel="..."
          pageCount={countPage}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
        />}
      </div>}
    </div>
  );
};

export default DataTable;