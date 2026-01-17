---
layout: default
title: Our Impact
---

<div class="p-4">
  <div class="mb-6">
    <h1 class="text-3xl font-bold mb-2">Our Collective Impact</h1>
    <p class="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Making a Difference Together</p>
  </div>

  <!-- Main Impact Card -->
  <div class="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-6 shadow-sm overflow-hidden relative group mb-6">
    <div class="relative z-10">
      <p class="text-sm font-semibold uppercase tracking-widest text-accent mb-1">This Month</p>
      <h2 class="text-4xl font-extrabold tracking-tighter mb-2">{{ site.impact.tents_saved | number_with_delimiter }}</h2>
      <p class="text-lg font-medium leading-tight text-[#111813] dark:text-gray-300">Tents saved from landfills</p>
      <div class="mt-4 flex items-center gap-2 text-primary font-bold">
        <span class="material-symbols-outlined font-bold">trending_up</span>
        <span class="text-sm">+{{ site.impact.percentage_change }}% vs last month</span>
      </div>
    </div>
    <div class="absolute top-0 right-0 p-4 opacity-10 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
      <span class="material-symbols-outlined text-8xl">recycling</span>
    </div>
  </div>

  <!-- Impact Stats Grid -->
  <div class="grid grid-cols-2 gap-4 mb-6">
    <div class="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-4 text-center">
      <span class="material-symbols-outlined text-3xl text-primary mb-2 block">eco</span>
      <p class="text-2xl font-bold mb-1">5,234</p>
      <p class="text-xs text-accent dark:text-gray-400 uppercase tracking-wide">Total Tents Saved</p>
    </div>
    <div class="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-4 text-center">
      <span class="material-symbols-outlined text-3xl text-primary mb-2 block">inventory_2</span>
      <p class="text-2xl font-bold mb-1">892</p>
      <p class="text-xs text-accent dark:text-gray-400 uppercase tracking-wide">Products Created</p>
    </div>
    <div class="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-4 text-center">
      <span class="material-symbols-outlined text-3xl text-primary mb-2 block">groups</span>
      <p class="text-2xl font-bold mb-1">1,456</p>
      <p class="text-xs text-accent dark:text-gray-400 uppercase tracking-wide">Community Members</p>
    </div>
    <div class="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-4 text-center">
      <span class="material-symbols-outlined text-3xl text-primary mb-2 block">local_fire_department</span>
      <p class="text-2xl font-bold mb-1">12.5T</p>
      <p class="text-xs text-accent dark:text-gray-400 uppercase tracking-wide">CO₂ Saved</p>
    </div>
  </div>

  <!-- Impact Story -->
  <div class="prose dark:prose-invert max-w-none mb-6">
    <h2 class="text-2xl font-bold mt-8 mb-4">How We Measure Impact</h2>
    <p class="text-base leading-relaxed mb-4">
      Every tent we save from the landfill represents more than just waste reduction. It's a step toward a circular economy where materials are valued, reused, and transformed into new life.
    </p>

    <h2 class="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
    <p class="text-base leading-relaxed mb-4">
      We're committed to creating sustainable products that don't compromise on quality or style. By upcycling materials that would otherwise end up in landfills, we're building a future where fashion and sustainability go hand in hand.
    </p>

    <h2 class="text-2xl font-bold mt-8 mb-4">Join the Movement</h2>
    <p class="text-base leading-relaxed mb-4">
      Every purchase you make directly contributes to our mission. Together, we can create a more sustainable world, one tent at a time.
    </p>
  </div>

  <!-- Call to Action -->
  <div class="mt-8 p-6 bg-primary/10 rounded-2xl border border-primary/20 text-center">
    <p class="font-bold text-lg mb-2">Be Part of the Change</p>
    <p class="text-sm text-accent dark:text-gray-400 mb-4">
      Shop our upcycled products and help us save more tents from landfills.
    </p>
    <a href="{{ '/' | relative_url }}" class="inline-block bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-white transition-all">
      Explore Products
    </a>
  </div>
</div>
