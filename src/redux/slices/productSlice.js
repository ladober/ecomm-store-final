import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers";

export const saveProduct = createAsyncThunk(
  "product/saveProduct",
  async ({ product, productId }, { rejectWithValue, dispatch }) => {
    try {
      const method = productId ? "put" : "post";
      const endpoint = productId ? `/products/${productId}` : "/products";

      const { data } = await axiosInstance[method](endpoint, { product });
      dispatch(fetchHomePageProducts());
      return data;
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);

export const fetchHomePageProducts = createAsyncThunk(
  "product/fetchHomePageProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/products");
      return data;
    } catch (error) {
      return rejectWithValue("Error fetching products");
    }
  }
);

export const fetchCategoryProducts = createAsyncThunk(
  "product/fetchCategoryProducts",
  async ({ category, queryUrl }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/products/categories/${category}${queryUrl}`
      );
      return data;
    } catch (error) {
      return rejectWithValue("Error fetching category products");
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async ({ id }, { dispatch, rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/products/${id}`);
      dispatch(fetchHomePageProducts());
    } catch (error) {
      return rejectWithValue("Error deleting products");
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    error: null,
    homePageProducts: [],
    productCategories: [],
    categoryProducts: [],
    selectedProduct: null,
    totalPages: 0,
  },

  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(saveProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(saveProduct.fulfilled, (state, action) => {
      state.loading = false;
      // state.homePageProducts = action.payload.products;
    });
    builder.addCase(saveProduct.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(fetchHomePageProducts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchHomePageProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.homePageProducts = action.payload.products;
      state.productCategories = action.payload.categories;
    });

    builder.addCase(fetchHomePageProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(fetchCategoryProducts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchCategoryProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.categoryProducts = action.payload.products;
      state.totalpages = action.payload.totalpages;
    });

    builder.addCase(fetchCategoryProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const productReducer = productSlice.reducer;
export const { setSelectedProduct } = productSlice.actions;
