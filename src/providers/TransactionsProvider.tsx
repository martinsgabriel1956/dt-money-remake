import { ReactNode, useEffect, useState } from "react"
import { CreateTransactionInput, Transaction, TransactionsContext } from "@/contexts/TransactionsContext"
import { api } from "@/libs/axios";

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  async function fetchTransactions(query?: string) {
    const response = await api.get("/transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query
      }
    })
    const data = await response.data
    setTransactions(data)
  }

  async function createNewTransaction(data: CreateTransactionInput) {
    const { description, price, category, type } = data

    const response = await api.post("/transactions", {
      description,
      price,
      category,
      type,
      createdAt: new Date()
    })

    setTransactions(prevState => [response.data, ...prevState])
  }

  useEffect(() => {
    fetchTransactions();
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}