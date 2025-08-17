"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PACKAGE_ADDRESS = exports.USER_SECRET_KEY = exports.SUI_NETWORK_NAME = exports.SUI_NETWORK = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({});
exports.SUI_NETWORK = process.env.SUI_NETWORK;
exports.SUI_NETWORK_NAME = exports.SUI_NETWORK.includes("testnet")
    ? "testnet"
    : "mainnet";
exports.USER_SECRET_KEY = process.env.USER_SECRET_KEY;
exports.PACKAGE_ADDRESS = process.env.PACKAGE_ADDRESS;
