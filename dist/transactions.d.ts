/** The transactions API wrapper. */
export declare class Transactions {
    /** Endpoint */
    endpoint: string;
    /** Base Endpoint */
    globalEndpoint: string;
    /**
     * Initialize a new transactions api instance.
     *
     * @param {string} endpoint - The endpoint to connect to.
     */
    constructor(endpoint: string);
    /**
     *
     * @param username The username of the account to send from.
     * @param password The password of the account to send from.
     * @param recipient The account to send to.
     * @param value The transaction's valuation.
     * @param payload The transaction's payload.
     */
    newTransaction(username: string, password: string, recipient: string, value: number, payload: string): Promise<void>;
}
