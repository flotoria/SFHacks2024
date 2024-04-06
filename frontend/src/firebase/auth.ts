import { auth } from "./firebase";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const doCreateWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

export const doSignInWithEmailAndPassword = async() => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const doSignOut = () => {
    return auth.SignOut();
}