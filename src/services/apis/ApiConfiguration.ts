import { environment } from "../../environments/environment";

import { BaseAPIManager } from "../model/BaseAPIManager";
import {
	AccountResourceApi,
	CircuitResourceApi,
	Configuration,
	ConfigurationParameters,
	CustomPriceGroupsResourceApi,
	FetchParams,
	HTTPQuery,
	Middleware,
	RequestContext,
	ResponseContext,
	UserJwtControllerApi,
	SeasonResourceApi,
	FormationResourceApi,
} from "./generated";
import { Logger } from "../../helpers/Logger";

let userJwtControllerApi: UserJwtControllerApi;
let accountResourceApi: AccountResourceApi;
let customPriceGroupsResourceApi: CustomPriceGroupsResourceApi;
let circuitResourceApi: CircuitResourceApi;
let seasonResourceApi: SeasonResourceApi;
let formationResourceApi: FormationResourceApi;

const className = "ApiConfiguration";

export function reloadApiConfiguration() {
	console.log("Reloading API");
	let configParameters: ConfigurationParameters = {};
	configParameters.basePath = environment.apiUrl;
	configParameters.queryParamsStringify = querystring;
	configParameters.fetchApi = async (
		input: RequestInfo,
		init?: RequestInit | undefined
	) => {
		let fetchApi = window.fetch.bind(window);
		try {
			return await fetchApi(input, init);
		} catch (e) {
			// In case of errors it hides the loader
			BaseAPIManager.contextLoadingCallback(false);
			throw e;
		}
	};
	let loaderMiddleware: Middleware = {
		pre(context: RequestContext): Promise<FetchParams | void> {
			Logger.log(className, `Starting: ${context.url}`);
			return Promise.resolve({ url: context.url, init: context.init });
		},
		post(context: ResponseContext): Promise<Response | void> {
			Logger.log(className, `Ending: ${context.url}`);
			if (context.response.status < 200 || context.response.status > 207) {
				BaseAPIManager.contextLoadingCallback(false);
			}
			if (context.response.status == 401) {
				BaseAPIManager.logoutCallback();
			}
			Logger.log(className, `Response status code: ${context.response.status}`);
			return Promise.resolve(context.response);
		},
	};
	configParameters.middleware = [loaderMiddleware];
	if (BaseAPIManager.token) {
		configParameters.headers = {
			Authorization: "Bearer " + BaseAPIManager.token,
		};
	}
	let config = new Configuration(configParameters);

	userJwtControllerApi = new UserJwtControllerApi(config);
	accountResourceApi = new AccountResourceApi(config);
	customPriceGroupsResourceApi = new CustomPriceGroupsResourceApi(config);
	circuitResourceApi = new CircuitResourceApi(config);
	seasonResourceApi = new SeasonResourceApi(config);
	formationResourceApi = new FormationResourceApi(config);
}

function querystring(
	params: HTTPQuery,
	prefix: string = "",
	includePrefix = false
): string {
	return Object.keys(params)
		.map((key) => {
			let fullKey = prefix + (prefix.length ? `.${key}` : key);
			if (!includePrefix) fullKey = "";
			const value = params[key];
			if (value instanceof Array) {
				const multiValue = value
					.map((singleValue) => encodeURIComponent(String(singleValue)))
					.join(`&${encodeURIComponent(fullKey)}=`);
				return `${encodeURIComponent(fullKey)}=${multiValue}`;
			}
			if (value instanceof Object) {
				return querystring(value as HTTPQuery, fullKey, true);
			}
			return `${encodeURIComponent(fullKey)}=${encodeURIComponent(
				String(value)
			)}`;
		})
		.filter((part) => part.length > 0)
		.join("&");
}

export {
	userJwtControllerApi,
	accountResourceApi,
	customPriceGroupsResourceApi,
	circuitResourceApi,
	formationResourceApi,
	seasonResourceApi,
};
