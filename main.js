import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const productGrid = document.getElementById('products');
const modal = document.getElementById('modal');

async function loadProducts() {
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
      <img src="${data.images[0]}" alt="${data.name}" />
      <h3>${data.name}</h3>
      <p>₹${data.price}</p>
    `;
        card.onclick = () => openModal(data);
        productGrid.appendChild(card);
    });
}

function openModal(data) {
    document.getElementById('modal-title').textContent = data.name;
    document.getElementById('modal-price').textContent = `₹${data.price}`;
    const imgContainer = document.getElementById('modal-images');
    imgContainer.innerHTML = '';
    data.images.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        imgContainer.appendChild(img);
    });
    modal.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
}

loadProducts();
window.closeModal = closeModal;