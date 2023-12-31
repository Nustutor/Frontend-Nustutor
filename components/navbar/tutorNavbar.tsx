import Logo from './logo';
import Links from './navLinks';
import TutorNav from '../offerings/tutorNav';

const TutorNavbar = () => {
        return (
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 py-6 m-2 p-16">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-8">
                <Logo/>
                <Links/>
                <TutorNav/>
            </div>
            </div>
          )
}

export default TutorNavbar;