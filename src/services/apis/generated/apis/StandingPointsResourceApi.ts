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
  StandingPoints,
} from '../models';
import {
    StandingPointsFromJSON,
    StandingPointsToJSON,
} from '../models';

export interface CountStandingPointsRequest {
    idGreaterThan?: number;
    idLessThan?: number;
    idGreaterThanOrEqual?: number;
    idLessThanOrEqual?: number;
    idEquals?: number;
    idNotEquals?: number;
    idSpecified?: boolean;
    idIn?: Array<number>;
    idNotIn?: Array<number>;
    posGreaterThan?: number;
    posLessThan?: number;
    posGreaterThanOrEqual?: number;
    posLessThanOrEqual?: number;
    posEquals?: number;
    posNotEquals?: number;
    posSpecified?: boolean;
    posIn?: Array<number>;
    posNotIn?: Array<number>;
    pointGreaterThan?: number;
    pointLessThan?: number;
    pointGreaterThanOrEqual?: number;
    pointLessThanOrEqual?: number;
    pointEquals?: number;
    pointNotEquals?: number;
    pointSpecified?: boolean;
    pointIn?: Array<number>;
    pointNotIn?: Array<number>;
    standingsPlayerTypeEquals?: CountStandingPointsStandingsPlayerTypeEqualsEnum;
    standingsPlayerTypeNotEquals?: CountStandingPointsStandingsPlayerTypeNotEqualsEnum;
    standingsPlayerTypeSpecified?: boolean;
    standingsPlayerTypeIn?: Array<CountStandingPointsStandingsPlayerTypeInEnum>;
    standingsPlayerTypeNotIn?: Array<CountStandingPointsStandingsPlayerTypeNotInEnum>;
    standingsRaceTypeEquals?: CountStandingPointsStandingsRaceTypeEqualsEnum;
    standingsRaceTypeNotEquals?: CountStandingPointsStandingsRaceTypeNotEqualsEnum;
    standingsRaceTypeSpecified?: boolean;
    standingsRaceTypeIn?: Array<CountStandingPointsStandingsRaceTypeInEnum>;
    standingsRaceTypeNotIn?: Array<CountStandingPointsStandingsRaceTypeNotInEnum>;
    rulesTypeEquals?: CountStandingPointsRulesTypeEqualsEnum;
    rulesTypeNotEquals?: CountStandingPointsRulesTypeNotEqualsEnum;
    rulesTypeSpecified?: boolean;
    rulesTypeIn?: Array<CountStandingPointsRulesTypeInEnum>;
    rulesTypeNotIn?: Array<CountStandingPointsRulesTypeNotInEnum>;
    rulesIdGreaterThan?: number;
    rulesIdLessThan?: number;
    rulesIdGreaterThanOrEqual?: number;
    rulesIdLessThanOrEqual?: number;
    rulesIdEquals?: number;
    rulesIdNotEquals?: number;
    rulesIdSpecified?: boolean;
    rulesIdIn?: Array<number>;
    rulesIdNotIn?: Array<number>;
    distinct?: boolean;
}

export interface CreateStandingPointsRequest {
    standingPoints: StandingPoints;
}

export interface DeleteStandingPointsRequest {
    id: number;
}

