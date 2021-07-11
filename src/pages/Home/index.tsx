import React from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bookImg from '../../assets/images/books.png'
import './styles.scss'
import { useHistory } from 'react-router-dom'

function Home() {
    const history = useHistory()

    const handleNavigate = () => {
        history.push('/search')
    }

    return (
        <div className="container-home">
            <div className="content">
                <div className="containerButton">
                    <h2>Encontre o seu livro em qualquer lugar</h2>
                    <button
                        onClick={handleNavigate}
                        className="button">
                        Buscar agora
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
                <div>
                    <img className="image" src={bookImg} alt="Livros empilhados" />
                </div>
            </div>
        </div>
    )
}

export default Home
