---
layout: default
title: The Lifecycle of a Tent
---

<div class="p-4">
  <div class="mb-6">
    <img 
      src="{{ site.baseurl }}/IMG/{{ site.featured_story.image }}" 
      alt="{{ site.featured_story.title }}"
      class="w-full rounded-2xl mb-6" 
    />
    <h1 class="text-3xl font-bold mb-2">{{ site.featured_story.title }}</h1>
    <p class="text-sm font-semibold uppercase tracking-widest text-accent mb-4">{{ site.featured_story.subtitle }}</p>
  </div>

  <div class="prose dark:prose-invert max-w-none">
    <p class="text-lg leading-relaxed mb-4">
      Every tent has a story. From its first adventure in the mountains to its final days, each piece of material carries memories of journeys taken, storms weathered, and moments shared under the stars.
    </p>

    <h2 class="text-2xl font-bold mt-8 mb-4">From Adventure to Waste</h2>
    <p class="text-base leading-relaxed mb-4">
      When a tent reaches the end of its original life, it often finds its way to a landfill. But we see potential where others see waste. Our team carefully deconstructs each tent, salvaging every usable piece of fabric, zippers, and hardware.
    </p>

    <h2 class="text-2xl font-bold mt-8 mb-4">The Transformation</h2>
    <p class="text-base leading-relaxed mb-4">
      Through careful sorting, cleaning, and innovative design, we transform these materials into new products. What was once a tent becomes a backpack, a wallet, or a jacket—each piece carrying forward the spirit of adventure while reducing waste.
    </p>

    <h2 class="text-2xl font-bold mt-8 mb-4">Our Impact</h2>
    <p class="text-base leading-relaxed mb-4">
      This month alone, we've saved <strong class="text-primary">{{ site.impact.tents_saved | number_with_delimiter }} tents</strong> from landfills. Every purchase supports our mission to create a circular economy where nothing goes to waste.
    </p>

    <div class="mt-8 p-6 bg-primary/10 rounded-2xl border border-primary/20">
      <p class="text-center font-bold text-lg mb-2">Join Our Mission</p>
      <p class="text-center text-sm text-accent dark:text-gray-400">
        Every product you buy helps us save more tents and create a more sustainable future.
      </p>
    </div>
  </div>
</div>
