import { useListTransactions } from '@/hooks/useListTransactions';
import { PriceHighlight, TableContainer } from './styles';
import { dateFormatter, priceFormatter } from '@/utils/formatter';

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
                {transaction.type === 'outcome' && '- '}
                {priceFormatter.format(transaction.price)}
              </PriceHighlight>
            </td>
            <td>{transaction.category}</td>
            <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  )
}