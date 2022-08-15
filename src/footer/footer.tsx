import { Link } from "react-router-dom";
import Button from "../components/button/button";
import Icon from "../components/icon/icon"


const Footer : React.FC<{}> = (props) => {
    const s = "{i-062d573a0ee099242}"
    return(
        <div className="bg-black text-grey200 flex justify-center gap-x-32 md:grid pb-4">
          <div className=" grid gap-6 py-8">
            <div className="flex gap-6">
               <Link to=''> <Icon icon={"facebook"} size={24}/></Link>
               <Link to=''> <Icon icon={"instagram"} size={24}/></Link>
               <Link to=''> <Icon icon={"twitter"} size={24}/></Link>
               <Link to=''> <Icon icon={"youtube"} size={24}/></Link>
            </div>
            <div className="grid gap-3">
                <Link to=''>Audio and Subtitles</Link>
                <Link to=''>Media Center</Link>
                <Link to=''>Security</Link>
                <Link to=''>Contact us</Link>
            </div>
            <Button className="w-max hover:bg-grey200 hover:text-black duration-500 transition-all ease-linear" variant={"outlined1"}>Service Code</Button>
            <span>© 1997-2021 Netflix, Inc. {s}</span>
          </div>
          <div className="mt-20 flex flex-col gap-3">
            <Link to=''>Audio Description</Link>
            <Link to=''>Investor Relations</Link>
            <Link to=''>Legal Provisions</Link>
          </div>
          <div className="mt-20 flex flex-col gap-3">
            <Link to=''>Help center</Link>
            <Link to=''>Job oppurtunities</Link>
            <Link to=''>Cookie Preferences</Link>
          </div>
          <div className="mt-20 flex flex-col gap-3">
            <Link to=''>Gift Cards</Link>
            <Link to=''>Terms of Use</Link>
            <Link to=''>Corporate Information</Link>
          </div>
        </div>
    )
}
export default Footer;