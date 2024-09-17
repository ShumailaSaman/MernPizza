import React, { useState } from 'react';
import Filter from './Filter';

export default function ParentComponent() {
  const [error, setError] = useState('');

  const handleSomeAction = () => {
    // Example logic to set an error
    setError('An error occurred while processing your request.');
  };

  return (
    <div>
      <button onClick={handleSomeAction}>Trigger Error</button>
      {error && <Filter error={error} />}
    </div>
  );
}
