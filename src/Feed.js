import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Posts from "./Posts";
import { db } from "./firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

import FlipMove from "react-flip-move";
function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timesstamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  /* this create a real time listener to firebase, which means anytime we post sth , it will directly map from firebase into posts*/
  const sendPosts = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photourl: user.photourl || "",
      timestamp: firebase.firestore.FieldValue.severTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="feed">
      {" "}
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPosts} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <inputOption Icon={ImageIcon} title="Photo" color="#70B5f9" />
          <inputOption Icon={SubscriptionsIcon} title="Video" color="#7A33E" />
          <inputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <inputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {/* Posts*/}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photourl } }) => (
          <Posts
            key={id}
            name={name}
            description={description}
            message={message}
            photourl={photourl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
