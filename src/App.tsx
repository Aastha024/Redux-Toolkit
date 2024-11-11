import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './reduxtoolkit/store'; // Import the RootState type from your store
import { fetchUsers, increment, decrement } from './reduxtoolkit/userSlice';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Select the state from Redux store, with appropriate types
  const { users, loading, error, counter } = useSelector(
    (state: RootState) => state.user
  );

  // Fetch users when the component mounts
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="App">
      {loading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      <div>
        <h2>Users:</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      </div>

      {/* Increment and decrement */}
      <div>
        <h3>Counter: {counter}</h3>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
