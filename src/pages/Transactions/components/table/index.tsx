import { useEffect, useState } from 'react';
import { PriceHighlight, TableContainer } from './styles';

interface Transaction {
  id: number
  description: string
  type: "income" | "outcome"
  category: string
  price: number
  createdAt: string
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  async function fetchTransactions() {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()
    setTransactions(data)
  }

  useEffect(() => {
    fetchTransactions();
  }, [])

  return (
    <TableContainer>
      <tbody>
        {transactions.map(transaction => (
          <tr
            key={transaction.id}
          >
            <td>{transaction.description}</td>
            <td>
              <PriceHighlight
                variant={transaction.type}
              >
                {transaction.price}
              </PriceHighlight>
            </td>
            <td>{transaction.category}</td>
            <td>{transaction.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  )
}