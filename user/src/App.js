
import './App.css';
import './style.css'




import { useState } from 'react';
// import RuseEffect from './components/RuseEffect';
// import UseState from './components/UseState';

// import Router from './components/Router';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Pagenotfound from './pages/Pagenotfound';
import Signin from './pages/Signin';
import Signup from  './pages/Signup';
import Cart from './pages/Cart';

function App() {
  let styleobject = {
    backgroundColor: "orange",
    color: "black",
    fontFamily: "cursive",

  };
  const [user, setUser] = useState({ name: "", phone: "" });
  return (
    <div >
      {/* <h1> Greeting from react</h1>
      <h2  style={{color:"red", backgroundColor:"yellow"}}>Inline css in react</h2>
      <h3  style={styleobject}> Internal css in react</h3>
      <h4    className="heading">External css in react </h4>
      <img src={abc}  style={{width:"500px",height:"300px"}} alt="image"/>
      <hr></hr>
      <First />
      <Second/>
      <ArrowFunction/>
      <ArrayMethod/> */}

      {/* <StudentInformation/>
     <hr/>
     <Instagram/> 
     <hr/>
     <Card/>
     <hr></hr>
    < Box/> */}
      {/* <Ternary />
      <hr></hr>
      <Spread />
      <hr />
      <Destructure />
      <hr />
      <OddOrEven />
      <hr /> */}
      {/* <EmployeeInformation /> */}
      < hr />
      {/* <Import />
      <hr/>
      <Basicbutton />
      <hr/>
      <State/>
      <hr/>
      <Second/>
      <hr/>
      <Form setUser={setUser} />
      <hr/>
      <Output user={user} />  
      <hr/>
      <Props/>
      <hr/>
      <Rowdelete/> */}
      <hr />
      {/* <RuseEffect />
      <hr />
      <UseState />
      <hr/>
      <Multiplication />
      <hr/>
      <RegistrationForm/>
     < hr/>
     <Imagelist/>
     
     < hr/>
    //<BasicTable/>
    < hr/>
      <Registrationformtable/> */}
      {/* <State/> */}
      {/* <hr/> */}
     
      {/* <BasicTable/> */}
     <hr/>
     {/* <Router/> */}
     {/* < MultiTypography/> */}
   
     <BrowserRouter>
     <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path="/about"   element={<About/>}/>  
      <Route path="/contact"   element={<Contact/>}/>  
      <Route path="/menu"   element={<Menu/>}/>  
      <Route path="/Signin" element={<Signin/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="*"   element={<Pagenotfound/>}/>    
        
     </Routes>
     </BrowserRouter>
     {/* <Layout>

     <h1>Resturant website</h1>
     </Layout> */}
    
   
    </div>
  );
}

export default App;
