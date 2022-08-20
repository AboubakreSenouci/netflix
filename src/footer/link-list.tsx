import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import Icon, { IconProps } from '../components/icon/icon';



interface LinkListProps {
  list: Array<{
    link: string;
    title?: string;
    iconProps?: IconProps;
  }>
  className?: string;
  linkClassName?: string;
}


const LinkList: React.FC<LinkListProps> = (props) => {
  const { list, className, linkClassName } = props;
  return (
    <div className={classNames("inline-flex flex-col gap-y-1", className)}>
      {
        list.map((item) => {
          return (
            <Link to={item.link} className={classNames("hover:underline w-fit", linkClassName)}>
              {item.iconProps && <Icon {...item.iconProps} />}
              {item.title && item.title}
            </Link>
          )
        })
      }
    </div>
  );
}


export default LinkList;