import fetchData  from '../../backend/index'

export const getBasicSaasInformation = async () => {
  return fetchData('/api/partneradmin/partner/GetBasicSaasInformation');
};

export const getActiveAccounts = async () => {
  // Assuming this endpoint returns a count directly or an object with a 'count'
  const data = await fetchData('/api/partneradmin/partner/GetActiveAccounts');
  return data.count !== undefined ? data.count : data;
};

export const getInactiveAccounts = async () => {
  // Assuming this endpoint returns a count directly or an object with a 'count'
  const data = await fetchData('/api/partneradmin/partner/GetInActiveAccounts');
  return data.count !== undefined ? data.count : data;
};