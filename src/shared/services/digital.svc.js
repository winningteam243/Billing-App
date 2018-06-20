import axios from 'axios';

 class UserService {

  getUser() {
   const userPromise = axios.get('http://demo1402891.mockable.io/single_product')
    .then(res => res.data)
    return userPromise;
    
  }

}

export default UserService