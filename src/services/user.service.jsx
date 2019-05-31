import localforage from 'localforage'

export const USER_KEY = 'LOCAL_USER';

export class UserService {
    static instanceVal;

    static get instance() {
        if (!this.instanceVal) {
            this.instanceVal = new UserService();
        }

        return this.instanceVal;
    }

    /**
     * Pobiera użytkownika.
     * Jeśli zwraca "falsy", to użytkownik jest niezalogowany
     */
    getUser() {
        return localforage.getItem(USER_KEY).then(
            (user) => user ? ({...user, password: undefined }) : null
        );
    }

    logIn(username, password) {
        return localforage.setItem(USER_KEY, {
            id: Math.floor(Math.random() * 100) + 1, // Nie jest to jakieś super, ale na nasze potrzeby wystarczy ;)
            username,
            password,
        });
    }

    logOff() {
        return localforage.removeItem(USER_KEY);
    }
}
