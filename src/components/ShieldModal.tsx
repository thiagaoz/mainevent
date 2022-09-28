import React from 'react'
import './Modal.css';
import { Item, items } from '../resources/tables';

interface Props {
    shieldModal: boolean,
    setShieldModal: React.Dispatch<React.SetStateAction<boolean>>,
    shield: Item,
    setShield: React.Dispatch<React.SetStateAction<Item>>,
    updateItem: (newItemString: string, item: Item, setItem: React.Dispatch<React.SetStateAction<Item>>) => void
}

export const ShieldModal = ({shieldModal, setShieldModal, shield, setShield, updateItem}: Props) => {
    console.log('ShieldPup Active')
  return(
    <div className='modal'>
        <div className="overlay">
            <div className="modal-content">
                <h3 className='modal-label'>Shield</h3>
                <button className='btn-rounded btn-equip-menu' onClick={() => {
                    setShieldModal(false);
                    updateItem(items.noShield.code, shield, setShield);
                    }}>No shield - $0</button>
                    <br></br>
                <button className='btn-rounded btn-equip-menu' onClick={() => {
                    setShieldModal(false);
                    updateItem(items.shield.code, shield, setShield);
                    }}>Shield - Extra Defense $10</button>
            </div>
        </div>
    </div>
  )
}
