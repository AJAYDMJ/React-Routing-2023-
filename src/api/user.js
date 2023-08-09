import { saveUserInfo } from '../utils/common';
import datta from './data.json';

const dummyApi = (user) => {
    if(datta[user]) {
        return Promise.resolve(datta[user].role);
    }
    return Promise.reject('Invalid User');
}


const login = (userName, password) => {
    return dummyApi(userName, password)
            .then((role) => {
                saveUserInfo({
                    userName,
                    role
                })
                return {
                    status:'success',
                    data: role
                }
            });
}

export default login;