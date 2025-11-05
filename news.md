---
layout: page
title: Aktualności
subtitle: Najnowsze informacje z naszego wydziału
permalink: /news/
---

Bądź na bieżąco z najnowszymi wiadomościami, osiągnięciami i wydarzeniami z Wydziału Cybernetyki i Robotyki.

{% if site.active_lang == site.default_lang %}
  {% assign lang_prefix = '' %}
{% else %}
  {% assign lang_prefix = '/' | append: site.active_lang %}
{% endif %}

<div class="post-list">
{% assign sorted_posts = site.posts | sort: 'date' | reverse %}
{% for post in sorted_posts %}
  <div class="post-card">
    <h3><a href="{{ lang_prefix }}{{ post.url }}">{{ post.title }}</a></h3>
    <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
    <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    <a href="{{ lang_prefix }}{{ post.url }}">Czytaj więcej →</a>
  </div>
{% endfor %}
</div>
