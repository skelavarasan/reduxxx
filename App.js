import './App.css';
import Welcome from './Welcome';
import { useState } from 'react';
import ExampleComponent from './UseEffect';
import Joker from './UseEffect';
import Rendering from './Rendering';
import Basic from './Basic';
import ToDo from './toDo';
import TodoManager from './TodoManager';
import AsyncAwait from './AsyncAwait';
import JackSon from './JackSon';
import ParentComponent from './ParentComponent';
import Product from './Product1';
import ProductList from './ProductList';
import Desturcturing from './Desturcturing'
import Create from './Employee Details/Create';
import Read from './Employee Details/Read';
import Update from './Employee Details/Update';
import Yahoo from './Yahoo';
import EmployeeManagement from './Employee Details/Create';
import Basics from './Basics';
import Hookz from './Hookz.js'
import RouterExample from './Router/RouterExample';
import RouterBasics from './Router/RouterBasics';
import Routerx from './Router/Routerx';
import Queryx from './Query/Queryx';
import MovieList from './Filter and map/MovieList';
import UserQuery from './Query/UserQuery';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import EmployeeForm from "./EmployeeForm";
import EmployeeDetails from "./EmployeeDetails";
import Routerxx from './Raavuther/Routerxx';
import ConTrol from './ConTrol';
import StyledComponents from './StyledComponents';
import AnimatedButton from './AnimatedButton';
import Counter from './redux basix/counter';
import { Provider } from 'react-redux';
import store from './redux calc/store';
import Calculator from './redux calc/Calculator';
import Counterx from './redux basic/Counterx';
import storex from './redux basic/storex';
import LifecycleExample from './LifecycleExample';



function App() {


  return (
    <div className="App">
      <header className="App-header">
          {/* <Welcome/> */}
          {/* <Joker/> */}
          {/* <Counter/> */}
          {/* <Rendering/> */}
          {/* <Basic/> */}
          {/* <ToDo/>
          <AsyncAwait/> */}
          {/* <JackSon/> */}
          {/* <ParentComponent/> */}
          {/* <ProductList/> */}
          {/* <Desturcturing/> */}
          {/* <Create addEmployee={addEmployee}/> */}
        
          {/* <Update/> */}
          {/* <Yahoo/> */}
          {/* <EmployeeManagement/> 
          <Read employees={employees}/> */}
          {/* <Basics/> */}
          {/* <Hookz/> */}
          {/* <RouterExample/> */}
          {/* <RouterBasics/> */}
          {/* <Routerx/> */}
          {/* <Queryx/> */}
          {/* <UserQuery/> */}
          {/* <Routerxx/> */}
          {/* <ConTrol/> */}
          {/* <StyledComponents/> */}
          {/* <AnimatedButton/> */}

          <LifecycleExample/>
      </header>
    </div>
  );
}

export default App;







// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './storex'; // Import the Redux store from storex.js
// import Counter from './Counterx'; // Import the Counter component from Counterx.js

// function App() {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <Counter /> {/* Use the Counter component here */}
      // </div>
//     </Provider>
//   );
// }

// export default App;
