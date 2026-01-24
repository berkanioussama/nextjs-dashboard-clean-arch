import { ApiResponse } from "@/shared/infrastructure/api-response"
import { handleApiCall } from "./api-call"
export abstract class BaseRepo {
    
    protected async handleResponse(response: ApiResponse) {
        if (response.status === 'error') {
            throw new Error(response.error || 'Request failed')
        }
        return response.data
    }

    async GET(endpoint: string, data?: any): Promise<ApiResponse> {
        return handleApiCall('get', endpoint, data)
    }

    async POST(endpoint: string, data?: any): Promise<ApiResponse> {
        return handleApiCall('post', endpoint, data)
    }
    
    async PUT(endpoint: string, data?: any): Promise<ApiResponse> {
        return handleApiCall('put', endpoint, data)
    }
    
    async DELETE(endpoint: string, data?: any): Promise<ApiResponse> {
        return handleApiCall('delete', endpoint, data)
    }
}