export interface GetAllStandingPointsRequest {
    idGreaterThan?: number;
    idLessThan?: number;
    idGreaterThanOrEqual?: number;
    idLessThanOrEqual?: number;
    idEquals?: number;
    idNotEquals?: number;
    idSpecified?: boolean;
    idIn?: Array<number>;
    idNotIn?: Array<number>;
    posGreaterThan?: number;
    posLessThan?: number;
    posGreaterThanOrEqual?: number;
    posLessThanOrEqual?: number;
    posEquals?: number;
    posNotEquals?: number;
    posSpecified?: boolean;
    posIn?: Array<number>;
    posNotIn?: Array<number>;
    pointGreaterThan?: number;
    pointLessThan?: number;
    pointGreaterThanOrEqual?: number;
    pointLessThanOrEqual?: number;
    pointEquals?: number;
    pointNotEquals?: number;
    pointSpecified?: boolean;
    pointIn?: Array<number>;
    pointNotIn?: Array<number>;
    standingsPlayerTypeEquals?: GetAllStandingPointsStandingsPlayerTypeEqualsEnum;
    standingsPlayerTypeNotEquals?: GetAllStandingPointsStandingsPlayerTypeNotEqualsEnum;
    standingsPlayerTypeSpecified?: boolean;
    standingsPlayerTypeIn?: Array<GetAllStandingPointsStandingsPlayerTypeInEnum>;
    standingsPlayerTypeNotIn?: Array<GetAllStandingPointsStandingsPlayerTypeNotInEnum>;
    standingsRaceTypeEquals?: GetAllStandingPointsStandingsRaceTypeEqualsEnum;
    standingsRaceTypeNotEquals?: GetAllStandingPointsStandingsRaceTypeNotEqualsEnum;
    standingsRaceTypeSpecified?: boolean;
    standingsRaceTypeIn?: Array<GetAllStandingPointsStandingsRaceTypeInEnum>;
    standingsRaceTypeNotIn?: Array<GetAllStandingPointsStandingsRaceTypeNotInEnum>;
    rulesTypeEquals?: GetAllStandingPointsRulesTypeEqualsEnum;
    rulesTypeNotEquals?: GetAllStandingPointsRulesTypeNotEqualsEnum;
    rulesTypeSpecified?: boolean;
    rulesTypeIn?: Array<GetAllStandingPointsRulesTypeInEnum>;
    rulesTypeNotIn?: Array<GetAllStandingPointsRulesTypeNotInEnum>;
    rulesIdGreaterThan?: number;
    rulesIdLessThan?: number;
    rulesIdGreaterThanOrEqual?: number;
    rulesIdLessThanOrEqual?: number;
    rulesIdEquals?: number;
    rulesIdNotEquals?: number;
    rulesIdSpecified?: boolean;
    rulesIdIn?: Array<number>;
    rulesIdNotIn?: Array<number>;
    distinct?: boolean;
}

export interface GetStandingPointsRequest {
    id: number;
}

export interface PartialUpdateStandingPointsRequest {
    id: number;
    standingPoints: StandingPoints;
}

export interface UpdateStandingPointsRequest {
    id: number;
    standingPoints: StandingPoints;
}

/**
 * 
 */
export class StandingPointsResourceApi extends runtime.BaseAPI {

