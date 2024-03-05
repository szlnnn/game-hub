import axios, {AxiosRequestConfig} from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
    next: string | null;
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "b4b1bc9e21e247bb8883b9432e6eb421",
    },
});

class ApiClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then((res) => res.data);
    };
}

export default ApiClient;
