import './CreateChar.css';
import React, { useRef, useState } from 'react';
import '../resources/tables.ts';
import { items, Item, Weapon } from '../resources/tables';
import {useNavigate} from 'react-router-dom';
import ConfirmWindow from './ConfirmWindow';
import { ArmorModal } from './ArmorModal';
import { WeaponModal } from './WeaponModal';
import { ShieldModal } from './ShieldModal';

const CreateChar = () => {
    
    let navigate = useNavigate();

    const [confirmWindow, setConfirmWindow] = useState<boolean>(false);
    const [armorModal, setArmorModal] = useState<boolean>(false);
    const [weaponModal, setWeaponModal] = useState<boolean>(false);
    const [shieldModal, setShieldModal] = useState<boolean>(false);

    const [str, setStr] = useState<number>(3);
    const [dex, setDex] = useState<number>(3);
    const [agi, setAgi] = useState<number>(3);
    const [con, setCon] = useState<number>(3);
    const [points, setPoints] = useState<number>(0);
    const [gold, setGold] = useState<number>(80);
    const [armor, setArmor] = useState<Item>(items.empty);
    const [weapon, setWeapon] = useState<Item>(items.empty);
    const [shield, setShield] = useState<Item>(items.empty);
    const [potions, setPotions] = useState<number>(0);
    const shieldRef = useRef<string>('default');
    const [freeHand, setFreeHand] = useState<boolean>(true);
    
    

    const plusButton = ( num: number, setNum: React.Dispatch<React.SetStateAction<number>>) =>{
        setNum(num+1);
        setPoints(points-1);
    }

    const minusButton = ( num: number, setNum: React.Dispatch<React.SetStateAction<number>>) =>{
        setNum(num-1);
        setPoints(points+1);
    }

    const updateItem = (newItemString:string, item:Item, setItem:React.Dispatch<React.SetStateAction<Item>>) =>{
        let newItem = items[newItemString as keyof typeof items];
        let tempGold = gold;
        if (item.name === 'empty') {
            tempGold -=  newItem.cost;
        }
        else{
            tempGold = (tempGold + item.cost - newItem.cost);
        }
        
        if (newItem.type === 'Shield') shieldRef.current = newItem.code;
        if (newItem.type === 'Weapon'){
            let weaponTemp = newItem as Weapon;
            if (weaponTemp.hands === 2){
                shieldRef.current = 'noShield';
                setShield(items.noShield);
                tempGold += 10;
                setFreeHand(false);
            }
            else{
                setFreeHand(true);
            }
        }
        setItem(newItem);
        setGold(tempGold);
        console.log(item);
    }

    const buyPotion = () =>{
        setPotions(potions + 1);
        setGold(gold - 10);
    }

    const sellPotion = () =>{
        setPotions(potions - 1);
        setGold(gold + 10);
    }

    //Check if points and equipment are OK before the fight
    const enterTheArena = () => {
        if (points === 0 && gold === 0 && armor !== items.empty && weapon !== items.empty && shield !== items.empty){
            return navigate('/fight');
        }
        setConfirmWindow(!confirmWindow);
    }

    const disableStartButton = () =>{
        if (points !== 0 || armor === items.empty || weapon === items.empty || shield === items.empty || gold < 0){
            return true;
        }
        return false;
    }

    return (
        <div>
            {confirmWindow? <ConfirmWindow confirmWindow={confirmWindow} setConfirmWindow={setConfirmWindow} gold={gold}/>:null}
            <h1 className='page-title'>Create your character</h1>

            <div className='level-container'>
                <span className='level-label'>Level:&nbsp;1</span>
                <span className='points-label'>Points:&nbsp;{points} </span>
            </div>

            <div className='atributes-container'>
                <div className='atributes-label-container'>
                    <p className='info-container'>STRENGTH
                        <span className='hidden-info'>Make them feel every blow</span> 
                    </p>
                    <p className='info-container'>AGILITY
                        <span className='hidden-info'>It's Harder To Hit a Moving Target</span>         
                    </p>
                    <p className='info-container'>DEXTERITY
                        <span className='hidden-info'>A steady hand is more precise</span> 
                    </p>
                    <p className='info-container'>CONSTITUTION
                        <span className='hidden-info'>A healthy fighters last longer</span> 
                    </p>
                </div>
                <div className='atributes-values-container'>
                    <div className='atr-values'>
                        <button type='button' className='minus-button atr-button button-x-small' 
                            onClick={() => minusButton(str,setStr)} disabled={str<1}> &#60; </button>
                        <span className='atribute-value'>{str}</span>
                        <button type='button' className='plus-button atr-button button-x-small' 
                            onClick={() => plusButton(str,setStr)}disabled={str>4}> &#62; </button>
                        <br></br>
                    </div>
                    <div className='atr-values'>
                        <button type='button' className='minus-button atr-button button-x-small' 
                            onClick={() => minusButton(agi,setAgi)} disabled={agi<1}>&#60;</button>
                        <span className='atribute-value'>{agi}</span>
                        <button type='button' className='plus-button atr-button button-x-small' 
                            onClick={() => plusButton(agi,setAgi)} disabled={agi>4}> &#62; </button>
                        <br></br>
                    </div>
                    <div className='atr-values'>
                        <button type='button' className='minus-button atr-button button-x-small' 
                            onClick={() => minusButton(dex,setDex)} disabled={dex<1}> &#60; </button>
                        <span className='atribute-value'>{dex}</span>
                        <button type='button' className='plus-button atr-button button-x-small' 
                            onClick={() => plusButton(dex,setDex)} disabled={dex>4}> &#62; </button>
                        <br></br>
                    </div>
                    <div className='atr-values'>
                        <button type='button' className='minus-button atr-button button-x-small' 
                            onClick={() => minusButton(con,setCon)} disabled={con<1}> &#60; </button>
                        <span className='atribute-value'>{con}</span>
                        <button type='button' className='plus-button atr-button button-x-small' 
                            onClick={() => plusButton(con,setCon)} disabled={con>4}> &#62; </button>
                    </div>
                </div>
            </div>
            <div className='equip-container'>
            <h2>Equipment:{' $' + gold}</h2>
                <div className='equip-selection'>
                    <div className='armor-container'>
                        <span>Armor</span><br></br>
                        <button className='select-armor btn-rounded' onClick={()=>setArmorModal(true)}>{armor.name}</button>
                        {armorModal?
                            (<ArmorModal armorModal={armorModal} setArmorModal={setArmorModal} armor={armor} setArmor={setArmor}
                                updateItem={updateItem} />
                            )
                            :
                            null
                        }
                    </div>
                    <div className='weapon-container'>
                        <span>Weapon</span><br></br>
                        <button className='select-weapon btn-rounded' onClick={()=>setWeaponModal(true)}>{weapon.name}</button>
                        {weaponModal?
                            (<WeaponModal weaponModal={weaponModal} setWeaponModal={setWeaponModal} weapon={weapon} setWeapon={setWeapon}
                                updateItem={updateItem} />
                            )
                            :
                            null
                        }
                    </div>
                    <div className='shield-container'>
                        <span>Shield</span><br></br>
                        <button className='select-weapon btn-rounded' onClick={()=>setShieldModal(true)}
                        disabled={!freeHand}>{shield.name}</button>

                        {shieldModal?
                            (<ShieldModal shieldModal={shieldModal} setShieldModal={setShieldModal} shield={shield} setShield={setShield}
                                updateItem={updateItem} />
                            )
                            :
                            null
                        }
                    </div>
                    <div className='porion-container'>
                        <span>Potions</span><br></br>
                        <button type='button' className='btn-rounded-small' onClick={() => sellPotion()} disabled={potions===0}> &#60; </button>
                        <button className='potions-quantity btn-rounded-small no-click'>x{potions}</button>
                        <button type='button' className='btn-rounded-small' onClick={() => buyPotion()} disabled={gold===0}> &#62; </button>
                    </div>
                </div>
            </div>
            <button type='button' className='start-button button-long' onClick={()=>enterTheArena()}
                disabled={disableStartButton()}>ENTER THE ARENA</button>
        </div>)
}

export default CreateChar;