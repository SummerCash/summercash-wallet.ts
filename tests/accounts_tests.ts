import { Accounts } from '../src/accounts'; // Import accounts class
import { expect } from 'chai'; // Import testing util
import 'mocha'; // Import testing util
import { resolve } from 'path';

const api = new Accounts('https://summer.cash:2053/api'); // Initialize API

describe('newAccount(), resetPassword()', () => {
    const username = Math.round(Math.pow(36, 14 + 1) - Math.random() * Math.pow(36, 14))
        .toString(36)
        .slice(1); // Username

    const password = Math.round(Math.pow(36, 14 + 1) - Math.random() * Math.pow(36, 14))
        .toString(36)
        .slice(1); // Password

    it('should initialize a new account', async () => {
        await api.newAccount(username, password); // Init account with random user and pwd
    });

    it('should reset the password of the initialized account', async () => {
        await api.resetPassword(
            username,
            password,
            Math.round(Math.pow(36, 14 + 1) - Math.random() * Math.pow(36, 14))
                .toString(36)
                .slice(1),
        ); // Reset password
    });
});

describe('queryAccount()', () => {
    it('should query a given account', async () => {
        const account = await api.queryAccount('dowlandaiello'); // Query account

        expect(account.username == 'dowlandaiello', 'Found account should have same user.'); // Ensure same user
    });
});

describe('getAccountBalance()', () => {
    it('should return the balance of the given account', async () => {
        const balance = await api.getAccountBalance('dowlandaiello'); // Get balance

        expect(balance > 0, 'Account should have non-zero balance.'); // Panic
    });
});

describe('getLastUserTxHash()', () => {
    it('should get the last tx hash of the given account', async () => {
        const lastHash = await api.getLastUserTxHash('dowlandaiello'); // Last tx hash

        expect(lastHash !== '0x0000000000000000000000000000000000000000'); // Ensure is not zero hash
    });
});

describe('resolveAddress()', () => {
    it('should resolve a username', async () => {
        const user = await api.queryAccount('dowlandaiello'); // Get user

        const resolvedUser = await api.resolveAddress(user.address); // Resolve address

        expect(user.username === resolvedUser, 'should resolve address'); // Ensure resolves correctly
    });
});
