import Modal from 'react-modal';
import entradas from '../../assets/entradas.svg';
import saidas from '../../assets/saidas.svg';
import { CloseButton, Container, IconCloseButton, TransactionsTypeContainer } from './styles';
interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {

  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <CloseButton
        type="button"
        onClick={onRequestClose}
      >
        <IconCloseButton />
      </CloseButton>

      <Container>
        <h2>Cadastrar transação</h2>
        <input placeholder="Título" />
        <input type="number" placeholder="Valor" /> 

          <TransactionsTypeContainer>
            <button type="button">
              <img src={entradas} alt="Entrada" />
              <span>Entrada</span>
            </button>
            <button type="button">
              <img src={saidas} alt="Saída" />
              <span>Saída</span>
            </button>
          </TransactionsTypeContainer>

        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>

      </Container>
    </Modal>
  );
}