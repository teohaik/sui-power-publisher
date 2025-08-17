#!/usr/bin/env python3

from pysui import SyncClient, SuiConfig

def main():
    cfg = SuiConfig.default_config()
    client = SyncClient(cfg)

    gas = client.get_gas()

    print(gas)

if __name__ == "__main__":
    main()
