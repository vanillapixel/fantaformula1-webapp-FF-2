/*
 * Copyright (C) Hykee - All Rights Reserved
 *
 * @project    hykee-react.nosync
 * @file       VersionHelper.ts
 * @author     Christian Ascone
 * @date       13/04/2022, 10:46
 */

// @ts-ignore
import PackageJson from '@root/package';

export class VersionHelper {
    /**
     * Gets the app version
     * @returns {string}
     */
    static getAppVersion(): string {
        return PackageJson.version
    }
}