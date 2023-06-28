// A nextjs app page that sais in bold letters
// "Vefsíða í vinnslu. Komið aftur seinna"

import React from 'react';

export default function Page() {
  return (
    // add inline styles for centering the text vertically and horizontally with flex direction in a column
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>Vefsíða í vinnslu</h1>
      <p>Komið aftur seinna</p>
    </div>
  );
}

// Path: app\pages\index.js

// Styles for the index page
