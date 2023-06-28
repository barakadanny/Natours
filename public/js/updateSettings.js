import { showAlert } from './alert'

// type is either password or data (name, email)
export const updateSettings = async (data, type) => {
    try {
        const url = 
            type === 'password' 
                ? 'http://localhost:3000/api/v1/users/updateMyPassword' 
                : 'http://localhost:3000/api/v1/users/updateMe';

        const res = await axios({
            method: 'PATCH',
            url,
            data
        })
        if(res.data.status) {
            console.log("it passes successfully");
            showAlert('error', `${type} updated successfully!`);
        }
    } catch (err) {
        showAlert('error', err.response.data.message);
    }
}
