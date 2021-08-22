import React, { useState, useEffect,FormEvent } from "react";
import Rating from '@material-ui/lab/Rating';



import './styles.css';

export interface GameProps {
  id?: number;
  title?: string;
  thumbnail?: string;
  short_description?: string;
  game_url?: string;
  genre?: string;
  platform?: string;
  publisher?: string;
  developer?: string;
  release_date?: string;
  freetogame_profile_url?: string;
  evaluation?: number;

}
const Game: React.FC<GameProps> = (props) => {

  const localValue = localStorage.getItem('classification'+props.id);

  const localStatus = localStorage.getItem('status'+props.id);
  
  const [value, setValue] = React.useState<number | null>( localValue != null ? parseInt(localValue) : 0);

  const [status,setStatus] = useState(localStatus != null ? parseInt(localStatus) : '');

  useEffect(() => {
    
  }, [status]);

  return (
    <div id="game-block">
      <div className="img-block">
        <img src={props.thumbnail} alt="Hyago Assis" className="img-game" />
      </div>
      <div className="content-block">
        <p>Título: {props.title}</p>
        <p>Gênero: {props.genre}</p>
        <p>Plataforma: {props.platform}</p>
        <p>Editora: {props.publisher}</p>
        <p>Link: {props.game_url}</p>
        <p>Descrição: {props.short_description}</p>

        <div className="content-classification">
          <div className="evaluation">
            <p>Avalie</p>
            <Rating
              name="simple-controlled"
              value={value}            
              max={4}
              onChange={(event, newValue) => {
                if (newValue != null) {
                  localStorage.setItem('classification'+props.id, newValue.toString());
                  setValue(newValue);
                }
              }}
            />
          </div>
          <div className="status">
            <p>Status</p>
            <select
              value={'teste'}
              onChange={e => { 
                localStorage.setItem('status'+props.id, e.target.value)
                console.log(status); 
                setStatus(e.target.value)
              }}
            >
              <option> Selecione uma opção </option>
              <option> Joguei</option>
              <option> Jogando</option>
              <option> Querendo Jogar</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;