import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const fetchJobById = createAsyncThunk(
  "jobs/fetchJobById",
  async (id) => {
    const res = await fetch(`/mock/jobs.json/${id}`); // Change URL to your API endpoint
    if (!res.ok) {
      throw new Error("Failed to fetch job");
    }
    return await res.json();
  }
);

const jobsId = createSlice({
  name: "jobs",
  initialState: {
    list: [],
    currentJob: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJobById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentJob = action.payload;
      })
      .addCase(fetchJobById.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setSearchTerm, setFilterTag } = jobsSlice.actions;
export default jobsId.reducer;