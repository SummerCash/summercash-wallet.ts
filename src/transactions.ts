import fetch from 'cross-fetch'; // Import fetch

/** The transactions API wrapper. */
export class Transactions {
    /** Endpoint */
    endpoint: string;

    /** Base Endpoint */
    globalEndpoint: string;

    /**
     * Initialize a new transactions api instance.
     *
     * @param {string} endpoint - The endpoint to connect to.
     */
    constructor(endpoint: string) {
        this.globalEndpoint = endpoint; // Set global endpoint
        this.endpoint = `${endpoint}/transactions`; // Set endpoint
    }

    /**
     *
     * @param username The username of the account to send from.
     * @param password The password of the account to send from.
     * @param recipient The account to send to.
     * @param value The transaction's valuation.
     * @param payload The transaction's payload.
     */
    async newTransaction(username: string, password: string, recipient: string, value: number, payload: string) {
        const response = await fetch(`${this.endpoint}/NewTransaction`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
                recipient: recipient,
                amount: value,
                payload: btoa(payload),
            }),
        }); // Do request

        const parsed = await response.json(); // Parse response

        if (parsed.error) {
            // Check for errors in parsed response
            throw new Error(parsed.error); // Throw error
        }
    }
}
