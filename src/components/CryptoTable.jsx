import { Link } from 'react-router-dom'

const formatCurrency = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(number);
}

const formatPercentage = (number) => {
  return number ? `${number.toFixed(2)}%` : 'N/A';
}

function CryptoTable({ coins, handleRefresh, isLoading }) {
  
  const formatRowData = (coin) => {
    const priceChange = coin.price_change_percentage_24h;
    const changeColor = priceChange > 0 ? 'text-green-500' : 'text-red-500';

    return {
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol.toUpperCase(),
      image: coin.image,
      price: formatCurrency(coin.current_price),
      change: formatPercentage(priceChange),
      changeColor: changeColor,
      marketCap: formatCurrency(coin.market_cap),
    };
  };

  return (
    <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">Daftar Koin</h2>
        <button
          onClick={handleRefresh}
          disabled={isLoading}
          className="bg-yellow-500 text-crypto-dark font-semibold py-2 px-4 rounded-md hover:bg-yellow-400 disabled:bg-gray-500 transition duration-200 flex items-center"
        >
          {isLoading ? 'Memuat...' : 'Refresh Data'}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto text-left">
          <thead className="border-b-2 border-gray-600">
            <tr>
              <th className="p-4 text-crypto-yellow">Koin</th>
              <th className="p-4 text-crypto-yellow">Harga</th>
              <th className="p-4 text-crypto-yellow hidden md:table-cell">24j Perubahan</th>
              <th className="p-4 text-crypto-yellow hidden md:table-cell">Kap. Pasar</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => {
              const data = formatRowData(coin);
              return (
                <tr key={data.id} className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="p-4">
                    <Link to={`/coin/${data.id}`} className="flex items-center space-x-3 group">
                      <img src={data.image} alt={data.name} className="w-8 h-8"/>
                      <div>
                        <p className="font-bold text-white group-hover:text-crypto-yellow">{data.name}</p>
                        <p className="text-gray-400 text-sm">{data.symbol}</p>
                      </div>
                    </Link>
                  </td>
                  <td className="p-4 text-white">{data.price}</td>
                  <td className={`p-4 hidden md:table-cell ${data.changeColor}`}>
                    {data.change}
                  </td>
                  <td className="p-4 text-white hidden md:table-cell">{data.marketCap}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default CryptoTable