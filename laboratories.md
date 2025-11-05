---
layout: page
title: Laboratoria
subtitle: Nowoczesne obiekty badawcze
permalink: /laboratories/
---

Nasz wydział jest wyposażony w nowoczesne laboratoria, które wspierają zarówno badania, jak i edukację. Te obiekty zapewniają studentom i badaczom dostęp do najnowocześniejszego sprzętu i technologii.

<!-- markdownlint-disable MD033 -->
<div class="lab-list">
{% if site.active_lang == site.default_lang %}
  {% assign lang_prefix = '' %}
{% else %}
  {% assign lang_prefix = '/' | append: site.active_lang %}
{% endif %}
{% for lab in site.laboratories %}
  <div class="lab-card">
    <h3><a href="{{ lang_prefix }}{{ lab.url }}">{{ lab.title }}</a></h3>
    {% if lab.director %}
    <p class="director">Kierownik: {{ lab.director }}</p>
    {% endif %}
    <p>{{ lab.excerpt | strip_html | truncatewords: 30 }}</p>
  </div>
{% endfor %}
</div>
<!-- markdownlint-enable MD033 -->
