import { useEffect, useState } from 'react'
import { getPlace } from '../../services/characters'
import './index.css'

function Character({ character }) {
    const [origin, setOrigin] = useState({})
    const [location, setlocation] = useState({})

    useEffect(() => {
        Promise.all([
            getPlace({ url: character.origin.url }),
            getPlace({ url: character.location.url }),
        ]).then(resolves => {
            setOrigin(resolves[0])
            setlocation(resolves[1])
            console.log(resolves)
        }).catch(err => {
            console.log(err)
        })

    }, [])

    return (
        <div className="text-center p-5 bg-white text-dark rounded-5 ch-m">
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} className='img-fluid rounded-5 mb-4' />
            <p>{character.status} - {character.species}</p>
            <p>{character.gender}</p>
            <h2>Origin</h2>
            {
                typeof origin !== 'undefined' ? (
                    <>
                        <p>{origin?.name}</p>
                        <p>{origin?.type}</p>
                        <p>{origin?.dimension}</p>
                    </>
                ) : (
                    <p>Unknow</p>
                )
            }
            <h2>Location</h2>
            {
                typeof location !== 'undefined' ? (
                    <>
                        <p>{location?.name}</p>
                        <p>{location?.type}</p>
                        <p>{location?.dimension}</p>
                    </>
                ) : (
                    <p>Unknow</p>
                )
            }
        </div>
    )
}
export default Character