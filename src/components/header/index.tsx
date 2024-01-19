import * as Dialog from '@radix-ui/react-dialog';
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';
import { NewTransactionModal } from '..';
import logoImg from '@/assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
