import React from 'react';
import classNames from 'classnames';

const styles = {
    title : 'text-red font-bold capitalize',
    light:'text-[11px] text-grey300 capitalize',
    regular1:'text-[13px] text-grey400 capitalize',
    medium1:'text-[14px] capitalize',
    black: 'text-[14px] text-black font-semibold capitalize',
    medium2: 'text-[22px] text-black capitalize',
    regular2: 'text-[26px] capitalize',
    medium3: 'text-[26px] font-semibold capitalize ',
    medium4: 'text-[30px] capitalize',
}as const;

type TypographyProps = {
    variant : keyof typeof styles;
    as : 'h1' |'span';
    className?: string;
    children?: React.ReactNode;
};

const Typography: React.FC<TypographyProps> = (props) => {
    const {variant, className, children, ...other} = props;
    const c = classNames(styles[variant],
        {[className || '']: !!className,}
    )
    return (
        <other.as className={c} {...other}>
            {children}
        </other.as>
    )
}

export default Typography;
