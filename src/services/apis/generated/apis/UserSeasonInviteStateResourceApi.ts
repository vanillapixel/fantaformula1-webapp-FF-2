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
  UserSeasonInviteState,
} from '../models';
import {
    UserSeasonInviteStateFromJSON,
    UserSeasonInviteStateToJSON,
} from '../models';

export interface CountUserSeasonInviteStatesRequest {
    idGreaterThan?: number;
    idLessThan?: number;
    idGreaterThanOrEqual?: number;
    idLessThanOrEqual?: number;
    idEquals?: number;
    idNotEquals?: number;
    idSpecified?: boolean;
    idIn?: Array<number>;
    idNotIn?: Array<number>;
    dateGreaterThan?: Date;
    dateLessThan?: Date;
    dateGreaterThanOrEqual?: Date;
    dateLessThanOrEqual?: Date;
    dateEquals?: Date;
    dateNotEquals?: Date;
    dateSpecified?: boolean;
    dateIn?: Array<Date>;
    dateNotIn?: Array<Date>;
    stateEquals?: CountUserSeasonInviteStatesStateEqualsEnum;
    stateNotEquals?: CountUserSeasonInviteStatesStateNotEqualsEnum;
    stateSpecified?: boolean;
    stateIn?: Array<CountUserSeasonInviteStatesStateInEnum>;
    stateNotIn?: Array<CountUserSeasonInviteStatesStateNotInEnum>;
    userSeasonInviteIdGreaterThan?: number;
    userSeasonInviteIdLessThan?: number;
    userSeasonInviteIdGreaterThanOrEqual?: number;
    userSeasonInviteIdLessThanOrEqual?: number;
    userSeasonInviteIdEquals?: number;
    userSeasonInviteIdNotEquals?: number;
    userSeasonInviteIdSpecified?: boolean;
    userSeasonInviteIdIn?: Array<number>;
    userSeasonInviteIdNotIn?: Array<number>;
    distinct?: boolean;
}

export interface CreateUserSeasonInviteStateRequest {
    userSeasonInviteState: UserSeasonInviteState;
}

export interface DeleteUserSeasonInviteStateRequest {
    id: number;
}

export interface GetAllUserSeasonInviteStatesRequest {
    idGreaterThan?: number;
    idLessThan?: number;
    idGreaterThanOrEqual?: number;
    idLessThanOrEqual?: number;
    idEquals?: number;
    idNotEquals?: number;
    idSpecified?: boolean;
    idIn?: Array<number>;
    idNotIn?: Array<number>;
    dateGreaterThan?: Date;
    dateLessThan?: Date;
    dateGreaterThanOrEqual?: Date;
    dateLessThanOrEqual?: Date;
    dateEquals?: Date;
    dateNotEquals?: Date;
    dateSpecified?: boolean;
    dateIn?: Array<Date>;
    dateNotIn?: Array<Date>;
    stateEquals?: GetAllUserSeasonInviteStatesStateEqualsEnum;
    stateNotEquals?: GetAllUserSeasonInviteStatesStateNotEqualsEnum;
    stateSpecified?: boolean;
    stateIn?: Array<GetAllUserSeasonInviteStatesStateInEnum>;
    stateNotIn?: Array<GetAllUserSeasonInviteStatesStateNotInEnum>;
    userSeasonInviteIdGreaterThan?: number;
    userSeasonInviteIdLessThan?: number;
    userSeasonInviteIdGreaterThanOrEqual?: number;
    userSeasonInviteIdLessThanOrEqual?: number;
    userSeasonInviteIdEquals?: number;
    userSeasonInviteIdNotEquals?: number;
    userSeasonInviteIdSpecified?: boolean;
    userSeasonInviteIdIn?: Array<number>;
    userSeasonInviteIdNotIn?: Array<number>;
    distinct?: boolean;
}

export interface GetUserSeasonInviteStateRequest {
    id: number;
}

export interface PartialUpdateUserSeasonInviteStateRequest {
    id: number;
    userSeasonInviteState: UserSeasonInviteState;
}

