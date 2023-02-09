import apiClient from "./api/apiClient";

export const getShops = (jwt) => {

    const userToken = {
        token: jwt
    };

    return apiClient.post("shops/getShops", userToken);

}