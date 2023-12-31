import react from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import HeroNavbar from '../navbar/heroNav'
import SearchResults from './searchresults'

const Search = () => {
    return (
        <div className="flex flex-col justify-start bg-white">
            <HeroNavbar/>
            <SearchResults/>
            <Footer/>
        </div>
    )
}

export default Search;