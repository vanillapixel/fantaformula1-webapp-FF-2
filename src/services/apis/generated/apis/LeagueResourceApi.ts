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
  League,
} from '../models';
import {
    LeagueFromJSON,
    LeagueToJSON,
} from '../models';

export interface CountLeaguesRequest {
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
    creationDateGreaterThan?: Date;
    creationDateLessThan?: Date;
    creationDateGreaterThanOrEqual?: Date;
    creationDateLessThanOrEqual?: Date;
    creationDateEquals?: Date;
    creationDateNotEquals?: Date;
    creationDateSpecified?: boolean;
    creationDateIn?: Array<Date>;
    creationDateNotIn?: Array<Date>;
    standingsUserLeagueIdGreaterThan?: number;
    standingsUserLeagueIdLessThan?: number;
    standingsUserLeagueIdGreaterThanOrEqual?: number;
    standingsUserLeagueIdLessThanOrEqual?: number;
    standingsUserLeagueIdEquals?: number;
    standingsUserLeagueIdNotEquals?: number;
    standingsUserLeagueIdSpecified?: boolean;
    standingsUserLeagueIdIn?: Array<number>;
    standingsUserLeagueIdNotIn?: Array<number>;
    seasonIdGreaterThan?: number;
    seasonIdLessThan?: number;
    seasonIdGreaterThanOrEqual?: number;
    seasonIdLessThanOrEqual?: number;
    seasonIdEquals?: number;
    seasonIdNotEquals?: number;
    seasonIdSpecified?: boolean;
    seasonIdIn?: Array<number>;
    seasonIdNotIn?: Array<number>;
    userSeasonInviteIdGreaterThan?: number;
    userSeasonInviteIdLessThan?: number;
    userSeasonInviteIdGreaterThanOrEqual?: number;
    userSeasonInviteIdLessThanOrEqual?: number;
    userSeasonInviteIdEquals?: number;
    userSeasonInviteIdNotEquals?: number;
    userSeasonInviteIdSpecified?: boolean;
    userSeasonInviteIdIn?: Array<number>;
    userSeasonInviteIdNotIn?: Array<number>;
    rulesIdGreaterThan?: number;
    rulesIdLessThan?: number;
    rulesIdGreaterThanOrEqual?: number;
    rulesIdLessThanOrEqual?: number;
    rulesIdEquals?: number;
    rulesIdNotEquals?: number;
    rulesIdSpecified?: boolean;
    rulesIdIn?: Array<number>;
    rulesIdNotIn?: Array<number>;
    userSeasonRulesIdGreaterThan?: number;
    userSeasonRulesIdLessThan?: number;
    userSeasonRulesIdGreaterThanOrEqual?: number;
    userSeasonRulesIdLessThanOrEqual?: number;
    userSeasonRulesIdEquals?: number;
    userSeasonRulesIdNotEquals?: number;
    userSeasonRulesIdSpecified?: boolean;
    userSeasonRulesIdIn?: Array<number>;
    userSeasonRulesIdNotIn?: Array<number>;
    distinct?: boolean;
}

export interface CreateLeagueRequest {
    league: League;
}

export interface DeleteLeagueRequest {
    id: number;
}

