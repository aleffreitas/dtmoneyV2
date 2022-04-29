import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import entradas from '../../assets/entradas.svg';
import saidas from '../../assets/saidas.svg';
import { api } from '../../services/api';
import { CloseButton, Container, IconCloseButton, RadioBox, TransactionsTypeContainer } from './styles';
interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {

  const [typeTransaction, setTypeTransaction] = useState('deposit');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      typeTransaction,
    };

    api.post('transactions', data);
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        /> 

          <TransactionsTypeContainer>
            <RadioBox
              type="button"
              isActive={typeTransaction === 'deposit'}
              activeColor='green'
              onClick={() => setTypeTransaction('deposit')}
            >
              <img src={entradas} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
              type="button"
              isActive={typeTransaction === 'withdraw'}
              activeColor='red'
              onClick={() => setTypeTransaction('withdraw')}
            >
              <img src={saidas} alt="Saída" />
              <span>Saída</span>
            </RadioBox>
          </TransactionsTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>

      </Container>
    </Modal>
  );
}