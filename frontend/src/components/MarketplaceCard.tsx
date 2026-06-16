// src/components/MarketplaceCard.tsx
import React from 'react';
import { Item } from '../App';

interface MarketplaceCardProps {
  item: Item;
  onClick: (item: Item) => void;
}

const MarketplaceCard: React.FC<MarketplaceCardProps> = ({ item, onClick }) => {
  const artisan = item.attributes.find((a) => a.trait_type === "Artisan")?.value;
  const cut = item.attributes.find((a) => a.trait_type === "Stone Cut")?.value;

  return (
    <div className="card" onClick={() => onClick(item)}>
      <div className="thumb">🪨</div>
      <div className="meta">
        <strong>{item.properties.stone_id}</strong>
        <div>{artisan}</div>
        <div className="badge">{cut}</div>
      </div>
    </div>
  );
};

export default MarketplaceCard;
