import { useSelector } from "react-redux";

import css from "./Chat.module.scss";

const Chat = ({ data, user }) => {
  const conversation = data.conversation;

  return (
    <div className={css.wrapper}>
      <ChatMenu />
      <div className={css.activeChat}>
        {conversation.map((message, i) => {
          if (message.who == user) {
            return (
              <div key={message + i} className={css.myMessage}>
                <p>{message.body}</p>
              </div>
            );
          } else if (message.who == "default") {
            return (
              <div key={message + i} className={css.myMessage}>
                <p>{message.body}</p>
              </div>
            );
          } else {
            return (
              <div key={message + i} className={css.theyMessage}>
                <p>{message.body}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

const ChatMenu = () => {
  return (
    <aside className={css.chatMenu}>
      <ul>
        <li>Sara Engberg</li>
        <li>Påven Benedictus</li>
        <li>John Doe</li>
        <li>Jane Elk</li>
        <li>Bob Bison</li>
      </ul>
    </aside>
  );
};

const ActiveChat = (data) => {
  return (
    <>
      <h2>bajk</h2>
    </>
  );
};

export default Chat;