    /**
     */
    async countStandingPointsRaw(requestParameters: CountStandingPointsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
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

        if (requestParameters.posGreaterThan !== undefined) {
            queryParameters['pos.greaterThan'] = requestParameters.posGreaterThan;
        }

        if (requestParameters.posLessThan !== undefined) {
            queryParameters['pos.lessThan'] = requestParameters.posLessThan;
        }

        if (requestParameters.posGreaterThanOrEqual !== undefined) {
            queryParameters['pos.greaterThanOrEqual'] = requestParameters.posGreaterThanOrEqual;
        }

        if (requestParameters.posLessThanOrEqual !== undefined) {
            queryParameters['pos.lessThanOrEqual'] = requestParameters.posLessThanOrEqual;
        }

        if (requestParameters.posEquals !== undefined) {
            queryParameters['pos.equals'] = requestParameters.posEquals;
        }

        if (requestParameters.posNotEquals !== undefined) {
            queryParameters['pos.notEquals'] = requestParameters.posNotEquals;
        }

        if (requestParameters.posSpecified !== undefined) {
            queryParameters['pos.specified'] = requestParameters.posSpecified;
        }

        if (requestParameters.posIn) {
            queryParameters['pos.in'] = requestParameters.posIn;
        }

        if (requestParameters.posNotIn) {
            queryParameters['pos.notIn'] = requestParameters.posNotIn;
        }

        if (requestParameters.pointGreaterThan !== undefined) {
            queryParameters['point.greaterThan'] = requestParameters.pointGreaterThan;
        }

        if (requestParameters.pointLessThan !== undefined) {
            queryParameters['point.lessThan'] = requestParameters.pointLessThan;
        }

        if (requestParameters.pointGreaterThanOrEqual !== undefined) {
            queryParameters['point.greaterThanOrEqual'] = requestParameters.pointGreaterThanOrEqual;
        }

        if (requestParameters.pointLessThanOrEqual !== undefined) {
            queryParameters['point.lessThanOrEqual'] = requestParameters.pointLessThanOrEqual;
        }

        if (requestParameters.pointEquals !== undefined) {
            queryParameters['point.equals'] = requestParameters.pointEquals;
        }

        if (requestParameters.pointNotEquals !== undefined) {
            queryParameters['point.notEquals'] = requestParameters.pointNotEquals;
        }

        if (requestParameters.pointSpecified !== undefined) {
            queryParameters['point.specified'] = requestParameters.pointSpecified;
        }

        if (requestParameters.pointIn) {
            queryParameters['point.in'] = requestParameters.pointIn;
        }

        if (requestParameters.pointNotIn) {
            queryParameters['point.notIn'] = requestParameters.pointNotIn;
        }

        if (requestParameters.standingsPlayerTypeEquals !== undefined) {
            queryParameters['standingsPlayerType.equals'] = requestParameters.standingsPlayerTypeEquals;
        }

        if (requestParameters.standingsPlayerTypeNotEquals !== undefined) {
            queryParameters['standingsPlayerType.notEquals'] = requestParameters.standingsPlayerTypeNotEquals;
        }

        if (requestParameters.standingsPlayerTypeSpecified !== undefined) {
            queryParameters['standingsPlayerType.specified'] = requestParameters.standingsPlayerTypeSpecified;
        }

        if (requestParameters.standingsPlayerTypeIn) {
            queryParameters['standingsPlayerType.in'] = requestParameters.standingsPlayerTypeIn;
        }

        if (requestParameters.standingsPlayerTypeNotIn) {
            queryParameters['standingsPlayerType.notIn'] = requestParameters.standingsPlayerTypeNotIn;
        }

        if (requestParameters.standingsRaceTypeEquals !== undefined) {
            queryParameters['standingsRaceType.equals'] = requestParameters.standingsRaceTypeEquals;
        }

        if (requestParameters.standingsRaceTypeNotEquals !== undefined) {
            queryParameters['standingsRaceType.notEquals'] = requestParameters.standingsRaceTypeNotEquals;
        }

        if (requestParameters.standingsRaceTypeSpecified !== undefined) {
            queryParameters['standingsRaceType.specified'] = requestParameters.standingsRaceTypeSpecified;
        }

        if (requestParameters.standingsRaceTypeIn) {
            queryParameters['standingsRaceType.in'] = requestParameters.standingsRaceTypeIn;
        }

        if (requestParameters.standingsRaceTypeNotIn) {
            queryParameters['standingsRaceType.notIn'] = requestParameters.standingsRaceTypeNotIn;
        }

        if (requestParameters.rulesTypeEquals !== undefined) {
            queryParameters['rulesType.equals'] = requestParameters.rulesTypeEquals;
        }

        if (requestParameters.rulesTypeNotEquals !== undefined) {
            queryParameters['rulesType.notEquals'] = requestParameters.rulesTypeNotEquals;
        }

        if (requestParameters.rulesTypeSpecified !== undefined) {
            queryParameters['rulesType.specified'] = requestParameters.rulesTypeSpecified;
        }

        if (requestParameters.rulesTypeIn) {
            queryParameters['rulesType.in'] = requestParameters.rulesTypeIn;
        }

        if (requestParameters.rulesTypeNotIn) {
            queryParameters['rulesType.notIn'] = requestParameters.rulesTypeNotIn;
        }

        if (requestParameters.rulesIdGreaterThan !== undefined) {
            queryParameters['rulesId.greaterThan'] = requestParameters.rulesIdGreaterThan;
        }

        if (requestParameters.rulesIdLessThan !== undefined) {
            queryParameters['rulesId.lessThan'] = requestParameters.rulesIdLessThan;
        }

        if (requestParameters.rulesIdGreaterThanOrEqual !== undefined) {
            queryParameters['rulesId.greaterThanOrEqual'] = requestParameters.rulesIdGreaterThanOrEqual;
        }

        if (requestParameters.rulesIdLessThanOrEqual !== undefined) {
            queryParameters['rulesId.lessThanOrEqual'] = requestParameters.rulesIdLessThanOrEqual;
        }

        if (requestParameters.rulesIdEquals !== undefined) {
            queryParameters['rulesId.equals'] = requestParameters.rulesIdEquals;
        }

        if (requestParameters.rulesIdNotEquals !== undefined) {
            queryParameters['rulesId.notEquals'] = requestParameters.rulesIdNotEquals;
        }

        if (requestParameters.rulesIdSpecified !== undefined) {
            queryParameters['rulesId.specified'] = requestParameters.rulesIdSpecified;
        }

        if (requestParameters.rulesIdIn) {
            queryParameters['rulesId.in'] = requestParameters.rulesIdIn;
        }

        if (requestParameters.rulesIdNotIn) {
            queryParameters['rulesId.notIn'] = requestParameters.rulesIdNotIn;
        }

        if (requestParameters.distinct !== undefined) {
            queryParameters['distinct'] = requestParameters.distinct;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/standing-points/count`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async countStandingPoints(requestParameters: CountStandingPointsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.countStandingPointsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async createStandingPointsRaw(requestParameters: CreateStandingPointsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StandingPoints>> {
        if (requestParameters.standingPoints === null || requestParameters.standingPoints === undefined) {
            throw new runtime.RequiredError('standingPoints','Required parameter requestParameters.standingPoints was null or undefined when calling createStandingPoints.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/standing-points`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StandingPointsToJSON(requestParameters.standingPoints),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StandingPointsFromJSON(jsonValue));
    }

