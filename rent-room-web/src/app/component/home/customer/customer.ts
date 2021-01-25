export class CustomerTable {
    no: number;
    customer_name: string;
    room_no: string;
    mobile: string;
    overdue: number;
    rent_date: string;
    move_out_date: string;
    status: 'Rent' | 'Move out';
    constructor() {

    }
}