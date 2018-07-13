import { combineReducers } from 'redux'

/** Actions **/

export const defaultCities = {
    type: 'DEFAULT',
    payload: ['Accra', 'London', 'Berlin']
}

export const cities = (listOfCities) => ({
    type: 'CITIES',
    payload: listOfCities
});

export const getCities = () => {
    console.log('getCities');
    return function (dispatch, getState) {
      fetch('http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=8d552b12b76d8f7a6cd047b68c725626')
        .then(response => response.json())
        .then(data => { 
            console.log('cities data', data);
            const { list } = data;
            const cityData = list.map(city => ({
                    name: city.name,
                    id: city.id
              })
            );
            dispatch(cities(cityData));
        });
 }
}

export const selectCity = (selectedCity) => ({
    type: 'SELECTED_CITY',
    payload: selectedCity
});


export const getSelectedCity = (cityID) => {
    return function (dispatch, getState) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=8d552b12b76d8f7a6cd047b68c725626`)
            .then(response => response.json())
            .then(data => {
                console.log('state', getState());
                console.log('selected city data', data);
                dispatch(selectCity(data));
            });
    }
}



/** Reducers **/

const defaultCitiesReducer = (state=[], action) => {
    if (action.type === 'DEFAULT') {
        return action.payload;
    }
    return state;
}

const citiesReducer = (state=[], action) => {
    if (action.type === 'CITIES') {
        return action.payload;
    }
    return state; 
}

const selectedCityReducer = (state={}, action) => {
    if (action.type === 'SELECTED_CITY') {
        return action.payload;
    }
    return state; 
}

const reducers = combineReducers({
        defaultCities: defaultCitiesReducer,
        cities: citiesReducer,
        selectedCity: selectedCityReducer
    });

export default reducers;