import React, { ReactNode } from "react";
import classNames from "classnames";
import IconTypes from "../icon/icon.types";
import Icon from "../icon/icon";

const styles = {
   outlined1: 'border border-1.5 border-grey300 text-grey300 uppercase py-1 px-4',
   outlined2: 'border border-1.5 border-grey300 text-grey300 font-semibold capitalize py-1 px-4',
   contained1: 'bg-white text-black py-1 px-4 rounded-sm shadow-lg capitalize flex  items-center',
   contained2: 'bg-grey text-white capitalize py-1 px-4 rounded-sm flex items-center'
}as const ;

type ButtonProps = {
    variant: keyof typeof styles;
    icon?: IconTypes;
    className? : string;
    children? : React.ReactNode;
};

const Button : React.FC<ButtonProps> = (props) => {
    const {variant,className,children,icon} = props;
    const c = classNames(styles[variant],
        {[className || '']: !!className,}
    )
    return(
        <button className={c}>
            <Icon icon={icon as IconTypes}className='mr-2'/>
            {children}
        </button>
    )
}
export default Button;