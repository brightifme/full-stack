import React from 'react';
import ReactTable from 'react-table';
import Button from 'react-bootstrap/Button';
import 'react-table/react-table.css';
import styled from 'styled-components';

const TableTemplate = ({
  filteredEmployees,
  openEditForm,
  deleteEmployee,
}) => {
  const columns = React.useMemo(
    () => [
      {
        // Code and Assigned will be shown in Admin page which will be implement in the future
        columns: [
          { Header: 'ID', accessor: 'id', minWidth: 50, maxWidth: 60 },
          { Header: 'PageName', accessor: 'name' },
          { Header: 'Code', accessor: 'code', show: false },
          { Header: 'PageType', accessor: 'profession' },
          { Header: 'Page Category', accessor: 'color' },
          { Header: 'Page Technlogy', accessor: 'city' },
          { Header: ' SEO Page Ranking', accessor: 'branch' },
          { Header: 'Assigned', accessor: 'assigned', show: false },
          {
            Header: 'Actions',
            id: 'actions',
            width: 140,
            Cell: ({ row }) => {
              return (
                <div>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => openEditForm(row.id)}
                  >
                    Edit
                  </Button>
                  <StyledButton
                    variant="danger"
                    size="sm"
                    onClick={() => deleteEmployee(row.id)}
                  >
                    Delete
                  </StyledButton>
                </div>
              );
            },
          },
        ],
      },
    ],
    [],
  );

  return (
    <ReactTable
      className="-striped -highlight"
      data={filteredEmployees}
      columns={columns}
      defaultPageSize={10}
      style={{
        borderColor: 'navy',
        borderRadius: '10px',
        borderStyle: 'outset',
      }}
    />
  );
};

const StyledButton = styled(Button)`
  margin-left: 5px;
`;

export default TableTemplate;
