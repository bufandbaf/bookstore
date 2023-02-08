/**
 * 
 * @param valueName display name of entity column or any other name
 * @param received received (real) value
 * @param expected expected value
 * @returns true if expect is equal to received
 */
export function expect(valueName: string, received: any, expected: any) {
    const success = expected === received;
    if (!success)
        console.error('ERROR!!!', `Expected "${expected}" in ${valueName} but received "${received}"!`);
    return success;
}

/**
 * 
 * This function compares received object with expected object and displays non-equal properties. It checks ONLY expected properties - so it doesn't test received properties that are not in the expected object.
 * 
 * @param received received (real) object with values
 * @param expected expected object values
 * @returns true if expect is equal to received
 */
export function expectObjectContains(received: Record<string, any> | undefined, expected: Record<string, any> | undefined) {
    let success = true;
    if (typeof received !== 'object') {
        console.error('Received value is not an object.')
        return false;
    }
    if (typeof expected !== 'object') {
        console.error('Expected value is not an object.')
        return false;
    }
    for (const entry of Object.entries(expected)) {
        if (!received.hasOwnProperty(entry[0])) {
            console.error(`Received object does not have "${entry[0]}" property.`)
            console.log('');
            success = false;
        }

        if (received[entry[0]] !== expected[entry[0]]) {
            console.error('Property name:', entry[0]);
            console.error('Received:', received[entry[0]]);
            console.error('Expected:', expected[entry[0]]);
            console.log('');
            success = false;
        }
    }

    if (!success) {
        console.error('Object received:', received);
        console.error('Object expected:', expected);
        console.log('');
    }
    return success;
}