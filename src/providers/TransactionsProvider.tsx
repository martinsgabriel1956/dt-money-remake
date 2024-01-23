import { ReactNode, useEffect, useState } from "react"
import { Transaction, TransactionsContext } from "@/contexts/TransactionsContext"
import { api } from "@/libs/axios";

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  async function fetchTransactions(query?: string) {
    const response = await api.get("/transactions", {
      params: {
        q: query
      }
    })
    const data = await response.data
    setTransactions(data)
  }

  useEffect(() => {
    fetchTransactions();
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}