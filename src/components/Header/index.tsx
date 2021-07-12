import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import './styles.scss'
import { Link } from 'react-router-dom'


function Index() {
    return (
        <div className="container-header">
            <div className="header">
                <div className="logo">
                    <FontAwesomeIcon icon={faBook} />
                    <Link to="/">
                        <h1>Bieloteca</h1>
                    </Link>
                </div>
                <div className="links">
                    <a href="https://github.com/gabrielluizs1996/bieloteca" target="_blank" rel = "noreferrer">Sobre</a>
                    <a href="https://www.linkedin.com/in/gabrielluizs1996/" target="_blank" rel = "noreferrer">Contato</a>
                </div>
            </div>
        </div>
    )
}

export default Index
