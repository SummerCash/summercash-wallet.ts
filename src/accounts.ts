import fetch from 'cross-fetch'; // Import fetch

/** The accounts API wrapper. */
export class Accounts {
    /** Endpoint */
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = `${endpoint}/accounts`; // Set endpoint
    }

    /**
     * Find the balance of a given account.
     *
     * @param {string} username - The username of the account to find the balance of.
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
