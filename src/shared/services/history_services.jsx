import axios from 'axios';

 class productDetails {

  getHistory() {
   const userPromise = axios.get('http://demo1402891.mockable.io/productapihistory')
    .then(res => res.data)
    return userPromise;
    
  }

}

export default productDetails