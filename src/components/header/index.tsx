import { HeaderContainer, HeaderContent } from './styles'
import { NewTransactionModal } from '..'
import logoImg from '@/assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <NewTransactionModal />
      </HeaderContent>
    </HeaderContainer>
  )
}
