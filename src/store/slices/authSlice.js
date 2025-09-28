import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../services/api";

// Async thunks
export const loginUser = createAsyncThunk(
  "/auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await apiService.login(email, password);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signup",
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      const response = await apiService.signup(email, password, name);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserProfile = createAsyncThunk(
  "auth/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiService.getUserProfile();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("adminToken"),
    isAuthenticated: !!localStorage.getItem("adminToken"),
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminUser");
    },
    clearError: (state) => {
      state.error = null;
    },
    setCredentials: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user;
      state.isAuthenticated = true;
      localStorage.setItem("adminToken", token);
      localStorage.setItem("adminUser", JSON.stringify(user));
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
        localStorage.setItem("adminToken", action.payload.token);
        localStorage.setItem("adminUser", JSON.stringify(action.payload.user));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        state.error = action.payload;
      })
      // Signup
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
        localStorage.setItem("adminToken", action.payload.token);
        localStorage.setItem("adminUser", JSON.stringify(action.payload.user));
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        state.error = action.payload;
      })
      // Get Profile
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        // If profile fetch fails, logout user
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");
      });
  },
});

export const { logout, clearError, setCredentials } = authSlice.actions;
export default authSlice.reducer;
