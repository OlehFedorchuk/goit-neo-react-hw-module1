import clsx from "clsx";
import css from "./Profile.module.css";
const Profile = (props) => {
  const {
    name,
    tag,
    location,
    image,
    stats: { followers, views, likes },
  } = props;
  return (
    <div className={clsx(css.card)}>
      <div className={clsx(css.wrapper)}>
        <img src={image} alt="User avatar" />
        <p className={clsx(css.userName)}>{name}</p>
        <p className={clsx(css.tag)}>{tag}</p>
        <p className={clsx(css.location)}>{location}</p>
      </div>
      <ul className={clsx(css.list)}>
        <li className={clsx(css.item)}>
          <span className={clsx(css.cardDescr)}>Followers</span>
          <span className={clsx(css.itemCount)}>{followers}</span>
        </li>
        <li className={clsx(css.item)}>
          <span className={clsx(css.cardDescr)}>Views</span>
          <span className={clsx(css.itemCount)}>{views}</span>
        </li>
        <li className={clsx(css.item)}>
          <span className={clsx(css.cardDescr)}>Likes</span>
          <span className={clsx(css.itemCount)}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
