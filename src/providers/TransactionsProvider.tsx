import { ReactNode, useEffect, useState } from "react"
import { Transaction, TransactionsContext } from "@/contexts/TransactionsContext"

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
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
    <TransactionsContext.Provider
      value={{ transactions }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}