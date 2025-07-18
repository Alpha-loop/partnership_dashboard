import fetchData  from '../../backend/index'

export const getAllTenants = async () => {
  return fetchData.get('/api/partneradmin/GetAllTenants');
};

export const getPartnerSubPlans = async () => {
  return fetchData('/api/partneradmin/partner/subplans');
};

export const getRecentSMS = async () => {
  return fetchData.get('/api/partneradmin/partner/recentSMS');
};

export const getExpiredAccounts = async () => {
  return fetchData('/api/partneradmin/partner/expiredaccounts');
};

export const getExpiringAccounts = async () => {
  return fetchData('/api/partneradmin/partner/expiringaccounts');
};

export const getRecentCommunications = async () => {
  return fetchData('/api/partneradmin/recent-communications');
};

export const getRecentSubscriptions = async () => {
  return fetchData('/api/partneradmin/partner/recentsubscriptions');
};

export const getCurrentSubscription = async () => {
  return fetchData('/api/partneradmin/partner/currentsubscription');
};

export const getPlanSummaryReport = async () => {
  return fetchData('/api/partneradmin/partner/GetPlanSummaryReportAsync');
};