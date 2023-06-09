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


import * as runtime from '../runtime';
import type {
  Driver,
} from '../models';
import {
    DriverFromJSON,
    DriverToJSON,
} from '../models';

export interface CountDriversRequest {
    idGreaterThan?: number;
    idLessThan?: number;
    idGreaterThanOrEqual?: number;
    idLessThanOrEqual?: number;
    idEquals?: number;
    idNotEquals?: number;
    idSpecified?: boolean;
    idIn?: Array<number>;
    idNotIn?: Array<number>;
    nameContains?: string;
    nameDoesNotContain?: string;
    nameEquals?: string;
    nameNotEquals?: string;
    nameSpecified?: boolean;
    nameIn?: Array<string>;
    nameNotIn?: Array<string>;
    surnameContains?: string;
    surnameDoesNotContain?: string;
    surnameEquals?: string;
    surnameNotEquals?: string;
    surnameSpecified?: boolean;
    surnameIn?: Array<string>;
    surnameNotIn?: Array<string>;
    numberDriverContains?: string;
    numberDriverDoesNotContain?: string;
    numberDriverEquals?: string;
    numberDriverNotEquals?: string;
    numberDriverSpecified?: boolean;
    numberDriverIn?: Array<string>;
    numberDriverNotIn?: Array<string>;
    abbreviationContains?: string;
    abbreviationDoesNotContain?: string;
    abbreviationEquals?: string;
    abbreviationNotEquals?: string;
    abbreviationSpecified?: boolean;
    abbreviationIn?: Array<string>;
    abbreviationNotIn?: Array<string>;
    priceContains?: string;
    priceDoesNotContain?: string;
    priceEquals?: string;
    priceNotEquals?: string;
    priceSpecified?: boolean;
    priceIn?: Array<string>;
    priceNotIn?: Array<string>;
    formationIdGreaterThan?: number;
    formationIdLessThan?: number;
    formationIdGreaterThanOrEqual?: number;
    formationIdLessThanOrEqual?: number;
    formationIdEquals?: number;
    formationIdNotEquals?: number;
    formationIdSpecified?: boolean;
    formationIdIn?: Array<number>;
    formationIdNotIn?: Array<number>;
    distinct?: boolean;
}

export interface CreateDriverRequest {
    driver: Driver;
}

export interface DeleteDriverRequest {
    id: number;
}

export interface GetAllDriversRequest {
    idGreaterThan?: number;
    idLessThan?: number;
    idGreaterThanOrEqual?: number;
    idLessThanOrEqual?: number;
    idEquals?: number;
    idNotEquals?: number;
    idSpecified?: boolean;
    idIn?: Array<number>;
    idNotIn?: Array<number>;
    nameContains?: string;
    nameDoesNotContain?: string;
    nameEquals?: string;
    nameNotEquals?: string;
    nameSpecified?: boolean;
    nameIn?: Array<string>;
    nameNotIn?: Array<string>;
    surnameContains?: string;
    surnameDoesNotContain?: string;
    surnameEquals?: string;
    surnameNotEquals?: string;
    surnameSpecified?: boolean;
    surnameIn?: Array<string>;
    surnameNotIn?: Array<string>;
    numberDriverContains?: string;
    numberDriverDoesNotContain?: string;
    numberDriverEquals?: string;
    numberDriverNotEquals?: string;
    numberDriverSpecified?: boolean;
    numberDriverIn?: Array<string>;
    numberDriverNotIn?: Array<string>;
    abbreviationContains?: string;
    abbreviationDoesNotContain?: string;
    abbreviationEquals?: string;
    abbreviationNotEquals?: string;
    abbreviationSpecified?: boolean;
    abbreviationIn?: Array<string>;
    abbreviationNotIn?: Array<string>;
    priceContains?: string;
    priceDoesNotContain?: string;
    priceEquals?: string;
    priceNotEquals?: string;
    priceSpecified?: boolean;
    priceIn?: Array<string>;
    priceNotIn?: Array<string>;
    formationIdGreaterThan?: number;
    formationIdLessThan?: number;
    formationIdGreaterThanOrEqual?: number;
    formationIdLessThanOrEqual?: number;
    formationIdEquals?: number;
    formationIdNotEquals?: number;
    formationIdSpecified?: boolean;
    formationIdIn?: Array<number>;
    formationIdNotIn?: Array<number>;
    distinct?: boolean;
}

export interface GetDriverRequest {
    id: number;
}

export interface PartialUpdateDriverRequest {
    id: number;
    driver: Driver;
}

export interface UpdateDriverRequest {
    id: number;
    driver: Driver;
}

