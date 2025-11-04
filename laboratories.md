---
layout: page
title: Laboratories
subtitle: State-of-the-art research facilities
permalink: /laboratories/
---

Our department is equipped with modern laboratories that support both research and education. These facilities provide students and researchers with access to cutting-edge equipment and technology.

<div class="lab-list">
{% for lab in site.laboratories %}
  <div class="lab-card">
    <h3><a href="{{ lab.url }}">{{ lab.title }}</a></h3>
    {% if lab.director %}
    <p class="director">Director: {{ lab.director }}</p>
    {% endif %}
    <p>{{ lab.excerpt | strip_html | truncatewords: 30 }}</p>
  </div>
{% endfor %}
</div>
