import { SuiClient } from "@mysten/sui/client";
import { config } from "dotenv";

config({});

export const SUI_NETWORK = process.env.SUI_NETWORK!;
export const SUI_NETWORK_NAME = SUI_NETWORK.includes("testnet")
  ? "testnet"
  : "mainnet";
export const USER_SECRET_KEY = process.env.USER_SECRET_KEY!;
export const PACKAGE_ADDRESS = process.env.PACKAGE_ADDRESS!;
