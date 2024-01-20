import { TransactionsContext } from "@/contexts/TransactionsContext";
import { useContext } from "react"

export function useListTransactions() {
  return useContext(TransactionsContext);
}