import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './TransactionsContext';

Modal.setAppElement('#root');

export function App() {

  const [isNewtransactionModalOpen, setIsNewtransactionModalOpen] = useState(false);

  function handleOpenNewtransactionModal(){
    setIsNewtransactionModalOpen(true);
  }

  function handleCloseNewtransactionModal(){
    setIsNewtransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewtransactionModal}/>
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewtransactionModalOpen}
        onRequestClose={handleCloseNewtransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}