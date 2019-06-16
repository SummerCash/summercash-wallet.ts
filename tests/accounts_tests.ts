import { Accounts } from '../src/accounts'; // Import accounts class
import { expect } from 'chai'; // Import testing util
import 'mocha'; // Import testing util

const api = new Accounts('https://summer.cash:2053/api'); // Initialize API

describe('#getAccountBalance()', () => {
    it('should return the balance of the given account', async () => {
        const balance = await api.getAccountBalance('dowlandaiello'); // Get balance

        expect(balance > 0, 'Account should have non-zero balance.'); // Panic
    });
});
