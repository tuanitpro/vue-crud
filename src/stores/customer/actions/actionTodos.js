import {
  GET_LIST_CUSTOMER,
  GET_LIST_CUSTOMER_SUCCESS,
  GET_LIST_CUSTOMER_FAILED,
  COPY_CUSTOMER,
  COPY_CUSTOMER_SUCCESS,
  COPY_CUSTOMER_FAILED,
  PUBLISH_CUSTOMER,
  PUBLISH_CUSTOMER_SUCCESS,
  PUBLISH_CUSTOMER_FAILED,
  ARCHIVE_CUSTOMER,
  ARCHIVE_CUSTOMER_SUCCESS,
  ARCHIVE_CUSTOMER_FAILED,
  DELETE_CUSTOMER,
  DELETE_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER_FAILED
} from './actionTypes';
import {
  getList,
  copy,
  publish,
  archive,
  _delete
} from '../../../services/customerService';

export const actions = {
  GET_LIST_CUSTOMER: (context, payload) => {
    context.commit(GET_LIST_CUSTOMER, payload);
    getList(payload).then(response => {
      context.commit(GET_LIST_CUSTOMER_SUCCESS, response.results);
    }).catch(err => {
      context.commit(GET_LIST_CUSTOMER_FAILED, err);
    })
  },
  COPY_CUSTOMER: (context, payload) => {
    context.commit(COPY_CUSTOMER, payload);
    copy(payload).then(response => {
      context.commit(COPY_CUSTOMER_SUCCESS, response);
    }).catch(err => {
      context.commit(COPY_CUSTOMER_FAILED, err);
    })
  },
  PUBLISH_CUSTOMER: (context, payload) => {
    context.commit(PUBLISH_CUSTOMER, payload);
    publish(payload).then(response => {
      context.commit(PUBLISH_CUSTOMER_SUCCESS, response.results);
    }).catch(err => {
      context.commit(PUBLISH_CUSTOMER_FAILED, err);
    })
  },
  ARCHIVE_CUSTOMER: (context, payload) => {
    context.commit(ARCHIVE_CUSTOMER, payload);
    archive(payload).then(response => {
      context.commit(ARCHIVE_CUSTOMER_SUCCESS, response.results);
    }).catch(err => {
      context.commit(ARCHIVE_CUSTOMER_FAILED, err);
    })
  },
  DELETE_CUSTOMER: (context, payload) => {
    context.commit(DELETE_CUSTOMER, payload);
    _delete(payload).then(response => {
      context.commit(DELETE_CUSTOMER_SUCCESS, response.results);
    }).catch(err => {
      context.commit(DELETE_CUSTOMER_FAILED, err);
    })
  }
}
