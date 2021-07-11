import { createContext, FormEvent, useState } from "react"
import { ReactNode } from "react"
import { useHistory } from "react-router-dom"
import { api } from "../config/api"

type BooksData = {
    id: string
    volumeInfo: VolumeInfo
}

type VolumeInfo = {
    title: string
    subtitle: string
    authors: []
    publishedDate: string
    description: string
    publisher: string
    imageLinks: ImageLinks
    previewLink: string
}

type ImageLinks = {
    thumbnail: string
}

type AuthContextType = {
    booksData: BooksData[],
    handleSubmit: (event: FormEvent) => void,
    handleSetSearch: (event: FormEvent<HTMLInputElement>) => void,
    handleGetBook: (index: number) => BooksData | undefined,
    book: BooksData | undefined
}

type AuthContextProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider(props: AuthContextProviderProps) {
    const [booksData, setBooksData] = useState<BooksData[]>([])
    const [book, setBook] = useState<BooksData>()
    const [search, setSearch] = useState('')
    const history = useHistory()

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

        const getData = async () => {
            const data = await api.get(`${search}&${process.env.REACT_APP_API_KEY}&maxResults=30`)
            setBooksData(data.data.items)
        }

        getData()
    }

    const handleSetSearch = (event: FormEvent<HTMLInputElement>) => {
        event.preventDefault()

        setSearch(event.currentTarget.value)
    }

    const handleGetBook = (index: number) => {
        setBook(booksData[index])
        history.push('/book')
        
        return book
    }

    return (
        <AuthContext.Provider value={{ booksData, handleSubmit, handleSetSearch, handleGetBook, book }}>
            {props.children}
        </AuthContext.Provider>
    )
}