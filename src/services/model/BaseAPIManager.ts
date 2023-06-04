/*
 * Copyright (C) Luna Srl - All Rights Reserved
 *
 * @project    lunarail-frontend.nosync
 * @file       runtime.ts
 * @author     Christian Ascone
 * @date       10/31/19 10:31 AM
 */

// tslint:disable
import { reloadApiConfiguration } from "../apis/ApiConfiguration";

/**
 * This is the base class for all generated API classes.
 */
export class BaseAPIManager {
    public static token?: string;

    private static _contextLoadingCallback: (loading: boolean) => void;

    private static _logoutCallback: () => void;

    static get contextLoadingCallback(): (loading: boolean) => void {
        return this._contextLoadingCallback;
    }

    static set contextLoadingCallback(value: (loading: boolean) => void) {
        this._contextLoadingCallback = value;
    }

    static get logoutCallback(): () => void {
        return this._logoutCallback;
    }

    static set logoutCallback(value: () => void) {
        this._logoutCallback = value;
    }

    static setToken(token: string) {
        console.log("Save token for BaseAPIManager: -> " + token);
        BaseAPIManager.token = token;
        reloadApiConfiguration();
    }

    static deleteToken() {
        console.log("Deleting token for BaseAPIManager");
        BaseAPIManager.token = undefined;
        reloadApiConfiguration();
    }
}