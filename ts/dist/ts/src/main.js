"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@mysten/sui/client");
const transactions_1 = require("@mysten/sui/transactions");
const getSigner_1 = require("./getSigner");
const config_json_1 = __importDefault(require("../../config.json"));
console.log("hello world");
const tx = new transactions_1.Transaction();
async function main() {
    const client = new client_1.SuiClient({ url: (0, client_1.getFullnodeUrl)('testnet') });
    const result = await client.signAndExecuteTransaction({
        transaction: tx,
        signer: (0, getSigner_1.getSigner)({ secretKey: config_json_1.default.secret_key }),
        requestType: 'WaitForLocalExecution',
        options: {
            showEffects: true,
        },
    });
}
