module suipower::suipower;

use std::string::String;
use sui::event;
use sui::clock::Clock;

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
    clock: &Clock,
    watthours_produced: u64,
    watthours_consumed: u64,
    plant_id: String,
    ctx: &mut TxContext
){
    event::emit(MeasurementHourly {
        timestamp_ms : clock.timestamp_ms(),
        producer_account: ctx.sender(),
        watthours_produced,
        watthours_consumed,
        plant_id
    });
}

public fun emit_measurement_daily (
    clock: &sui::clock::Clock,
    watthours_produced: u64,
    watthours_consumed: u64,
    plant_id: String,
    ctx: &mut TxContext
){
    event::emit(MeasurementDaily {
        timestamp_ms : clock.timestamp_ms(),
        producer_account: ctx.sender(),
        watthours_produced,
        watthours_consumed,
        plant_id
    });
}
