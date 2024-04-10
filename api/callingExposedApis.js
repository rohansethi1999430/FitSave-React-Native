import axios from 'axios';


export const fTApi1 = async (location) => {
  try {
    if(location===''){
      return 'You need to search for something';
    }
    console.log(location);
    const response = await axios.get(`http://192.168.2.35:8090/getFTDetails/${location}`);
    // With Axios, the response data is automatically parsed as JSON.
    const data = response.data; // This is your JSON data.
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fTApi2 = async (location) => {
  try {
    if(location===''){
      return 'You need to search for something';
    }
    const response = await axios.get(`http://192.168.2.35:8090/getGlOutput/${location}`);
    // With Axios, the response data is automatically parsed as JSON.
    const data = response.data; // This is your JSON data.
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fTApi3 = async (location) => {
  try {
    if(location===''){
      return 'You need to search for something';
    }
    const response = await axios.get(`http://192.168.2.35:8090/getPFOutput/${location}`);
    // With Axios, the response data is automatically parsed as JSON.
    const data = response.data; // This is your JSON data.
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const fTApi4 = async (location) => {
  try {
    const response = await axios.get('http://192.168.2.35:8090/bestDeals');
    // With Axios, the response data is automatically parsed as JSON.
    const data = response.data; // This is your JSON data.
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fTApi5 = async (location) => {
  try {
    const response = await axios.get('http://192.168.2.35:8090/bestDeals');
    // With Axios, the response data is automatically parsed as JSON.
    const data = response.data; // This is your JSON data.
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const fTApi6 = async (location) => {
  try {
    if(location===''){
      return 'You need to search for something';
    }
    console.log(location);
    const response = await axios.get(`http://192.168.2.35:8090/availableLocation/${location}`);
    // With Axios, the response data is automatically parsed as JSON.
    const data = response.data; // This is your JSON data.
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const searchedResultsFunction = async (searchText) => {
  try {
    const response = await axios.post('http://192.168.2.35:8090/invertedIndexing', {
      params: {
        text: searchText
      }
    });

    // Check if the response contains relevantSites property
    if (response.data && response.data.relevantSites) {
      return response.data.relevantSites;
    } else {
      throw new Error('Invalid response structure');
    }
  } catch (error) {
    // Handle errors, return null or any custom error message
    console.error('Error fetching data:', error);
    return null;
  }
};







  
  
  



