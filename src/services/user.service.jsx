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

    }

    logIn(userData) {

    }

    logOff() {

    }
}
