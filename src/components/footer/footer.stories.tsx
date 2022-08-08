import React from "react";
import { ComponentMeta, ComponentStory, composeStory } from "@storybook/react";
import Footer from "./footer";

export default {
    title: 'Footer',
    component: Footer,
}as ComponentMeta<typeof Footer>;

export const footer : ComponentStory<typeof Footer> = () => {
    return(
        <Footer/>
    )
}