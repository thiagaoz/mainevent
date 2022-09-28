import React from 'react'
import './Modal.css';
import { Item, items } from '../resources/tables';

interface Props {
    weaponModal: boolean,
    setWeaponModal: React.Dispatch<React.SetStateAction<boolean>>,
    weapon: Item,
    setWeapon: React.Dispatch<React.SetStateAction<Item>>,
    updateItem: (newItemString: string, item: Item, setItem: React.Dispatch<React.SetStateAction<Item>>) => void
}

export const WeaponModal = ({weaponModal, setWeaponModal, weapon, setWeapon, updateItem}: Props) => {
    console.log('WeaponPup Active')
  return(
    <div className='modal'>
        <div className="overlay">
            <div className="modal-content">
                <h3 className='modal-label'>Weapons</h3>
                <button className='btn-rounded btn-equip-menu' onClick={() => {
                    setWeaponModal(false);
                    updateItem(items.longsword.code, weapon, setWeapon);
                    }}>Longsword - Damage: Normal, One Hand $10</button>
                    <br></br>
                <button className='btn-rounded btn-equip-menu' onClick={() => {
                    setWeaponModal(false);
                    updateItem(items.greataxe.code, weapon, setWeapon);
                    }}>Greataxe - Damage: High, Two Hands $20</button>
            </div>
        </div>
    </div>
  )
}
