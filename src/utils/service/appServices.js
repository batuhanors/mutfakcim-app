import apiClient from "./api/apiClient";

const setJwt = (jwt) => {
    return { token: jwt}
}

export const getShops = (jwt) => {

    const userToken = setJwt(jwt);

    return apiClient.post("shops/getShops", userToken);

}

export const getInventory = (jwt) => {
    const userToken = setJwt(jwt);

    return apiClient.post("shops/inventory", userToken);
}

export const addShops = (shopList) => {

    console.log(shopList);
}

