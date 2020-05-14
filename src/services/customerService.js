import { API } from './api';

function getList(params) {
  params.url = '/customer'
  return API.get(params);
}

function getListPaging(params) {
  const obj = {
    url: '/customer/searchs/',
    options: {
      params: params
    }
  }

  return API.get(obj);
}

function create(params) {
  params.url = '/customer'
  return API.post(params);
}
function update(params) {
  params.url = '/customer'
  return API.put(params);
}
function copy(params) {
  params.url = '/customer/copy'
  return API.post(params);
}
function publish(params) {
  params.url = '/customer/publish'
  return API.put(params);
}
function archive(params) {
  params.url = '/customer/archive'
  return API.put(params);
}
function _delete(params) {
  params.url = '/customer'
  return API.delete(params);
}

export {
  getList,
  getListPaging,
  create,
  update,
  copy,
  publish,
  archive,
  _delete
}
