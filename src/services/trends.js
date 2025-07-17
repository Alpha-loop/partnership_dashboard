import fetchData  from '../../backend/index'


export const getSignUpTrend = async () => {
  return fetchData('/api/partneradmin/partner/GetSignUpTrend');
};

export const getSMSPurchaseTrend = async () => {
  return fetchData('/api/partneradmin/partner/GetSMSPurchaseTrend');
};

export const getSMSUsageTrend = async () => {
  return fetchData('/api/partneradmin/partner/GetSMSUsageTrend');
};

export const getSubscriptionRevenueTrend = async () => {
  return fetchData('/api/partneradmin/partner/GetSubscriptionRevenueTrend');
};

export const getSubscriptionTrend = async () => {
  return fetchData('/api/partneradmin/partner/GetSubscriptionTrend');
};