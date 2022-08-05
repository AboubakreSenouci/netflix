import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import iconSet from "../../assets/icons/selection.json";
import Icon from './icon';
import IconTypes from './icon.types';

export default {
  title: 'Icons',
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const Story: ComponentStory<typeof Icon> = () => {
  const { icons } = iconSet;
  return (
    <div className="w-screen flex flex-wrap gap-x-5 gap-y-5 p-4 bg-slate-500 ">
      {
        icons.map((icon) => {
          return (
            <div key={icon.properties.id} className="flex flex-col gap-y-2">
              <p>{icon.properties.name}</p>
              <Icon icon={icon.properties.name as IconTypes} />
            </div>
          )
        })
      }
    </div>
  );
};