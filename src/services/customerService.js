import { API } from './api';

function getList(params) {
  params.url = 'https://randomuser.me/api/?results=50'
  return API.get(params);
}
function copy(params) {
  params.url = 'https://randomuser.me/api/?inc=name,registered&nat=US&results=50'
  return new Promise((resolve, reject) => {
    resolve({ ok: 1 })
  })
}
function publish(params) {
  params.url = 'https://randomuser.me/api/?inc=name,registered&nat=US&results=50'
  return API.get(params);
}
function archive(params) {
  params.url = 'https://randomuser.me/api/?inc=name,registered&nat=US&results=50'
  return API.get(params);
}
function _delete(params) {
  params.url = 'https://randomuser.me/api/?inc=name,registered&nat=US&results=50'
  return API.get(params);
}

export {
  getList,
  copy,
  publish,
  archive,
  _delete
}
