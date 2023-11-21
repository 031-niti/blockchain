import axios from 'axios';
import React, { useState, useEffect } from "react"
import Favpoke from './Favpoke';

const Poke = ({ handleBuy, handleSetNitiValue }) => {
    const [poke, setPoke] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [number, setNumber] = useState(1);
    const [fav, setFav] = useState([]);

    useEffect(() => {
        let abortController = new AbortController();
        const loadPoke = async () => {
            try {
                setLoading(true);
                let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`, {
                    signal: abortController.signal
                });
                setPoke(res.data);
            } catch (error) {
                setError(error);
            }
        }
        loadPoke();
        return () => abortController.abort();
    }, [number]);

    const prevPoke = () => {
        setNumber((number) => number - 1);
    }
    const nextPoke = () => {
        setNumber((number) => number + 1);
    }
    const addFav = async () => {
        await handleBuy();
        setFav((oldState) => [...oldState, poke]);
    }

    const handleCombinedClick = async () => {
        await addFav();
    }
    return (
        <>
            <div>
                <div className='grid grid-cols-2'>
                    <div>
                        <h1 className='text-3xl mb-3 uppercase font-semibold'>{poke.name}</h1>
                        <div className='join justify-center mt-1'>
                            <button className='btn btn-warning hover:bg-yellow-500 hover:text-base-100 mx-2 w-28' onClick={prevPoke}>Previous</button>
                            <button className='btn btn-info hover:bg-blue-500 hover:text-base-100 mx-2 w-28' onClick={nextPoke}>Next</button>
                        </div>
                        {poke.sprites && poke.sprites.other && poke.sprites.other.home && (
                            <img className='border-b-2 pb-2' src={poke.sprites.other.home.front_default} alt={poke.name} />
                        )}
                        <ul className='my-2 pb-2 border-b-2'>
                            <p className='text-xl uppercase font-semibold'>Feature</p>
                            {poke?.abilities ? (
                                poke.abilities.map((abil, index) => (
                                    <li className='capitalize ' key={index}>{abil.ability.name}</li>
                                ))
                            ) : (
                                <li>No abilities available</li>
                            )}
                        </ul>
                        <div className='flex flex-col justify-between items-center mt-2'>
                            <input className="input input-bordered w-58 text-lg p-6 bg-base-200 text-center mt-1" placeholder="Enter the price" onChange={handleSetNitiValue} />
                            <a className='btn btn-error hover:bg-rose-600 hover:text-base-100 text-md mt-2' onClick={handleCombinedClick}>Buy Pokemon</a>
                        </div>
                    </div>
                    <div className='border-l-2 w-full px-6'>
                        <Favpoke fav={fav} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Poke;
