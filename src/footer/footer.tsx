import { Link } from "react-router-dom";
import Button from "../components/button/button";
import Icon, { IconProps } from "../components/icon/icon"
import LinkList from "./link-list";


const socialMedia:  Array<{
    iconProps?: IconProps;
    link: string;
    title?: string;
  }> = [
    { iconProps: { icon: 'facebook' }, link: '' }, 
    { iconProps: { icon: 'twitter' }, link: '' },
    { iconProps: { icon: 'instagram' }, link: '' }, 
    { iconProps: { icon: 'youtube' }, link: '' },
]

const footerLinks: Array<Array<{
  iconProps?: IconProps;
  link: string;
  title?: string;
}>> = [
  [
    {link: '', title: 'Audio and Subtitles'},
    {link: '', title: 'Media Center'},
    {link: '', title: 'Security'},
    {link: '', title: 'Contact us'},
  ],
  [
    {link: '', title: 'Audio and Subtitles'},
    {link: '', title: 'Media Center'},
    {link: '', title: 'Security'},
    {link: '', title: 'Contact us'},
  ],
  [
    {link: '', title: 'Audio and Subtitles'},
    {link: '', title: 'Media Center'},
    {link: '', title: 'Security'},
    {link: '', title: 'Contact us'},
  ],
  [
    {link: '', title: 'Audio and Subtitles'},
    {link: '', title: 'Media Center'},
    {link: '', title: 'Security'},
    {link: '', title: 'Contact us'},
  ]
]

const Footer: React.FC<{}> = (props) => {
  const s = "{i-062d573a0ee099242}"
  return (
    <div className="flex justify-center items-center w-full bg-black text-grey200 ">
      <div className="flex flex-col justify-center max-w-7xl gap-y-6 py-6 px-4">
        <LinkList list={socialMedia} className="flex flex-row w-full gap-6" />
        <div className="flex flex-wrap items-center w-full gap-x-40 gap-y-10">
          {footerLinks.map(links => (
            <LinkList list={links} /> 
          ))}
        </div>
        <Button 
          className="w-max" 
          variant="outlined1"
        >
          Service Code
        </Button>
        <span>© 1997-2021 Netflix, Inc. {s}</span>
      </div>
    </div>
  )
}
export default Footer;