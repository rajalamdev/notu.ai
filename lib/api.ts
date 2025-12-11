const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

interface ApiOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: any;
  token?: string;
  headers?: Record<string, string>;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async request<T>(endpoint: string, options: ApiOptions = {}): Promise<T> {
    const { method = 'GET', body, token, headers = {} } = options;

    const requestHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
      ...headers,
    };

    if (token) {
      requestHeaders['Authorization'] = `Bearer ${token}`;
    }

    const config: RequestInit = {
      method,
      headers: requestHeaders,
    };

    if (body && method !== 'GET') {
      config.body = JSON.stringify(body);
    }

    const response = await fetch(`${this.baseUrl}${endpoint}`, config);
    
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }

    return data;
  }

  // Auth endpoints
  async verifyToken(token: string) {
    return this.request('/api/auth/verify', { token });
  }

  async getProfile(token: string) {
    return this.request('/api/auth/profile', { token });
  }

  async updateProfile(token: string, data: { name?: string; preferences?: any }) {
    return this.request('/api/auth/profile', {
      method: 'PUT',
      token,
      body: data,
    });
  }

  // Meeting endpoints
  async getMeetings(token: string, params?: { page?: number; limit?: number; status?: string }) {
    const queryString = params 
      ? '?' + new URLSearchParams(params as any).toString()
      : '';
    return this.request(`/api/meetings${queryString}`, { token });
  }

  async getMeeting(token: string, id: string) {
    return this.request(`/api/meetings/${id}`, { token });
  }

  async createMeeting(token: string, data: any) {
    return this.request('/api/meetings', {
      method: 'POST',
      token,
      body: data,
    });
  }

  async updateMeeting(token: string, id: string, data: any) {
    return this.request(`/api/meetings/${id}`, {
      method: 'PUT',
      token,
      body: data,
    });
  }

  async deleteMeeting(token: string, id: string) {
    return this.request(`/api/meetings/${id}`, {
      method: 'DELETE',
      token,
    });
  }

  // Upload endpoint
  async uploadFile(token: string, file: File, metadata?: any) {
    const formData = new FormData();
    formData.append('file', file);
    
    if (metadata) {
      Object.entries(metadata).forEach(([key, value]) => {
        formData.append(key, value as string);
      });
    }

    const response = await fetch(`${this.baseUrl}/api/upload`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Upload failed');
    }

    return data;
  }

  // Health check
  async healthCheck() {
    return this.request('/api/health');
  }
}

export const api = new ApiClient(API_BASE_URL);
export default api;
