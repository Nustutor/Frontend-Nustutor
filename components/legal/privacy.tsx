import react from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const Privacy = () => {
    return (
        <div className="flex flex-col justify-start bg-white">
            <Navbar/>
            <div className="flex flex-col justify-start items-center flex-grow flex-shrink p-16">
                <h1 className="text-4xl font-bold text-center">Privacy Policy</h1>
                <div className="flex flex-col justify-start items-start flex-grow flex-shrink p-16">
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Privacy;