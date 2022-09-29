import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

const Home = () => {
    return( <div className='home-div'>
      <h1 className='main-event-text page-title'>
         Main Event
      </h1>
      <p className='intro-text'>Após 9 lutas na arena, sua grande chance chegou!<br></br> 
        Conforme combinado, você ganharia sua liberdade após 10 combates.<br></br>
            Seu oponente é o Exterminador do Norte, que tem a fama de matar seus adversários.<br></br>
            Você só precisa vencer.
      </p>
      <Link to='/createchar'><button className='button-long'>START GAME</button></Link>
    </div>)
  }
export default Home;