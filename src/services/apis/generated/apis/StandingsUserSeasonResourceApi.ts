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
  StandingsUserSeason,
} from '../models';
import {
    StandingsUserSeasonFromJSON,
    StandingsUserSeasonToJSON,
} from '../models';

export interface CreateStandingsUserSeasonRequest {
    standingsUserSeason: StandingsUserSeason;
}

export interface DeleteStandingsUserSeasonRequest {
    id: number;
}

export interface GetStandingsUserSeasonRequest {
    id: number;
}

export interface PartialUpdateStandingsUserSeasonRequest {
    id: number;
    standingsUserSeason: StandingsUserSeason;
}

export interface UpdateStandingsUserSeasonRequest {
    id: number;
    standingsUserSeason: StandingsUserSeason;
}

/**
 * 
 */
export class StandingsUserSeasonResourceApi extends runtime.BaseAPI {

    /**
     */
    async createStandingsUserSeasonRaw(requestParameters: CreateStandingsUserSeasonRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StandingsUserSeason>> {
        if (requestParameters.standingsUserSeason === null || requestParameters.standingsUserSeason === undefined) {
            throw new runtime.RequiredError('standingsUserSeason','Required parameter requestParameters.standingsUserSeason was null or undefined when calling createStandingsUserSeason.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/standings-user-seasons`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StandingsUserSeasonToJSON(requestParameters.standingsUserSeason),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StandingsUserSeasonFromJSON(jsonValue));
    }

    /**
     */
    async createStandingsUserSeason(requestParameters: CreateStandingsUserSeasonRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StandingsUserSeason> {
        const response = await this.createStandingsUserSeasonRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteStandingsUserSeasonRaw(requestParameters: DeleteStandingsUserSeasonRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteStandingsUserSeason.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/standings-user-seasons/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteStandingsUserSeason(requestParameters: DeleteStandingsUserSeasonRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteStandingsUserSeasonRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getAllStandingsUserSeasonsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<StandingsUserSeason>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/standings-user-seasons`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(StandingsUserSeasonFromJSON));
    }

    /**
     */
    async getAllStandingsUserSeasons(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<StandingsUserSeason>> {
        const response = await this.getAllStandingsUserSeasonsRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getStandingsUserSeasonRaw(requestParameters: GetStandingsUserSeasonRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StandingsUserSeason>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getStandingsUserSeason.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/standings-user-seasons/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StandingsUserSeasonFromJSON(jsonValue));
    }

    /**
     */
    async getStandingsUserSeason(requestParameters: GetStandingsUserSeasonRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StandingsUserSeason> {
        const response = await this.getStandingsUserSeasonRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async partialUpdateStandingsUserSeasonRaw(requestParameters: PartialUpdateStandingsUserSeasonRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StandingsUserSeason>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling partialUpdateStandingsUserSeason.');
        }

        if (requestParameters.standingsUserSeason === null || requestParameters.standingsUserSeason === undefined) {
            throw new runtime.RequiredError('standingsUserSeason','Required parameter requestParameters.standingsUserSeason was null or undefined when calling partialUpdateStandingsUserSeason.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/standings-user-seasons/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: StandingsUserSeasonToJSON(requestParameters.standingsUserSeason),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StandingsUserSeasonFromJSON(jsonValue));
    }

    /**
     */
    async partialUpdateStandingsUserSeason(requestParameters: PartialUpdateStandingsUserSeasonRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StandingsUserSeason> {
        const response = await this.partialUpdateStandingsUserSeasonRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateStandingsUserSeasonRaw(requestParameters: UpdateStandingsUserSeasonRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StandingsUserSeason>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateStandingsUserSeason.');
        }

        if (requestParameters.standingsUserSeason === null || requestParameters.standingsUserSeason === undefined) {
            throw new runtime.RequiredError('standingsUserSeason','Required parameter requestParameters.standingsUserSeason was null or undefined when calling updateStandingsUserSeason.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/standings-user-seasons/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: StandingsUserSeasonToJSON(requestParameters.standingsUserSeason),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StandingsUserSeasonFromJSON(jsonValue));
    }

    /**
     */
    async updateStandingsUserSeason(requestParameters: UpdateStandingsUserSeasonRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StandingsUserSeason> {
        const response = await this.updateStandingsUserSeasonRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
