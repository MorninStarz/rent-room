export class BillingTable {
    is_check: boolean;
    no: number;
    bill_no: string;
    meter_no: string;
    room_no: string;
    rental_amount: number;
    electric_amount: number;
    water_amount: number;
    other_amount: number;
    status: 'Pay' | 'Overdue';
}