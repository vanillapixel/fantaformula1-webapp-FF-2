/* tslint:disable */
/* eslint-disable */
/**
 * Fanta F 1 API
 * Fanta F 1 API documentation
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Formation } from './Formation';
import {
    FormationFromJSON,
    FormationFromJSONTyped,
    FormationToJSON,
} from './Formation';

/**
 * 
 * @export
 * @interface Driver
 */
export interface Driver {
    /**
     * 
     * @type {number}
     * @memberof Driver
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Driver
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Driver
     */
    surname?: string;
    /**
     * 
     * @type {string}
     * @memberof Driver
     */
    numberDriver?: string;
    /**
     * 
     * @type {string}
     * @memberof Driver
     */
    abbreviation?: string;
    /**
     * 
     * @type {string}
     * @memberof Driver
     */
    price?: string;
    /**
     * 
     * @type {Formation}
     * @memberof Driver
     */
    formation?: Formation;
}

/**
 * Check if a given object implements the Driver interface.
 */
export function instanceOfDriver(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DriverFromJSON(json: any): Driver {
    return DriverFromJSONTyped(json, false);
}

export function DriverFromJSONTyped(json: any, ignoreDiscriminator: boolean): Driver {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'surname': !exists(json, 'surname') ? undefined : json['surname'],
        'numberDriver': !exists(json, 'numberDriver') ? undefined : json['numberDriver'],
        'abbreviation': !exists(json, 'abbreviation') ? undefined : json['abbreviation'],
        'price': !exists(json, 'price') ? undefined : json['price'],
        'formation': !exists(json, 'formation') ? undefined : FormationFromJSON(json['formation']),
    };
}

export function DriverToJSON(value?: Driver | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'surname': value.surname,
        'numberDriver': value.numberDriver,
        'abbreviation': value.abbreviation,
        'price': value.price,
        'formation': FormationToJSON(value.formation),
    };
}
