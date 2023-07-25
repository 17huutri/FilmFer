
import { useParams } from "react-router-dom";
import { Data } from '../shared/ListOfFilms'
import { useState } from 'react';
import { Icon } from "react-materialize";
import ModalCase from './ModalCase';
export default function Detail() {
    const userName = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const film = Data.find(obj => {
        return obj.id == userName.id;

    });
    return (
        <div className='container-detail'>
            <div className='product-card-detail'>
                <div className='badge'>{film.title}</div>
                <div className='product-tumb'>
                    <img src={`../${film.img}`} alt='' />
                    <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
                        <Icon>ondemand_video</Icon>
                    </a>

                </div>
                <div className='product-details'>
                    <h4>Year: {film.year}</h4>
                    <h4>Nation: {film.nation}</h4>
                    <p>{film.info}</p>
                    <div className='product-bottom-details'></div>
                    {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}

                </div>
            </div>
        </div>
    );
}
