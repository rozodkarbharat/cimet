import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form: React.FC = () => {
  const [imageType, setImageType] = useState('random');
  const [showQueryInput, setShowQueryInput] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [orientation, setOrientation] = useState('landscape');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleImageTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setImageType(selectedValue);
    setShowQueryInput(selectedValue === 'queried');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      imageType,
      query,
      quantity,
      orientation,
    };

    navigate('/generatedimage', { state: formData });
  };

  return (
    <form
      className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg max-w-lg w-full backdrop-blur-md border border-white border-opacity-30"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label className="block text-gray-100 text-sm font-bold mb-2">
          Select Image Type
        </label>
        <select
          value={imageType}
          onChange={handleImageTypeChange}
          className="w-full p-2 border rounded-lg bg-white bg-opacity-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="random">Generate random image</option>
          <option value="queried">Generate queried image</option>
        </select>
      </div>

      {showQueryInput && (
        <div className="mb-4">
          <label className="block text-gray-100 text-sm font-bold mb-2">
            Enter Query
          </label>
          <input
            type="text"
            placeholder="Enter your image query..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-2 border rounded-lg bg-white bg-opacity-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      )}

      <div className="mb-4">
        <label className="block text-gray-100 text-sm font-bold mb-2">
          Quantity
        </label>
        <input
          type="number"
          placeholder="Enter quantity..."
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full p-2 border rounded-lg bg-white bg-opacity-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-100 text-sm font-bold mb-2">
          Select Image Orientation
        </label>
        <select
          value={orientation}
          onChange={(e) => setOrientation(e.target.value)}
          className="w-full p-2 border rounded-lg bg-white bg-opacity-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="landscape">Landscape</option>
          <option value="portrait">Portrait</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white p-3 rounded-lg font-bold hover:bg-indigo-600 transition"
        >
          Generate Images
        </button>
      </div>
    </form>
  );
};

export default Form;
