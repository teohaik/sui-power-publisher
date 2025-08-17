from fusion_solar_py.client import FusionSolarClient
import json
with open("config.json", "r") as config_file:
    config = json.load(config_file)

client = FusionSolarClient(
    config["username"],
    config["password"],
    huawei_subdomain=config["huawei_subdomain"]
)

PLANT_ID="NE=181229449"

# get the stats
stats = client.get_power_status()

# print all stats
print(f"Current power: {stats.current_power_kw} kW")
print(f"Total energy today: {stats.energy_today_kwh} kWh")
print(f"Total energy: {stats.energy_kwh} kWh")

print(f"all stats {client.get_current_plant_data(PLANT_ID)}")

plant_stats = client.get_plant_stats(PLANT_ID)

with open("plant_stats.json", "w") as json_file:
    json.dump(plant_stats, json_file, indent=4)

print("Plant stats have been saved to plant_stats.json.")

# NOTE: Since an update of the API, this data does no longer seem
#       to be up-to-date. The most recent data only seems to be
#       available on th plant level (see below)

# log out - just in case
client.log_out()