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
  Circuit,
} from '../models';
import {
    CircuitFromJSON,
    CircuitToJSON,
} from '../models';

export interface CountCircuitsRequest {
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
    infoContains?: string;
    infoDoesNotContain?: string;
    infoEquals?: string;
    infoNotEquals?: string;
    infoSpecified?: boolean;
    infoIn?: Array<string>;
    infoNotIn?: Array<string>;
    granPrixIdGreaterThan?: number;
    granPrixIdLessThan?: number;
    granPrixIdGreaterThanOrEqual?: number;
    granPrixIdLessThanOrEqual?: number;
    granPrixIdEquals?: number;
    granPrixIdNotEquals?: number;
    granPrixIdSpecified?: boolean;
    granPrixIdIn?: Array<number>;
    granPrixIdNotIn?: Array<number>;
    distinct?: boolean;
}

export interface CreateCircuitRequest {
    circuit: Circuit;
}

export interface DeleteCircuitRequest {
    id: number;
}

export interface GetAllCircuitsRequest {
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
    infoContains?: string;
    infoDoesNotContain?: string;
    infoEquals?: string;
    infoNotEquals?: string;
    infoSpecified?: boolean;
    infoIn?: Array<string>;
    infoNotIn?: Array<string>;
    granPrixIdGreaterThan?: number;
    granPrixIdLessThan?: number;
    granPrixIdGreaterThanOrEqual?: number;
    granPrixIdLessThanOrEqual?: number;
    granPrixIdEquals?: number;
    granPrixIdNotEquals?: number;
    granPrixIdSpecified?: boolean;
    granPrixIdIn?: Array<number>;
    granPrixIdNotIn?: Array<number>;
    distinct?: boolean;
}

export interface GetCircuitRequest {
    id: number;
}

export interface PartialUpdateCircuitRequest {
    id: number;
    circuit: Circuit;
}

export interface UpdateCircuitRequest {
    id: number;
    circuit: Circuit;
}

/**
 * 
 */
export class CircuitResourceApi extends runtime.BaseAPI {

    /**
     */
    async countCircuitsRaw(requestParameters: CountCircuitsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
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

        if (requestParameters.infoContains !== undefined) {
            queryParameters['info.contains'] = requestParameters.infoContains;
        }

        if (requestParameters.infoDoesNotContain !== undefined) {
            queryParameters['info.doesNotContain'] = requestParameters.infoDoesNotContain;
        }

        if (requestParameters.infoEquals !== undefined) {
            queryParameters['info.equals'] = requestParameters.infoEquals;
        }

        if (requestParameters.infoNotEquals !== undefined) {
            queryParameters['info.notEquals'] = requestParameters.infoNotEquals;
        }

        if (requestParameters.infoSpecified !== undefined) {
            queryParameters['info.specified'] = requestParameters.infoSpecified;
        }

        if (requestParameters.infoIn) {
            queryParameters['info.in'] = requestParameters.infoIn;
        }

        if (requestParameters.infoNotIn) {
            queryParameters['info.notIn'] = requestParameters.infoNotIn;
        }

        if (requestParameters.granPrixIdGreaterThan !== undefined) {
            queryParameters['granPrixId.greaterThan'] = requestParameters.granPrixIdGreaterThan;
        }

        if (requestParameters.granPrixIdLessThan !== undefined) {
            queryParameters['granPrixId.lessThan'] = requestParameters.granPrixIdLessThan;
        }

        if (requestParameters.granPrixIdGreaterThanOrEqual !== undefined) {
            queryParameters['granPrixId.greaterThanOrEqual'] = requestParameters.granPrixIdGreaterThanOrEqual;
        }

        if (requestParameters.granPrixIdLessThanOrEqual !== undefined) {
            queryParameters['granPrixId.lessThanOrEqual'] = requestParameters.granPrixIdLessThanOrEqual;
        }

        if (requestParameters.granPrixIdEquals !== undefined) {
            queryParameters['granPrixId.equals'] = requestParameters.granPrixIdEquals;
        }

        if (requestParameters.granPrixIdNotEquals !== undefined) {
            queryParameters['granPrixId.notEquals'] = requestParameters.granPrixIdNotEquals;
        }

        if (requestParameters.granPrixIdSpecified !== undefined) {
            queryParameters['granPrixId.specified'] = requestParameters.granPrixIdSpecified;
        }

        if (requestParameters.granPrixIdIn) {
            queryParameters['granPrixId.in'] = requestParameters.granPrixIdIn;
        }

        if (requestParameters.granPrixIdNotIn) {
            queryParameters['granPrixId.notIn'] = requestParameters.granPrixIdNotIn;
        }

        if (requestParameters.distinct !== undefined) {
            queryParameters['distinct'] = requestParameters.distinct;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/circuits/count`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async countCircuits(requestParameters: CountCircuitsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.countCircuitsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async createCircuitRaw(requestParameters: CreateCircuitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Circuit>> {
        if (requestParameters.circuit === null || requestParameters.circuit === undefined) {
            throw new runtime.RequiredError('circuit','Required parameter requestParameters.circuit was null or undefined when calling createCircuit.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/circuits`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CircuitToJSON(requestParameters.circuit),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CircuitFromJSON(jsonValue));
    }