/**
 * 
 */
export class DriverResourceApi extends runtime.BaseAPI {

    /**
     */
    async countDriversRaw(requestParameters: CountDriversRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        const queryParameters: any = {};

        if (requestParameters.idGreaterThan !== undefined) {
            queryParameters['id.greaterThan'] = requestParameters.idGreaterThan;
        }

        if (requestParameters.idLessThan !== undefined) {
            queryParameters['id.lessThan'] = requestParameters.idLessThan;
        }

        if (requestParameters.idGreaterThanOrEqual !== undefined) {
            queryParameters['id.greaterThanOrEqual'] = requestParameters.idGreaterThanOrEqual;
        }

        if (requestParameters.idLessThanOrEqual !== undefined) {
            queryParameters['id.lessThanOrEqual'] = requestParameters.idLessThanOrEqual;
        }

        if (requestParameters.idEquals !== undefined) {
            queryParameters['id.equals'] = requestParameters.idEquals;
        }

        if (requestParameters.idNotEquals !== undefined) {
            queryParameters['id.notEquals'] = requestParameters.idNotEquals;
        }

        if (requestParameters.idSpecified !== undefined) {
            queryParameters['id.specified'] = requestParameters.idSpecified;
        }

        if (requestParameters.idIn) {
            queryParameters['id.in'] = requestParameters.idIn;
        }

        if (requestParameters.idNotIn) {
            queryParameters['id.notIn'] = requestParameters.idNotIn;
        }

        if (requestParameters.nameContains !== undefined) {
            queryParameters['name.contains'] = requestParameters.nameContains;
        }

        if (requestParameters.nameDoesNotContain !== undefined) {
            queryParameters['name.doesNotContain'] = requestParameters.nameDoesNotContain;
        }

        if (requestParameters.nameEquals !== undefined) {
            queryParameters['name.equals'] = requestParameters.nameEquals;
        }

        if (requestParameters.nameNotEquals !== undefined) {
            queryParameters['name.notEquals'] = requestParameters.nameNotEquals;
        }

        if (requestParameters.nameSpecified !== undefined) {
            queryParameters['name.specified'] = requestParameters.nameSpecified;
        }

        if (requestParameters.nameIn) {
            queryParameters['name.in'] = requestParameters.nameIn;
        }

        if (requestParameters.nameNotIn) {
            queryParameters['name.notIn'] = requestParameters.nameNotIn;
        }

        if (requestParameters.surnameContains !== undefined) {
            queryParameters['surname.contains'] = requestParameters.surnameContains;
        }

        if (requestParameters.surnameDoesNotContain !== undefined) {
            queryParameters['surname.doesNotContain'] = requestParameters.surnameDoesNotContain;
        }

        if (requestParameters.surnameEquals !== undefined) {
            queryParameters['surname.equals'] = requestParameters.surnameEquals;
        }

        if (requestParameters.surnameNotEquals !== undefined) {
            queryParameters['surname.notEquals'] = requestParameters.surnameNotEquals;
        }

        if (requestParameters.surnameSpecified !== undefined) {
            queryParameters['surname.specified'] = requestParameters.surnameSpecified;
        }

        if (requestParameters.surnameIn) {
            queryParameters['surname.in'] = requestParameters.surnameIn;
        }

        if (requestParameters.surnameNotIn) {
            queryParameters['surname.notIn'] = requestParameters.surnameNotIn;
        }

        if (requestParameters.numberDriverContains !== undefined) {
            queryParameters['numberDriver.contains'] = requestParameters.numberDriverContains;
        }

        if (requestParameters.numberDriverDoesNotContain !== undefined) {
            queryParameters['numberDriver.doesNotContain'] = requestParameters.numberDriverDoesNotContain;
        }

        if (requestParameters.numberDriverEquals !== undefined) {
            queryParameters['numberDriver.equals'] = requestParameters.numberDriverEquals;
        }

        if (requestParameters.numberDriverNotEquals !== undefined) {
            queryParameters['numberDriver.notEquals'] = requestParameters.numberDriverNotEquals;
        }

        if (requestParameters.numberDriverSpecified !== undefined) {
            queryParameters['numberDriver.specified'] = requestParameters.numberDriverSpecified;
        }

        if (requestParameters.numberDriverIn) {
            queryParameters['numberDriver.in'] = requestParameters.numberDriverIn;
        }

        if (requestParameters.numberDriverNotIn) {
            queryParameters['numberDriver.notIn'] = requestParameters.numberDriverNotIn;
        }

        if (requestParameters.abbreviationContains !== undefined) {
            queryParameters['abbreviation.contains'] = requestParameters.abbreviationContains;
        }

        if (requestParameters.abbreviationDoesNotContain !== undefined) {
            queryParameters['abbreviation.doesNotContain'] = requestParameters.abbreviationDoesNotContain;
        }

        if (requestParameters.abbreviationEquals !== undefined) {
            queryParameters['abbreviation.equals'] = requestParameters.abbreviationEquals;
        }

        if (requestParameters.abbreviationNotEquals !== undefined) {
            queryParameters['abbreviation.notEquals'] = requestParameters.abbreviationNotEquals;
        }

        if (requestParameters.abbreviationSpecified !== undefined) {
            queryParameters['abbreviation.specified'] = requestParameters.abbreviationSpecified;
        }

        if (requestParameters.abbreviationIn) {
            queryParameters['abbreviation.in'] = requestParameters.abbreviationIn;
        }

        if (requestParameters.abbreviationNotIn) {
            queryParameters['abbreviation.notIn'] = requestParameters.abbreviationNotIn;
        }

        if (requestParameters.priceContains !== undefined) {
            queryParameters['price.contains'] = requestParameters.priceContains;
        }

        if (requestParameters.priceDoesNotContain !== undefined) {
            queryParameters['price.doesNotContain'] = requestParameters.priceDoesNotContain;
        }

        if (requestParameters.priceEquals !== undefined) {
            queryParameters['price.equals'] = requestParameters.priceEquals;
        }

        if (requestParameters.priceNotEquals !== undefined) {
            queryParameters['price.notEquals'] = requestParameters.priceNotEquals;
        }

        if (requestParameters.priceSpecified !== undefined) {
            queryParameters['price.specified'] = requestParameters.priceSpecified;
        }

        if (requestParameters.priceIn) {
            queryParameters['price.in'] = requestParameters.priceIn;
        }

        if (requestParameters.priceNotIn) {
            queryParameters['price.notIn'] = requestParameters.priceNotIn;
        }

        if (requestParameters.formationIdGreaterThan !== undefined) {
            queryParameters['formationId.greaterThan'] = requestParameters.formationIdGreaterThan;
        }

        if (requestParameters.formationIdLessThan !== undefined) {
            queryParameters['formationId.lessThan'] = requestParameters.formationIdLessThan;
        }

        if (requestParameters.formationIdGreaterThanOrEqual !== undefined) {
            queryParameters['formationId.greaterThanOrEqual'] = requestParameters.formationIdGreaterThanOrEqual;
        }

        if (requestParameters.formationIdLessThanOrEqual !== undefined) {
            queryParameters['formationId.lessThanOrEqual'] = requestParameters.formationIdLessThanOrEqual;
        }

        if (requestParameters.formationIdEquals !== undefined) {
            queryParameters['formationId.equals'] = requestParameters.formationIdEquals;
        }

        if (requestParameters.formationIdNotEquals !== undefined) {
            queryParameters['formationId.notEquals'] = requestParameters.formationIdNotEquals;
        }

        if (requestParameters.formationIdSpecified !== undefined) {
            queryParameters['formationId.specified'] = requestParameters.formationIdSpecified;
        }

        if (requestParameters.formationIdIn) {
            queryParameters['formationId.in'] = requestParameters.formationIdIn;
        }

        if (requestParameters.formationIdNotIn) {
            queryParameters['formationId.notIn'] = requestParameters.formationIdNotIn;
        }

        if (requestParameters.distinct !== undefined) {
            queryParameters['distinct'] = requestParameters.distinct;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/drivers/count`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async countDrivers(requestParameters: CountDriversRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.countDriversRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async createDriverRaw(requestParameters: CreateDriverRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Driver>> {
        if (requestParameters.driver === null || requestParameters.driver === undefined) {
            throw new runtime.RequiredError('driver','Required parameter requestParameters.driver was null or undefined when calling createDriver.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/drivers`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DriverToJSON(requestParameters.driver),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DriverFromJSON(jsonValue));
    }