export interface GetAllLeaguesRequest {
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
    creationDateGreaterThan?: Date;
    creationDateLessThan?: Date;
    creationDateGreaterThanOrEqual?: Date;
    creationDateLessThanOrEqual?: Date;
    creationDateEquals?: Date;
    creationDateNotEquals?: Date;
    creationDateSpecified?: boolean;
    creationDateIn?: Array<Date>;
    creationDateNotIn?: Array<Date>;
    standingsUserLeagueIdGreaterThan?: number;
    standingsUserLeagueIdLessThan?: number;
    standingsUserLeagueIdGreaterThanOrEqual?: number;
    standingsUserLeagueIdLessThanOrEqual?: number;
    standingsUserLeagueIdEquals?: number;
    standingsUserLeagueIdNotEquals?: number;
    standingsUserLeagueIdSpecified?: boolean;
    standingsUserLeagueIdIn?: Array<number>;
    standingsUserLeagueIdNotIn?: Array<number>;
    seasonIdGreaterThan?: number;
    seasonIdLessThan?: number;
    seasonIdGreaterThanOrEqual?: number;
    seasonIdLessThanOrEqual?: number;
    seasonIdEquals?: number;
    seasonIdNotEquals?: number;
    seasonIdSpecified?: boolean;
    seasonIdIn?: Array<number>;
    seasonIdNotIn?: Array<number>;
    userSeasonInviteIdGreaterThan?: number;
    userSeasonInviteIdLessThan?: number;
    userSeasonInviteIdGreaterThanOrEqual?: number;
    userSeasonInviteIdLessThanOrEqual?: number;
    userSeasonInviteIdEquals?: number;
    userSeasonInviteIdNotEquals?: number;
    userSeasonInviteIdSpecified?: boolean;
    userSeasonInviteIdIn?: Array<number>;
    userSeasonInviteIdNotIn?: Array<number>;
    rulesIdGreaterThan?: number;
    rulesIdLessThan?: number;
    rulesIdGreaterThanOrEqual?: number;
    rulesIdLessThanOrEqual?: number;
    rulesIdEquals?: number;
    rulesIdNotEquals?: number;
    rulesIdSpecified?: boolean;
    rulesIdIn?: Array<number>;
    rulesIdNotIn?: Array<number>;
    userSeasonRulesIdGreaterThan?: number;
    userSeasonRulesIdLessThan?: number;
    userSeasonRulesIdGreaterThanOrEqual?: number;
    userSeasonRulesIdLessThanOrEqual?: number;
    userSeasonRulesIdEquals?: number;
    userSeasonRulesIdNotEquals?: number;
    userSeasonRulesIdSpecified?: boolean;
    userSeasonRulesIdIn?: Array<number>;
    userSeasonRulesIdNotIn?: Array<number>;
    distinct?: boolean;
}

export interface GetLeagueRequest {
    id: number;
}

export interface PartialUpdateLeagueRequest {
    id: number;
    league: League;
}

export interface UpdateLeagueRequest {
    id: number;
    league: League;
}

/**
 * 
 */
export class LeagueResourceApi extends runtime.BaseAPI {

