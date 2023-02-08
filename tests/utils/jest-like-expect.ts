let foundAnyError: boolean = false;
let firstRun = true;

/**
 * 
 * @param valueName display name of entity column or any other name
 * @param received received (real) value
 * @param expected expected value
 * @returns true if expect is equal to received
 */
export function expect(received: any, expected: any) {
    const success = expected === received;
    if (!success) {
        console.error('Received:', received);
        console.error('Expected:', expected);
        console.log();
    }
    if (!success) foundAnyError = true;
    return success;
}

/**
 * 
 * This function compares received object with expected object and displays non-equal properties. It checks ONLY expected properties - so it doesn't test received properties that are not in the expected object.
 * 
 * @param received received (real) object with values
 * @param expected expected object values
 * @param options additional options
 * @returns true if expect is equal to received
 */
export function expectObjectContains(received: Record<string, any> | undefined, expected: Record<string, any> | undefined, options?: {showSummary?: boolean}) {
    let success = true;
    console.info('Testing object...');
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
            console.log();
            success = false;
        }

        if (received[entry[0]] !== expected[entry[0]]) {
            console.error('> Property name:', entry[0]);
            console.error('> Expected:', expected[entry[0]]);
            console.error('> Received:', received[entry[0]]);
            console.log();
            success = false;
        }
    }

    if (!success && options?.showSummary) {
        console.error('Summary:')
        console.error('> expected:', expected);
        console.error('> received:', received);
        console.log();
    }
    if (!success) foundAnyError = true;
    return success;
}

export function describe(name: string, callback: Function) {
    foundAnyError = false;
    if (firstRun) {
        console.clear();
        console.info(`*** ${name} ***`);
        firstRun = false;
    }
    console.log();
    callback();
    if (foundAnyError){
        console.error(`RESULT: ${name} failed!`)
    } else {
        console.log(`RESULT: ${name} succeeded.`);
    }
    console.log();
}