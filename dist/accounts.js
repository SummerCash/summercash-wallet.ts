"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var cross_fetch_1 = require("cross-fetch"); // Import fetch
var account_1 = require("./account"); // Account class
/** The accounts API wrapper. */
var Accounts = /** @class */ (function () {
    /**
     * Initialize a new Accounts api instance.
     *
     * @param {string} endpoint - The endpoint to connect to.
     */
    function Accounts(endpoint) {
        this.globalEndpoint = endpoint; // Set global endpoint
        this.endpoint = endpoint + "/accounts"; // Set endpoint
    }
    /**
     * Initialize a new user account.
     *
     * @param {string} username The username of the account to create.
     * @param {string} password The password of the account to create.
     */
    Accounts.prototype.newAccount = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cross_fetch_1["default"](this.endpoint + "/" + username, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                username: username,
                                password: password
                            })
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        parsed = _a.sent();
                        if (parsed.error) {
                            // Check for errors in parsed response
                            throw new Error(parsed.error); // Throw error
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Reset a given account's password.
     *
     * @param {string} username
     * @param {string} oldPassword
     * @param {string} newPassword
     */
    Accounts.prototype.resetPassword = function (username, oldPassword, newPassword) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cross_fetch_1["default"](this.endpoint + "/" + username, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                username: username,
                                old_password: oldPassword,
                                new_password: newPassword
                            })
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        parsed = _a.sent();
                        if (parsed.error) {
                            // Check for errors in parsed response
                            throw new Error(parsed.error); // Throw error
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Query the db for an account with the given username.
     *
     * @param {string} username The username of the desired account.
     */
    Accounts.prototype.queryAccount = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cross_fetch_1["default"](this.endpoint + "/" + username, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        parsed = _a.sent();
                        if (parsed.error) {
                            // Check for errors in parsed response
                            throw new Error(parsed.error); // Throw error
                        }
                        account = new account_1.Account(parsed.name, parsed.password_hash, parsed.address);
                        return [2 /*return*/, account]; // Return account
                }
            });
        });
    };
    /**
     * Find the balance of a given account.
     *
     * @param {string} username The username of the account to find the balance of.
     */
    Accounts.prototype.getAccountBalance = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cross_fetch_1["default"](this.endpoint + "/" + username + "/balance", {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        parsed = _a.sent();
                        if (parsed.error) {
                            // Check for errors in parsed response
                            throw new Error(parsed.error); // Throw error
                        }
                        return [2 /*return*/, parsed.balance]; // Return balance
                }
            });
        });
    };
    /**
     * Request all transactions of the given account.
     *
     * @param {string} username The username of the account chain to open.
     */
    Accounts.prototype.getAccountTransactions = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cross_fetch_1["default"](this.endpoint + "/" + username + "/transactions", {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        parsed = _a.sent();
                        if (parsed.error) {
                            // Check for errors in parsed response
                            throw new Error(parsed.error); // Throw error
                        }
                        return [2 /*return*/, parsed.transactions]; // Return transactions
                }
            });
        });
    };
    /**
     * Request the last tx of the given user.
     *
     * @param {string} username The username of the account chain to derive the last tx hash from.
     */
    Accounts.prototype.getLastUserTxHash = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cross_fetch_1["default"](this.endpoint + "/" + username + "/lastHash", {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        parsed = _a.sent();
                        if (parsed.error) {
                            // Check for errors in parsed response
                            throw new Error(parsed.error); // Throw error
                        }
                        return [2 /*return*/, parsed.hash]; // Return hash
                }
            });
        });
    };
    /**
     * Get the user account associated with a given address.
     *
     * @param {string} address The address to resolve.
     */
    Accounts.prototype.resolveAddress = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cross_fetch_1["default"](this.globalEndpoint + "/addresses/resolve/" + address, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        parsed = _a.sent();
                        if (parsed.error) {
                            // Check for errors in parsed response
                            throw new Error(parsed.error); // Throw error
                        }
                        return [2 /*return*/, parsed.username]; // Return username
                }
            });
        });
    };
    /**
     * Check that a password or token corresponding to a given account is valid.
     *
     * @param {string} username The username of the account to authenticate.
     * @param {string} password The password or auth token of the account.
     */
    Accounts.prototype.authenticate = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cross_fetch_1["default"](this.endpoint + "/" + username + "/authenticate", {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                username: username,
                                password: password
                            })
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        parsed = _a.sent();
                        if (parsed.error) {
                            // Check for errors in parsed response
                            throw new Error(parsed.error); // Throw error
                        }
                        return [2 /*return*/, true]; // Authenticated ree
                }
            });
        });
    };
    /**
     * Issue an access token for the given account.
     *
     * @param username The username of the account to issue a token for.
     * @param password The password of the corresponding account.
     */
    Accounts.prototype.issueToken = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cross_fetch_1["default"](this.endpoint + "/" + username + "/token", {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                username: username,
                                password: password
                            })
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        parsed = _a.sent();
                        if (parsed.error) {
                            // Check for errors in parsed response
                            throw new Error(parsed.error); // Throw error
                        }
                        return [2 /*return*/, parsed.token]; // Return token
                }
            });
        });
    };
    /**
     *
     * @param {string} username The username of the account to set a fcm token for.
     * @param {string} password The password of the account to set a fcm token for.
     */
    Accounts.prototype.setFcmToken = function (username, password, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cross_fetch_1["default"](this.endpoint + "/" + username + "/pushtoken", {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                username: username,
                                password: password,
                                fcm_token: token
                            })
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        parsed = _a.sent();
                        if (parsed.error) {
                            // Check for errors in parsed response
                            throw new Error(parsed.error); // Throw error
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return Accounts;
}());
exports.Accounts = Accounts;
