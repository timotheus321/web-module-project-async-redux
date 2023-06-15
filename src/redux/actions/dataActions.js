// src/redux/actions/dataActions.js

import axios from 'axios';


export const FETCH_FACT_REQUEST = 'FETCH_FACT_REQUEST';
export const FETCH_FACT_SUCCESS = 'FETCH_FACT_SUCCESS';
export const FETCH_FACT_FAILURE = 'FETCH_FACT_FAILURE';


const fetchFactRequest = () => {
  return {
    type: FETCH_FACT_REQUEST
  };
};


const fetchFactSuccess = (fact) => {
  return {
    type: FETCH_FACT_SUCCESS,
    payload: fact
  };
};


const fetchFactFailure = (error) => {
  return {
    type: FETCH_FACT_FAILURE,
    payload: error
  };
};


export const fetchFact = () => {
  return (dispatch) => {
    dispatch(fetchFactRequest());


    axios
      .get('https://catfact.ninja/fact')
      .then((response) => {
    
        const fact = response.data;
        dispatch(fetchFactSuccess(fact));
      })
      .catch((error) => {
    
        dispatch(fetchFactFailure(error.message));
      });
  };
};
