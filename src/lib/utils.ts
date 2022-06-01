import {
  BANNER_POSTS_API_URL,
  FEATURED_CATEGORIES_API_URL,
  FEATURED_POSTS_API_URL,
  MEDIA_API_URL,
  POSTS_WITH_IMAGES_API_URL,
} from './constants';

export const getAllPostsWithImagesFromServer = async () => {
  // get all posts from Server
  try {
    const data = await (await fetch(POSTS_WITH_IMAGES_API_URL)).json();

    return data;
  } catch (error) {
    return console.error(error);
  }
};

export const getFeaturedPostsFromServer = async () => {
  // get featured posts from Server
  try {
    const data = await (await fetch(FEATURED_POSTS_API_URL)).json();

    return data;
  } catch (error) {
    return console.error(error);
  }
};

export const getBannerPostsFromServer = async () => {
  // get featured posts from Server
  try {
    const data = await (await fetch(BANNER_POSTS_API_URL)).json();

    return data;
  } catch (error) {
    return console.error(error);
  }
};

export const getFeaturedCategoriesFromServer = async () => {
  // get all child categories of "featured" from Server
  try {
    const data = await (await fetch(FEATURED_CATEGORIES_API_URL)).json();

    return data;
  } catch (error) {
    return console.error(error);
  }
};

export const getMedia = async (id) => {
  try {
    const data = await (await fetch(`${MEDIA_API_URL}/${id}`)).json();

    return data.source_url;
  } catch (error) {
    return console.error(error);
  }
};
