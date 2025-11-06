---
layout: page
title: Faculty Members
subtitle: Meet our distinguished professors and researchers
permalink: /faculty/
lang: en
---

Our department consists of dedicated researchers and educators who are leaders in their fields. Each faculty member brings unique expertise in various areas of cybernetics, robotics, and automation.

<!-- markdownlint-disable MD033 -->
<div class="faculty-list">
{% for member in site.faculty %}
  <div class="faculty-card">
  <h3><a href="{{ member.url }}">{{ member.name }}</a></h3>
    <p class="position">{{ member.position }}</p>
    <p>{{ member.excerpt | strip_html | truncatewords: 30 }}</p>
{% endfor %}
</div>
</div>
<!-- markdownlint-enable MD033 -->