---
layout: page
title: Seminars
subtitle: Department seminars and invited talks
permalink: /seminars/
---

Our department regularly hosts seminars featuring distinguished researchers from around the world, as well as presentations by our own faculty and students. All are welcome to attend.

## Upcoming Seminars

<div class="seminar-list">
{% assign future_seminars = site.seminars | sort: 'date' | reverse %}
{% for seminar in future_seminars %}
  <div class="seminar-card">
    <h3><a href="{{ seminar.url }}">{{ seminar.title }}</a></h3>
    <p class="speaker">Speaker: {{ seminar.speaker }}</p>
    <p class="date">{{ seminar.date | date: "%B %d, %Y at %H:%M" }}</p>
    {% if seminar.location %}
    <p class="location">Location: {{ seminar.location }}</p>
    {% endif %}
    <a href="{{ seminar.url }}">More details →</a>
  </div>
{% endfor %}
</div>

## Seminar Series

Our department runs regular seminar series:

- **Research Seminars**: Wednesdays at 14:00, focusing on current research projects
- **Guest Lectures**: Monthly invited talks by international experts
- **Ph.D. Seminars**: Students present their ongoing research

To receive seminar announcements, please contact the department office.
