const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
// create context
const UserContext = React.createContext(null);

function Spa() {
  return (
 <HashRouter>
     <div>
    <h1>Routing - Welcome to Bad Bank</h1>
    <div className="container" style={{padding: "20px"}}>
          <Link to="/">Home</Link> -- 
          <Link to="/about/">About</Link> -- 
          <Link to="/products">Products</Link>
          <hr/>
      <NavBar/>
     <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>   
            <UserContext.Provider value={{users:['peter']}}>
            <Route path="/" exact    component={Home}     />
            <Route path="/about/"    component={About}    />          
            <Route path="/products/" component={Products} />
      <Route path="/" exact component={Home} />
      <Route path="/CreateAccount/" component={CreateAccount} />
      <Route path="/login/" component={Login} />
      <Route path="/deposit/" component={Deposit} />
      <Route path="/withdraw/" component={Withdraw} />
      <Route path="/balance/" component={Balance} />
      <Route path="/alldata/" component={AllData} />
  </UserContext.Provider> 
   </div>                    
    </HashRouter>

  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);


