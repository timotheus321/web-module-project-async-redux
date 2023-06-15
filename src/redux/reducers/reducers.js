// // src/redux/reducers/dataReducer.js
// import dataReducer from '../reducers/da'
// import {
//     FETCH_FACT_REQUEST,
//     FETCH_FACT_SUCCESS,
//     FETCH_FACT_FAILURE
// } from '../actions/dataActions';

// const initialState = {
//     loading: false,
//     fact: {},
//     error: '',
// };

// const dataReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FETCH_FACT_REQUEST:
//             return {
//                 ...state,
//                 loading: true,
//             };
//         case FETCH_FACT_SUCCESS:
//             return {
//                 loading: false,
//                 fact: action.payload,
//                 error: ''
//             };
//         case FETCH_FACT_FAILURE:
//                 return {
//                     loading: false,
//                     fact: {},
//                     error: action.payload,
//                 };
//         default:
//             return state;
//     }
// };

// export default dataReducer;