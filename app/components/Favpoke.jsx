import React from 'react'

function Favpoke({ fav }) {
    return (
        <div>
            <h2 className='text-lg font-semibold'>Your Items Buy</h2>
            <div className='grid grid-cols-4 mx-auto '>
                {fav?.map((data, index) => (
                    <div key={index}>
                        <h3 className='mt-4 capitalize'>{data.name}</h3>
                        <img src={data.sprites.other.home.front_default} alt={data.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Favpoke