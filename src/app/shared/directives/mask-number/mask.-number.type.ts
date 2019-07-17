export class MaskNumberModel {
    integers: number;
    decimals: number;
    decimalSeparator?: string;
    thousandSeparator?: string;

    constructor(integers?: number, decimals?: number, decimalSeparator?: string, thousandSeparator?: string) {
        this.integers = integers || 14;
        this.decimals = decimals || 2;
        this.decimalSeparator = decimalSeparator || ',';
        this.thousandSeparator = thousandSeparator || '.';
    }
}
