import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { auth } from "./utils/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "./utils/userSlice";

const Header = ({ hideBtn = false }) => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-gradient-to-b from-black">
      <div className="mx-12 my-2 flex justify-between items-center">
        <img className="w-44" alt="logo" src={"./Netflix_Logo.png"} />

        {!hideBtn && (
          <div>
            {user ? (
              <div>
                {/* <div className="text-white mask-radial-at-center mask-radial-from-100% bg-[url("></div> */}
                <span className="text-white mr-4">{user?.displayName}</span>
                <button
                  className=" bg-white h-8 w-20 rounded-4xl cursor-pointer"
                  onClick={() => handleSignOut()}
                >
                  Sign out
                </button>
              </div>
            ) : (
              <button
                className=" bg-white h-8 w-20 rounded-4xl cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Sign in
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
