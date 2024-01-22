import * as Dialog from '@radix-ui/react-dialog';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Content, Overlay, CloseButton, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { sleep } from '@/utils/sleep';

const newTransactionFormSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  // type: zod.enum(["income", "outcome"]),
})

type NewTransactionFormInputs = zod.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const {
    register,
    handleSubmit,
    formState: {
      isSubmitting,
      errors
    }
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  });

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    await sleep(2000);
    console.log(data)
  }


  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form
          onSubmit={handleSubmit(handleCreateNewTransaction)}
        >
          <input
            type="text"
            placeholder='Descrição'
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder='Preço'
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder='Categoria'
            required
            {...register("category")}
          />

          <TransactionType>
            <TransactionTypeButton
              type="button"
              variant='income'
              value="income"
            >
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton
              type="button"
              variant='outcome'
              value="outcome"
            >
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button
            type="submit"
            disabled={isSubmitting}
          >
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}

