import React from 'react'
// import Logo from './img/logo.png'
import Avatar from './img/avatar.png'
import {MdShoppingBasket} from "react-icons/md"
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from './../firebase.config'

const Header = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const login = async () => {
        const response = await signInWithPopup(auth, provider)
        console.log(response)
        // .then((result) => {
        //     console.log(result)

        //   // This gives you a Google Access Token. You can use it to access the Google API.
        //   const credential = GoogleAuthProvider.credentialFromResult(result);
        //   const token = credential.accessToken;
        //   // The signed-in user info.
        //   const user = result.user;
        //   // ...
        // }).catch((error) => {
        //   // Handle Errors here.
        //   const errorCode = error.code;
        //   const errorMessage = error.message;
        //   // The email of the user's account used.
        //   const email = error.customData.email;
        //   // The AuthCredential type that was used.
        //   const credential = GoogleAuthProvider.credentialFromError(error);
        //   // ...
        // });
    }

  return (
    <header className="fixed z-50 w-screen p-6 px-16" >
        {/* desktop & tablet */}
        <div className="hidden md:flex w-full h-full items-center justify-between">
            <div className="flex items-center gap-2">
                <Link to={'/'} >
                {/* img src={Logo} className="w-10 object-cover" alt="logo" /> */}
                <p className="text-redColor text-xl font-bold">Yemek Sepeti</p>
                </Link>
            </div>
            <div className="flex items-center gap-8">
                <ul className="flex items-center gap-8">
                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Service</li>
                </ul>
                <div className="relative flex items-center justify-center">
                    <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                        <p className="text-sm text-white font-semibold">2</p>
                    </div>
                </div>
                <div className="relative">
                    <motion.img 
                        whileTap={{ scale:0.6 }} 
                        src={Avatar} 
                        className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer" 
                        alt="userprofile" 
                        onClick={login}
                    />
                </div>
            </div>
        </div>
        {/* mobile */}
        <div className="flex md:hidden w-full h-full "></div>
    </header>
  )
}

export default Header