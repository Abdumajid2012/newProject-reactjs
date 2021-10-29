import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Alice from "./home/Alice";
import Accordion1 from "./home/Accordion1";
import Nav1 from "./home/Nav1";
function App() {
  return (
    <BrowserRouter>
    <div className ="App">
    <Nav1 />
   <Switch>
   <Route exact path="/" component={Alice} />
   <Route exact path="/kurslar" component={Accordion1} />
   </Switch>
 
 </div>
   </BrowserRouter>
  );
}

export default App;
