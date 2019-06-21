import { Account } from './account';
/** The accounts API wrapper. */
export declare class Accounts {
    /** Endpoint */
    endpoint: string;
    /** Base Endpoint */
    globalEndpoint: string;
    /**
     * Initialize a new Accounts api instance.
     *
     * @param {string} endpoint - The endpoint to connect to.
     */
    constructor(endpoint: string);
    /**
     * Initialize a new user account.
     *
     * @param {string} username The username of the account to create.
     * @param {string} password The password of the account to create.
     */
    newAccount(username: string, password: string): Promise<void>;
    /**
     * Reset a given account's password.
     *
     * @param {string} username
     * @param {string} oldPassword
     * @param {string} newPassword
     */
    resetPassword(username: string, oldPassword: string, newPassword: string): Promise<void>;
    /**
     * Query the db for an account with the given username.
     *
     * @param {string} username The username of the desired account.
     */
    queryAccount(username: string): Promise<Account>;
    /**
     * Find the balance of a given account.
     *
     * @param {string} username The username of the account to find the balance of.
     */
    getAccountBalance(username: string): Promise<number>;
    /**
     * Request all transactions of the given account.
     *
     * @param {string} username The username of the account chain to open.
     */
    getAccountTransactions(username: string): Promise<any[]>;
    /**
     * Request the last tx of the given user.
     *
     * @param {string} username The username of the account chain to derive the last tx hash from.
     */
    getLastUserTxHash(username: string): Promise<string>;
    /**
     * Get the user account associated with a given address.
     *
     * @param {string} address The address to resolve.
     */
    resolveAddress(address: string): Promise<string>;
    /**
     * Check that a password or token corresponding to a given account is valid.
     *
     * @param {string} username The username of the account to authenticate.
     * @param {string} password The password or auth token of the account.
     */
    authenticate(username: string, password: string): Promise<boolean>;
    /**
     * Issue an access token for the given account.
     *
     * @param username The username of the account to issue a token for.
     * @param password The password of the corresponding account.
     */
    issueToken(username: string, password: string): Promise<string>;
    /**
     *
     * @param {string} username The username of the account to set a fcm token for.
     * @param {string} password The password of the account to set a fcm token for.
     */
    setFcmToken(username: string, password: string, token: string): Promise<void>;
}
