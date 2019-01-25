export const sortByYear = (array: [], prop: string) => array.sort((a, b) => b[prop] - a[prop]);

export const byteToMb = (byte: string) => (parseFloat(byte) / 1000000).toFixed(2);
