export class Shop{

    id: number;
    name: string;
    latitude: number;
    longitude: number;
    phone: string;
    website: string;
    address: string;    
    description: string;
    hoursOfOperation: string;

    constructor(values = {}) {
        Object.assign(this, values);
    }

}