import './Products.css'

function Products() {
  const products = [
    { name: 'Wireless Headphones', category: 'Electronics', units: 342, revenue: '₹4.82 L', stock: 'In Stock' },
    { name: 'Smart Watch', category: 'Electronics', units: 286, revenue: '₹3.96 L', stock: 'In Stock' },
    { name: 'Premium T-Shirt', category: 'Fashion', units: 251, revenue: '₹2.74 L', stock: 'Low Stock' },
    { name: 'Running Shoes', category: 'Fashion', units: 198, revenue: '₹2.31 L', stock: 'In Stock' },
  ]

  return (
    <div className="products-page">

      <div className="products-header">
        <div>
          <h1>Products</h1>
          <p>Track product performance, sales and inventory</p>
        </div>

        <button className="add-product-btn">
          + Add Product
        </button>
      </div>

      <section className="product-stats">

        <div className="product-stat-card">
          <span>Total Products</span>
          <strong>486</strong>
          <small>Across all categories</small>
        </div>

        <div className="product-stat-card">
          <span>Best Seller</span>
          <strong>Headphones</strong>
          <small>342 units sold</small>
        </div>

        <div className="product-stat-card">
          <span>Low Stock</span>
          <strong>18</strong>
          <small className="warning-text">Needs attention</small>
        </div>

        <div className="product-stat-card">
          <span>Product Revenue</span>
          <strong>₹24.8 L</strong>
          <small className="positive-text">↑ 14.2% this month</small>
        </div>

      </section>

      <section className="products-card">

        <div className="products-card-header">
          <div>
            <h3>Top Products</h3>
            <p>Best performing products by sales</p>
          </div>

          <button className="product-filter">
            All Categories ▾
          </button>
        </div>

        <div className="products-table">

          <div className="products-table-header">
            <span>Product</span>
            <span>Category</span>
            <span>Units Sold</span>
            <span>Revenue</span>
            <span>Stock</span>
          </div>

          {products.map((product, index) => (
            <div className="products-table-row" key={product.name}>

              <div className="product-name">
                <div className="product-number">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <strong>{product.name}</strong>
              </div>

              <span>{product.category}</span>

              <span>{product.units}</span>

              <strong>{product.revenue}</strong>

              <span
                className={
                  product.stock === 'Low Stock'
                    ? 'stock-status low'
                    : 'stock-status'
                }
              >
                {product.stock}
              </span>

            </div>
          ))}

        </div>

      </section>

    </div>
  )
}

export default Products