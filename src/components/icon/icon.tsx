
import IcoMoon, { IconProps as IcomoonProps } from "react-icomoon";
import iconSet from "../../assets/icons/selection.json";
import IconTypes from "./icon.types";

interface IconProps extends Omit<IcomoonProps, 'icon'> {
  icon: IconTypes;
  className?: string;
}

const Icon: React.FC<IconProps> = (props) => {
  const defaultSize = props.size ?? 16;
  return <IcoMoon iconSet={iconSet} size={defaultSize} {...props} />
}

export default Icon;


