'use server'

import { api } from "@/shared/infrastructure/api"
import { ApiResponse } from "./api-response"

export async function handleApiCall(
    method: 'get' | 'post' | 'put' | 'delete',
    endpoint: string,
    data?: any
): Promise<ApiResponse> {
    const instance = await api()
    if(!data) {
        const res = await instance[method](endpoint)
        return res.data
    }
    const res = await instance[method](endpoint, data)
    return res.data
}