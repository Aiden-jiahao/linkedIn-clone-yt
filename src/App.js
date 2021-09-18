import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { auth } from "./firebase";
import Login from "./Login";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch } from "react-redux";
import Widgets from "./Widgets";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateCHnged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div>
      {/*  Header */}
      <Header />
      {/*  App Body */}

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          {/*  Sidebar  left   use flex box to do that */}
          <Feed />
          {/*  Feed  middle  显示Feed is not defined 是因
        为没有import */}

          <Widgets />
          {/*  Widgets 小部件 right */}
        </div>
      )}
    </div>
  );
}

export default App;
