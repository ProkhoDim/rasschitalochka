const getFilteredData = state => {
  if (!state.bankData.data) {
    return null;
  }
  const filteredData = state.bankData.data.filter(el => el.ccy !== 'BTC');
  return filteredData.map(el => ({
    ...el,
    buy: Number(el.buy).toFixed(2),
    sale: Number(el.sale).toFixed(2),
  }));
};

const isLoading = state => state.bankData.isLoading;

export default { getFilteredData, isLoading };
