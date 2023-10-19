import Todo from'./components/todo'




function App() {
  return (
    <div className='container border border-primary rounded mt-5'
    style={{
      
      background:'url(https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
      backgroundSize:'cover'
    }}>

    <Todo/>

    </div>
  );
}

export default App;
