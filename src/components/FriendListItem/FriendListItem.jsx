import clsx from "clsx";
import css from "./FriendListItem.module.css";
const FriendListItem = (friends) => {
  return (
    <div className={clsx(css.wrapper)}>
      <img src={friends.avatar} alt="Avatar" width="48" />
      <p className={clsx(css.animaleName)}>{friends.name}</p>
      <p
        className={clsx("status", {
          [css.online]: friends.isOnline,
          [css.ofline]: !friends.isOnline,
        })}
      >
        {friends.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};
export default FriendListItem;
