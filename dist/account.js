"use strict";
exports.__esModule = true;
/** A summer.cash account. */
var Account = /** @class */ (function () {
    function Account(username, passwordHash, address) {
        this.username = username; // Set username
        this.passwordHash = passwordHash; // Set password hash
        this.address = address; // Set address
    }
    return Account;
}());
exports.Account = Account;