export interface UpdateUserSeasonInviteStateRequest {
    id: number;
    userSeasonInviteState: UserSeasonInviteState;
}

/**
 * 
 */
export class UserSeasonInviteStateResourceApi extends runtime.BaseAPI {

    /**
     */
    async countUserSeasonInviteStatesRaw(requestParameters: CountUserSeasonInviteStatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
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

        if (requestParameters.dateGreaterThan !== undefined) {
            queryParameters['date.greaterThan'] = (requestParameters.dateGreaterThan as any).toISOString();
        }

        if (requestParameters.dateLessThan !== undefined) {
            queryParameters['date.lessThan'] = (requestParameters.dateLessThan as any).toISOString();
        }

        if (requestParameters.dateGreaterThanOrEqual !== undefined) {
            queryParameters['date.greaterThanOrEqual'] = (requestParameters.dateGreaterThanOrEqual as any).toISOString();
        }

        if (requestParameters.dateLessThanOrEqual !== undefined) {
            queryParameters['date.lessThanOrEqual'] = (requestParameters.dateLessThanOrEqual as any).toISOString();
        }

        if (requestParameters.dateEquals !== undefined) {
            queryParameters['date.equals'] = (requestParameters.dateEquals as any).toISOString();
        }

        if (requestParameters.dateNotEquals !== undefined) {
            queryParameters['date.notEquals'] = (requestParameters.dateNotEquals as any).toISOString();
        }

        if (requestParameters.dateSpecified !== undefined) {
            queryParameters['date.specified'] = requestParameters.dateSpecified;
        }

        if (requestParameters.dateIn) {
            queryParameters['date.in'] = requestParameters.dateIn;
        }

        if (requestParameters.dateNotIn) {
            queryParameters['date.notIn'] = requestParameters.dateNotIn;
        }

        if (requestParameters.stateEquals !== undefined) {
            queryParameters['state.equals'] = requestParameters.stateEquals;
        }

        if (requestParameters.stateNotEquals !== undefined) {
            queryParameters['state.notEquals'] = requestParameters.stateNotEquals;
        }

        if (requestParameters.stateSpecified !== undefined) {
            queryParameters['state.specified'] = requestParameters.stateSpecified;
        }

        if (requestParameters.stateIn) {
            queryParameters['state.in'] = requestParameters.stateIn;
        }

        if (requestParameters.stateNotIn) {
            queryParameters['state.notIn'] = requestParameters.stateNotIn;
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

        if (requestParameters.distinct !== undefined) {
            queryParameters['distinct'] = requestParameters.distinct;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/user-season-invite-states/count`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async countUserSeasonInviteStates(requestParameters: CountUserSeasonInviteStatesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.countUserSeasonInviteStatesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async createUserSeasonInviteStateRaw(requestParameters: CreateUserSeasonInviteStateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserSeasonInviteState>> {
        if (requestParameters.userSeasonInviteState === null || requestParameters.userSeasonInviteState === undefined) {
            throw new runtime.RequiredError('userSeasonInviteState','Required parameter requestParameters.userSeasonInviteState was null or undefined when calling createUserSeasonInviteState.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/user-season-invite-states`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserSeasonInviteStateToJSON(requestParameters.userSeasonInviteState),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserSeasonInviteStateFromJSON(jsonValue));
    }

    /**
     */
    async createUserSeasonInviteState(requestParameters: CreateUserSeasonInviteStateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserSeasonInviteState> {
        const response = await this.createUserSeasonInviteStateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteUserSeasonInviteStateRaw(requestParameters: DeleteUserSeasonInviteStateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteUserSeasonInviteState.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/user-season-invite-states/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteUserSeasonInviteState(requestParameters: DeleteUserSeasonInviteStateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteUserSeasonInviteStateRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getAllUserSeasonInviteStatesRaw(requestParameters: GetAllUserSeasonInviteStatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<UserSeasonInviteState>>> {
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

        if (requestParameters.dateGreaterThan !== undefined) {
            queryParameters['date.greaterThan'] = (requestParameters.dateGreaterThan as any).toISOString();
        }

        if (requestParameters.dateLessThan !== undefined) {
            queryParameters['date.lessThan'] = (requestParameters.dateLessThan as any).toISOString();
        }

        if (requestParameters.dateGreaterThanOrEqual !== undefined) {
            queryParameters['date.greaterThanOrEqual'] = (requestParameters.dateGreaterThanOrEqual as any).toISOString();
        }

        if (requestParameters.dateLessThanOrEqual !== undefined) {
            queryParameters['date.lessThanOrEqual'] = (requestParameters.dateLessThanOrEqual as any).toISOString();
        }

        if (requestParameters.dateEquals !== undefined) {
            queryParameters['date.equals'] = (requestParameters.dateEquals as any).toISOString();
        }

        if (requestParameters.dateNotEquals !== undefined) {
            queryParameters['date.notEquals'] = (requestParameters.dateNotEquals as any).toISOString();
        }

        if (requestParameters.dateSpecified !== undefined) {
            queryParameters['date.specified'] = requestParameters.dateSpecified;
        }

        if (requestParameters.dateIn) {
            queryParameters['date.in'] = requestParameters.dateIn;
        }

        if (requestParameters.dateNotIn) {
            queryParameters['date.notIn'] = requestParameters.dateNotIn;
        }

        if (requestParameters.stateEquals !== undefined) {
            queryParameters['state.equals'] = requestParameters.stateEquals;
        }

        if (requestParameters.stateNotEquals !== undefined) {
            queryParameters['state.notEquals'] = requestParameters.stateNotEquals;
        }

        if (requestParameters.stateSpecified !== undefined) {
            queryParameters['state.specified'] = requestParameters.stateSpecified;
        }

        if (requestParameters.stateIn) {
            queryParameters['state.in'] = requestParameters.stateIn;
        }

        if (requestParameters.stateNotIn) {
            queryParameters['state.notIn'] = requestParameters.stateNotIn;
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

        if (requestParameters.distinct !== undefined) {
            queryParameters['distinct'] = requestParameters.distinct;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/user-season-invite-states`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserSeasonInviteStateFromJSON));
    }

    /**
     */
    async getAllUserSeasonInviteStates(requestParameters: GetAllUserSeasonInviteStatesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<UserSeasonInviteState>> {
        const response = await this.getAllUserSeasonInviteStatesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getUserSeasonInviteStateRaw(requestParameters: GetUserSeasonInviteStateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserSeasonInviteState>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getUserSeasonInviteState.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/user-season-invite-states/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserSeasonInviteStateFromJSON(jsonValue));
    }

    /**
     */
    async getUserSeasonInviteState(requestParameters: GetUserSeasonInviteStateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserSeasonInviteState> {
        const response = await this.getUserSeasonInviteStateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async partialUpdateUserSeasonInviteStateRaw(requestParameters: PartialUpdateUserSeasonInviteStateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserSeasonInviteState>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling partialUpdateUserSeasonInviteState.');
        }

        if (requestParameters.userSeasonInviteState === null || requestParameters.userSeasonInviteState === undefined) {
            throw new runtime.RequiredError('userSeasonInviteState','Required parameter requestParameters.userSeasonInviteState was null or undefined when calling partialUpdateUserSeasonInviteState.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/user-season-invite-states/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UserSeasonInviteStateToJSON(requestParameters.userSeasonInviteState),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserSeasonInviteStateFromJSON(jsonValue));
    }

    /**
     */
    async partialUpdateUserSeasonInviteState(requestParameters: PartialUpdateUserSeasonInviteStateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserSeasonInviteState> {
        const response = await this.partialUpdateUserSeasonInviteStateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateUserSeasonInviteStateRaw(requestParameters: UpdateUserSeasonInviteStateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserSeasonInviteState>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateUserSeasonInviteState.');
        }

        if (requestParameters.userSeasonInviteState === null || requestParameters.userSeasonInviteState === undefined) {
            throw new runtime.RequiredError('userSeasonInviteState','Required parameter requestParameters.userSeasonInviteState was null or undefined when calling updateUserSeasonInviteState.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/user-season-invite-states/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UserSeasonInviteStateToJSON(requestParameters.userSeasonInviteState),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserSeasonInviteStateFromJSON(jsonValue));
    }

    /**
     */
    async updateUserSeasonInviteState(requestParameters: UpdateUserSeasonInviteStateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserSeasonInviteState> {
        const response = await this.updateUserSeasonInviteStateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const CountUserSeasonInviteStatesStateEqualsEnum = {
    Pending: 'PENDING',
    Accepted: 'ACCEPTED',
    Rejected: 'REJECTED'
} as const;
export type CountUserSeasonInviteStatesStateEqualsEnum = typeof CountUserSeasonInviteStatesStateEqualsEnum[keyof typeof CountUserSeasonInviteStatesStateEqualsEnum];
/**
 * @export
 */
export const CountUserSeasonInviteStatesStateNotEqualsEnum = {
    Pending: 'PENDING',
    Accepted: 'ACCEPTED',
    Rejected: 'REJECTED'
} as const;
export type CountUserSeasonInviteStatesStateNotEqualsEnum = typeof CountUserSeasonInviteStatesStateNotEqualsEnum[keyof typeof CountUserSeasonInviteStatesStateNotEqualsEnum];
/**
 * @export
 */
export const CountUserSeasonInviteStatesStateInEnum = {
    Pending: 'PENDING',
    Accepted: 'ACCEPTED',
    Rejected: 'REJECTED'
} as const;
export type CountUserSeasonInviteStatesStateInEnum = typeof CountUserSeasonInviteStatesStateInEnum[keyof typeof CountUserSeasonInviteStatesStateInEnum];
/**
 * @export
 */
export const CountUserSeasonInviteStatesStateNotInEnum = {
    Pending: 'PENDING',
    Accepted: 'ACCEPTED',
    Rejected: 'REJECTED'
} as const;
export type CountUserSeasonInviteStatesStateNotInEnum = typeof CountUserSeasonInviteStatesStateNotInEnum[keyof typeof CountUserSeasonInviteStatesStateNotInEnum];
/**
 * @export
 */
export const GetAllUserSeasonInviteStatesStateEqualsEnum = {
    Pending: 'PENDING',
    Accepted: 'ACCEPTED',
    Rejected: 'REJECTED'
} as const;
export type GetAllUserSeasonInviteStatesStateEqualsEnum = typeof GetAllUserSeasonInviteStatesStateEqualsEnum[keyof typeof GetAllUserSeasonInviteStatesStateEqualsEnum];
/**
 * @export
 */
export const GetAllUserSeasonInviteStatesStateNotEqualsEnum = {
    Pending: 'PENDING',
    Accepted: 'ACCEPTED',
    Rejected: 'REJECTED'
} as const;
export type GetAllUserSeasonInviteStatesStateNotEqualsEnum = typeof GetAllUserSeasonInviteStatesStateNotEqualsEnum[keyof typeof GetAllUserSeasonInviteStatesStateNotEqualsEnum];
/**
 * @export
 */
export const GetAllUserSeasonInviteStatesStateInEnum = {
    Pending: 'PENDING',
    Accepted: 'ACCEPTED',
    Rejected: 'REJECTED'
} as const;
export type GetAllUserSeasonInviteStatesStateInEnum = typeof GetAllUserSeasonInviteStatesStateInEnum[keyof typeof GetAllUserSeasonInviteStatesStateInEnum];
/**
 * @export
 */
export const GetAllUserSeasonInviteStatesStateNotInEnum = {
    Pending: 'PENDING',
    Accepted: 'ACCEPTED',
    Rejected: 'REJECTED'
} as const;
export type GetAllUserSeasonInviteStatesStateNotInEnum = typeof GetAllUserSeasonInviteStatesStateNotInEnum[keyof typeof GetAllUserSeasonInviteStatesStateNotInEnum];