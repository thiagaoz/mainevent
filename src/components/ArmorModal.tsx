import React from 'react'
import './Modal.css';
import { Item, items } from '../resources/tables';

interface Props {
    armorModal: boolean,
    setArmorModal: React.Dispatch<React.SetStateAction<boolean>>,
    armor: Item,
    setArmor: React.Dispatch<React.SetStateAction<Item>>,
    updateItem: (newItemString: string, item: Item, setItem: React.Dispatch<React.SetStateAction<Item>>) => void
}

export const ArmorModal = ({armorModal, setArmorModal, armor, setArmor, updateItem}: Props) => {
    console.log('ArmorPup Active')
  return(
    <div className='modal'>
        <div className="overlay">
            <div className="modal-content">
                <h3 className='modal-label'>Armors</h3>
                <div className='equip-modal-select'>
                    <button className='btn-rounded btn-equip-menu' onClick={() => {
                        setArmorModal(false);
                        updateItem(items.hide.code, armor, setArmor);
                        }}>Hide Armor - Defense: Normal $20</button>
                    <button className='btn-rounded btn-equip-menu' onClick={() => {
                        setArmorModal(false);
                        updateItem(items.chain.code, armor, setArmor);
                        }}>Chain Armor - Defense: High $50</button>
                </div>
            </div>
        </div>
    </div>
  )
}
