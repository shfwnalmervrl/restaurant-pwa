import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
    static async getRestaurantList() {
        const response = await fetch(API_ENDPOINT.LIST);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async getRestaurantDetail(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        const responseJson = await response.json();
        return responseJson.restaurants;
    }
}

export default RestaurantSource;