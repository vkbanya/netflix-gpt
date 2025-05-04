import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { auth } from "./utils/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "./utils/userSlice";
import { toggleGPTSearchView } from "./utils/gptSlice";
import { supportedLanguage } from "./utils/Constant";
import { changeLanguage } from "./utils/configSlice";
import { LangConstants } from "./LangConstants";

const Header = ({ hideBtn = false }) => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  const dispatch = useDispatch();
  const lang = useSelector((store) => store.config.lang);

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
        // console.log(error);
      });
  };

  const handleGPTToggle = () => {
    dispatch(toggleGPTSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="bg-gradient-to-b from-black">
      <div className="mx-12 flex justify-between items-center">
        <img className="w-44" alt="logo" src={"./Netflix_Logo.png"} />

        {!hideBtn && (
          <div>
            {user ? (
              <div>
                <select
                  onChange={handleLanguageChange}
                  className="text-white border-2 px-2 h-8 w-28 rounded-4xl cursor-pointer mr-1"
                >
                  {supportedLanguage?.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
                <button
                  className="text-white h-8 w-28 mr-2 rounded-4xl cursor-pointer"
                  onClick={() => handleGPTToggle()}
                >
                  {showGPTSearch ? LangConstants[lang].homepage: LangConstants[lang].gptSearch}
                </button>
                <span className="text-white mr-4">{user?.displayName}</span>
                <button
                  className=" bg-white h-8 w-24 rounded-4xl cursor-pointer"
                  onClick={() => handleSignOut()}
                >
                 {LangConstants[lang].signOut}
                </button>
              </div>
            ) : (
              <button
                className="bg-white h-8 w-24 rounded-4xl cursor-pointer"
                onClick={() => navigate("/login")}
              >
               {LangConstants[lang].signIn}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
