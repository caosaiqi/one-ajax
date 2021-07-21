export type ResponseType =
  | 'arraybuffer'
  | 'blob'
  | 'document'
  | 'json'
  | 'text'
  | 'stream'

export interface RequestConfig {
    url: string;
    method: string;
    baseURL: string;
    headers?: any;
    params?: any;
    data?: any;
    timeout?: number;
    responseType?: ResponseType;
}