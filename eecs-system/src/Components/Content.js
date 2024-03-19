// Content.js
import React from 'react';

function Content({ selectedItem }) {
  return (
    <div>
      {selectedItem && (
        <div>
          <h2>{selectedItem}</h2>
          {/* Render content based on selected item */}
        </div>
      )}
    </div>
  );
}

export default Content;
