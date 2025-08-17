module suipower::suipower;

use std::string::String;
use sui::event;

public struct MeasurementHourly has copy, drop, store {
    timestamp_ms : u64,
    producer_account: address,
    watthours_produced: u64,
    watthours_consumed: u64, 
    plant_id: String
}

public struct MeasurementDaily has copy, drop, store {
    timestamp_ms : u64,
    producer_account: address,
    watthours_produced: u64,
    watthours_consumed: u64,
    plant_id: String
}

public fun emit_measurement_hourly (
     timestamp_ms : u64,
    watthours_produced: u64,
    watthours_consumed: u64,
    plant_id: String,
    ctx: TxContext
){
    event::emit(MeasurementHourly {
        timestamp_ms,
        producer_account: ctx.sender(),
        watthours_produced,
        watthours_consumed,
        plant_id
    });
}

public fun emit_measurement_daily (
     timestamp_ms : u64,
    watthours_produced: u64,
    watthours_consumed: u64,
    plant_id: String,
    ctx: TxContext
){
    event::emit(MeasurementDaily {
        timestamp_ms,
        producer_account: ctx.sender(),
        watthours_produced,
        watthours_consumed,
        plant_id
    });
}
