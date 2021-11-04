const ChatMenu = ({ title, userList }) => {
  return (
    <ul>
      <h4>{title}</h4>
      {userList.map((listItem) => (
        <li key={listItem.username}>{listItem.username}</li>
      ))}
    </ul>
  );
};

export default ChatMenu;
