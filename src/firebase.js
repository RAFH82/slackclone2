import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDyNWY4IirUDNxUJPfkSqaFPzkEngkumAI",
	authDomain: "slack-clone2-8dd68.firebaseapp.com",
	projectId: "slack-clone2-8dd68",
	storageBucket: "slack-clone2-8dd68.appspot.com",
	messagingSenderId: "537700700156",
	appId: "1:537700700156:web:190ab115af73185b86ec79",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
