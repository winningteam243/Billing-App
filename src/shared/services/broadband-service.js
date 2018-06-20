import axios from 'axios';

 class UserService {

  getBroadband() {
   const userPromise = axios.get('https://demo1402891.mockable.io/single_product')
    .then(res => res.data)
    return userPromise;
    
  }

}

export default UserService