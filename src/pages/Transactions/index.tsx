import { Header, Summary } from "@/components";
import { TransactionsTable as Table } from "./components";
import { TransactionsContainer } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <Table />
      </TransactionsContainer>
    </div>
  )
}
