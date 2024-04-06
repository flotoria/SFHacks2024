import { auth } from "./firebase";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const doCreateWithEmailAndPassword = async (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

export const doSignInWithEmailAndPassword = async (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const doSignOut = () => {
    return auth.signOut();
}