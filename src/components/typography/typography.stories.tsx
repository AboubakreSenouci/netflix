import { ComponentMeta, ComponentStory } from '@storybook/react';
import Typography from './typography';

export default {
    title:'typography',
    component: Typography,
}as ComponentMeta<typeof Typography>;

export const Story: ComponentStory<typeof Typography> = () => {
    return (
        <div className='grid gap-y-8'>
            <Typography variant={'title'} as={'h1'}> netflix sans  </Typography>
            <Typography variant={'light'} as={'span'}> netflix sans  </Typography>
            <Typography variant={'regular1'} as={'span'}> netflix sans  </Typography>
            <Typography variant={'medium1'} as={'span'}> netflix sans  </Typography>
            <Typography variant={'black'} as={'span'}> netflix sans  </Typography>
            <Typography variant={'medium2'} as={'span'}> netflix sans  </Typography>
            <Typography variant={'regular2'} as={'span'}> netflix sans  </Typography>
            <Typography variant={'medium3'} as={'span'}> netflix sans  </Typography>
            <Typography variant={'medium4'} as={'span'}> netflix sans  </Typography>
        </div>
    )
}