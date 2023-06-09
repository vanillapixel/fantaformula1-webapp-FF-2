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
import type { League } from './League';
import {
    LeagueFromJSON,
    LeagueFromJSONTyped,
    LeagueToJSON,
} from './League';
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface StandingsUserLeague
 */
export interface StandingsUserLeague {
    /**
     * 
     * @type {number}
     * @memberof StandingsUserLeague
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof StandingsUserLeague
     */
    pos?: number;
    /**
     * 
     * @type {number}
     * @memberof StandingsUserLeague
     */
    points?: number;
    /**
     * 
     * @type {User}
     * @memberof StandingsUserLeague
     */
    user?: User;
    /**
     * 
     * @type {League}
     * @memberof StandingsUserLeague
     */
    league?: League;
}

/**
 * Check if a given object implements the StandingsUserLeague interface.
 */
export function instanceOfStandingsUserLeague(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StandingsUserLeagueFromJSON(json: any): StandingsUserLeague {
    return StandingsUserLeagueFromJSONTyped(json, false);
}

export function StandingsUserLeagueFromJSONTyped(json: any, ignoreDiscriminator: boolean): StandingsUserLeague {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'pos': !exists(json, 'pos') ? undefined : json['pos'],
        'points': !exists(json, 'points') ? undefined : json['points'],
        'user': !exists(json, 'user') ? undefined : UserFromJSON(json['user']),
        'league': !exists(json, 'league') ? undefined : LeagueFromJSON(json['league']),
    };
}

export function StandingsUserLeagueToJSON(value?: StandingsUserLeague | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'pos': value.pos,
        'points': value.points,
        'user': UserToJSON(value.user),
        'league': LeagueToJSON(value.league),
    };
}

