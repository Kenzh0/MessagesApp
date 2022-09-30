import { getFirestore } from '@firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getAuth, signOut, signInWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyAQOTAlVJUdL_BHDxQlZzVn9yWThFBNtRw",
	authDomain: "messages-11a47.firebaseapp.com",
	projectId: "messages-11a47",
	storageBucket: "messages-11a47.appspot.com",
	messagingSenderId: "233120631998",
	appId: "1:233120631998:web:b0f1b81312c00635b022ef"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth()

export const login = (email, password) =>
	signInWithEmailAndPassword(auth, email, password)

export const logout = () => signOut(auth)

export const db = getFirestore()
