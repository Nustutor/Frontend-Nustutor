import react from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import HeroNavbar from '@/components/navbar/heroNav'
import SearchResults from '@/components/search/searchresults'
import Search from '@/components/search'

const SearchPage = () => {
    return (
        <div className="flex flex-col justify-start bg-white">
            <Search/>
        </div>
    )
}

export default SearchPage;