// src/redux/store/index.js

import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../redux/reducers/dataReducer';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
