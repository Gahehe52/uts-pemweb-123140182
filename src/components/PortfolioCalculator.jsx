import { useState, useMemo } from 'react'

function PortfolioCalculator({ coins }) {
  const [selectedCoinId, setSelectedCoinId] = useState('');
  const [amount, setAmount] = useState('');

  const handleCoinChange = (e) => {
    setSelectedCoinId(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const totalValue = useMemo(() => {
    if (!selectedCoinId || !amount) return 0;

    const coin = coins.find(c => c.id === selectedCoinId);
    if (!coin) return 0;

    return coin.current_price * parseFloat(amount);
  }, [selectedCoinId, amount, coins]);

  return (
    <section className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
      <h3 className="text-xl font-bold text-white mb-4">Kalkulator Portfolio</h3>
      
      <div>
        <label htmlFor="coinSelect" className="block text-sm font-medium text-gray-300 mb-1">
          Pilih Koin
        </label>
        <select
          id="coinSelect"
          name="coinSelect"
          value={selectedCoinId}
          onChange={handleCoinChange}
          className="w-full bg-gray-700 border-gray-600 rounded-md p-2 text-white focus:ring-crypto-yellow focus:border-crypto-yellow"
        >
          <option value="">-- Pilih --</option>
          {coins.map(coin => (
            <option key={coin.id} value={coin.id}>
              {coin.name} ({coin.symbol.toUpperCase()})
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-1">
          Jumlah
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={amount}
          onChange={handleAmountChange}
          min="0"
          placeholder="0.00"
          className="w-full bg-gray-700 border-gray-600 rounded-md p-2 text-white focus:ring-crypto-yellow focus:border-crypto-yellow"
        />
      </div>

      <div className="pt-4">
        <p className="text-gray-400">Total Nilai Estimasi:</p>
        <p className="text-3xl font-bold text-crypto-yellow">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(totalValue)}
        </p>
      </div>
    </section>
  );
}

export default PortfolioCalculator;