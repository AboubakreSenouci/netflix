
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import {useState} from 'react';
import Icon from "./components/icon/icon";
import logo from "./netflixLogo.png";

 interface sideMenuProps  {
    setSideMenu : (sideMenu : boolean) => void,
}


const  SideMenu: React.FC<sideMenuProps> = ({setSideMenu}) =>
{
    const element =[
        {name: 'Home', link: '/'},
        {name: 'Series', link: '/'},
        {name: 'Movies', link: '/'},
        {name: 'Popular', link: '/'},
        {name: 'List', link: '/'},
    ]
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="bg-black min-h-max w-full">
            <img className='h-14 p-4 mx-6' src={logo} alt="image"/>
            <button className='absolute top-3 right-6 text-3xl text-white xl:hidden' onClick={() => setSideMenu(false)}><GiHamburgerMenu/></button>
            <div className="rounded-2xl pt-20 pl-12">
            {isOpen && <input className='text-black border-none outline-none px-2 cursor-pointer rounded-2xl' placeholder="Type to Search..." 
                  onDoubleClick={() => setIsOpen(false)}/>}
                  <button className={`${isOpen? ' text-black px-2' : 'text-white bg-black px-2'}`}
                  onClick={()=> setIsOpen(true)}
                  ><Icon icon={'search'}/></button>
            </div>
            <div className="text-white text-xl pt-20  grid gap-4 tracking-widest">
                {element.map((elm) => (
                  <Link to='' className="hover:bg-grey200 w-full pl-14 py-3 duration-300">{elm.name}</Link>
                ))}
            </div>
            <div className="flex gap-12 text-grey200  mt-14 justify-center pb-14">
                <Link to='' className='text-xl'>Kid</Link>
                <Link to=''><Icon icon={'gift-box'}/></Link>
                <Link to=''><Icon icon={'notification'}/></Link>
            </div>
        </div>
    )
}

export default SideMenu;