    /**
     */
    async createCircuit(requestParameters: CreateCircuitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Circuit> {
        const response = await this.createCircuitRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteCircuitRaw(requestParameters: DeleteCircuitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteCircuit.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/circuits/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteCircuit(requestParameters: DeleteCircuitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCircuitRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getAllCircuitsRaw(requestParameters: GetAllCircuitsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Circuit>>> {
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

        if (requestParameters.infoContains !== undefined) {
            queryParameters['info.contains'] = requestParameters.infoContains;
        }

        if (requestParameters.infoDoesNotContain !== undefined) {
            queryParameters['info.doesNotContain'] = requestParameters.infoDoesNotContain;
        }

        if (requestParameters.infoEquals !== undefined) {
            queryParameters['info.equals'] = requestParameters.infoEquals;
        }

        if (requestParameters.infoNotEquals !== undefined) {
            queryParameters['info.notEquals'] = requestParameters.infoNotEquals;
        }

        if (requestParameters.infoSpecified !== undefined) {
            queryParameters['info.specified'] = requestParameters.infoSpecified;
        }

        if (requestParameters.infoIn) {
            queryParameters['info.in'] = requestParameters.infoIn;
        }

        if (requestParameters.infoNotIn) {
            queryParameters['info.notIn'] = requestParameters.infoNotIn;
        }

        if (requestParameters.granPrixIdGreaterThan !== undefined) {
            queryParameters['granPrixId.greaterThan'] = requestParameters.granPrixIdGreaterThan;
        }

        if (requestParameters.granPrixIdLessThan !== undefined) {
            queryParameters['granPrixId.lessThan'] = requestParameters.granPrixIdLessThan;
        }

        if (requestParameters.granPrixIdGreaterThanOrEqual !== undefined) {
            queryParameters['granPrixId.greaterThanOrEqual'] = requestParameters.granPrixIdGreaterThanOrEqual;
        }

        if (requestParameters.granPrixIdLessThanOrEqual !== undefined) {
            queryParameters['granPrixId.lessThanOrEqual'] = requestParameters.granPrixIdLessThanOrEqual;
        }

        if (requestParameters.granPrixIdEquals !== undefined) {
            queryParameters['granPrixId.equals'] = requestParameters.granPrixIdEquals;
        }

        if (requestParameters.granPrixIdNotEquals !== undefined) {
            queryParameters['granPrixId.notEquals'] = requestParameters.granPrixIdNotEquals;
        }

        if (requestParameters.granPrixIdSpecified !== undefined) {
            queryParameters['granPrixId.specified'] = requestParameters.granPrixIdSpecified;
        }

        if (requestParameters.granPrixIdIn) {
            queryParameters['granPrixId.in'] = requestParameters.granPrixIdIn;
        }

        if (requestParameters.granPrixIdNotIn) {
            queryParameters['granPrixId.notIn'] = requestParameters.granPrixIdNotIn;
        }

        if (requestParameters.distinct !== undefined) {
            queryParameters['distinct'] = requestParameters.distinct;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/circuits`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CircuitFromJSON));
    }

    /**
     */
    async getAllCircuits(requestParameters: GetAllCircuitsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Circuit>> {
        const response = await this.getAllCircuitsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getCircuitRaw(requestParameters: GetCircuitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Circuit>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getCircuit.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/circuits/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CircuitFromJSON(jsonValue));
    }

    /**
     */
    async getCircuit(requestParameters: GetCircuitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Circuit> {
        const response = await this.getCircuitRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async partialUpdateCircuitRaw(requestParameters: PartialUpdateCircuitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Circuit>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling partialUpdateCircuit.');
        }

        if (requestParameters.circuit === null || requestParameters.circuit === undefined) {
            throw new runtime.RequiredError('circuit','Required parameter requestParameters.circuit was null or undefined when calling partialUpdateCircuit.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/circuits/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CircuitToJSON(requestParameters.circuit),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CircuitFromJSON(jsonValue));
    }

    /**
     */
    async partialUpdateCircuit(requestParameters: PartialUpdateCircuitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Circuit> {
        const response = await this.partialUpdateCircuitRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateCircuitRaw(requestParameters: UpdateCircuitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Circuit>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateCircuit.');
        }

        if (requestParameters.circuit === null || requestParameters.circuit === undefined) {
            throw new runtime.RequiredError('circuit','Required parameter requestParameters.circuit was null or undefined when calling updateCircuit.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/circuits/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CircuitToJSON(requestParameters.circuit),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CircuitFromJSON(jsonValue));
    }

    /**
     */
    async updateCircuit(requestParameters: UpdateCircuitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Circuit> {
        const response = await this.updateCircuitRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
