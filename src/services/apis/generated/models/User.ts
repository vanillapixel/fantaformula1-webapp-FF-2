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
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    login: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    email?: string;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    activated: boolean;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    langKey?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    imageUrl?: string;
    /**
     * 
     * @type {Date}
     * @memberof User
     */
    resetDate?: Date;
}

/**
 * Check if a given object implements the User interface.
 */
export function instanceOfUser(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "login" in value;
    isInstance = isInstance && "activated" in value;

    return isInstance;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'login': json['login'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'activated': json['activated'],
        'langKey': !exists(json, 'langKey') ? undefined : json['langKey'],
        'imageUrl': !exists(json, 'imageUrl') ? undefined : json['imageUrl'],
        'resetDate': !exists(json, 'resetDate') ? undefined : (new Date(json['resetDate'])),
    };
}

export function UserToJSON(value?: User | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'login': value.login,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'email': value.email,
        'activated': value.activated,
        'langKey': value.langKey,
        'imageUrl': value.imageUrl,
        'resetDate': value.resetDate === undefined ? undefined : (value.resetDate.toISOString()),
    };
}

