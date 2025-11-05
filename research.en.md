---
layout: page
title: Research Topics
subtitle: Exploring the frontiers of cybernetics and robotics
permalink: /research/
---

Our department conducts cutting-edge research in various areas of cybernetics and robotics. We collaborate with international research institutions and industry partners to advance the state of the art.

<!-- markdownlint-disable MD033 -->
<div class="research-list">
{% for topic in site.research %}
  <div class="research-card">
    <h3><a href="{{ topic.url }}">{{ topic.title }}</a></h3>
    {% if topic.lead %}
    <p class="lead-researcher">Lead: {{ topic.lead }}</p>
    {% endif %}
    <p>{{ topic.excerpt | strip_html | truncatewords: 30 }}</p>
  </div>
{% endfor %}
</div>
<!-- markdownlint-enable MD033 -->