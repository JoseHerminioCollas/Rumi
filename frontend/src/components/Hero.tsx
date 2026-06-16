import React from 'react';
import { Item } from '../App';

export function Hero(filtered: Item[], setOpen: React.Dispatch<React.SetStateAction<Item | null>>) {
  return <section className="hero">
    <div className="hero-image">🪨</div>
    <div className="hero-info">
      <h2>{filtered[0]?.name || 'Featured stone'}</h2>
      <p>
        Origin: {filtered[0]?.properties.mining_concession || '—'} · Artisan:{' '}
        {filtered[0]?.attributes.find((a) => a.trait_type === 'Artisan')?.value || '—'} · Cut:{' '}
        {filtered[0]?.attributes.find((a) => a.trait_type === 'Stone Cut')?.value || '—'}
      </p>
      <div className="hero-actions">
        <button onClick={() => setOpen(filtered[0] || null)}>View Stone</button>
        <button>Buy with RUMI</button>
      </div>
    </div>
  </section>;
}
