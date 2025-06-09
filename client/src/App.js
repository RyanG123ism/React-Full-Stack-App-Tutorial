import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'; // Import react-router-dom for routing
import Home from './pages/Home.js'; // Import Home component
import CreatePost from './pages/CreatePost.js'; // Import CreatePost component

function App() {
    return <div className="App"> 
        <Router>
          <Link to = "/createPost">Create a Post</Link>
          <Link to = "/">Home</Link>
            <Routes>
                <Route path="/" exact element ={<Home />}/>
                <Route path="/createPost" exact element ={<CreatePost />}/>
            </Routes>
        </Router>
        </div>
}

export default App;
