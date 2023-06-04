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
  AdminUserDTO,
  User,
} from '../models';
import {
    AdminUserDTOFromJSON,
    AdminUserDTOToJSON,
    UserFromJSON,
    UserToJSON,
} from '../models';

export interface CreateUserRequest {
    adminUserDTO: AdminUserDTO;
}

export interface DeleteUserRequest {
    login: string;
}

export interface GetAllUsersRequest {
    page?: number;
    size?: number;
    sort?: Array<string>;
}

export interface GetUserRequest {
    login: string;
}

export interface UpdateUserRequest {
    adminUserDTO: AdminUserDTO;
}

/**
 * 
 */
export class UserResourceApi extends runtime.BaseAPI {

    /**
     */
    async createUserRaw(requestParameters: CreateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.adminUserDTO === null || requestParameters.adminUserDTO === undefined) {
            throw new runtime.RequiredError('adminUserDTO','Required parameter requestParameters.adminUserDTO was null or undefined when calling createUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/admin/users`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AdminUserDTOToJSON(requestParameters.adminUserDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     */
    async createUser(requestParameters: CreateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User> {
        const response = await this.createUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteUserRaw(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.login === null || requestParameters.login === undefined) {
            throw new runtime.RequiredError('login','Required parameter requestParameters.login was null or undefined when calling deleteUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/admin/users/{login}`.replace(`{${"login"}}`, encodeURIComponent(String(requestParameters.login))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteUser(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteUserRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getAllUsersRaw(requestParameters: GetAllUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<AdminUserDTO>>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        if (requestParameters.sort) {
            queryParameters['sort'] = requestParameters.sort;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/admin/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AdminUserDTOFromJSON));
    }

    /**
     */
    async getAllUsers(requestParameters: GetAllUsersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<AdminUserDTO>> {
        const response = await this.getAllUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getUserRaw(requestParameters: GetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AdminUserDTO>> {
        if (requestParameters.login === null || requestParameters.login === undefined) {
            throw new runtime.RequiredError('login','Required parameter requestParameters.login was null or undefined when calling getUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/admin/users/{login}`.replace(`{${"login"}}`, encodeURIComponent(String(requestParameters.login))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AdminUserDTOFromJSON(jsonValue));
    }

    /**
     */
    async getUser(requestParameters: GetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AdminUserDTO> {
        const response = await this.getUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateUserRaw(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AdminUserDTO>> {
        if (requestParameters.adminUserDTO === null || requestParameters.adminUserDTO === undefined) {
            throw new runtime.RequiredError('adminUserDTO','Required parameter requestParameters.adminUserDTO was null or undefined when calling updateUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/admin/users`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: AdminUserDTOToJSON(requestParameters.adminUserDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AdminUserDTOFromJSON(jsonValue));
    }

    /**
     */
    async updateUser(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AdminUserDTO> {
        const response = await this.updateUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

}