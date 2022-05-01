import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';

import entradas from '../../assets/entradas.svg';
import saidas from '../../assets/saidas.svg';

import { CloseButton, Container, IconCloseButton, RadioBox, TransactionsTypeContainer } from './styles';
interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {

  const { createTransaction } = useTransactions();

  const [typeTransaction, setTypeTransaction] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      typeTransaction,
    })

    setTitle('');
    setAmount(0);
    setCategory('');
    setTypeTransaction('deposit');
    onRequestClose();

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
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
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