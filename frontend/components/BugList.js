import axios from 'axios';

export default function BugList({ bugs, refreshBugs }) {
  const updateStatus = async (id, status) => {
    await axios.put(`http://localhost:5000/api/bugs/${id}`, { status });
    refreshBugs();
  };

  const deleteBug = async (id) => {
    await axios.delete(`http://localhost:5000/api/bugs/${id}`);
    refreshBugs();
  };

  return (
    <div className="space-y-4">
      {bugs.length === 0 && <p>No bugs reported yet.</p>}
      {bugs.map(bug => (
        <div key={bug._id} className="border p-4 rounded">
          <h3 className="font-bold">{bug.title}</h3>
          <p>{bug.description}</p>
          <p>Status: {bug.status}</p>
          <button onClick={() => updateStatus(bug._id, 'in-progress')} className="mr-2 bg-yellow-400 px-2 py-1 rounded">In Progress</button>
          <button onClick={() => updateStatus(bug._id, 'resolved')} className="mr-2 bg-green-500 px-2 py-1 rounded">Resolved</button>
          <button onClick={() => deleteBug(bug._id)} className="bg-red-500 px-2 py-1 rounded">Delete</button>
        </div>
      ))}
    </div>
  );
}
