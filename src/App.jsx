import { useState } from 'react';

function App() {
  const [catData, setCatData]   = useState(null);
  const [banList,  setBanList]  = useState([]);

  const fetchCat = async () => {
    try {
      let cat, breedName;

      do {
        const res  = await fetch(
          'https://api.thecatapi.com/v1/images/search?has_breeds=1',
          { headers: { 'x-api-key': 'DEMO-API-KEY' } }
        );
        cat        = (await res.json())[0];
        breedName  = cat?.breeds?.[0]?.name;
        console.log('API result:', breedName);
      } while (!breedName || banList.includes(breedName));

      const breed = cat.breeds[0];
      const newData = {
        image: cat.url,
        name: breed.name,
        origin: breed.origin,
        temperament: breed.temperament,
      };
      setCatData(newData);
    } catch (err) { console.error(err); }
  };


  const addToBan = (value) => {
    if (!banList.includes(value)) setBanList([...banList, value]);
  };
  const removeFromBan = (value) => {
    setBanList(banList.filter((v) => v !== value));
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: 40 }}>
      <h1 style={{ fontSize: '3rem' }}>Veni Vici</h1>
      <button onClick={fetchCat} style={{ fontSize: 16, padding: '8px 20px' }}>
        Discover
      </button>

      {/* ─ Ban list UI ─ */}
      {banList.length > 0 && (
        <div style={{ marginTop: 25 }}>
          <h3>Ban List</h3>
          {banList.map((item) => (
            <span
              key={item}
              onClick={() => removeFromBan(item)}
              style={{
                display: 'inline-block',
                margin: '4px 6px',
                padding: '4px 10px',
                borderRadius: 12,
                background: '#c0392b',
                color: '#fff',
                cursor: 'pointer',
                fontSize: 14,
              }}
            >
              {item} ✕
            </span>
          ))}
        </div>
      )}

      {/* ─ Current cat ─ */}
      {catData && (
        <div style={{ marginTop: 30 }}>
          <img
            src={catData.image}
            alt={catData.name}
            width="300"
            style={{ borderRadius: 8 }}
          />

          {/* Name is clickable ⇒ add to ban list */}
          <p
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
            title="Click to ban this breed"
            onClick={() => addToBan(catData.name)}
          >
            <strong>Name:</strong> {catData.name}
          </p>

          <p><strong>Origin:</strong> {catData.origin}</p>
          <p><strong>Temperament:</strong> {catData.temperament}</p>
        </div>
      )}
    </div>
  );
}

export default App;
