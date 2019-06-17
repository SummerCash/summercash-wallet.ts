import { Accounts } from '../src/accounts'; // Import accounts class
import { Transactions } from '../src/transactions'; // Import txs class
import 'mocha'; // Import testing util

const accountsApi = new Accounts('https://summer.cash:2053/api'); // Initialize API
const api = new Transactions('https://summer.cash:2053/api'); // Initialize API

describe('newTransaction()', () => {
    it('should initialize and publish a new transaction', async () => {
        const username = Math.round(Math.pow(36, 14 + 1) - Math.random() * Math.pow(36, 14))
            .toString(36)
            .slice(1); // Username

        const password = Math.round(Math.pow(36, 14 + 1) - Math.random() * Math.pow(36, 14))
            .toString(36)
            .slice(1); // Password

        await accountsApi.newAccount(username, password); // Init account

        await api.newTransaction(username, password, username, 0, 'test'); // Initialize tx
    });
});
