import { Branch } from "./branch.model";

export class Car {
    
    carId?: number;
    carName?: string;
    description?: string;
    dateRelease?: Date;
    branchId? : number;
    branch? : Branch;
    price? : number;
    carImage? : string;
    quantity? : number;
    
}
