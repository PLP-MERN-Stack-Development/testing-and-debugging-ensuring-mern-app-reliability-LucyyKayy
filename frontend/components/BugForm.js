import { useState } from 'react';
import axios from 'axios';

export default function BugForm({ refreshBugs }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/bugs', { title, description });
      setTitle(''); setDescription('');
      refreshBugs();
    } catch (err) {
      console.error(err);
      alert('Error creating bug');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input 
        type="text" value={title} placeholder="Bug title" 
        onChange={e => setTitle(e.target.value)} 
        required className="border p-2 rounded w-full" 
      />
      <textarea 
        value={description} placeholder="Description" 
        onChange={e => setDescription(e.target.value)} 
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Report Bug</button>
    </form>
  );
}
