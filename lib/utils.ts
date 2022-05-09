import axios from 'axios';
import {
  AUTHORS_API_URL,
  BANNER_POSTS_API_URL,
  FEATURED_CATEGORIES_API_URL,
  FEATURED_POSTS_API_URL,
  MEDIA_API_URL,
  POSTS_API_URL,
  POSTS_WITH_IMAGES_API_URL,
} from './constants';

export const getAllPostsFromServer = async (callback) => {
  // get all posts from Server
  try {
    const { data } = await axios.get(POSTS_API_URL);
    callback(data);
    return data;
  } catch (error) {
    return console.error(error);
  }
};

export const getAllPostsWithImagesFromServer = async (callback) => {
  // get all posts from Server
  try {
    const { data } = await axios.get(POSTS_WITH_IMAGES_API_URL);
    callback(data);
    return data;
  } catch (error) {
    return console.error(error);
  }
};

export const getFeaturedPostsFromServer = async (callback) => {
  // get featured posts from Server
  try {
    const { data } = await axios.get(FEATURED_POSTS_API_URL);
    callback(data);
    return data;
  } catch (error) {
    return console.error(error);
  }
};

export const getBannerPostsFromServer = async (callback) => {
  // get featured posts from Server
  try {
    const { data } = await axios.get(BANNER_POSTS_API_URL);
    callback(data);
    return data;
  } catch (error) {
    return console.error(error);
  }
};

export const getFeaturedCategoriesFromServer = async (callback) => {
  // get all child categories of "featured" from Server
  try {
    const { data } = await axios.get(FEATURED_CATEGORIES_API_URL);
    callback(data);
    return data;
  } catch (error) {
    return console.error(error);
  }
};

export const getAuthor = async (id) => {
  try {
    const {
      data: { name },
    } = await axios.get(`${AUTHORS_API_URL}/${id}`);
    return name;
  } catch (error) {
    return console.error(error);
  }
};

export const getFeaturedImage = async (id) => {
  try {
    const res = await axios.get(`${MEDIA_API_URL}/${id}`);
    return res.data.guid.rendered;
  } catch (error) {
    return console.error(error);
  }
};
