import { useState } from 'react'

function PriceFilter({ setFilters }) {
  const [inputs, setInputs] = useState({
    search: '',
    minPrice: '',
    maxPrice: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilters(inputs);
  };

  return (
    <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div className="md:col-span-2">
          <label htmlFor="search" className="block text-sm font-medium text-gray-300 mb-1">
            Cari Koin
          </label>
          <input
            type="text"
            name="search"
            id="search"
            value={inputs.search}
            onChange={handleChange}
            placeholder="Contoh: Bitcoin"
            className="w-full bg-gray-700 border-gray-600 rounded-md p-2 text-white focus:ring-crypto-yellow focus:border-crypto-yellow"
          />
        </div>

        <div>
          <label htmlFor="minPrice" className="block text-sm font-medium text-gray-300 mb-1">
            Harga Min ($)
          </label>
          <input
            type="number"
            name="minPrice"
            id="minPrice"
            value={inputs.minPrice}
            onChange={handleChange}
            min="0"
            step="0.01"
            placeholder="0"
            className="w-full bg-gray-700 border-gray-600 rounded-md p-2 text-white focus:ring-crypto-yellow focus:border-crypto-yellow"
          />
        </div>

        <div>
          <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-300 mb-1">
            Harga Max ($)
          </label>
          <input
            type="number"
            name="maxPrice"
            id="maxPrice"
            value={inputs.maxPrice}
            onChange={handleChange}
            min="0"
            step="0.01"
            placeholder="100000"
            className="w-full bg-gray-700 border-gray-600 rounded-md p-2 text-white focus:ring-crypto-yellow focus:border-crypto-yellow"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-crypto-yellow text-crypto-dark font-bold py-2 px-4 rounded-md hover:bg-yellow-300 transition duration-200 md:col-start-4">
          Filter
        </button>
      </form>
    </section>
  );
}

export default PriceFilter;