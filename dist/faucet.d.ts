/** The faucet API wrapper. */
export declare class Faucet {
    /** Endpoint */
    endpoint: string;
    /** Base Endpoint */
    globalEndpoint: string;
    /**
     * Initialize a new faucet api instance.
     *
     * @param {string} endpoint - The endpoint to connect to.
     */
    constructor(endpoint: string);
    /**
     * Claim a given amount of SMC from the faucet.
     *
     * @param username The username to make a claim under.
     * @param amount The amount to claim.
     */
    claim(username: string, amount: number): Promise<void>;
    /**
     * Get the amount of time until the next valid claim.
     *
     * @param username The username of the account to fetch claim details of.
     */
    nextClaimTime(username: string): Promise<string>;
    /**
     * Get the amount of value for the next valid claim.
     *
     * @param username The username of the account to fetch claim details of.
     */
    nextClaimAmount(username: string): Promise<number>;
}
