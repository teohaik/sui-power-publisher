 # Fundemental classes
from pysui import SuiConfig, SyncClient, ObjectID

 # The JSON RPC builders
import pysui.sui.sui_builders.get_builders as bn

def get_object_example():
     """Fetch an object by ID."""

     # Setup synchronous client using defaults in Mysten's client.yaml
     client = SyncClient(SuiConfig.default_config())

     # Setup the get object builder
     builder = bn.GetObject(
         object_id=ObjectID(
             "0x09f29cd8795c171136f0da589516bfdf4ca0f77084550830fe20611e06018dc7"
         )
     )

     # Execute and reviewe the results
     result = client.execute(builder=builder)
     if result.is_ok():
         print(result.result_data.to_json(indent=2))
     else:
         print(result.result_string)

