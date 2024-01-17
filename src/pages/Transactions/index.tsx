import { Header, Summary } from "@/components";
import { TransactionsTable as Table, SearchForm } from "./components";
import { TransactionsContainer, } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <Table />
      </TransactionsContainer>
    </div>
  )
}
