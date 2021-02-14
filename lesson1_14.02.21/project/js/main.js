const goods = [
    { title: 'Ноутбук', price: 30000 },
    { title: 'Клавиатура', price: 1000 },
    { title: 'Мышь', price: 500 },
    { title: 'Монитор', price: 10000 },
    { title: 'Колонки', price: 2400 },
  ];

  const renderGoodsItem = (title, price) => {
      return `
        <div class="item">
          <h4 class="item__title">${title}</h4>
          <p class="item__price">Цена: ${price}</p>
        </div>
      `;
  }

  const renderGoods = (list) => {
    const goodsList = list.map(item => renderGoodsItem(item.title, item.price)).join('');
    document.querySelector('.goods').innerHTML = goodsList;
  }

  renderGoods(goods);
