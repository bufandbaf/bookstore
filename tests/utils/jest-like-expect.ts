import _ from 'lodash';

let foundAnyError = false;
let firstRun = true;

/**
 * 
 * @param valueName display name of entity column or any other name
 * @param received received (real) value
 * @param expected expected value
 * @returns true if expect is equal to received
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function expectObjectContains(received: Record<string, any> | undefined, expected: Record<string, any> | undefined, options?: {showSummary?: boolean}) {
    let success = true;
    if (expected && received) {
        if (!_.includes([received, expected], received)) {
            success = false;
            foundAnyError = true;
            if (!expected || !received) {
                console.error('> Expected:', expected);
                console.error('> Received:', received);
                console.log();
            }
        }
    } else {
        if (expected !== received) {
            success = false;
            foundAnyError = true;
            console.error('> Expected:', expected);
            console.error('> Received:', received);
            console.log();
        }
    }

    if (expected) {
        for (const entry of Object.entries(expected)) {
            // eslint-disable-next-line no-prototype-builtins
            if (!received?.hasOwnProperty(entry[0])) {
                console.error(`Received object does not have '${entry[0]}' property.`);
                console.log();
                success = false;
            }

            if (received?.[entry[0]] !== expected[entry[0]]) {
                console.error('> Property name:', entry[0]);
                console.error('> Expected:', expected[entry[0]]);
                console.error('> Received:', received?.[entry[0]]);
                console.log();
                success = false;
            }
        }
    }

    if (!success && options?.showSummary) {
        console.error('Summary:');
        console.error('> expected:', expected);
        console.error('> received:', received);
        console.log();
    }
    if (!success) foundAnyError = true;
    return success;
}

// eslint-disable-next-line @typescript-eslint/ban-types
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
        console.error(`\x1B[31m Test: ${name}, Result: FAILED \x1b[0m`);
    } else {
        console.info(`\x1B[32m Test: ${name}, Result: OK \x1b[0m`);
    }
    console.log();
}