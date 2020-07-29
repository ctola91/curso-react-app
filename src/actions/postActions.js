import { request, received, error } from '../shared/redux/baseActions';

import PostService from '../services/PostService';
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_ERROR,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_ERROR,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
} from './actionTypes';

export const fetchPosts = (limit, page) => async (dispatch) => {
  dispatch(request(FETCH_POSTS_REQUEST));
  try {
    const response = await PostService.getPosts(limit, page);
    dispatch(received(FETCH_POSTS_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(FETCH_POSTS_ERROR));
    // eslint-disable-next-line
    console.log('AXIOS_ERROR', err.response);
  }
};

export const fetchPost = (id) => async (dispatch) => {
  dispatch(request(FETCH_POST_REQUEST));
  try {
    const response = await PostService.getPost(id);
    dispatch(received(FETCH_POST_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(FETCH_POST_ERROR));
    // eslint-disable-next-line
    console.log('AXIOS_ERROR', err.response);
  }
};

export const addPost = (post) => async (dispatch) => {
  dispatch(request(ADD_POST_REQUEST));
  try {
    const response = await PostService.addPost(post);
    dispatch(received(ADD_POST_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(ADD_POST_ERROR));
    // eslint-disable-next-line
    console.log('AXIOS_ERROR', err.response);
  }
};

export const updatePost = (post) => async (dispatch) => {
  dispatch(request(UPDATE_POST_REQUEST));
  try {
    const response = await PostService.updatePost(post);
    dispatch(received(UPDATE_POST_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(UPDATE_POST_ERROR));
    // eslint-disable-next-line
    console.log('AXIOS_ERROR:', err.response);
  }
};

export const deletePost = (id) => async (dispatch) => {
  dispatch(request(DELETE_POST_REQUEST));
  try {
    const response = await PostService.deletePost(id);
    dispatch(received(DELETE_POST_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(DELETE_POST_ERROR));
    // eslint-disable-next-line
    console.log('AXIOS_ERROR:', err.response);
  }
};
