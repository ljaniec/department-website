---
layout: page
title: Tematy Badań
subtitle: Odkrywanie granic cybernetyki i robotyki
permalink: /research/
---

Nasz wydział prowadzi najnowocześniejsze badania w różnych obszarach cybernetyki i robotyki. Współpracujemy z międzynarodowymi instytucjami badawczymi i partnerami z przemysłu, aby posunąć stan wiedzy naprzód.

<div class="research-list">
{% if site.active_lang == site.default_lang %}
  {% assign lang_prefix = '' %}
{% else %}
  {% assign lang_prefix = '/' | append: site.active_lang %}
{% endif %}

{% for topic in site.research %}
  <div class="research-card">
    <h3><a href="{{ lang_prefix }}{{ topic.url }}">{{ topic.title }}</a></h3>
    {% if topic.lead %}
    <p class="lead-researcher">Kierownik: {{ topic.lead }}</p>
    {% endif %}
    <p>{{ topic.excerpt | strip_html | truncatewords: 30 }}</p>
  </div>
{% endfor %}
</div>
