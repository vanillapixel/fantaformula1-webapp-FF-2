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

export interface GetPriceDriverAndTeamFromRaceRequest {
    id: number;
}

/**
 * 
 */
export class CustomPriceGroupsResourceApi extends runtime.BaseAPI {

    /**
     */
    async getAllCurrentZweelerCalendarInfoRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/custom/calendar-info`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async getAllCurrentZweelerCalendarInfo(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getAllCurrentZweelerCalendarInfoRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getPriceDriverAndTeamFromRaceRaw(requestParameters: GetPriceDriverAndTeamFromRaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getPriceDriverAndTeamFromRace.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/custom/price-groups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async getPriceDriverAndTeamFromRace(requestParameters: GetPriceDriverAndTeamFromRaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getPriceDriverAndTeamFromRaceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
