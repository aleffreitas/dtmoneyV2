import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export function NewTransactionModal() {
  const [isNewtransactionModalOpen, setIsNewtransactionModalOpen] = useState(false);

  function handleOpenNewtransactionModal(){
    setIsNewtransactionModalOpen(true);
  }

  function handleCloseNewtransactionModal(){
    setIsNewtransactionModalOpen(false);
  }
  return (
    <Modal 
      isOpen={isNewtransactionModalOpen}
      onRequestClose={handleCloseNewtransactionModal}
    >
      <h2>Cadastrar transação</h2>
    </Modal>
  );
}