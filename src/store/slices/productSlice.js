import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { 
  fetchProducts, 
  fetchCategories, 
  fetchProductDetails, 
  fetchProductsByCategory 
} from '../../api.js';

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAll',
  async () => {
    const response = await fetchProducts();
    return response;
  }
);

export const fetchAllCategories = createAsyncThunk(
  'products/fetchCategories',
  async () => {
    const response = await fetchCategories();
    return response;
  }
);

export const fetchProductById = createAsyncThunk(
  'products/fetchById',
  async (productId) => {
    const response = await fetchProductDetails(productId);
    return response;
  }
);

export const fetchProductsForCategory = createAsyncThunk(
  'products/fetchByCategory',
  async (category) => {
    const response = await fetchProductsByCategory(category);
    return response;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    categories: [],
    selectedProduct: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductsForCategory.fulfilled, (state, action) => {
        state.items = action.payload;
      });
  }
});

export const { clearSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
