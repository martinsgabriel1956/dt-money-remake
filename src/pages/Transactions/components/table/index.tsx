import { useListTransactions } from '@/hooks/useListTransactions';
import { PriceHighlight, TableContainer } from './styles';

export function TransactionsTable() {
  const { transactions } = useListTransactions()

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