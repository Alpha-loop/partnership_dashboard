import fetchData  from '../../backend/index'


export const getSignUpTrend = async () => {
  const data = fetchData.get('/api/partneradmin/partner/GetSignUpTrend');
  return data;
};

export const getSMSPurchaseTrend = async () => {
  const data = fetchData.get('/api/partneradmin/partner/GetSMSPurchaseTrend');
  return data;
};

export const getSMSUsageTrend = async () => {
  const data = fetchData.get('/api/partneradmin/partner/GetSMSUsageTrend');
  return data;
};

export const getSubscriptionRevenueTrend = async () => {
  const data = fetchData.get('/api/partneradmin/partner/GetSubscriptionRevenueTrend');
  return data;
};

export const getSubscriptionTrend = async () => {
  const data = fetchData.get('/api/partneradmin/partner/GetSubscriptionTrend');
  return data;
};