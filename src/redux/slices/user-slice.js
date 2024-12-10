import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: JSON.parse(localStorage.getItem("user")) || [], // Massiv ko‘rinishda
  },
  reducers: {
    addUser(state, action) {
      state.value.push(action.payload);
      localStorage.setItem("user", JSON.stringify(state.value)); 
    },
    deleteUser(state, action) {
      state.value = state.value.filter((item) => item.id!== action.payload);
      localStorage.setItem("user", JSON.stringify(state.value)); 
    },
    updateUser(state, action) {
      const index = state.value.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.value[index] = action.payload
        localStorage.setItem("user", JSON.stringify(state.value)); 
      }
    }
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
