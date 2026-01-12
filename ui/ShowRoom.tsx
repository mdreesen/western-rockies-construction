'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Info, Eraser, } from 'lucide-react';

// --- Types ---
type Product = {
  id: string;
  name: string;
  category: 'floor' | 'railing' | 'lighting' | 'overhang';
  imageLayer: string; // URL to transparent PNG layer
  description: string;
};

// --- Inventory Data ---
const INVENTORY: Product[] = [
  { id: 'deck_cedar', name: 'Western Red Cedar', category: 'floor', imageLayer: '/assets/showroom/deck_cedar.webp', description: 'Natural rot-resistant timber.' },
  { id: 'deck_composite', name: 'Slate Grey Composite', category: 'floor', imageLayer: '/assets/showroom/deck_composite.webp', description: 'Low-maintenance durability.' },
  { id: '_blackrail', name: 'Black Cable Rail', category: 'railing', imageLayer: '/assets/showroom/deck_composite_blackrail.webp', description: 'Modern, minimalist view.' },
  { id: '_cedarrail', name: 'Cedar Rail', category: 'railing', imageLayer: '/assets/showroom/deck_composite_blackrail.webp', description: 'Modern, minimalist view.' },
  { id: '_glassrail', name: 'Alpine Glass', category: 'railing', imageLayer: '/assets/showroom/deck_composite_glassrail.webp', description: 'Maximum wind protection.' },
  { id: '_overhang', name: 'Over hang', category: 'overhang', imageLayer: '/assets/showroom/deck_composite_glassrail_overhang.webp', description: 'Sun protection and minimal element protection.' },
];

export default function DeckShowRoom() {
  // State holds the ID of the selected product for each category
  const [selections, setSelections] = useState<Record<string, string>>({
    floor: 'deck_cedar',
    railing: '',
    lighting: '',
  });

  const toggleProduct = (category: string, id: string) => {
    setSelections((prev) => ({
      ...prev,
      [category]: prev[category] === id ? '' : id,
    }));
  };

  /*
  
  Falls in line with trex colors and names
  
  Show the warenties

  

  */

  return (
    <section className="max-w-7xl mx-auto p-2 grid lg:grid-cols-3 gap-8 text-white overflow-hidden">

      {/* 🏔️ Left/Middle: The Interactive Canvas */}
      <div className="bg-white lg:col-span-2 relative aspect-16/10 rounded-lg verflow-hidden border border-white/10">
        {/* 1. Base Image (The "Skeleton" of the deck) */}
        <img
          src="/assets/showroom/deck_cedar.webp"
          className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-lg"
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
                src={`/assets/showroom/${selections.floor}${selections.railing ?? ''}${selections.overhang ?? ''}.webp`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover z-10 rounded-lg"
                alt={product.name}
              />
            );
          })}
        </AnimatePresence>

        {/* <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-xs font-mono tracking-widest uppercase">
          Live Preview: Western Rockies Build v1.0
        </div> */}
      </div>

      {/* 🛠️ Right: The Control Panel */}
      <div className="bg-[#1a1c1e] flex flex-col gap-6 p-4 rounded-lg">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter italic">BUILD YOUR DECK</h2>
          <p className="text-gray-400 text-sm">Select materials to customize your mountain retreat.</p>
        </div>

        {/* Category: Flooring */}
        <div className="space-y-3">
          <label className="text-xs font-black uppercase text-[#4F714D]">1. Decking Surface</label>
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
          <label className="text-xs font-black uppercase text-[#4F714D]">2. Safety & Railing</label>
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

        {/* Category: Overhang */}
        <div className="space-y-3">
          <label className="text-xs font-black uppercase text-[#4F714D]">2. Safety & Railing</label>
          <div className="grid grid-cols-2 gap-2">
            {INVENTORY.filter(p => p.category === 'overhang').map(p => (
              <SelectionCard
                key={p.id}
                product={p}
                isActive={selections.overhang === p.id}
                onClick={() => toggleProduct('overhang', p.id)}
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
      className={`relative p-3 rounded-xl border-2 text-left transition-all ${isActive ? 'border-[#4F714D] bg-[#4F714D]/10' : 'border-white/10 bg-white/5 hover:bg-white/10'
        }`}
    >
      <div className="flex justify-between items-start mb-1">
        {/* <span className="text-xl">{product.thumbnail}</span> */}
        {isActive && <Check size={16} className="text-[#4F714D]" />}
      </div>
      <p className="font-bold text-sm leading-tight">{product.name}</p>
      <p className="text-[10px] text-gray-400 mt-1 line-clamp-1">{product.description}</p>
    </button>
  );
}