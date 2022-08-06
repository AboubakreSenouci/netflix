import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./button";


export default {
    title: 'Button',
    component : Button,
}as ComponentMeta<typeof Button>;

export const Story :ComponentStory<typeof Button> = () => {
    return(
      <div className="bg-blue-300 w-full h-screen flex justify-center items-center space-x-4 flex-wrap">
         <Button variant="contained1" icon="play">play</Button>
         <Button variant="contained2" icon="notification">more info</Button>
         <Button variant="outlined1">profilepage</Button>
         <Button variant="outlined2">code service</Button>
      </div>
    )
} 