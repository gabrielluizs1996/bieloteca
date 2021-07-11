import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import './styles.scss'

function Book() {
    // const [search, setSearch] = useState('')
    // const [book, setBook] = useState<BooksData[]>([])
    const { book } = useContext(AuthContext)

    return (
        <>
            <div className="container-book">
                <Link to='/search'>
                    <div className="return">
                        <FontAwesomeIcon icon={faChevronLeft} />
                        <p>Voltar</p>
                    </div>
                </Link>
                <div className="book-card">
                    <div className="book-info-container">
                        {book?.volumeInfo.imageLinks === undefined ? null as any :
                            <div>
                                <img src={book?.volumeInfo.imageLinks.thumbnail} alt={book?.volumeInfo.title} />
                            </div>}
                        <div className="book-title">
                            <h2>{book?.volumeInfo.title}</h2>
                            <div className="info-content">
                                <p>{book?.volumeInfo.authors}</p>
                                <p>{book?.volumeInfo.publishedDate}</p>
                                <p>{book?.volumeInfo.publisher}</p>
                            </div>
                        </div>
                    </div>
                    <div className="button-container">
                        <a href={book?.volumeInfo.previewLink} target="_blank" rel="noreferrer">
                            preview
                            <FontAwesomeIcon icon={faChevronRight} />
                        </a>
                    </div>
                </div>
                <div className="description-content">
                    <p>{book?.volumeInfo.description}</p>
                </div>
            </div>
        </>
    )
}

export default Book