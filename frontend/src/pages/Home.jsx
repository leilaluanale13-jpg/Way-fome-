function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <header className="bg-orange-600 text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">🍕 Way Fome</h1>
          <p className="text-orange-100 mt-2">Sua comida, nosso caminho!</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">👨‍💼 Para Clientes</h2>
            <p className="text-gray-600">Peça sua comida favorita e receba em casa rapidinho!</p>
            <button className="mt-4 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700">
              Fazer Pedido
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">🏪 Para Restaurantes</h2>
            <p className="text-gray-600">Gerencie seu cardápio e receba pedidos em tempo real.</p>
            <button className="mt-4 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700">
              Cadastre-se
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">🚴‍♂️ Para Entregadores</h2>
            <p className="text-gray-600">Trabalhe como entregador independente e ganhe dinheiro.</p>
            <button className="mt-4 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700">
              Junte-se a Nós
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home