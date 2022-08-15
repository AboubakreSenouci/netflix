import { ComponentMeta, ComponentStory } from "@storybook/react";
import Navbar from "./navbar";

export default {
    title: 'Navbar',
    component: Navbar,
}as ComponentMeta<typeof Navbar>;

export const navbar : ComponentStory<typeof Navbar> = () => {
    return(
        <Navbar/>
    )
}