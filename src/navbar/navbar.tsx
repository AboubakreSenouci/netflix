import { useState, useEffect } from 'react';
import Icon from '../components/icon/icon';
import logo from '../netflixLogo.png';
import picture1 from './ProfileCard(1).png'
import { Link, Router } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import SideMenu from '../SideMenu';

const Navbar : React.FC<{}> = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOptionOpen, setIsOptionOpen] = useState(false);
    const [value, setValue] = useState(0);
    const [sideMenu, setSideMenu] = useState(false);
    // -------
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1100);

    const updateMedia = () => {
      setDesktop(window.innerWidth > 1100);
    };
  
    useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    });
    // -------

    const element =[
        {name: 'Home', link: '/'},
        {name: 'Series', link: '/'},
        {name: 'Movies', link: '/'},
        {name: 'Popular', link: '/'},
        {name: 'List', link: '/'},
    ]
   
    if(sideMenu && !isDesktop){
        return <SideMenu setIsideMenuOpen={setSideMenu}/>
    }
    return(
        <div className="flex justify-between bg-black text-white">
            <div className='flex'>
                <img className='h-14 p-4 mx-6' src={logo} alt={"netflix"} />
                <div className='space-x-10 p-4 text-xl md:hidden'>
                    {element.map((elem, index) => (
                        <Link to="" className={` cursor-pointer tracking-wider ${index === value && "font-bold"}`}
                        onClick={() => setValue(index)}>{elem.name}</Link>
                    ))}    
                </div>
            </div>
            <div className='flex gap-[30px] p-4 mr-4 md:hidden'>
                <div className='flex bg-white rounded-2xl ml-4'>
                  {isOpen && <input className='text-black border-none outline-none px-2 cursor-pointer rounded-2xl' placeholder="Type to Search..." 
                  onDoubleClick={() => setIsOpen(false)}/>}
                  <button className={`${isOpen? ' text-black px-2' : 'text-white bg-black px-2'}`}
                  onClick={()=> setIsOpen(true)}
                  ><Icon icon={'search'}/></button>
                </div>
                <Link to='' className='text-xl'>Kid</Link>
                <Link to=''><Icon icon={'gift-box'}/></Link>
                <Link to=''><Icon icon={'notification'}/></Link>
               <div className='grid'>
                <div className='flex space-x-2'>
                    <img className='h-8' src={picture1} alt="profile"/>
                    <button onClick={() => setIsOptionOpen(!isOptionOpen)}><Icon icon={'caret-down'}/></button>
                </div>
                    {isOptionOpen && 
                        <ul className='bg-grey300 text-black absolute top-12 z-50 p-2 rounded'>
                            <li className='hover:font-bold cursor-pointer'>Settings</li>
                            <li className='hover:font-bold cursor-pointer'>Help</li>
                            <li className='hover:font-bold cursor-pointer'>Log Out</li>
                        </ul>
                    }
                </div>
            </div>
            <button className='absolute top-3 right-6 text-3xl xl:hidden' onClick={() => setSideMenu(true)}><GiHamburgerMenu/></button>
        </div>
    )
}
export default Navbar;