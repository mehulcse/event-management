export default class TokenManager {
    static get() {
        return localStorage.getItem('sessionToken');
    }

    static set(idToken) {
        if (idToken) {
            localStorage.setItem('sessionToken', idToken);
        }
    }

    static remove() {
        localStorage.removeItem('sessionToken');
    }
}
