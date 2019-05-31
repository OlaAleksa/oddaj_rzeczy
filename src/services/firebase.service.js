import firebase from 'firebase';

export class FirebaseService {
    static firebaseInstance;

    static get instance() {
        if (!this.firebaseInstance) {
            this.firebaseInstance = new FirebaseService().init();
        }

        return this.firebaseInstance;
    }

    init() {
        const config = {
            apiKey: "AIzaSyCc-3u_oqeofSUdvNoWbpkQOYVmleh2h5Q",
            authDomain: "institutions-7e0d7.firebaseapp.com",
            databaseURL: "https://institutions-7e0d7.firebaseio.com",
            projectId: "institutions-7e0d7",
            storageBucket: "institutions-7e0d7.appspot.com",
            messagingSenderId: "555750215820",
            appId: "1:555750215820:web:b4eb70ea9599862d"
        };

        return firebase.initializeApp(config);
    }
}
