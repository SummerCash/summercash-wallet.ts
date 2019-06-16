import fetch from 'cross-fetch'; // Import fetch
import { Account } from './account'; // Account class

/** The accounts API wrapper. */
export class Accounts {
    /** Endpoint */
    endpoint: string;

    /**
     * Initialize a new Accounts api instance.
     *
     * @param {string} endpoint - The endpoint to connect to.
     */
    constructor(endpoint: string) {
        this.endpoint = `${endpoint}/accounts`; // Set endpoint
    }

    /**
     * Initialize a new user account.
     *
     * @param {string} username The username of the account to create.
     * @param {string} password The password of the account to create.
     */
    async newAccount(username: string, password: string) {
        const response = await fetch(`${this.endpoint}/${username}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        }); // Do request

        const parsed = await response.json(); // Parse response

        if (parsed.error) {
            // Check for errors in parsed response
            throw new Error(parsed.error); // Throw error
        }
    }

    /**
     * Reset a given account's password.
     *
     * @param {string} username
     * @param {string} oldPassword
     * @param {string} newPassword
     */
    async resetPassword(username: string, oldPassword: string, newPassword: string) {
        const response = await fetch(`${this.endpoint}/${username}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                old_password: oldPassword,
                new_password: newPassword,
            }),
        }); // Do request

        const parsed = await response.json(); // Parse response

        if (parsed.error) {
            // Check for errors in parsed response
            throw new Error(parsed.error); // Throw error
        }
    }

    /**
     * Query the db for an account with the given username.
     *
     * @param {string} username The username of the desired account.
     */
    async queryAccount(username: string): Promise<Account> {
        const response = await fetch(`${this.endpoint}/${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }); // Do request

        const parsed = await response.json(); // Parse response

        if (parsed.error) {
            // Check for errors in parsed response
            throw new Error(parsed.error); // Throw error
        }

        const account = new Account(parsed.name, parsed.password_hash, parsed.address); // Init account instance

        return account; // Return account
    }

    /**
     * Request all transactions of the given account.
     *
     * @param {string} username The username of the account chain to open.
     */
    async getAccountTransactions(username: string): Promise<any[]> {
        const response = await fetch(`${this.endpoint}/${username}/transactions`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }); // Do request

        const parsed = await response.json(); // Parse response

        if (parsed.error) {
            // Check for errors in parsed response
            throw new Error(parsed.error); // Throw error
        }

        return parsed.transactions; // Return transactions
    }

    /**
     * Request the last tx of the given user.
     *
     * @param {string} username The username of the account chain to derive the last tx hash from.
     */
    async getLastUserTxHash(username: string): Promise<string> {
        const response = await fetch(`${this.endpoint}/${username}/lastHash`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }); // Do request

        const parsed = await response.json(); // Parse response

        if (parsed.error) {
            // Check for errors in parsed response
            throw new Error(parsed.error); // Throw error
        }

        return parsed.hash; // Return hash
    }

    /**
     * Find the balance of a given account.
     *
     * @param {string} username The username of the account to find the balance of.
     */
    async getAccountBalance(username: string): Promise<number> {
        const response = await fetch(`${this.endpoint}/${username}/balance`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }); // Do request

        const parsed = await response.json(); // Parse response

        if (parsed.error) {
            // Check for errors in parsed response
            throw new Error(parsed.error); // Throw error
        }

        return parsed.balance; // Return balance
    }
}
