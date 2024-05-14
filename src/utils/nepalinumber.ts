const nepaliNumbers: { [key: string]: string } = {
    '0': '०',
    '1': '१',
    '2': '२',
    '3': '३',
    '4': '४',
    '5': '५',
    '6': '६',
    '7': '७',
    '8': '८',
    '9': '९',
};

export function convertToNepaliNumbers(number: number | string): string {
    const numberStr = number.toString();
    let nepaliNumberStr = '';
    for (const char of numberStr) {
        if (nepaliNumbers[char] !== undefined) {
            nepaliNumberStr += nepaliNumbers[char];
        } else {
            nepaliNumberStr += char;
        }
    }
    return nepaliNumberStr;
}