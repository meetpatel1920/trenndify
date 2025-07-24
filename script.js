db.ref('products').on('value', (snap) => {
    const data = snap.val();
    const productsDiv = document.getElementById("products");
    productsDiv.innerHTML = '';

    for (let id in data) {
        const p = data[id];
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
      <img src="${p.image}" />
      <h3>${p.name}</h3>
      <p>₹ ${p.price}</p>
      <button onclick="location.href='product.html?id=${id}'">View</button>
    `;
        productsDiv.appendChild(card);
    }
});
