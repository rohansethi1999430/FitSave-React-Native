import axios from 'axios';

export const dataForLikes = async () => {
  try {
    const data= await axios.get('http://192.168.2.20:3000/getData');
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
 
};

export const fTApi1 = async () => {
  try {
    const response = await axios.get('http://192.168.2.20:8080/getFTDetails/windsor');
    // With Axios, the response data is automatically parsed as JSON.
    const data = response.data; // This is your JSON data.
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fTApi2 = async () => {
  try {
    const response = await axios.get('http://192.168.2.20:8080/getGlOutput/windsor');
    // With Axios, the response data is automatically parsed as JSON.
    const data = response.data; // This is your JSON data.
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fTApi3 = async () => {
  try {
    const response = await axios.get('http://192.168.2.20:8080/getPFOutput/windsor');
    // With Axios, the response data is automatically parsed as JSON.
    const data = response.data; // This is your JSON data.
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const fTApi4 = async () => {
  try {
    const response = await axios.get('http://192.168.2.20:8080/bestDeals');
    // With Axios, the response data is automatically parsed as JSON.
    const data = response.data; // This is your JSON data.
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};


export const savingLikedData = function saveDataToMongoDB(data) {
  console.log(data)
  fetch('http://10.71.42.229:3000/saveData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: [JSON.stringify(data)] }), // Modified here
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}



  
  
  



