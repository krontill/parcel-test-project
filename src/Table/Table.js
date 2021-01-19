import React from 'react';
import { useTable } from 'react-table';
import * as styledTable from './Table.styled';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { TransType } from 'types';

const Table = ({ columns, data, theme }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  const getColumn = column => column.render('header');

  const getColumnWithSort = column => (
    <styledTable.SortWrapper justify={column.justifySort}>
      {getColumn(column)}
      SortArrows
    </styledTable.SortWrapper>
  );

  const getTh = column => (column.sort ? getColumnWithSort(column) : getColumn(column));

  const getHeaderGroup = headerGroup =>
    headerGroup.headers.map(column => (
      <styledTable.Th {...column.getHeaderProps()} customWidth={column.customWidth}>
        {getTh(column)}
      </styledTable.Th>
    ));

  const headerGroupsTemplate = headerGroups.map(headerGroup => (
    <tr {...headerGroup.getHeaderGroupProps()}>{getHeaderGroup(headerGroup)}</tr>
  ));

  const getRow = row =>
    row.cells.map(cell => (
      <styledTable.Td paddingTd={cell.column.paddingTd} {...cell.getCellProps()}>
        {cell.render('Cell')}
      </styledTable.Td>
    ));

  const rowsTemplate = rows.map(row => {
    prepareRow(row);

    return (
      <styledTable.Tr isSelected={Boolean(row.original?.isSelectedRow)} {...row.getRowProps()}>
        {getRow(row)}
      </styledTable.Tr>
    );
  });

  return (
    <styledTable.Table {...getTableProps()} theme={theme}>
      <styledTable.Thead>{headerGroupsTemplate}</styledTable.Thead>
      <styledTable.Tbody {...getTableBodyProps()} theme={theme}>
        {rowsTemplate}
      </styledTable.Tbody>
    </styledTable.Table>
  );
};

Table.propTypes = {
  theme: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.object])),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.oneOfType([PropTypes.string, TransType, PropTypes.node]),
      accessor: PropTypes.string.isRequired,
      sort: PropTypes.string,
      customWidth: PropTypes.string,
      isInvert: PropTypes.bool,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.node, PropTypes.object, PropTypes.bool])))
    .isRequired,
  onSort: PropTypes.func,
  sorting: PropTypes.shape({
    field: PropTypes.string,
    order: PropTypes.string,
  }),
};

export default withTheme(Table);
