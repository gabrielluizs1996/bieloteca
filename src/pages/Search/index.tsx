import { faBook, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import './styles.scss'

function Search() {
    const { booksData, handleSubmit, handleSetSearch, handleGetBook } = useContext(AuthContext)
    

    return (
        <>
            <div className="container-search">
                <form onSubmit={handleSubmit} className="input">
                    <input
                        onChange={handleSetSearch}
                        type="text"
                        placeholder="Pesquise por nome ou autor do livro..." />
                    <button
                        onClick={handleSubmit}
                        className="btn-icon">
                        <FontAwesomeIcon className="icon" icon={faSearch} />
                    </button>
                </form>
            </div>
            <div className="content-card">
                {booksData!.map((book, index) => {
                    return (
                        <div className="card" key={book.id}>
                            <div className="img-container">
                                {book.volumeInfo.imageLinks === undefined ?
                                    <div className="default-book">
                                        <FontAwesomeIcon icon={faBook} />
                                        <p>Capa indisponível</p>
                                    </div> :
                                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={`Livro ${book.volumeInfo.title}`} />}
                            </div>
                            <div className="card-container">
                                <h2>{book.volumeInfo.title}</h2>
                                <div className="card-content">
                                    <p>{book.volumeInfo.authors}</p>
                                    <p>{book.volumeInfo.publishedDate}</p>
                                    <p>{book.volumeInfo.publisher}</p>
                                </div>
                                <div>
                                    <button onClick={() => handleGetBook(index)}>Mais informações</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Search
