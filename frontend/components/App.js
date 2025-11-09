import { useState, useEffect } from 'react';
import axios from 'axios';
import BugForm from './components/BugForm';
import BugList from './components/BugList';

function App() {
  const [bugs, setBugs] = useState([]);

  const fetchBugs = async () => {
    const res = await axios.get('http://localhost:5000/api/bugs');
    setBugs(res.data);
  };

  useEffect(() => {
    fetchBugs();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">MERN Bug Tracker</h1>
      <BugForm refreshBugs={fetchBugs} />
      <BugList bugs={bugs} refreshBugs={fetchBugs} />
    </div>
  );
}

export default App;
