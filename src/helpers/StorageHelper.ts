/*
 * Copyright (C) Luna Srl - All Rights Reserved
 *
 * @project    lunarail-frontend.nosync
 * @file       StorageHelper.ts
 * @author     Christian Ascone
 * @date       12/27/19 10:01 AM
 */

import {Logger} from "./Logger";
import {BaseAPIManager} from "../services/model/BaseAPIManager";
import { UserExtendedTypeEnum} from "../services/apis/generated";

const CLASS_NAME = 'StorageHelper';

const STORE_KEY = '@FantaF1Store';

const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';
const LANGUAGE_KEY = 'LANGUAGE';
const REFRESH_TOKEN_KEY = 'REFRESH_TOKEN';
const USER_TYPE_KEY = 'USER_TYPE';
const PUSH_TOKEN = 'PUSH_TOKEN';

function getStoreKey(key: string) {
    return `${STORE_KEY}:${key}`;
}

/**
 * Stores a value with key in storage
 * @param key
 * @param value
 * @returns {Promise<void>}
 */
export async function store(key: string, value: string) {
     
    try {
        await localStorage.setItem(getStoreKey(key), value);
        
    } catch (error) {
        Logger.warn(CLASS_NAME, "Error: " + error);
    }
}

/**
 * Reads the stored value with key
 * @param key
 * @returns {Promise<any>}
 */
export async function read(key: string): Promise<any> {
    try {
        const value = await localStorage.getItem(getStoreKey(key));
        if (value !== null)
            return value;
        Logger.log(CLASS_NAME, "Not found");
    } catch (error) {
        Logger.warn(CLASS_NAME, "Error: " + error);
    }
}

/**
 * Removes item with given key
 * @param key
 * @returns {Promise<void>}
 */
export async function remove(key: string) {
    try {
        await localStorage.removeItem(getStoreKey(key));
    } catch (error) {
        Logger.warn(CLASS_NAME, "Error: " + error);
    }
}

/**
 * Stores access token
 * @param value
 */
export function storeAccessToken(value: string) {
    store(ACCESS_TOKEN_KEY, value);
    BaseAPIManager.setToken(value);
}

/**
 * Stores access token
 * @param value
 */
export function storeUserType(value: UserExtendedTypeEnum) {
    store(USER_TYPE_KEY, value);
}

/**
 * Stores language
 * @param value
 */
export function storeLanguage(value: string) {
    store(LANGUAGE_KEY, value);
}

/**
 * Reads access token
 * @returns {Promise<string>}
 */
export function readAccessToken() {
    return read(ACCESS_TOKEN_KEY);
}

/**
 * Reads user type
 * @returns {Promise<string>}
 */
export function readUserType(): Promise<UserExtendedTypeEnum> {
    return read(USER_TYPE_KEY);
}

/**
 * Reads language
 * @returns {Promise<string>}
 */
export function readLanguage() {
    return read(LANGUAGE_KEY);
}

/**
 * Deletes access token
 * @returns {Promise<void>}
 */
export function removeAccessToken() {
    remove(ACCESS_TOKEN_KEY);
    BaseAPIManager.deleteToken();
}

/**
 * Deletes user type
 * @returns {Promise<void>}
 */
export function removeUserType() {
    remove(USER_TYPE_KEY);
}

/**
 * Stores refresh token
 * @param value
 */
export function storeRefreshToken(value: string) {
    store(REFRESH_TOKEN_KEY, value);
}

/**
 * Reads refresh token
 * @returns {Promise<string>}
 */
export function readRefreshToken() {
    return read(REFRESH_TOKEN_KEY);
}

/**
 * Deletes refresh token
 * @returns {Promise<void>}
 */
export function removeRefreshToken() {
    return remove(REFRESH_TOKEN_KEY);
}

export function storePushToken(value: string) {
    store(PUSH_TOKEN, value);
}

export function readPushToken() {
    return read(PUSH_TOKEN);
}

export function removePushToken() {
    return remove(PUSH_TOKEN);
}

/**
 * Deletes data for logout
 */
export function logout() {
    removePushToken()
    removeAccessToken();
    removeUserType();
}
