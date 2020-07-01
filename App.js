import React, { useReducer, useContext,propTypes } from "react";
const MyContext = React.createContext(null);
const initialState = {
  username: '??',
  gender: 'gender ?',
  age:'??'
}
const UPDATE_USER = 'UPDATE_USER';
const SET_GENDER = 'SET_GENDER';
const SET_AGE = 'SET_AGE';
const SET_LOGO = 'SET_LOGO';


function reducer (state, action){
switch(action.type){
  case UPDATE_USER :
  return {
    username: 'Jack',
    gender: '??',
    logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_XMk2TA-_5UKRVTHgCoY1ieUplYDslZVNOmucm1Zf1uUL0Ghi",

    age:'34'
  };
  case SET_GENDER :
  return {
    username: 'Jack',
    gender: 'male',
    logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_XMk2TA-_5UKRVTHgCoY1ieUplYDslZVNOmucm1Zf1uUL0Ghi",

    age:'34'
  };

  case SET_AGE :
  return {
    username: 'Jack',
    logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_XMk2TA-_5UKRVTHgCoY1ieUplYDslZVNOmucm1Zf1uUL0Ghi",
    gender: 'male',
    age:34
  };
  case SET_LOGO :
  return {
    username: 'Jack',
    logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_XMk2TA-_5UKRVTHgCoY1ieUplYDslZVNOmucm1Zf1uUL0Ghi",
    gender: 'male',
    age:34
  };
 default : return initialState;
}
}

function UserList (){

  const {user,dispatch} = useContext(MyContext);
    return(
    <div>
     <ul>
        <li>
        <span>UserOne :{user.username}</span>
        <br/>
        <img style={{width:120,height:120}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_XMk2TA-_5UKRVTHgCoY1ieUplYDslZVNOmucm1Zf1uUL0Ghi" alt="logo-user"/>
        <br/>
        <button type="button" onClick={()=> {dispatch({type:"UPDATE_USER",username:"jack"})}}>Edit user </button>
          </li>
         </ul>
         </div>
  );
}
function UserDetails(props){
  return(
    <h1>{props.children}</h1>
  )
}

function AddGenderToUser() {
  const { user, dispatch } = useContext(MyContext);
  return (
    <div>
      <h2>Add gender to {user.username}</h2>
      <button
        type="button"
        onClick={() => dispatch({ type: SET_GENDER, gender: "??" })}
      >
        Add Gender
      </button>
    </div>
  );
}
function AddLogoToUser() {
  const { user, dispatch } = useContext(MyContext);
  return (
    <div>
      <h2>Add Logo to {user.username}</h2>
      <button
        type="button"
        onClick={() => dispatch({ type: SET_GENDER, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTiOPg8FzRyxTAzUFMkEf9fnJ9FwZD_KRSul4N1yoDQPgjt2HNp" })}>
        Add Logo
      </button>
      <br/>
    {user.logo != null?   <img style={{width:120,height:120}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTiOPg8FzRyxTAzUFMkEf9fnJ9FwZD_KRSul4N1yoDQPgjt2HNp"/>: null}
      <br/>
    </div>
  );
}
function AddAgeToUser() {
  const { user, dispatch } = useContext(MyContext);
  return (
    <div>
      <h2>Add age to {user.username}</h2>
      <button
        type="button"
        onClick={() => dispatch({ type: SET_AGE, age:"32" })}
      >
        Add Age
      </button>
    </div>
  );
}
function App() {
const [user,dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>User Passing Data</h1>
      <MyContext.Provider value={{user,dispatch}}>
       <p>User list to be updated !</p>
         <UserList/>
         {user.logo && <AddLogoToUser/>}
         {user.gender && <AddGenderToUser/>}
            { <AddAgeToUser/>}
            <p>
          Hello {user.username}, Gender: {user.gender}, Age: {user.age}
        </p>
        <UserDetails>
        <span>Details</span></UserDetails>
    </ MyContext.Provider>
</div>
  );
}







export default App;
