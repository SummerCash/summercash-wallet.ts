/** A summer.cash account. */
export class Account {
    /** Username */
    username: string;

    /** Password hash */
    passwordHash: string;

    /** Address */
    address: string;

    constructor(username: string, passwordHash: string, address: string) {
        this.username = username; // Set username
        this.passwordHash = passwordHash; // Set password hash
        this.address = address; // Set address
    }
}