    /**
     */
    async countLeaguesRaw(requestParameters: CountLeaguesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
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

        if (requestParameters.creationDateGreaterThan !== undefined) {
            queryParameters['creationDate.greaterThan'] = (requestParameters.creationDateGreaterThan as any).toISOString();
        }

        if (requestParameters.creationDateLessThan !== undefined) {
            queryParameters['creationDate.lessThan'] = (requestParameters.creationDateLessThan as any).toISOString();
        }

        if (requestParameters.creationDateGreaterThanOrEqual !== undefined) {
            queryParameters['creationDate.greaterThanOrEqual'] = (requestParameters.creationDateGreaterThanOrEqual as any).toISOString();
        }

        if (requestParameters.creationDateLessThanOrEqual !== undefined) {
            queryParameters['creationDate.lessThanOrEqual'] = (requestParameters.creationDateLessThanOrEqual as any).toISOString();
        }

        if (requestParameters.creationDateEquals !== undefined) {
            queryParameters['creationDate.equals'] = (requestParameters.creationDateEquals as any).toISOString();
        }

        if (requestParameters.creationDateNotEquals !== undefined) {
            queryParameters['creationDate.notEquals'] = (requestParameters.creationDateNotEquals as any).toISOString();
        }

        if (requestParameters.creationDateSpecified !== undefined) {
            queryParameters['creationDate.specified'] = requestParameters.creationDateSpecified;
        }

        if (requestParameters.creationDateIn) {
            queryParameters['creationDate.in'] = requestParameters.creationDateIn;
        }

        if (requestParameters.creationDateNotIn) {
            queryParameters['creationDate.notIn'] = requestParameters.creationDateNotIn;
        }

        if (requestParameters.standingsUserLeagueIdGreaterThan !== undefined) {
            queryParameters['standingsUserLeagueId.greaterThan'] = requestParameters.standingsUserLeagueIdGreaterThan;
        }

        if (requestParameters.standingsUserLeagueIdLessThan !== undefined) {
            queryParameters['standingsUserLeagueId.lessThan'] = requestParameters.standingsUserLeagueIdLessThan;
        }

        if (requestParameters.standingsUserLeagueIdGreaterThanOrEqual !== undefined) {
            queryParameters['standingsUserLeagueId.greaterThanOrEqual'] = requestParameters.standingsUserLeagueIdGreaterThanOrEqual;
        }

        if (requestParameters.standingsUserLeagueIdLessThanOrEqual !== undefined) {
            queryParameters['standingsUserLeagueId.lessThanOrEqual'] = requestParameters.standingsUserLeagueIdLessThanOrEqual;
        }

        if (requestParameters.standingsUserLeagueIdEquals !== undefined) {
            queryParameters['standingsUserLeagueId.equals'] = requestParameters.standingsUserLeagueIdEquals;
        }

        if (requestParameters.standingsUserLeagueIdNotEquals !== undefined) {
            queryParameters['standingsUserLeagueId.notEquals'] = requestParameters.standingsUserLeagueIdNotEquals;
        }

        if (requestParameters.standingsUserLeagueIdSpecified !== undefined) {
            queryParameters['standingsUserLeagueId.specified'] = requestParameters.standingsUserLeagueIdSpecified;
        }

        if (requestParameters.standingsUserLeagueIdIn) {
            queryParameters['standingsUserLeagueId.in'] = requestParameters.standingsUserLeagueIdIn;
        }

        if (requestParameters.standingsUserLeagueIdNotIn) {
            queryParameters['standingsUserLeagueId.notIn'] = requestParameters.standingsUserLeagueIdNotIn;
        }

        if (requestParameters.seasonIdGreaterThan !== undefined) {
            queryParameters['seasonId.greaterThan'] = requestParameters.seasonIdGreaterThan;
        }

        if (requestParameters.seasonIdLessThan !== undefined) {
            queryParameters['seasonId.lessThan'] = requestParameters.seasonIdLessThan;
        }

        if (requestParameters.seasonIdGreaterThanOrEqual !== undefined) {
            queryParameters['seasonId.greaterThanOrEqual'] = requestParameters.seasonIdGreaterThanOrEqual;
        }

        if (requestParameters.seasonIdLessThanOrEqual !== undefined) {
            queryParameters['seasonId.lessThanOrEqual'] = requestParameters.seasonIdLessThanOrEqual;
        }

        if (requestParameters.seasonIdEquals !== undefined) {
            queryParameters['seasonId.equals'] = requestParameters.seasonIdEquals;
        }

        if (requestParameters.seasonIdNotEquals !== undefined) {
            queryParameters['seasonId.notEquals'] = requestParameters.seasonIdNotEquals;
        }

        if (requestParameters.seasonIdSpecified !== undefined) {
            queryParameters['seasonId.specified'] = requestParameters.seasonIdSpecified;
        }

        if (requestParameters.seasonIdIn) {
            queryParameters['seasonId.in'] = requestParameters.seasonIdIn;
        }

        if (requestParameters.seasonIdNotIn) {
            queryParameters['seasonId.notIn'] = requestParameters.seasonIdNotIn;
        }

        if (requestParameters.userSeasonInviteIdGreaterThan !== undefined) {
            queryParameters['userSeasonInviteId.greaterThan'] = requestParameters.userSeasonInviteIdGreaterThan;
        }

        if (requestParameters.userSeasonInviteIdLessThan !== undefined) {
            queryParameters['userSeasonInviteId.lessThan'] = requestParameters.userSeasonInviteIdLessThan;
        }

        if (requestParameters.userSeasonInviteIdGreaterThanOrEqual !== undefined) {
            queryParameters['userSeasonInviteId.greaterThanOrEqual'] = requestParameters.userSeasonInviteIdGreaterThanOrEqual;
        }

        if (requestParameters.userSeasonInviteIdLessThanOrEqual !== undefined) {
            queryParameters['userSeasonInviteId.lessThanOrEqual'] = requestParameters.userSeasonInviteIdLessThanOrEqual;
        }

        if (requestParameters.userSeasonInviteIdEquals !== undefined) {
            queryParameters['userSeasonInviteId.equals'] = requestParameters.userSeasonInviteIdEquals;
        }

        if (requestParameters.userSeasonInviteIdNotEquals !== undefined) {
            queryParameters['userSeasonInviteId.notEquals'] = requestParameters.userSeasonInviteIdNotEquals;
        }

        if (requestParameters.userSeasonInviteIdSpecified !== undefined) {
            queryParameters['userSeasonInviteId.specified'] = requestParameters.userSeasonInviteIdSpecified;
        }

        if (requestParameters.userSeasonInviteIdIn) {
            queryParameters['userSeasonInviteId.in'] = requestParameters.userSeasonInviteIdIn;
        }

        if (requestParameters.userSeasonInviteIdNotIn) {
            queryParameters['userSeasonInviteId.notIn'] = requestParameters.userSeasonInviteIdNotIn;
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

        if (requestParameters.userSeasonRulesIdGreaterThan !== undefined) {
            queryParameters['userSeasonRulesId.greaterThan'] = requestParameters.userSeasonRulesIdGreaterThan;
        }

        if (requestParameters.userSeasonRulesIdLessThan !== undefined) {
            queryParameters['userSeasonRulesId.lessThan'] = requestParameters.userSeasonRulesIdLessThan;
        }

        if (requestParameters.userSeasonRulesIdGreaterThanOrEqual !== undefined) {
            queryParameters['userSeasonRulesId.greaterThanOrEqual'] = requestParameters.userSeasonRulesIdGreaterThanOrEqual;
        }

        if (requestParameters.userSeasonRulesIdLessThanOrEqual !== undefined) {
            queryParameters['userSeasonRulesId.lessThanOrEqual'] = requestParameters.userSeasonRulesIdLessThanOrEqual;
        }

        if (requestParameters.userSeasonRulesIdEquals !== undefined) {
            queryParameters['userSeasonRulesId.equals'] = requestParameters.userSeasonRulesIdEquals;
        }

        if (requestParameters.userSeasonRulesIdNotEquals !== undefined) {
            queryParameters['userSeasonRulesId.notEquals'] = requestParameters.userSeasonRulesIdNotEquals;
        }

        if (requestParameters.userSeasonRulesIdSpecified !== undefined) {
            queryParameters['userSeasonRulesId.specified'] = requestParameters.userSeasonRulesIdSpecified;
        }

        if (requestParameters.userSeasonRulesIdIn) {
            queryParameters['userSeasonRulesId.in'] = requestParameters.userSeasonRulesIdIn;
        }

        if (requestParameters.userSeasonRulesIdNotIn) {
            queryParameters['userSeasonRulesId.notIn'] = requestParameters.userSeasonRulesIdNotIn;
        }

        if (requestParameters.distinct !== undefined) {
            queryParameters['distinct'] = requestParameters.distinct;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/leagues/count`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async countLeagues(requestParameters: CountLeaguesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.countLeaguesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async createLeagueRaw(requestParameters: CreateLeagueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<League>> {
        if (requestParameters.league === null || requestParameters.league === undefined) {
            throw new runtime.RequiredError('league','Required parameter requestParameters.league was null or undefined when calling createLeague.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/leagues`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LeagueToJSON(requestParameters.league),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LeagueFromJSON(jsonValue));
    }

    /**
     */
    async createLeague(requestParameters: CreateLeagueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<League> {
        const response = await this.createLeagueRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteLeagueRaw(requestParameters: DeleteLeagueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteLeague.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/leagues/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteLeague(requestParameters: DeleteLeagueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteLeagueRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getAllLeaguesRaw(requestParameters: GetAllLeaguesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<League>>> {
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

        if (requestParameters.creationDateGreaterThan !== undefined) {
            queryParameters['creationDate.greaterThan'] = (requestParameters.creationDateGreaterThan as any).toISOString();
        }

        if (requestParameters.creationDateLessThan !== undefined) {
            queryParameters['creationDate.lessThan'] = (requestParameters.creationDateLessThan as any).toISOString();
        }

        if (requestParameters.creationDateGreaterThanOrEqual !== undefined) {
            queryParameters['creationDate.greaterThanOrEqual'] = (requestParameters.creationDateGreaterThanOrEqual as any).toISOString();
        }

        if (requestParameters.creationDateLessThanOrEqual !== undefined) {
            queryParameters['creationDate.lessThanOrEqual'] = (requestParameters.creationDateLessThanOrEqual as any).toISOString();
        }

        if (requestParameters.creationDateEquals !== undefined) {
            queryParameters['creationDate.equals'] = (requestParameters.creationDateEquals as any).toISOString();
        }

        if (requestParameters.creationDateNotEquals !== undefined) {
            queryParameters['creationDate.notEquals'] = (requestParameters.creationDateNotEquals as any).toISOString();
        }

        if (requestParameters.creationDateSpecified !== undefined) {
            queryParameters['creationDate.specified'] = requestParameters.creationDateSpecified;
        }

        if (requestParameters.creationDateIn) {
            queryParameters['creationDate.in'] = requestParameters.creationDateIn;
        }

        if (requestParameters.creationDateNotIn) {
            queryParameters['creationDate.notIn'] = requestParameters.creationDateNotIn;
        }

        if (requestParameters.standingsUserLeagueIdGreaterThan !== undefined) {
            queryParameters['standingsUserLeagueId.greaterThan'] = requestParameters.standingsUserLeagueIdGreaterThan;
        }

        if (requestParameters.standingsUserLeagueIdLessThan !== undefined) {
            queryParameters['standingsUserLeagueId.lessThan'] = requestParameters.standingsUserLeagueIdLessThan;
        }

        if (requestParameters.standingsUserLeagueIdGreaterThanOrEqual !== undefined) {
            queryParameters['standingsUserLeagueId.greaterThanOrEqual'] = requestParameters.standingsUserLeagueIdGreaterThanOrEqual;
        }

        if (requestParameters.standingsUserLeagueIdLessThanOrEqual !== undefined) {
            queryParameters['standingsUserLeagueId.lessThanOrEqual'] = requestParameters.standingsUserLeagueIdLessThanOrEqual;
        }

        if (requestParameters.standingsUserLeagueIdEquals !== undefined) {
            queryParameters['standingsUserLeagueId.equals'] = requestParameters.standingsUserLeagueIdEquals;
        }

        if (requestParameters.standingsUserLeagueIdNotEquals !== undefined) {
            queryParameters['standingsUserLeagueId.notEquals'] = requestParameters.standingsUserLeagueIdNotEquals;
        }

        if (requestParameters.standingsUserLeagueIdSpecified !== undefined) {
            queryParameters['standingsUserLeagueId.specified'] = requestParameters.standingsUserLeagueIdSpecified;
        }

        if (requestParameters.standingsUserLeagueIdIn) {
            queryParameters['standingsUserLeagueId.in'] = requestParameters.standingsUserLeagueIdIn;
        }

        if (requestParameters.standingsUserLeagueIdNotIn) {
            queryParameters['standingsUserLeagueId.notIn'] = requestParameters.standingsUserLeagueIdNotIn;
        }

        if (requestParameters.seasonIdGreaterThan !== undefined) {
            queryParameters['seasonId.greaterThan'] = requestParameters.seasonIdGreaterThan;
        }

        if (requestParameters.seasonIdLessThan !== undefined) {
            queryParameters['seasonId.lessThan'] = requestParameters.seasonIdLessThan;
        }

        if (requestParameters.seasonIdGreaterThanOrEqual !== undefined) {
            queryParameters['seasonId.greaterThanOrEqual'] = requestParameters.seasonIdGreaterThanOrEqual;
        }

        if (requestParameters.seasonIdLessThanOrEqual !== undefined) {
            queryParameters['seasonId.lessThanOrEqual'] = requestParameters.seasonIdLessThanOrEqual;
        }

        if (requestParameters.seasonIdEquals !== undefined) {
            queryParameters['seasonId.equals'] = requestParameters.seasonIdEquals;
        }

        if (requestParameters.seasonIdNotEquals !== undefined) {
            queryParameters['seasonId.notEquals'] = requestParameters.seasonIdNotEquals;
        }

        if (requestParameters.seasonIdSpecified !== undefined) {
            queryParameters['seasonId.specified'] = requestParameters.seasonIdSpecified;
        }

        if (requestParameters.seasonIdIn) {
            queryParameters['seasonId.in'] = requestParameters.seasonIdIn;
        }

        if (requestParameters.seasonIdNotIn) {
            queryParameters['seasonId.notIn'] = requestParameters.seasonIdNotIn;
        }

        if (requestParameters.userSeasonInviteIdGreaterThan !== undefined) {
            queryParameters['userSeasonInviteId.greaterThan'] = requestParameters.userSeasonInviteIdGreaterThan;
        }

        if (requestParameters.userSeasonInviteIdLessThan !== undefined) {
            queryParameters['userSeasonInviteId.lessThan'] = requestParameters.userSeasonInviteIdLessThan;
        }

        if (requestParameters.userSeasonInviteIdGreaterThanOrEqual !== undefined) {
            queryParameters['userSeasonInviteId.greaterThanOrEqual'] = requestParameters.userSeasonInviteIdGreaterThanOrEqual;
        }

        if (requestParameters.userSeasonInviteIdLessThanOrEqual !== undefined) {
            queryParameters['userSeasonInviteId.lessThanOrEqual'] = requestParameters.userSeasonInviteIdLessThanOrEqual;
        }

        if (requestParameters.userSeasonInviteIdEquals !== undefined) {
            queryParameters['userSeasonInviteId.equals'] = requestParameters.userSeasonInviteIdEquals;
        }

        if (requestParameters.userSeasonInviteIdNotEquals !== undefined) {
            queryParameters['userSeasonInviteId.notEquals'] = requestParameters.userSeasonInviteIdNotEquals;
        }

        if (requestParameters.userSeasonInviteIdSpecified !== undefined) {
            queryParameters['userSeasonInviteId.specified'] = requestParameters.userSeasonInviteIdSpecified;
        }

        if (requestParameters.userSeasonInviteIdIn) {
            queryParameters['userSeasonInviteId.in'] = requestParameters.userSeasonInviteIdIn;
        }

        if (requestParameters.userSeasonInviteIdNotIn) {
            queryParameters['userSeasonInviteId.notIn'] = requestParameters.userSeasonInviteIdNotIn;
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

        if (requestParameters.userSeasonRulesIdGreaterThan !== undefined) {
            queryParameters['userSeasonRulesId.greaterThan'] = requestParameters.userSeasonRulesIdGreaterThan;
        }

        if (requestParameters.userSeasonRulesIdLessThan !== undefined) {
            queryParameters['userSeasonRulesId.lessThan'] = requestParameters.userSeasonRulesIdLessThan;
        }

        if (requestParameters.userSeasonRulesIdGreaterThanOrEqual !== undefined) {
            queryParameters['userSeasonRulesId.greaterThanOrEqual'] = requestParameters.userSeasonRulesIdGreaterThanOrEqual;
        }

        if (requestParameters.userSeasonRulesIdLessThanOrEqual !== undefined) {
            queryParameters['userSeasonRulesId.lessThanOrEqual'] = requestParameters.userSeasonRulesIdLessThanOrEqual;
        }

        if (requestParameters.userSeasonRulesIdEquals !== undefined) {
            queryParameters['userSeasonRulesId.equals'] = requestParameters.userSeasonRulesIdEquals;
        }

        if (requestParameters.userSeasonRulesIdNotEquals !== undefined) {
            queryParameters['userSeasonRulesId.notEquals'] = requestParameters.userSeasonRulesIdNotEquals;
        }

        if (requestParameters.userSeasonRulesIdSpecified !== undefined) {
            queryParameters['userSeasonRulesId.specified'] = requestParameters.userSeasonRulesIdSpecified;
        }

        if (requestParameters.userSeasonRulesIdIn) {
            queryParameters['userSeasonRulesId.in'] = requestParameters.userSeasonRulesIdIn;
        }

        if (requestParameters.userSeasonRulesIdNotIn) {
            queryParameters['userSeasonRulesId.notIn'] = requestParameters.userSeasonRulesIdNotIn;
        }

        if (requestParameters.distinct !== undefined) {
            queryParameters['distinct'] = requestParameters.distinct;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/leagues`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LeagueFromJSON));
    }

    /**
     */
    async getAllLeagues(requestParameters: GetAllLeaguesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<League>> {
        const response = await this.getAllLeaguesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getLeagueRaw(requestParameters: GetLeagueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<League>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getLeague.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/leagues/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LeagueFromJSON(jsonValue));
    }

    /**
     */
    async getLeague(requestParameters: GetLeagueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<League> {
        const response = await this.getLeagueRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async partialUpdateLeagueRaw(requestParameters: PartialUpdateLeagueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<League>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling partialUpdateLeague.');
        }

        if (requestParameters.league === null || requestParameters.league === undefined) {
            throw new runtime.RequiredError('league','Required parameter requestParameters.league was null or undefined when calling partialUpdateLeague.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/leagues/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: LeagueToJSON(requestParameters.league),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LeagueFromJSON(jsonValue));
    }

    /**
     */
    async partialUpdateLeague(requestParameters: PartialUpdateLeagueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<League> {
        const response = await this.partialUpdateLeagueRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateLeagueRaw(requestParameters: UpdateLeagueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<League>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateLeague.');
        }

        if (requestParameters.league === null || requestParameters.league === undefined) {
            throw new runtime.RequiredError('league','Required parameter requestParameters.league was null or undefined when calling updateLeague.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/leagues/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: LeagueToJSON(requestParameters.league),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LeagueFromJSON(jsonValue));
    }

    /**
     */
    async updateLeague(requestParameters: UpdateLeagueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<League> {
        const response = await this.updateLeagueRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
