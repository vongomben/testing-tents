---
layout: default
title: Jackets
permalink: /categories/jackets/
---

<div class="p-4">
  <h1 class="text-3xl font-bold mb-2">Jackets</h1>
  <p class="text-accent mb-6">Explore our collection of upcycled jackets</p>

  <div class="grid grid-cols-2 gap-4">
    {% assign jackets_products = site.products | where: "category", "jacket" %}
    {% for product in jackets_products %}
    <div class="group cursor-pointer">
      <a href="{{ product.url }}">
        <div class="relative aspect-[3/4] rounded-2xl overflow-hidden mb-3">
          <img 
            src="{{ '/IMG/' | relative_url }}{{ product.image }}" 
            alt="{{ product.title }}"
            class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" 
          />
          {% if product.is_limited %}
          <div class="absolute bottom-3 left-3 bg-primary text-black text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
            Limited Edition
          </div>
          {% endif %}
        </div>
        <h3 class="font-bold text-base truncate">{{ product.title }}</h3>
        <div class="flex items-center justify-between mt-1">
          <p class="text-sm text-accent">{{ product.material }}</p>
          <p class="font-bold text-primary">${{ product.price }}</p>
        </div>
      </a>
    </div>
    {% endfor %}
  </div>

  {% if jackets_products.size == 0 %}
  <div class="text-center py-12">
    <p class="text-accent dark:text-gray-400">No products found in this category.</p>
  </div>
  {% endif %}
</div>
