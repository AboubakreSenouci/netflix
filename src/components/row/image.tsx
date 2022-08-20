import classNames from "classnames";

const styles = {
    style1 : 'w-32 h-52',
    style2 : 'w-32 h-40'
}as const ;

type ImageProps = {
    variant: keyof typeof styles;
    className?: string;
    src: string;
}

const Image : React.FC<ImageProps> = (props) => {
    const {variant, src , className} = props;
    const c = classNames(styles[variant],
        {[className || '']: !!className,}
    )
    return(
        <img className={c} src={src} alt="movie" />
    )
}
export default Image;