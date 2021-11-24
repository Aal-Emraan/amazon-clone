// import { app } from "firebase-admin";
import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDcgk6YtdMk_4wylj3MaHzy0g2WolaMi0o",
	authDomain: "clone-72c63.firebaseapp.com",
	projectId: "clone-72c63",
	storageBucket: "clone-72c63.appspot.com",
	messagingSenderId: "842516689388",
	appId: "1:842516689388:web:6719bced812c44cbc850c9",
};

// const apps = !app.length ? firebase.initializeApp(firebaseConfig) : firebase();

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();

export default db;
