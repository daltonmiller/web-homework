import React from 'react';
import { dummyData } from '../../Data/dummyData';
import TransactionsTable from '../transactions/TransactionsTable';
import styled from 'styled-components';
const ViewTransactions = () => {
  return (
    <Table>
      <TransactionsTable />
    </Table>
  );
};

export default ViewTransactions;

const Table = styled.div`
  margin-top: 20px;
  border: 1px solid black;
  width: 1234px;
  border-radius: 10px;
  padding: 5px;
  //   display: flex;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;
