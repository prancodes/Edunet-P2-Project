// src/pages/TransactionsPage.jsx

import React, { useEffect, useState } from 'react';
import { fetchTransactions } from '../utils/authUtils';

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchedTransactions = fetchTransactions(); // Get mock transactions data
    setTransactions(fetchedTransactions);
  }, []);

  return (
    <div>
      <h1>Transactions</h1>
      {transactions.length > 0 ? (
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              Amount: ${transaction.amount} on {transaction.date}
            </li>
          ))}
        </ul>
      ) : (
        <p>No transactions found.</p>
      )}
    </div>
  );
};

export default TransactionsPage;