    /**
     */
    async createDriver(requestParameters: CreateDriverRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Driver> {
        const response = await this.createDriverRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteDriverRaw(requestParameters: DeleteDriverRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteDriver.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/drivers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteDriver(requestParameters: DeleteDriverRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteDriverRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getAllDriversRaw(requestParameters: GetAllDriversRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Driver>>> {
        const queryParameters: any = {};

        if (requestParameters.idGreaterThan !== undefined) {
            queryParameters['id.greaterThan'] = requestParameters.idGreaterThan;
        }

        if (requestParameters.idLessThan !== undefined) {
            queryParameters['id.lessThan'] = requestParameters.idLessThan;
        }

        if (requestParameters.idGreaterThanOrEqual !== undefined) {
            queryParameters['id.greaterThanOrEqual'] = requestParameters.idGreaterThanOrEqual;
        }

        if (requestParameters.idLessThanOrEqual !== undefined) {
            queryParameters['id.lessThanOrEqual'] = requestParameters.idLessThanOrEqual;
        }

        if (requestParameters.idEquals !== undefined) {
            queryParameters['id.equals'] = requestParameters.idEquals;
        }

        if (requestParameters.idNotEquals !== undefined) {
            queryParameters['id.notEquals'] = requestParameters.idNotEquals;
        }

        if (requestParameters.idSpecified !== undefined) {
            queryParameters['id.specified'] = requestParameters.idSpecified;
        }

        if (requestParameters.idIn) {
            queryParameters['id.in'] = requestParameters.idIn;
        }

        if (requestParameters.idNotIn) {
            queryParameters['id.notIn'] = requestParameters.idNotIn;
        }

        if (requestParameters.nameContains !== undefined) {
            queryParameters['name.contains'] = requestParameters.nameContains;
        }

        if (requestParameters.nameDoesNotContain !== undefined) {
            queryParameters['name.doesNotContain'] = requestParameters.nameDoesNotContain;
        }

        if (requestParameters.nameEquals !== undefined) {
            queryParameters['name.equals'] = requestParameters.nameEquals;
        }

        if (requestParameters.nameNotEquals !== undefined) {
            queryParameters['name.notEquals'] = requestParameters.nameNotEquals;
        }

        if (requestParameters.nameSpecified !== undefined) {
            queryParameters['name.specified'] = requestParameters.nameSpecified;
        }

        if (requestParameters.nameIn) {
            queryParameters['name.in'] = requestParameters.nameIn;
        }

        if (requestParameters.nameNotIn) {
            queryParameters['name.notIn'] = requestParameters.nameNotIn;
        }

        if (requestParameters.surnameContains !== undefined) {
            queryParameters['surname.contains'] = requestParameters.surnameContains;
        }

        if (requestParameters.surnameDoesNotContain !== undefined) {
            queryParameters['surname.doesNotContain'] = requestParameters.surnameDoesNotContain;
        }

        if (requestParameters.surnameEquals !== undefined) {
            queryParameters['surname.equals'] = requestParameters.surnameEquals;
        }

        if (requestParameters.surnameNotEquals !== undefined) {
            queryParameters['surname.notEquals'] = requestParameters.surnameNotEquals;
        }

        if (requestParameters.surnameSpecified !== undefined) {
            queryParameters['surname.specified'] = requestParameters.surnameSpecified;
        }

        if (requestParameters.surnameIn) {
            queryParameters['surname.in'] = requestParameters.surnameIn;
        }

        if (requestParameters.surnameNotIn) {
            queryParameters['surname.notIn'] = requestParameters.surnameNotIn;
        }

        if (requestParameters.numberDriverContains !== undefined) {
            queryParameters['numberDriver.contains'] = requestParameters.numberDriverContains;
        }

        if (requestParameters.numberDriverDoesNotContain !== undefined) {
            queryParameters['numberDriver.doesNotContain'] = requestParameters.numberDriverDoesNotContain;
        }

        if (requestParameters.numberDriverEquals !== undefined) {
            queryParameters['numberDriver.equals'] = requestParameters.numberDriverEquals;
        }

        if (requestParameters.numberDriverNotEquals !== undefined) {
            queryParameters['numberDriver.notEquals'] = requestParameters.numberDriverNotEquals;
        }

        if (requestParameters.numberDriverSpecified !== undefined) {
            queryParameters['numberDriver.specified'] = requestParameters.numberDriverSpecified;
        }

        if (requestParameters.numberDriverIn) {
            queryParameters['numberDriver.in'] = requestParameters.numberDriverIn;
        }

        if (requestParameters.numberDriverNotIn) {
            queryParameters['numberDriver.notIn'] = requestParameters.numberDriverNotIn;
        }

        if (requestParameters.abbreviationContains !== undefined) {
            queryParameters['abbreviation.contains'] = requestParameters.abbreviationContains;
        }

        if (requestParameters.abbreviationDoesNotContain !== undefined) {
            queryParameters['abbreviation.doesNotContain'] = requestParameters.abbreviationDoesNotContain;
        }

        if (requestParameters.abbreviationEquals !== undefined) {
            queryParameters['abbreviation.equals'] = requestParameters.abbreviationEquals;
        }

        if (requestParameters.abbreviationNotEquals !== undefined) {
            queryParameters['abbreviation.notEquals'] = requestParameters.abbreviationNotEquals;
        }

        if (requestParameters.abbreviationSpecified !== undefined) {
            queryParameters['abbreviation.specified'] = requestParameters.abbreviationSpecified;
        }

        if (requestParameters.abbreviationIn) {
            queryParameters['abbreviation.in'] = requestParameters.abbreviationIn;
        }

        if (requestParameters.abbreviationNotIn) {
            queryParameters['abbreviation.notIn'] = requestParameters.abbreviationNotIn;
        }

        if (requestParameters.priceContains !== undefined) {
            queryParameters['price.contains'] = requestParameters.priceContains;
        }

        if (requestParameters.priceDoesNotContain !== undefined) {
            queryParameters['price.doesNotContain'] = requestParameters.priceDoesNotContain;
        }

        if (requestParameters.priceEquals !== undefined) {
            queryParameters['price.equals'] = requestParameters.priceEquals;
        }

        if (requestParameters.priceNotEquals !== undefined) {
            queryParameters['price.notEquals'] = requestParameters.priceNotEquals;
        }

        if (requestParameters.priceSpecified !== undefined) {
            queryParameters['price.specified'] = requestParameters.priceSpecified;
        }

        if (requestParameters.priceIn) {
            queryParameters['price.in'] = requestParameters.priceIn;
        }

        if (requestParameters.priceNotIn) {
            queryParameters['price.notIn'] = requestParameters.priceNotIn;
        }

        if (requestParameters.formationIdGreaterThan !== undefined) {
            queryParameters['formationId.greaterThan'] = requestParameters.formationIdGreaterThan;
        }

        if (requestParameters.formationIdLessThan !== undefined) {
            queryParameters['formationId.lessThan'] = requestParameters.formationIdLessThan;
        }

        if (requestParameters.formationIdGreaterThanOrEqual !== undefined) {
            queryParameters['formationId.greaterThanOrEqual'] = requestParameters.formationIdGreaterThanOrEqual;
        }

        if (requestParameters.formationIdLessThanOrEqual !== undefined) {
            queryParameters['formationId.lessThanOrEqual'] = requestParameters.formationIdLessThanOrEqual;
        }

        if (requestParameters.formationIdEquals !== undefined) {
            queryParameters['formationId.equals'] = requestParameters.formationIdEquals;
        }

        if (requestParameters.formationIdNotEquals !== undefined) {
            queryParameters['formationId.notEquals'] = requestParameters.formationIdNotEquals;
        }

        if (requestParameters.formationIdSpecified !== undefined) {
            queryParameters['formationId.specified'] = requestParameters.formationIdSpecified;
        }

        if (requestParameters.formationIdIn) {
            queryParameters['formationId.in'] = requestParameters.formationIdIn;
        }

        if (requestParameters.formationIdNotIn) {
            queryParameters['formationId.notIn'] = requestParameters.formationIdNotIn;
        }

        if (requestParameters.distinct !== undefined) {
            queryParameters['distinct'] = requestParameters.distinct;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/drivers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DriverFromJSON));
    }

    /**
     */
    async getAllDrivers(requestParameters: GetAllDriversRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Driver>> {
        const response = await this.getAllDriversRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getDriverRaw(requestParameters: GetDriverRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Driver>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getDriver.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/drivers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DriverFromJSON(jsonValue));
    }

    /**
     */
    async getDriver(requestParameters: GetDriverRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Driver> {
        const response = await this.getDriverRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async partialUpdateDriverRaw(requestParameters: PartialUpdateDriverRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Driver>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling partialUpdateDriver.');
        }

        if (requestParameters.driver === null || requestParameters.driver === undefined) {
            throw new runtime.RequiredError('driver','Required parameter requestParameters.driver was null or undefined when calling partialUpdateDriver.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/drivers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: DriverToJSON(requestParameters.driver),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DriverFromJSON(jsonValue));
    }

    /**
     */
    async partialUpdateDriver(requestParameters: PartialUpdateDriverRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Driver> {
        const response = await this.partialUpdateDriverRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateDriverRaw(requestParameters: UpdateDriverRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Driver>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateDriver.');
        }

        if (requestParameters.driver === null || requestParameters.driver === undefined) {
            throw new runtime.RequiredError('driver','Required parameter requestParameters.driver was null or undefined when calling updateDriver.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/drivers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: DriverToJSON(requestParameters.driver),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DriverFromJSON(jsonValue));
    }

    /**
     */
    async updateDriver(requestParameters: UpdateDriverRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Driver> {
        const response = await this.updateDriverRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
