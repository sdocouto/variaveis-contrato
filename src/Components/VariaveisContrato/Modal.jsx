import React from 'react'
import ClicktoCopy from '../Util/ClicktoCopy';
import './Modal.scss';

const Modal = ({isOpen = false, onClick, nome, variavel, descricao}) => {

    React.useEffect(() => {
        const handleEsc = (event) => {
           if (event.key === 'Escape') {
            onClick();
          }
        };
        window.addEventListener('keydown', handleEsc);
    
        return () => {
          window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    return (
        isOpen && 
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title modal-titulo" id="exampleModal1Label">Variáveis de Contrato</h5>
                    <button onClick={onClick} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <div className="info">
                    <div>
                        <p className="modal-nome">{nome}</p>
                        <div className="modal-variavel copy-content" id="select-this">
                            {variavel}
                            <ClicktoCopy copyText={variavel} />
                        </div>
                    </div>
                    <p className="modal-descricao">{descricao}</p>
                </div>
                </div>
            </div>
            <div className="overflow-modal" onClick={onClick}></div>
        </div>
            
    )
}

export default Modal