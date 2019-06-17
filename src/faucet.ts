/** The faucet API wrapper. */
export class Faucet {
    /** Endpoint */
    endpoint: string;

    /** Base Endpoint */
    globalEndpoint: string;

    /**
     * Initialize a new faucet api instance.
     *
     * @param {string} endpoint - The endpoint to connect to.
     */
    constructor(endpoint: string) {
        this.globalEndpoint = endpoint; // Set global endpoint
        this.endpoint = `${endpoint}/faucet`; // Set endpoint
    }

    /**
     * Claim a given amount of SMC from the faucet.
     *
     * @param username The username to make a claim under.
     * @param amount The amount to claim.
     */
    async claim(username: string, amount: number) {
        const response = await fetch(`${this.endpoint}/Claim`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                amount: amount,
            }),
        }); // Do request

        const parsed = await response.json(); // Parse response

        if (parsed.error) {
            // Check for errors in parsed response
            throw new Error(parsed.error); // Throw error
        }
    }

    /**
     * Get the amount of time until the next valid claim.
     *
     * @param username The username of the account to fetch claim details of.
     */
    async nextClaimTime(username: string): Promise<string> {
        const response = await fetch(`${this.endpoint}/${username}/NextClaimTime`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
            }),
        }); // Do request

        const parsed = await response.json(); // Parse response

        if (parsed.error) {
            // Check for errors in parsed response
            throw new Error(parsed.error); // Throw error
        }

        return parsed.time; // Return time
    }

    /**
     * Get the amount of value for the next valid claim.
     *
     * @param username The username of the account to fetch claim details of.
     */
    async nextClaimAmount(username: string): Promise<number> {
        const response = await fetch(`${this.endpoint}/${username}/NextClaimAmount`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
            }),
        }); // Do request

        const parsed = await response.json(); // Parse response

        if (parsed.error) {
            // Check for errors in parsed response
            throw new Error(parsed.error); // Throw error
        }

        return parsed.amount; // Return amount
    }
}
