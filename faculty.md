---
layout: page
title: Członkowie Wydziału
subtitle: Poznaj naszych wybitnych profesorów i badaczy
permalink: /faculty/
---

Nasz wydział składa się z poświęconych badaczy i edukatorów, którzy są liderami w swoich dziedzinach. Każdy członek wydziału wnosi unikalną wiedzę specjalistyczną w różnych obszarach cybernetyki, robotyki i automatyki.

{% if site.active_lang == site.default_lang %}
  {% assign lang_prefix = '' %}
{% else %}
  {% assign lang_prefix = '/' | append: site.active_lang %}
{% endif %}

<!-- markdownlint-disable MD033 -->
<div class="faculty-list">
{% for member in site.faculty %}
  <div class="faculty-card">
  <h3><a href="{{ lang_prefix }}{{ member.url }}">{{ member.name }}</a></h3>
    <p class="position">{{ member.position }}</p>
    <p>{{ member.excerpt | strip_html | truncatewords: 30 }}</p>
{% endfor %}
</div>
</div>
<!-- markdownlint-enable MD033 -->
