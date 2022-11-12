import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type Lists = {
  address: string,
   benefits: Array<string>,
   createdAt: string,
   description: string,
   email: string,
   employment_type: Array<string>,
   id: string,
   location: {lat: number, long: number},
   name: string,
   phone: string,
   pictures: Array<string>,
   salary: string,
   title: string,
   updateAt: string,
   subscribe?: boolean

}
interface listState {
  lists: Array<Lists>,
  error: null,
  loading: boolean,
  list: Array<Lists>
}
const initialState: listState = {
  lists: [], 
  error: null,
  loading: false,
  list: [],
} 

const head = "Bearer" + " " + "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

export const getList = createAsyncThunk(
  "lists/getList",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        "https://api.json-generator.com/templates/ZM1r0eic3XEy/data",
        {
          headers: { Authorization: head },
        }
      );
      const data = await response.json();
      dispatch(addLists(data));
    } catch (error) {
      if (error instanceof Error) {
        return error.message;
      }
    }
  }
);

export const listSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    addLists: (state, action) => {
      state.loading = false;
      state.lists = action.payload;
    },
    addSubscribe: (state, action) => {
      state.lists = state.lists.map((el) => {
        if (el.id === action.payload && el.subscribe !== true) {
          return {...el, subscribe: true};
        } else {
          return {...el, subscribe: false};
        }
      });
    },
    addList: (state, action) =>{
      state.list = state.lists.filter((el)=>{
        return el.id=== action.payload
      })
    }
  },
});
export const { addLists, addSubscribe, addList } = listSlice.actions;
export default listSlice.reducer;
