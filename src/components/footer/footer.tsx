import Button from "../button/button";
import Icon from "../icon/icon"


const Footer : React.FC<{}> = (props) => {
    const s = "{i-062d573a0ee099242}"
    return(
        <div className="bg-black text-grey200 flex justify-center gap-x-32">
          <div className=" grid gap-6 py-8">
            <div className="flex gap-6">
                <Icon icon={"facebook"} size={24}/>
                <Icon icon={"instagram"} size={24}/>
                <Icon icon={"twitter"} size={24}/>
                <Icon icon={"youtube"} size={24}/>
            </div>
            <div className="grid gap-3">
                <span>Audio and Subtitles</span>
                <span>Media Center</span>
                <span>Security</span>
                <span>Contact us</span>
            </div>
            <Button className="w-max" variant={"outlined1"}>Service Code</Button>
            <span>© 1997-2021 Netflix, Inc. {s}</span>
          </div>
          <div className="mt-20 flex flex-col gap-3">
            <span>Audio Description</span>
            <span>Investor Relations</span>
            <span>Legal Provisions</span>
          </div>
          <div className="mt-20 flex flex-col gap-3">
            <span>Help center</span>
            <span>Job oppurtunities</span>
            <span>Cookie Preferences</span>
          </div>
          <div className="mt-20 flex flex-col gap-3">
            <span>Gift Cards</span>
            <span>Terms of Use</span>
            <span>Corporate Information</span>
          </div>
        </div>
    )
}
export default Footer;