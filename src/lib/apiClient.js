// lib/apiClient.js
// This file centralizes all API call logic for your frontend.

// 1. Define your backend API base URL using environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL || 'http://localhost:5000'; // Fallback for development

// 2. Helper function to handle common request logic (headers, error parsing)
// Removed 'token' parameter as it's not used for authorization in this scenario.
async function fetchApi(endpoint, { method = 'GET', body = null, headers = {} } = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json', // Default to JSON for most APIs
      ...headers, // Allow overriding or adding more headers
    },
  };

  // No token handling here as per your clarification.
  // If another auth method is used (e.g., API key in a custom header), it would be added here.

  // Add body for POST, PUT, PATCH requests
  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, config);

    // Attempt to parse JSON response. Some successful responses (e.g., 204 No Content) might not have a body.
    let data = null;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else if (response.status !== 204) { // If not JSON and not No Content, try to read as text
      data = await response.text();
    }

    if (!response.ok) {
      // If response.ok is false (e.g., 4xx or 5xx status codes)
      // Throw an error with more details from the backend
      const errorMessage = data && typeof data === 'object' && data.message
                           ? data.message
                           : `API Error: ${response.status} ${response.statusText}`;
      const error = new Error(errorMessage);
      error.status = response.status;
      error.data = data; // Attach the full error data from backend if available
      throw error;
    }

    return data; // Return the successful data
  } catch (error) {
    console.error('API call failed:', error);
    // Re-throw the error so calling components can handle it
    throw error;
  }
}

// 3. Define specific API functions for your resources, grouped logically

// API calls for Partner Admin related reports and lists
export const partnerAdminApi = {
  // Retrieves all tenants (from /api/partneradmin/GetAllTenants)
  getAllTenants: async () => { // Removed token parameter
    return fetchApi('/api/partneradmin/GetAllTenants', { method: 'GET' });
  },

  // Retrieves partner subscription plans
  getSubscriptionPlans: async () => { // Removed token parameter
    return fetchApi('/api/partneradmin/partner/subplans', { method: 'GET' });
  },

  // Retrieves recent SMS activities
  getRecentSMS: async () => { // Removed token parameter
    return fetchApi('/api/partneradmin/partner/recentSMS', { method: 'GET' });
  },

  // Retrieves expired accounts
  getExpiredAccounts: async () => { // Removed token parameter
    return fetchApi('/api/partneradmin/partner/expiredaccounts', { method: 'GET' });
  },

  // Retrieves accounts that are expiring soon
  getExpiringAccounts: async () => { // Removed token parameter
    return fetchApi('/api/partneradmin/partner/expiringaccounts', { method: 'GET' });
  },

  // Retrieves recent communications
  getRecentCommunications: async () => { // Removed token parameter
    return fetchApi('/api/partneradmin/recent-communications', { method: 'GET' });
  },

  // Retrieves recent subscriptions
  getRecentSubscriptions: async () => { // Removed token parameter
    return fetchApi('/api/partneradmin/partner/recentsubscriptions', { method: 'GET' });
  },

  // Retrieves current subscription details
  getCurrentSubscription: async () => { // Removed token parameter
    return fetchApi('/api/partneradmin/partner/currentsubscription', { method: 'GET' });
  },

  // Retrieves active accounts
  getActiveAccounts: async () => { // Removed token parameter
    return fetchApi('/api/partneradmin/partner/GetActiveAccounts', { method: 'GET' });
  },

  // Retrieves inactive accounts
  getInactiveAccounts: async () => { // Removed token parameter
    return fetchApi('/api/partneradmin/partner/GetInActiveAccounts', { method: 'GET' });
  },

  // Retrieves basic SaaS information
  getBasicSaasInformation: async () => { // Removed token parameter
    return fetchApi('/api/partneradmin/partner/GetBasicSaasInformation', { method: 'GET' });
  },

  // Retrieves plan summary report
  getPlanSummaryReport: async () => { // Removed token parameter
    return fetchApi('/api/partneradmin/partner/GetPlanSummaryReportAsync', { method: 'GET' });
  },

  // Retrieves sign-up trend data
  getSignUpTrend: async () => { // Removed token parameter
    return fetchApi('/api/partneradmin/partner/GetSignUpTrend', { method: 'GET' });
  },

  // Retrieves SMS purchase trend data
  getSmsPurchaseTrend: async () => { // Removed token parameter
    return fetchApi('/api/partneradmin/partner/GetSMSPurchaseTrend', { method: 'GET' });
  },

  // Retrieves SMS usage trend data
  getSmsUsageTrend: async () => { // Removed token parameter
    return fetchApi('/api/partneradmin/partner/GetSMSUsageTrend', { method: 'GET' });
  },

  // Retrieves subscription revenue trend data
  getSubscriptionRevenueTrend: async () => { // Removed token parameter
    return fetchApi('/api/partneradmin/partner/GetSubscriptionRevenueTrend', { method: 'GET' });
  },

  // Retrieves subscription trend data
  getSubscriptionTrend: async () => { // Removed token parameter
    return fetchApi('/api/partneradmin/partner/GetSubscriptionTrend', { method: 'GET' });
  },
};

// API calls for CRUD operations on a 'Partner' entity
export const partnerCrudApi = {
  // Get all partners
  getAllPartners: async () => { // Removed token parameter
    return fetchApi('/api/partner/partner', { method: 'GET' });
  },

  // Get a single partner by ID
  getPartnerById: async (id) => { // Removed token parameter
    return fetchApi(`/api/partner/partner/${id}`, { method: 'GET' });
  },

  // Create a new partner
  createPartner: async (partnerData) => { // Removed token parameter
    return fetchApi('/api/partner/partner', { method: 'POST', body: partnerData });
  },

  // Update an existing partner
  updatePartner: async (id, partnerData) => { // Removed token parameter
    return fetchApi(`/api/partner/partner/${id}`, { method: 'PUT', body: partnerData });
  },

  // Delete a partner
  deletePartner: async (id) => { // Removed token parameter
    return fetchApi(`/api/partner/partner/${id}`, { method: 'DELETE' });
  },
};
