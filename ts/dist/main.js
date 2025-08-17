"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@mysten/sui/client");
const transactions_1 = require("@mysten/sui/transactions");
const getSigner_1 = require("./getSigner");
const config_1 = require("./config");
const utils_1 = require("@mysten/sui/utils");
console.log("hello world");
const tx = new transactions_1.Transaction();
async function main() {
    const client = new client_1.SuiClient({ url: (0, client_1.getFullnodeUrl)('testnet') });
    tx.moveCall({
        target: `${config_1.PACKAGE_ADDRESS}::suipower::emit_measurement_daily`,
        arguments: [
            tx.object(utils_1.SUI_CLOCK_OBJECT_ID),
            tx.pure.u64(1234),
            tx.pure.u64(17789),
            tx.pure.string("TEOPLANT")
        ]
    });
    const result = await client.signAndExecuteTransaction({
        transaction: tx,
        signer: (0, getSigner_1.getSigner)({ secretKey: config_1.USER_SECRET_KEY }),
        requestType: 'WaitForLocalExecution',
        options: {
            showEffects: true,
        },
    });
    if (result.effects?.status.status == "success") {
        console.log("Success! txID= " + result.effects.transactionDigest);
    }
    else {
        console.error(result.effects?.status);
    }
}
main();
