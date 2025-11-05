---
layout: page
title: Seminaria
subtitle: Seminaria wydziałowe i zaproszone wykłady
permalink: /seminars/
---

Nasz wydział regularnie organizuje seminaria z udziałem wybitnych badaczy z całego świata, a także prezentacje naszych własnych pracowników i studentów. Wszyscy są mile widziani.

## Nadchodzące Seminaria

<div class="seminar-list">
{% assign future_seminars = site.seminars | sort: 'date' | reverse %}
{% for seminar in future_seminars %}
  <div class="seminar-card">
  <h3><a href="{{ lang_prefix }}{{ seminar.url }}">{{ seminar.title }}</a></h3>
    <p class="speaker">Prelegent: {{ seminar.speaker }}</p>
    <p class="date">{{ seminar.date | date: "%B %d, %Y at %H:%M" }}</p>
    {% if seminar.location %}
    <p class="location">Lokalizacja: {{ seminar.location }}</p>
    {% endif %}
  <a href="{{ lang_prefix }}{{ seminar.url }}">Więcej szczegółów →</a>
  </div>
{% endfor %}
</div>

## Serie Seminariów

Nasz wydział prowadzi regularne serie seminariów:

- **Seminaria Badawcze**: Środy o 14:00, skupiające się na bieżących projektach badawczych
- **Wykłady Gościnne**: Miesięczne zaproszone wykłady przez międzynarodowych ekspertów
- **Seminaria Doktoranckie**: Studenci prezentują swoje bieżące badania

Aby otrzymywać ogłoszenia o seminariach, proszę skontaktować się z biurem wydziału.

{% if site.active_lang == site.default_lang %}
  {% assign lang_prefix = '' %}
{% else %}
  {% assign lang_prefix = '/' | append: site.active_lang %}
{% endif %}
