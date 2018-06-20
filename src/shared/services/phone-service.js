import axios from 'axios';

 class PhoneService {

  getUser() {
   
   const userPromise = axios.get('https://demo1402891.mockable.io/single_product')
    // const userPromise = axios.get(' http://demo1402891.mockable.io/history ')
    .then(res => res.data)
    return userPromise;
    
  }

}

export default PhoneService