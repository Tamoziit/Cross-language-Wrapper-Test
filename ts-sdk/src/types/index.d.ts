export interface WrapperResponse {
    name: string;
    env: string;
    key: string;
}

export interface WrapperError {
    error: true;
    status?: number;
    data?: any;
    message: string;
    detail?: string;
}