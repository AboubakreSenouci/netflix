import { ComponentMeta, ComponentStory} from "@storybook/react";
import Image from "./image";
import logo from 'netflixLogo.png';

export default {
    title : 'image',
    component : Image,
}as ComponentMeta<typeof Image>;

export const image : ComponentStory <typeof Image> = () => {
    return(
        <div>
            <Image variant={"style1"} src={logo}/>
        </div>
    )
}