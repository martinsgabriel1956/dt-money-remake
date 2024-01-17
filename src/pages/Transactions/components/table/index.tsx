import { PriceHighlight, TableContainer } from './styles';

export function TransactionsTable() {
  return (
    <TableContainer>
      <tbody>
        <tr>
          <td>Desenvolvimento</td>
          <td>
            <PriceHighlight
              variant='income'
            >
              R$ 12.000,00
            </PriceHighlight>
          </td>
          <td>Venda</td>
          <td>13/04/2023</td>
        </tr>
        <tr>
          <td>Hamburguer</td>
          <td>
            <PriceHighlight
              variant='outcome'
            >
              - R$ 59,00
            </PriceHighlight>
          </td>
          <td>Alimentação</td>
          <td>15/04/2024</td>
        </tr>
      </tbody>
    </TableContainer>
  )
}