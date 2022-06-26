import React, { useState, useEffect } from 'react'
import List from './List'
import Search from './Search'
import axios from 'axios'

const Novels = () => {
    const [search, setSearch] = useState('')
    const [novels, setNovels] = useState([])

    useEffect(() => {
        fetchNovelsData()
    }, [])

    const fetchNovelsData = async () => {
        let novelsData = await axios.get('http://localhost:1337/api/novels')
        setNovels(novelsData.data)
    }

    return (
        <div>
            <Search search={search} setSearch={setSearch} />
            <List novels={novels} search={search} />
        </div>
    )
}

export default Novels
