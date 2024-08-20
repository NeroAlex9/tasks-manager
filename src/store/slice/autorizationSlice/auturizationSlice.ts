import { formToggle, IAutorizationSlice } from "./types";

const initialState: IAutorizationSlice = {
  typeForm: formToggle.SIGN_IN,
  login: "",
  password: "",
  error: "",
};
// const autorizationSlice = createSlice({
//
// })
