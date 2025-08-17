"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSigner = void 0;
const ed25519_1 = require("@mysten/sui/keypairs/ed25519");
const utils_1 = require("@mysten/sui/utils");
const getSigner = ({ secretKey }) => {
    let privKeyArray = Uint8Array.from(Array.from((0, utils_1.fromBase64)(secretKey)));
    const keypair = ed25519_1.Ed25519Keypair.fromSecretKey(Uint8Array.from(privKeyArray).slice(1));
    return keypair;
};
exports.getSigner = getSigner;
