import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '@/contexts/TransactionsContext'

export function useTransactions() {
  return useContextSelector(TransactionsContext, (context) => ({
    createNewTransaction: context.createNewTransaction,
    transactions: context.transactions,
    fetchTransactions: context.fetchTransactions,
  }))
}
