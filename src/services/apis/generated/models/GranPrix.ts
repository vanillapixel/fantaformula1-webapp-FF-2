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
/**
 * 
 * @export
 * @interface GranPrix
 */
export interface GranPrix {
    /**
     * 
     * @type {number}
     * @memberof GranPrix
     */
    id?: number;
    /**
     * 
     * @type {Date}
     * @memberof GranPrix
     */
    date?: Date;
    /**
     * 
     * @type {string}
     * @memberof GranPrix
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof GranPrix
     */
    winner?: string;
    /**
     * 
     * @type {string}
     * @memberof GranPrix
     */
    winnerTeam?: string;
    /**
     * 
     * @type {number}
     * @memberof GranPrix
     */
    laps?: number;
    /**
     * 
     * @type {Date}
     * @memberof GranPrix
     */
    time?: Date;
}

/**
 * Check if a given object implements the GranPrix interface.
 */
export function instanceOfGranPrix(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GranPrixFromJSON(json: any): GranPrix {
    return GranPrixFromJSONTyped(json, false);
}

export function GranPrixFromJSONTyped(json: any, ignoreDiscriminator: boolean): GranPrix {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'date': !exists(json, 'date') ? undefined : (new Date(json['date'])),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'winner': !exists(json, 'winner') ? undefined : json['winner'],
        'winnerTeam': !exists(json, 'winnerTeam') ? undefined : json['winnerTeam'],
        'laps': !exists(json, 'laps') ? undefined : json['laps'],
        'time': !exists(json, 'time') ? undefined : (new Date(json['time'])),
    };
}

export function GranPrixToJSON(value?: GranPrix | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'date': value.date === undefined ? undefined : (value.date.toISOString()),
        'name': value.name,
        'winner': value.winner,
        'winnerTeam': value.winnerTeam,
        'laps': value.laps,
        'time': value.time === undefined ? undefined : (value.time.toISOString()),
    };
}
