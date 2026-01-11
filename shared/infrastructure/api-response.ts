export interface ApiResponse<T = any> {
  status: 'success' | 'error';
  data: T | null;
  error: string | null;
}