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
 * @interface ManagedUserVM
 */
export interface ManagedUserVM {
    /**
     * 
     * @type {number}
     * @memberof ManagedUserVM
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ManagedUserVM
     */
    login: string;
    /**
     * 
     * @type {string}
     * @memberof ManagedUserVM
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof ManagedUserVM
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof ManagedUserVM
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof ManagedUserVM
     */
    imageUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ManagedUserVM
     */
    activated?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ManagedUserVM
     */
    langKey?: string;
    /**
     * 
     * @type {string}
     * @memberof ManagedUserVM
     */
    createdBy?: string;
    /**
     * 
     * @type {Date}
     * @memberof ManagedUserVM
     */
    createdDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof ManagedUserVM
     */
    lastModifiedBy?: string;
    /**
     * 
     * @type {Date}
     * @memberof ManagedUserVM
     */
    lastModifiedDate?: Date;
    /**
     * 
     * @type {Set<string>}
     * @memberof ManagedUserVM
     */
    authorities?: Set<string>;
    /**
     * 
     * @type {string}
     * @memberof ManagedUserVM
     */
    password?: string;
}

/**
 * Check if a given object implements the ManagedUserVM interface.
 */
export function instanceOfManagedUserVM(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "login" in value;

    return isInstance;
}

export function ManagedUserVMFromJSON(json: any): ManagedUserVM {
    return ManagedUserVMFromJSONTyped(json, false);
}

export function ManagedUserVMFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManagedUserVM {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'login': json['login'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'imageUrl': !exists(json, 'imageUrl') ? undefined : json['imageUrl'],
        'activated': !exists(json, 'activated') ? undefined : json['activated'],
        'langKey': !exists(json, 'langKey') ? undefined : json['langKey'],
        'createdBy': !exists(json, 'createdBy') ? undefined : json['createdBy'],
        'createdDate': !exists(json, 'createdDate') ? undefined : (new Date(json['createdDate'])),
        'lastModifiedBy': !exists(json, 'lastModifiedBy') ? undefined : json['lastModifiedBy'],
        'lastModifiedDate': !exists(json, 'lastModifiedDate') ? undefined : (new Date(json['lastModifiedDate'])),
        'authorities': !exists(json, 'authorities') ? undefined : json['authorities'],
        'password': !exists(json, 'password') ? undefined : json['password'],
    };
}

export function ManagedUserVMToJSON(value?: ManagedUserVM | null): any {
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
        'imageUrl': value.imageUrl,
        'activated': value.activated,
        'langKey': value.langKey,
        'createdBy': value.createdBy,
        'createdDate': value.createdDate === undefined ? undefined : (value.createdDate.toISOString()),
        'lastModifiedBy': value.lastModifiedBy,
        'lastModifiedDate': value.lastModifiedDate === undefined ? undefined : (value.lastModifiedDate.toISOString()),
        'authorities': value.authorities === undefined ? undefined : Array.from(value.authorities as Set<any>),
        'password': value.password,
    };
}

