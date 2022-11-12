import axios from "axios"

export const getData = (params = {}) => {
    return axios.get(`https://lazy-blue-panda-gear.cyclic.app/products`, {
        params: {
            category: params.category        //men,women,kids
        }
    });
}