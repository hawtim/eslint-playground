import request, { baseURL } from './request';
const apiPrefix = '/api/admin/transport';

const apiForModule = {
  'packToList': {
    receiverList: 'dc/pack/receiver/get', // export page, receiver list
    exportToList: 'pack/export', // export page, export api
    exportToListByToNumber: 'dc/pack/new_export', // toScan page, export list by one tonumber
    transportOrderCreate: 'create', // to list page, create transport order
    transportOrderDetail: 'fleet/order/search', // toScan page, transport order detail
    transportOrderPrintDetail: 'print/data', // toScan page, transport order print detail for new design
    transportOrderLabel: 'print', // toScan page, transport order label
    completeTransportOrder: 'packed', // toScan page, transport order complete
    reOpenTransportOrder: 'reopen', // toScan page, transport order reopen
  },
};

function handleParams(params, type) {
  // const { module, ...props } = params;
  if (!module) {
    throw new Error('Module is require');
  }
  if (!Object.keys(apiForModule).includes(module)) {
    throw new Error(`${module} module is not in apiForModule`);
  }
  return { api: apiForModule[module][type], props };
}

export default {
  sendRequest(params, method, action) {
    const { api, props } = handleParams(params, action);
    const formatParams = method === 'get' ? { params: props } : props;
    return request[method](`${apiPrefix}/${api}`, formatParams);
  },
};
