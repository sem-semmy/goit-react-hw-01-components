import PropTypes from 'prop-types';
import styles from './FriendList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem'

const FriendList = ({friends}) => {
    return (
        <ul class={styles.list}>
         {friends.map( ({id, isOnline, avatar, name}) => (
<FriendListItem
    key={id}
isOnline={isOnline}
avatar={avatar}
name={name}
/>
))}
</ul>
    )
}
FriendList.propTypes = {
    friends: PropTypes.array,
  };

export default FriendList;