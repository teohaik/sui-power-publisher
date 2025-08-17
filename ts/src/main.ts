
import { getFullnodeUrl, SuiClient, SuiHTTPTransport } from '@mysten/sui/client';
import { Transaction } from '@mysten/sui/transactions';
import { getSigner } from './getSigner';
import { PACKAGE_ADDRESS, USER_SECRET_KEY } from './config';
import { SUI_CLOCK_OBJECT_ID } from '@mysten/sui/utils';


console.log("hello world");

const tx = new Transaction();

async function main() {

    const client = new SuiClient({ url: getFullnodeUrl('testnet') });

    tx.moveCall({
        target:`${PACKAGE_ADDRESS}::suipower::emit_measurement_daily`,
        arguments :[
            tx.object(SUI_CLOCK_OBJECT_ID),
            tx.pure.u64(1234),
            tx.pure.u64(17789),
            tx.pure.string("TEOPLANT")
        ]
    });

const result = await client.signAndExecuteTransaction({
	transaction: tx,
	signer: getSigner({secretKey:USER_SECRET_KEY}),
	requestType: 'WaitForLocalExecution',
	options: {
		showEffects: true,
	},
});

    if(result.effects?.status.status == "success"){

        console.log("Success! txID= "+result.effects.transactionDigest);
    }else{
        console.error(result.effects?.status);
    }

}


main();

