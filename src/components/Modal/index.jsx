import './modal.scss';
import { useState,useRef,useEffect } from 'react';
/**
 * Default Modal component
 */

export const Modal = ({ isOpen, hasCloseBtn, onClose, children }) => {
    const [isModalOpen, setModalOpen] = useState(isOpen);
    const modalRef = useRef(null);

    useEffect(() => {
        const modalElement = modalRef.current;
        if (modalElement) {
            if (isModalOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isModalOpen]);

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
        setModalOpen(false);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            handleCloseModal();
        }
    };

    return (
        <dialog className='modal' ref={modalRef} onKeyDown={handleKeyDown}>
            {hasCloseBtn && (
                <button className="modal-close-btn" onClick={handleCloseModal}>
                    Close
                </button>
            )}
            {children}
        </dialog>
    );

    // return (
    //     <div>
    //         <div id="modal-header">
    //             {title}
    //             <button name="close" onClick={onClose}></button>
    //         </div>
    //         <div id="modal-content"></div>
    //         <div id="modal-footer"></div>
    //     </div>

    // )
}