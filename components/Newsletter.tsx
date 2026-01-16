
import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks for joining! We'll reach out to ${email}`);
      setEmail('');
    }
  };

  return (
    <section className="p-8 mt-4 bg-primary/10 rounded-[2.5rem] mx-4 mb-8 text-center border border-primary/5">
      <span className="material-symbols-outlined text-4xl text-primary mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>
        volunteer_activism
      </span>
      <h2 className="text-xl font-bold mb-2">Join the Loop</h2>
      <p className="text-sm text-accent dark:text-gray-400 mb-6">Get early access to limited material drops and upcycling workshops.</p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input 
          className="flex-1 rounded-xl border-none bg-white dark:bg-black/30 text-sm focus:ring-primary h-12 px-4 shadow-sm" 
          placeholder="Email address" 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button 
          type="submit"
          className="bg-black dark:bg-white dark:text-black text-white px-6 h-12 rounded-xl text-sm font-bold shadow-lg active:scale-95 transition-all"
        >
          Join
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
