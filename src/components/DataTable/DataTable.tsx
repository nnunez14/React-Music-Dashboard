import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';

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
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

const rows = [
  { id: 1, lastName: 'Bieber', firstName: 'Justin', age: 27 },
  { id: 2, lastName: 'Clarkson', firstName: 'Kelly', age: 39 },
  { id: 3, lastName: 'Mars', firstName: 'Bruno', age: 35 },
  { id: 4, lastName: '', firstName: 'Sia', age: 45 },
  { id: 5, lastName: 'Wilson', firstName: 'Ciara', age: 35 },
  { id: 6, lastName: 'Mozart', firstName: 'Wolfgang-Amadeus', age: 265 },
  { id: 7, lastName: 'Knowles-Carter ', firstName: 'Beyonce', age: 39 },
  { id: 8, lastName: 'Rodrigo', firstName: 'Olivia', age: 18 },
  { id: 9, lastName: 'Shark', firstName: 'Baby', age: null },
];


export const DataTable = () => {
    return (
        <div style={{ height: 400, width: '100%'}}>
            <h2>Music Inventory</h2>
            <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
        </div>
    )
}