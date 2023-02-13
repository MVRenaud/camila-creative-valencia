import { loginFailure, 
  loginStart, 
  loginSuccess, 
  logout,
  addUserStart,
  addUserSuccess,
  addUserFailure 
} from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";


export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const addUser = async (dispatch, user ) =>{
  dispatch(addUserStart());
  try {
    const res = await userRequest.post("/auth/register", user);
    dispatch(addUserSuccess(res.data));
  } catch (error) {
    dispatch(addUserFailure())
    alert("Please");
  }
};

export const logOut = async(dispatch, user) =>{
  dispatch(logout(user))
};