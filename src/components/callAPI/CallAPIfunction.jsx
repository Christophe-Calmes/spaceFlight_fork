 const CallAPI = async (APIRequest , searchValue = '') => {
    if(go) {
        const response = await fetch(APIRequest + searchValue);
        if(response.status === 200) {
            const data = await response.json();
            //console.log(`Data CallAPI${data.results}`)
            return data;
        } else {
            return "Error fetch Get API";
        }
    } 
 
}
export default CallAPI;