    /**
     */
    async createStandingPoints(requestParameters: CreateStandingPointsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StandingPoints> {
        const response = await this.createStandingPointsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteStandingPointsRaw(requestParameters: DeleteStandingPointsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteStandingPoints.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/standing-points/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteStandingPoints(requestParameters: DeleteStandingPointsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteStandingPointsRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getAllStandingPointsRaw(requestParameters: GetAllStandingPointsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<StandingPoints>>> {
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

        if (requestParameters.posGreaterThan !== undefined) {
            queryParameters['pos.greaterThan'] = requestParameters.posGreaterThan;
        }

        if (requestParameters.posLessThan !== undefined) {
            queryParameters['pos.lessThan'] = requestParameters.posLessThan;
        }

        if (requestParameters.posGreaterThanOrEqual !== undefined) {
            queryParameters['pos.greaterThanOrEqual'] = requestParameters.posGreaterThanOrEqual;
        }

        if (requestParameters.posLessThanOrEqual !== undefined) {
            queryParameters['pos.lessThanOrEqual'] = requestParameters.posLessThanOrEqual;
        }

        if (requestParameters.posEquals !== undefined) {
            queryParameters['pos.equals'] = requestParameters.posEquals;
        }

        if (requestParameters.posNotEquals !== undefined) {
            queryParameters['pos.notEquals'] = requestParameters.posNotEquals;
        }

        if (requestParameters.posSpecified !== undefined) {
            queryParameters['pos.specified'] = requestParameters.posSpecified;
        }

        if (requestParameters.posIn) {
            queryParameters['pos.in'] = requestParameters.posIn;
        }

        if (requestParameters.posNotIn) {
            queryParameters['pos.notIn'] = requestParameters.posNotIn;
        }

        if (requestParameters.pointGreaterThan !== undefined) {
            queryParameters['point.greaterThan'] = requestParameters.pointGreaterThan;
        }

        if (requestParameters.pointLessThan !== undefined) {
            queryParameters['point.lessThan'] = requestParameters.pointLessThan;
        }

        if (requestParameters.pointGreaterThanOrEqual !== undefined) {
            queryParameters['point.greaterThanOrEqual'] = requestParameters.pointGreaterThanOrEqual;
        }

        if (requestParameters.pointLessThanOrEqual !== undefined) {
            queryParameters['point.lessThanOrEqual'] = requestParameters.pointLessThanOrEqual;
        }

        if (requestParameters.pointEquals !== undefined) {
            queryParameters['point.equals'] = requestParameters.pointEquals;
        }

        if (requestParameters.pointNotEquals !== undefined) {
            queryParameters['point.notEquals'] = requestParameters.pointNotEquals;
        }

        if (requestParameters.pointSpecified !== undefined) {
            queryParameters['point.specified'] = requestParameters.pointSpecified;
        }

        if (requestParameters.pointIn) {
            queryParameters['point.in'] = requestParameters.pointIn;
        }

        if (requestParameters.pointNotIn) {
            queryParameters['point.notIn'] = requestParameters.pointNotIn;
        }

        if (requestParameters.standingsPlayerTypeEquals !== undefined) {
            queryParameters['standingsPlayerType.equals'] = requestParameters.standingsPlayerTypeEquals;
        }

        if (requestParameters.standingsPlayerTypeNotEquals !== undefined) {
            queryParameters['standingsPlayerType.notEquals'] = requestParameters.standingsPlayerTypeNotEquals;
        }

        if (requestParameters.standingsPlayerTypeSpecified !== undefined) {
            queryParameters['standingsPlayerType.specified'] = requestParameters.standingsPlayerTypeSpecified;
        }

        if (requestParameters.standingsPlayerTypeIn) {
            queryParameters['standingsPlayerType.in'] = requestParameters.standingsPlayerTypeIn;
        }

        if (requestParameters.standingsPlayerTypeNotIn) {
            queryParameters['standingsPlayerType.notIn'] = requestParameters.standingsPlayerTypeNotIn;
        }

        if (requestParameters.standingsRaceTypeEquals !== undefined) {
            queryParameters['standingsRaceType.equals'] = requestParameters.standingsRaceTypeEquals;
        }

        if (requestParameters.standingsRaceTypeNotEquals !== undefined) {
            queryParameters['standingsRaceType.notEquals'] = requestParameters.standingsRaceTypeNotEquals;
        }

        if (requestParameters.standingsRaceTypeSpecified !== undefined) {
            queryParameters['standingsRaceType.specified'] = requestParameters.standingsRaceTypeSpecified;
        }

        if (requestParameters.standingsRaceTypeIn) {
            queryParameters['standingsRaceType.in'] = requestParameters.standingsRaceTypeIn;
        }

        if (requestParameters.standingsRaceTypeNotIn) {
            queryParameters['standingsRaceType.notIn'] = requestParameters.standingsRaceTypeNotIn;
        }

        if (requestParameters.rulesTypeEquals !== undefined) {
            queryParameters['rulesType.equals'] = requestParameters.rulesTypeEquals;
        }

        if (requestParameters.rulesTypeNotEquals !== undefined) {
            queryParameters['rulesType.notEquals'] = requestParameters.rulesTypeNotEquals;
        }

        if (requestParameters.rulesTypeSpecified !== undefined) {
            queryParameters['rulesType.specified'] = requestParameters.rulesTypeSpecified;
        }

        if (requestParameters.rulesTypeIn) {
            queryParameters['rulesType.in'] = requestParameters.rulesTypeIn;
        }

        if (requestParameters.rulesTypeNotIn) {
            queryParameters['rulesType.notIn'] = requestParameters.rulesTypeNotIn;
        }

        if (requestParameters.rulesIdGreaterThan !== undefined) {
            queryParameters['rulesId.greaterThan'] = requestParameters.rulesIdGreaterThan;
        }

        if (requestParameters.rulesIdLessThan !== undefined) {
            queryParameters['rulesId.lessThan'] = requestParameters.rulesIdLessThan;
        }

        if (requestParameters.rulesIdGreaterThanOrEqual !== undefined) {
            queryParameters['rulesId.greaterThanOrEqual'] = requestParameters.rulesIdGreaterThanOrEqual;
        }

        if (requestParameters.rulesIdLessThanOrEqual !== undefined) {
            queryParameters['rulesId.lessThanOrEqual'] = requestParameters.rulesIdLessThanOrEqual;
        }

        if (requestParameters.rulesIdEquals !== undefined) {
            queryParameters['rulesId.equals'] = requestParameters.rulesIdEquals;
        }

        if (requestParameters.rulesIdNotEquals !== undefined) {
            queryParameters['rulesId.notEquals'] = requestParameters.rulesIdNotEquals;
        }

        if (requestParameters.rulesIdSpecified !== undefined) {
            queryParameters['rulesId.specified'] = requestParameters.rulesIdSpecified;
        }

        if (requestParameters.rulesIdIn) {
            queryParameters['rulesId.in'] = requestParameters.rulesIdIn;
        }

        if (requestParameters.rulesIdNotIn) {
            queryParameters['rulesId.notIn'] = requestParameters.rulesIdNotIn;
        }

        if (requestParameters.distinct !== undefined) {
            queryParameters['distinct'] = requestParameters.distinct;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/standing-points`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(StandingPointsFromJSON));
    }

    /**
     */
    async getAllStandingPoints(requestParameters: GetAllStandingPointsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<StandingPoints>> {
        const response = await this.getAllStandingPointsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getStandingPointsRaw(requestParameters: GetStandingPointsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StandingPoints>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getStandingPoints.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/standing-points/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StandingPointsFromJSON(jsonValue));
    }

    /**
     */
    async getStandingPoints(requestParameters: GetStandingPointsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StandingPoints> {
        const response = await this.getStandingPointsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async partialUpdateStandingPointsRaw(requestParameters: PartialUpdateStandingPointsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StandingPoints>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling partialUpdateStandingPoints.');
        }

        if (requestParameters.standingPoints === null || requestParameters.standingPoints === undefined) {
            throw new runtime.RequiredError('standingPoints','Required parameter requestParameters.standingPoints was null or undefined when calling partialUpdateStandingPoints.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/standing-points/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: StandingPointsToJSON(requestParameters.standingPoints),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StandingPointsFromJSON(jsonValue));
    }

    /**
     */
    async partialUpdateStandingPoints(requestParameters: PartialUpdateStandingPointsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StandingPoints> {
        const response = await this.partialUpdateStandingPointsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateStandingPointsRaw(requestParameters: UpdateStandingPointsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StandingPoints>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateStandingPoints.');
        }

        if (requestParameters.standingPoints === null || requestParameters.standingPoints === undefined) {
            throw new runtime.RequiredError('standingPoints','Required parameter requestParameters.standingPoints was null or undefined when calling updateStandingPoints.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/standing-points/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: StandingPointsToJSON(requestParameters.standingPoints),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StandingPointsFromJSON(jsonValue));
    }

    /**
     */
    async updateStandingPoints(requestParameters: UpdateStandingPointsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StandingPoints> {
        const response = await this.updateStandingPointsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const CountStandingPointsStandingsPlayerTypeEqualsEnum = {
    Player: 'PLAYER',
    Driver: 'DRIVER',
    Team: 'TEAM'
} as const;
export type CountStandingPointsStandingsPlayerTypeEqualsEnum = typeof CountStandingPointsStandingsPlayerTypeEqualsEnum[keyof typeof CountStandingPointsStandingsPlayerTypeEqualsEnum];
/**
 * @export
 */
export const CountStandingPointsStandingsPlayerTypeNotEqualsEnum = {
    Player: 'PLAYER',
    Driver: 'DRIVER',
    Team: 'TEAM'
} as const;
export type CountStandingPointsStandingsPlayerTypeNotEqualsEnum = typeof CountStandingPointsStandingsPlayerTypeNotEqualsEnum[keyof typeof CountStandingPointsStandingsPlayerTypeNotEqualsEnum];
/**
 * @export
 */
export const CountStandingPointsStandingsPlayerTypeInEnum = {
    Player: 'PLAYER',
    Driver: 'DRIVER',
    Team: 'TEAM'
} as const;
export type CountStandingPointsStandingsPlayerTypeInEnum = typeof CountStandingPointsStandingsPlayerTypeInEnum[keyof typeof CountStandingPointsStandingsPlayerTypeInEnum];
/**
 * @export
 */
export const CountStandingPointsStandingsPlayerTypeNotInEnum = {
    Player: 'PLAYER',
    Driver: 'DRIVER',
    Team: 'TEAM'
} as const;
export type CountStandingPointsStandingsPlayerTypeNotInEnum = typeof CountStandingPointsStandingsPlayerTypeNotInEnum[keyof typeof CountStandingPointsStandingsPlayerTypeNotInEnum];
/**
 * @export
 */
export const CountStandingPointsStandingsRaceTypeEqualsEnum = {
    Qualify: 'QUALIFY',
    Race: 'RACE'
} as const;
export type CountStandingPointsStandingsRaceTypeEqualsEnum = typeof CountStandingPointsStandingsRaceTypeEqualsEnum[keyof typeof CountStandingPointsStandingsRaceTypeEqualsEnum];
/**
 * @export
 */
export const CountStandingPointsStandingsRaceTypeNotEqualsEnum = {
    Qualify: 'QUALIFY',
    Race: 'RACE'
} as const;
export type CountStandingPointsStandingsRaceTypeNotEqualsEnum = typeof CountStandingPointsStandingsRaceTypeNotEqualsEnum[keyof typeof CountStandingPointsStandingsRaceTypeNotEqualsEnum];
/**
 * @export
 */
export const CountStandingPointsStandingsRaceTypeInEnum = {
    Qualify: 'QUALIFY',
    Race: 'RACE'
} as const;
export type CountStandingPointsStandingsRaceTypeInEnum = typeof CountStandingPointsStandingsRaceTypeInEnum[keyof typeof CountStandingPointsStandingsRaceTypeInEnum];
/**
 * @export
 */
export const CountStandingPointsStandingsRaceTypeNotInEnum = {
    Qualify: 'QUALIFY',
    Race: 'RACE'
} as const;
export type CountStandingPointsStandingsRaceTypeNotInEnum = typeof CountStandingPointsStandingsRaceTypeNotInEnum[keyof typeof CountStandingPointsStandingsRaceTypeNotInEnum];
/**
 * @export
 */
export const CountStandingPointsRulesTypeEqualsEnum = {
    Fantasyformula1Managment: 'FANTASYFORMULA1MANAGMENT'
} as const;
export type CountStandingPointsRulesTypeEqualsEnum = typeof CountStandingPointsRulesTypeEqualsEnum[keyof typeof CountStandingPointsRulesTypeEqualsEnum];
/**
 * @export
 */
export const CountStandingPointsRulesTypeNotEqualsEnum = {
    Fantasyformula1Managment: 'FANTASYFORMULA1MANAGMENT'
} as const;
export type CountStandingPointsRulesTypeNotEqualsEnum = typeof CountStandingPointsRulesTypeNotEqualsEnum[keyof typeof CountStandingPointsRulesTypeNotEqualsEnum];
/**
 * @export
 */
export const CountStandingPointsRulesTypeInEnum = {
    Fantasyformula1Managment: 'FANTASYFORMULA1MANAGMENT'
} as const;
export type CountStandingPointsRulesTypeInEnum = typeof CountStandingPointsRulesTypeInEnum[keyof typeof CountStandingPointsRulesTypeInEnum];
/**
 * @export
 */
export const CountStandingPointsRulesTypeNotInEnum = {
    Fantasyformula1Managment: 'FANTASYFORMULA1MANAGMENT'
} as const;
export type CountStandingPointsRulesTypeNotInEnum = typeof CountStandingPointsRulesTypeNotInEnum[keyof typeof CountStandingPointsRulesTypeNotInEnum];
/**
 * @export
 */
export const GetAllStandingPointsStandingsPlayerTypeEqualsEnum = {
    Player: 'PLAYER',
    Driver: 'DRIVER',
    Team: 'TEAM'
} as const;
export type GetAllStandingPointsStandingsPlayerTypeEqualsEnum = typeof GetAllStandingPointsStandingsPlayerTypeEqualsEnum[keyof typeof GetAllStandingPointsStandingsPlayerTypeEqualsEnum];
/**
 * @export
 */
export const GetAllStandingPointsStandingsPlayerTypeNotEqualsEnum = {
    Player: 'PLAYER',
    Driver: 'DRIVER',
    Team: 'TEAM'
} as const;
export type GetAllStandingPointsStandingsPlayerTypeNotEqualsEnum = typeof GetAllStandingPointsStandingsPlayerTypeNotEqualsEnum[keyof typeof GetAllStandingPointsStandingsPlayerTypeNotEqualsEnum];
/**
 * @export
 */
export const GetAllStandingPointsStandingsPlayerTypeInEnum = {
    Player: 'PLAYER',
    Driver: 'DRIVER',
    Team: 'TEAM'
} as const;
export type GetAllStandingPointsStandingsPlayerTypeInEnum = typeof GetAllStandingPointsStandingsPlayerTypeInEnum[keyof typeof GetAllStandingPointsStandingsPlayerTypeInEnum];
/**
 * @export
 */
export const GetAllStandingPointsStandingsPlayerTypeNotInEnum = {
    Player: 'PLAYER',
    Driver: 'DRIVER',
    Team: 'TEAM'
} as const;
export type GetAllStandingPointsStandingsPlayerTypeNotInEnum = typeof GetAllStandingPointsStandingsPlayerTypeNotInEnum[keyof typeof GetAllStandingPointsStandingsPlayerTypeNotInEnum];
/**
 * @export
 */
export const GetAllStandingPointsStandingsRaceTypeEqualsEnum = {
    Qualify: 'QUALIFY',
    Race: 'RACE'
} as const;
export type GetAllStandingPointsStandingsRaceTypeEqualsEnum = typeof GetAllStandingPointsStandingsRaceTypeEqualsEnum[keyof typeof GetAllStandingPointsStandingsRaceTypeEqualsEnum];
/**
 * @export
 */
export const GetAllStandingPointsStandingsRaceTypeNotEqualsEnum = {
    Qualify: 'QUALIFY',
    Race: 'RACE'
} as const;
export type GetAllStandingPointsStandingsRaceTypeNotEqualsEnum = typeof GetAllStandingPointsStandingsRaceTypeNotEqualsEnum[keyof typeof GetAllStandingPointsStandingsRaceTypeNotEqualsEnum];
/**
 * @export
 */
export const GetAllStandingPointsStandingsRaceTypeInEnum = {
    Qualify: 'QUALIFY',
    Race: 'RACE'
} as const;
export type GetAllStandingPointsStandingsRaceTypeInEnum = typeof GetAllStandingPointsStandingsRaceTypeInEnum[keyof typeof GetAllStandingPointsStandingsRaceTypeInEnum];
/**
 * @export
 */
export const GetAllStandingPointsStandingsRaceTypeNotInEnum = {
    Qualify: 'QUALIFY',
    Race: 'RACE'
} as const;
export type GetAllStandingPointsStandingsRaceTypeNotInEnum = typeof GetAllStandingPointsStandingsRaceTypeNotInEnum[keyof typeof GetAllStandingPointsStandingsRaceTypeNotInEnum];
/**
 * @export
 */
export const GetAllStandingPointsRulesTypeEqualsEnum = {
    Fantasyformula1Managment: 'FANTASYFORMULA1MANAGMENT'
} as const;
export type GetAllStandingPointsRulesTypeEqualsEnum = typeof GetAllStandingPointsRulesTypeEqualsEnum[keyof typeof GetAllStandingPointsRulesTypeEqualsEnum];
/**
 * @export
 */
export const GetAllStandingPointsRulesTypeNotEqualsEnum = {
    Fantasyformula1Managment: 'FANTASYFORMULA1MANAGMENT'
} as const;
export type GetAllStandingPointsRulesTypeNotEqualsEnum = typeof GetAllStandingPointsRulesTypeNotEqualsEnum[keyof typeof GetAllStandingPointsRulesTypeNotEqualsEnum];
/**
 * @export
 */
export const GetAllStandingPointsRulesTypeInEnum = {
    Fantasyformula1Managment: 'FANTASYFORMULA1MANAGMENT'
} as const;
export type GetAllStandingPointsRulesTypeInEnum = typeof GetAllStandingPointsRulesTypeInEnum[keyof typeof GetAllStandingPointsRulesTypeInEnum];
/**
 * @export
 */
export const GetAllStandingPointsRulesTypeNotInEnum = {
    Fantasyformula1Managment: 'FANTASYFORMULA1MANAGMENT'
} as const;
export type GetAllStandingPointsRulesTypeNotInEnum = typeof GetAllStandingPointsRulesTypeNotInEnum[keyof typeof GetAllStandingPointsRulesTypeNotInEnum];
