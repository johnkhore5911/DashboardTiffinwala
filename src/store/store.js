// // import { configureStore } from '@reduxjs/toolkit';
// import dashboardReducer from './features/dashboardSlice'; // Example reducer

// export const store = configureStore({
//   reducer: {
//     dashboard: dashboardReducer, // Add your reducers here
//   },
// });

// export default store;


import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './features/dashboardSlice';

export const store = configureStore({
    reducer: {
        dashboard: dashboardReducer
    }
});
