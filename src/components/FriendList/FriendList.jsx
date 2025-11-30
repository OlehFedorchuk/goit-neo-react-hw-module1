import FriendListItem from "../FriendListItem/FriendListItem";
import clsx from "clsx";
import css from "./FriendList.module.css";
const FriendList = ({ friends }) => {
  return (
    <ul className={clsx(css.list)}>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <li key={id} data-id={id}>
          <FriendListItem name={name} avatar={avatar} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
