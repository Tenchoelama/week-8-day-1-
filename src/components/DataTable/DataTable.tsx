import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'race',
    headerName: 'Race',
    width: 150,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Baggins', firstName: 'Frodo', race: "hobbit" },
  { id: 2, lastName: 'Gamjee', firstName: 'Sam', race: "hobbit" },
  { id: 3, lastName: 'BrandyBuck', firstName: 'JMerry', race: "hobbit" },
  { id: 4, lastName: 'Took', firstName: 'Peregrin', race: "hobbit" },
  { id: 5, lastName: 'Grey', firstName: 'Gandalf', race: "wizard" },
  { id: 6, lastName: 'Oakenshield', firstName: "Thorin", race: "drwarf" },
  { id: 7, lastName: 'Greenleaf', firstName: 'Legolas', race: "elf" },
  { id: 8, lastName: 'White', firstName: 'Saruman', race: "wizard"},
  { id: 9, lastName: 'DarkLord', firstName: 'Sauron', race: "wizard" },
];

export const DataTable= () => {
    return (
        <Box sx={{ height: 400, width: '100%', backgroundColor: '#f5f5f5' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      );
    }