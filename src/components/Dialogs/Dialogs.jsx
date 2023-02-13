import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogs = props.state.dialogs;
  let messages = props.state.messages;

  let dialogsElements = dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = messages.map((message) => (
    <Message message={message.message} id={message.id} />
  ));

let newMessageElement = React.createRef();


let addMessage = () => {
  let text = newMessageElement.current.value;
  console.log(text)
}

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_wrapper}>
      <div className={classes.dialogs__items}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
      </div>
      <div className={classes.input_block}>
        <textarea
        ref={newMessageElement}
          className={classes.input}
          placeholder="New Message"
          typeof="text"
        ></textarea>
        <button className={classes.btn} onClick={addMessage}>
          Отправить
        </button>
      </div>

    </div>
  );
};

export default Dialogs;
