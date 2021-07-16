import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchBox() {
  return (
    <div style={{ display: 'flex' }}>
      <input placeholder="Oque procura?" type="text" name="search" />
      <div className="button-background">
        <button>
          <FaSearch />
        </button>
      </div>
    </div>
  );
}
