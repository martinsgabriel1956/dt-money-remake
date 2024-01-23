import { createContext } from "react";

export type Transaction = {
  id: number
  description: string
  type: "income" | "outcome"
  category: string
  price: number
  createdAt: string
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionContextType)