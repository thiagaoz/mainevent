import React from 'react'
import './Modal.css';
import {useNavigate} from 'react-router-dom';


interface Props {
    confirmWindow: boolean,
    setConfirmWindow: React.Dispatch<React.SetStateAction<boolean>>,
    gold: number,
}

export const ConfirmWindow = ({confirmWindow, setConfirmWindow, gold}: Props) => {

    let navigate = useNavigate();

    const handleCancel = () =>{
        setConfirmWindow(!confirmWindow);
    }

  return (
    <div className='modal'>
        <div className="overlay">
            <div className="modal-content">
                <h3 className='modal-label'>W A R N I N G !</h3>
                <div className="checkout-list">
                    <span> You still have ${gold} to spend!</span>
                    <br></br>
                    <span>Do you want to proceed anyway?</span>
                </div>            
                <div className="button-container">
                    <button className='confirm-btn button-small' type='button'
                        onClick={()=> navigate('/mainevent')}>PROCEED</button>
                    <button className='confirm-btn button-small' type='button' 
                        onClick={() => handleCancel()}>RETURN</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConfirmWindow
