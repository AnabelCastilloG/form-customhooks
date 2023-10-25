import React from 'react';

const Searcher = ({ inputValue, setInputValue }) => {
  const onInputChange = (e) => setInputValue(e.target.value);

  return (
    <input
      type="text"
      value={inputValue}
      onChange={onInputChange}
      placeholder="Nombre pokemon..."
    />
  );
};

export default Searcher;
