import { mockData } from './mock-data';
import axios from 'axios';
import NProgress from 'nprogress';

//create a new array of only event.location names from an event list
export const extractLocations = (events) => {
  //create an array with all the names
  var extractLocations = events.map((event) => event.location);
  //create an array with duplicates removed using Set
  var locations = [...new Set(extractLocations)];
  return locations;
};

export const extractFirstEvent = (events) => {
  return events[0];
};

export const getEvents = async () => {
  NProgress.start();

  if (window.location.href.startsWith('http://localhost')) {
    NProgress.done();
    return mockData;
  }

  if (!navigator.onLine) {
    const data = localStorage.getItem('lastEvents');
    NProgress.done();
    return data ? JSON.parse(data).events : [];
  }

  const token = await getAccessToken();

  if (token) {
    //remove the code from the URL
    removeQuery();

    const url =
      'https://db1dgdavpe.execute-api.us-east-1.amazonaws.com/dev/api/get-events' +
      '/' +
      token;
    const result = await axios.get(url);
    if (result.data) {
      var locations = extractLocations(result.data.events);
      localStorage.setItem('lastEvents', JSON.stringify(result.data));
      localStorage.setItem('locations', JSON.stringify(locations));
    }
    NProgress.done();
    return result.data.events;
  }
};

export const getAccessToken = async () => {
  const accessToken = localStorage.getItem('access_token');

  //do we have a token, and is it valid
  const tokenCheck = accessToken && (await checkToken(accessToken));

  //get a new token
  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem('access_token');

    //try to get code from url
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get('code');

    //if there's no code, get the URL using the AWS serverless function
    if (!code) {
      const results = await axios.get(
        'https://db1dgdavpe.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url'
      );
      const { authUrl } = results.data;
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;
};

const checkToken = async (accessToken) => {
  const result = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  )
    .then((res) => res.json())
    .catch((error) => error.json());
  return result;
};

const removeQuery = () => {
  if (window.history.pushState && window.location.pathname) {
    var newurl =
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname;
    window.history.pushState('', '', newurl);
  } else {
    newurl = window.location.protocol + '//' + window.location.host;
    window.history.pushState('', '', newurl);
  }
};

//get the google auth token using the code
const getToken = async (code) => {
  const encodeCode = encodeURIComponent(code);
  const { access_token } = await fetch(
    'https://db1dgdavpe.execute-api.us-east-1.amazonaws.com/dev/api/token' +
      '/' +
      encodeCode
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => error);

  //save the token in local storage
  access_token && localStorage.setItem('access_token', access_token);

  return access_token;
};
