import Icon from '../icon/icon';
import logo from './netflixLogo.png';
import picture from './ProfileCard(1).png'

const Navbar : React.FC<{}> = (props) => {
    return(
        <div className="flex justify-between bg-black text-white">
            <div className='flex'>
                <img className='h-14 p-4 mx-6' src={logo} alt="image"/>
                <div className='space-x-10 p-4'>
                    <button>Home</button>
                    <button>Series</button>
                    <button>Movies</button>
                    <button>Pupular</button>
                    <button>List</button>
                </div>
            </div>
            <div className='flex gap-[20px] p-4 mr-4'>
                <button><Icon icon={'search'}/></button>
                <button>Kid</button>
                <button><Icon icon={'gift-box'}/></button>
                <button><Icon icon={'notification'}/></button>
               <div className='flex gap-[5px]'>
                    <img className='h-8' src={picture} alt="profile picture"/>
                    <button><Icon icon={'caret-down'}/></button>
                </div>
            </div>
        </div>
    )
}
export default Navbar;