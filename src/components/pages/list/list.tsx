import * as React from 'react';
import { FunctionComponent } from 'react';
import { Button, Container, FormGroup } from 'reactstrap';

import { AgGridReact } from 'ag-grid-react';

import { BankAccount } from '../../../../src/models';

const List: FunctionComponent<{
  data: Array<BankAccount>,
  onUpdateItem: (id: string) => void,
  onDeleteItem: (id: string) => void
}> = ({ data, onUpdateItem, onDeleteItem }) => {
  const columnDefs = [{
    headerName: 'Bank',
    field: 'bank.name'
  }, {
    headerName: 'Branch',
    field: 'branch.name'
  }, {
    headerName: 'Account Holder Name',
    field: 'accountHolderName'
  }, {
    headerName: 'Account Type',
    field: 'accountType'
  }, {
    headerName: 'Account Number',
    field: 'accountNumber',
    filter: 'agNumberColumnFilter'
  }, {
    headerName: 'Employee Name',
    field: 'employeeName'
  }, {
    headerName: 'Employee Number',
    field: 'employeeNumber',
    filter: 'agNumberColumnFilter'
  }, {
    headerName: 'Updated At',
    field: 'updatedAt',
    filter: 'agDateColumnFilter'
  }, {
    headerName: 'Actions',
    field: 'id',
    width: 200,
    cellRenderer: 'actionRenderer'
  }];

  const getRowHeight = () => {
    return 35;
  }

  const ActionCellRenderer = (props: any) => {
    const onEdit = () => {
      onUpdateItem(props.value);
    };
  
    const onDelete = () => {
      onDeleteItem(props.value);
    };
    return (
      <FormGroup row={true}>
        <Button color='primary' size='sm' className='mx-3' onClick={onEdit}>Edit</Button>
        <Button color='danger' size='sm' onClick={onDelete}>Delete</Button>
      </FormGroup>
    );
  };

  return (
    <Container fluid={true} className='h-100 p-3'>
      <div 
        className='ag-theme-bootstrap'
        style={{
          height: 'calc(100% - 100px)',
          width: '100%'
        }}
      >
        <AgGridReact
          columnDefs={columnDefs}
          defaultColDef={{
            sortable: true,
            filter: true
          }}
          rowData={data}
          getRowHeight={getRowHeight}
          frameworkComponents={{
            actionRenderer: ActionCellRenderer
          }}
        />
      </div>
    </Container>
  )
};

export default List;