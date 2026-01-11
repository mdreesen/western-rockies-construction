'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Info, Eraser } from 'lucide-react';

// --- Types ---
type Product = {
  id: string;
  name: string;
  category: 'floor' | 'railing' | 'lighting';
  imageLayer: string; // URL to transparent PNG layer
  thumbnail: string;
  description: string;
};

// --- Inventory Data ---
const INVENTORY: Product[] = [
  { id: 'cedar-floor', name: 'Western Red Cedar', category: 'floor', imageLayer: '/assets/showroom/canvas-deck.webp', thumbnail: '🟫', description: 'Natural rot-resistant timber.' },
  { id: 'composite-floor', name: 'Slate Grey Composite', category: 'floor', imageLayer: '/layers/floor-composite.png', thumbnail: '⬛', description: 'Low-maintenance durability.' },
  { id: 'cable-rail', name: 'Black Cable Rail', category: 'railing', imageLayer: '/layers/rail-cable.png', thumbnail: '🚥', description: 'Modern, minimalist view.' },
  { id: 'glass-rail', name: 'Alpine Glass', category: 'railing', imageLayer: '/layers/rail-glass.png', thumbnail: '🖼️', description: 'Maximum wind protection.' },
];

export default function DeckShowRoom() {
  // State holds the ID of the selected product for each category
  const [selections, setSelections] = useState<Record<string, string>>({
    floor: 'cedar-floor',
    railing: '',
    lighting: '',
  });

  const toggleProduct = (category: string, id: string) => {
    setSelections((prev) => ({
      ...prev,
      [category]: prev[category] === id ? '' : id,
    }));
  };

  return (
    <section className="max-w-7xl mx-auto p-6 grid lg:grid-cols-3 gap-8 bg-[#1a1c1e] text-white rounded-3xl shadow-2xl overflow-hidden">
      
      {/* 🏔️ Left/Middle: The Interactive Canvas */}
      <div className="lg:col-span-2 relative aspect-[16/10] bg-neutral-900 rounded-2xl overflow-hidden border border-white/10">
        {/* 1. Base Image (The "Skeleton" of the deck) */}
        <img 
          src="/assets/showroom/canvas-deck.webp" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          alt="Deck Base" 
        />

        {/* 2. Dynamic Layers */}
        <AnimatePresence>
          {Object.entries(selections).map(([category, selectedId]) => {
            const product = INVENTORY.find(p => p.id === selectedId);
            if (!product) return null;

            return (
              <motion.img
                key={product.id}
                src={product.imageLayer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover z-10"
                alt={product.name}
              />
            );
          })}
        </AnimatePresence>

        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-xs font-mono tracking-widest uppercase">
          Live Preview: Western Rockies Build v1.0
        </div>
      </div>

      {/* 🛠️ Right: The Control Panel */}
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter italic">BUILD YOUR DECK</h2>
          <p className="text-gray-400 text-sm">Select materials to customize your mountain retreat.</p>
        </div>

        {/* Category: Flooring */}
        <div className="space-y-3">
          <label className="text-xs font-black uppercase text-orange-500">1. Decking Surface</label>
          <div className="grid grid-cols-2 gap-2">
            {INVENTORY.filter(p => p.category === 'floor').map(p => (
              <SelectionCard 
                key={p.id} 
                product={p} 
                isActive={selections.floor === p.id} 
                onClick={() => toggleProduct('floor', p.id)} 
              />
            ))}
          </div>
        </div>

        {/* Category: Railing */}
        <div className="space-y-3">
          <label className="text-xs font-black uppercase text-orange-500">2. Safety & Railing</label>
          <div className="grid grid-cols-2 gap-2">
            {INVENTORY.filter(p => p.category === 'railing').map(p => (
              <SelectionCard 
                key={p.id} 
                product={p} 
                isActive={selections.railing === p.id} 
                onClick={() => toggleProduct('railing', p.id)} 
              />
            ))}
          </div>
        </div>

        <button 
          onClick={() => setSelections({ floor: '', railing: '', lighting: '' })}
          className="mt-auto flex items-center justify-center gap-2 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition-colors text-sm"
        >
          <Eraser size={16} /> Reset Configuration
        </button>
      </div>
    </section>
  );
}

// --- Helper Component: Selection Card ---
function SelectionCard({ product, isActive, onClick }: { product: Product, isActive: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`relative p-3 rounded-xl border-2 text-left transition-all ${
        isActive ? 'border-orange-500 bg-orange-500/10' : 'border-white/10 bg-white/5 hover:bg-white/10'
      }`}
    >
      <div className="flex justify-between items-start mb-1">
        <span className="text-xl">{product.thumbnail}</span>
        {isActive && <Check size={16} className="text-orange-500" />}
      </div>
      <p className="font-bold text-sm leading-tight">{product.name}</p>
      <p className="text-[10px] text-gray-400 mt-1 line-clamp-1">{product.description}</p>
    </button>
  );
}