import { useEffect, useState } from 'react'
import Masonry from 'react-masonry-css'
import { getCharacters, getInfo } from '../../services/characters'
import Character from '../Character'
import NavPage from '../NavPage'
import './index.css'

function CharacterList() {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setpage] = useState(1)
    const [info, setinfo] = useState({})

    useEffect(() => {
        Promise.all([
            getCharacters({ page }),
            getInfo(),
        ]).then(resolves => {
            setCharacters(resolves[0])
            setinfo(resolves[1])
            setLoading(false)
        }).catch(err => {
            console.log(err)
        })

    }, [page])

    return (
        <div className="container">
            <NavPage page={page} setPage={setpage} maxPage={info.pages} />
            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {
                    loading ? (
                        <h2 className='text-center'>Loading...</h2>
                    ) : (
                        characters.map(character => {
                            return (
                                <Character key={character.id} character={character} />
                            )
                        })
                    )
                }
            </Masonry>
            <NavPage page={page} setPage={setpage} maxPage={info.pages} />
        </div>
    )
}
export default CharacterList