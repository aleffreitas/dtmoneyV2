import entradas from '../../assets/entradas.svg';
import saidas from '../../assets/saidas.svg';
import total from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Summary(){

  const { transactions } = useTransactions();

  const summary = transactions.reduce((accumulator, transaction) => {
    if(transaction.typeTransaction === 'deposit'){
      accumulator.deposits += transaction.amount;
      accumulator.total += transaction.amount;
    } else {
      accumulator.withdraws += transaction.amount;
      accumulator.total -= transaction.amount;
    }

    return accumulator;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  });

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradas} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={saidas} alt="Saídas" />
        </header>
        <strong>
          {`- 
            ${new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(summary.withdraws)}          
          `}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}