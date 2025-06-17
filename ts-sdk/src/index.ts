import axios, { AxiosError } from 'axios';
import { WrapperError, WrapperResponse } from './types';

export class CrossLangWrapperTest {
    private apiKey: string;
    private baseURL: string;

    constructor(apiKey: string, baseURL = "http://localhost:5000") {
        this.apiKey = apiKey;
        this.baseURL = baseURL;
    }

    /* Health Check */
    async isServerAlive(): Promise<boolean> {
        try {
            const res = await axios.get(`${this.baseURL}/api/v1`);
            return res.data === 'Server Up & Running!';
        } catch (error) {
            return false;
        }
    }

    /* Test Route */
    async runTest(): Promise<WrapperResponse | WrapperError> {
        try {
            const response = await axios.post(`${this.baseURL}/api/v1/test/test-route`, {
                apiKey: this.apiKey
            });

            return response.data;
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    return {
                        error: true,
                        status: error.response.status,
                        data: error.response.data,
                        message: error.response.data?.error || 'Something went wrong! Please try again later'
                    };
                } else if (error.request) {
                    return {
                        error: true,
                        message: 'No response from server. Network issue?'
                    };
                }
            }

            return {
                error: true,
                message: 'Unexpected error occurred.',
                detail: (error as Error).message
            };
        }
    }
}