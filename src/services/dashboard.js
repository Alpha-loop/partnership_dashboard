import fetchData  from '../../backend/index'

export const getBasicSaasInformation = async () => {
  return fetchData.get('/api/PartnerAdmin/partner/GetBasicSaasInformation');
};

export const getActiveAccounts = async () => {
  const data = await fetchData.get('/api/partneradmin/partner/GetActiveAccounts');
  return data;
};

export const getInactiveAccounts = async () => {
  const data = await fetchData.get('/api/partneradmin/partner/GetInActiveAccounts');
  return data;
};

export const getPlanSummary = async () => {
  const data = await fetchData.get('/api/partneradmin/partner/GetPlanSummaryReportAsync');
  return data;
}

export const getExpiredAccounts = async () => {
  const data = await fetchData.get('/api/partneradmin/partner/expiredaccounts')
  return data;
}

export const getExpiringAccounts = async () => {
  const data = await fetchData.get('/api/partneradmin/partner/expiringaccounts');
  return data;
}