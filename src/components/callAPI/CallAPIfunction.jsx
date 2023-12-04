 const CallAPI = async (APIRequest , searchValue = '') => {

        const response = await fetch(APIRequest + searchValue);
        if(response.status === 200) {
            const data = await response.json();
            return data;
        } else {
            return "Error fetch Get API";
        }

 
}
export default CallAPI;