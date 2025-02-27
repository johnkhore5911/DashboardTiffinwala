// import { createSlice } from '@reduxjs/toolkit';

// const dashboardSlice = createSlice({
//   name: 'dashboard',
//   initialState: { data: [], loading: false, error: null },
//   reducers: {
//     setLoading: (state, action) => {
//       state.loading = action.payload;
//     },
//     setData: (state, action) => {
//       state.data = action.payload;
//       state.loading = false;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//       state.loading = false;
//     },
//   },
// });

// export const { setLoading, setData, setError } = dashboardSlice.actions;
// export default dashboardSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';
import api from '../../services/api';

const initialState = {
    data: [],
    loading: false,
    error: null,
    upperStats: [],
    lowerStats: [],
    deliveryPartners: []
};

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setLoading: (state, action) => { state.loading = action.payload; },
        setData: (state, action) => {
            state.data = action.payload;
            state.upperStats = [{ title: "Total Customers", value: action.payload.totalCustomer }];
            state.lowerStats = Object.entries(action.payload.lowerStats).map(([key, value], index) => ({
                title: key,
                value: value.totalCustomers
            }));
            state.deliveryPartners = action.payload.DeliveryPartners;
        },
        setError: (state, action) => { state.error = action.payload; }
    }
});

export const { setLoading, setData, setError } = dashboardSlice.actions;

export const fetchDashboardData = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await api.get("/userRoutes/DashboardController");
        dispatch(setData(response.data));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export default dashboardSlice.reducer;
