import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ApiService from '../../services/apicall';

// Async action to fetch movies
export const fetchMovie = createAsyncThunk('fetchTvShow', async (pagenumber) => {
  const data = await ApiService.fetchlist(pagenumber);
  return data;
});

const contentSlice = createSlice({
  name: 'tvshow',
  initialState: {
    isLoading: false,
    data: null,
    contentlist: [],
    originalContentList: [], // Keeps the original data fetched
    title: '',
    isSearchClicked: false,
    totalLength: 0,
    error: false
  },
  reducers: {
    toggleSearchClick: (state) => {
      state.isSearchClicked = !state.isSearchClicked;
    },
    filterContentList: (state, action) => {
      const searchQuery = action.payload.toLowerCase();
      if (searchQuery) {
        state.contentlist = state.originalContentList.filter((item) =>
          item.name.toLowerCase().includes(searchQuery)
        );
      } else {
        
        state.contentlist = state.originalContentList;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovie.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contentlist = [
        ...state.contentlist,
        ...action.payload.data.page['content-items'].content
      ];
      state.originalContentList = state.contentlist;
      state.totalLength = action.payload.data.page['total-content-items'];
      state.title = action.payload.data.page.title;
      state.data = action.payload.data.page;
    });

    builder.addCase(fetchMovie.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  }
});

// Export actions
export const { toggleSearchClick, filterContentList } = contentSlice.actions;

// Export reducer
export default contentSlice.reducer;
