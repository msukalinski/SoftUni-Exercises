import { Driver, VehicleCategory } from "./models";
import { BaseVehicle, findItemById, Sedan, SUV, Truck } from "./vehicle-types";

export class FleetManager {
    private vehicles: BaseVehicle[] = [];
    private drivers: Map<number, Driver[]> = new Map();

    addVehicle(item: BaseVehicle): string {
        this.vehicles.push(item);
        this.drivers.set(item.id, []);

        return `Vehicle "${item.model}" (ID: ${item.id}) has been added.`;
    }

    assignDriver(vehicleId: number, driver: Driver): string {
        const vehicle = findItemById(this.vehicles, vehicleId);
        if (!vehicle) {
            return `ERROR: Vehicle with ID ${vehicleId} not found.`;
        }

        this.drivers.get(vehicleId)!.push(driver);

        return `Driver ${driver.name} assigned to vehicle ID ${vehicleId} successfully.`;
    }

    listAllVehicles(): string[] {
        const res = ['--- List of All Vehicles ---'];

        for (const vehicle of this.vehicles) {
            const categoryStr = VehicleCategory[vehicle.category].toUpperCase();
            let specific = '';

            if (vehicle instanceof Sedan) {
                specific = `Passengers ${vehicle.passengerCount}`;
            } else if (vehicle instanceof SUV) {
                specific = `4WD: ${vehicle.fourWheelDrive}`;
            } else if (vehicle instanceof Truck) {
                specific = `Payload ${vehicle.payloadTons}t`;
            }

            const cost = vehicle.getMaintenanceCost();

            res.push(`[${categoryStr}] ${vehicle.model} (${vehicle.engineCC}cc, ${specific}) - Maintenance: ${cost.toFixed(2)}€`);
        }

        res.push('-----------------------------');

        return res;
    }

    findVehicle(vehicleId: number): BaseVehicle | undefined {
        return findItemById(this.vehicles, vehicleId);
    }
}