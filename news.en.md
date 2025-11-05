---
layout: page
title: News
subtitle: Latest updates from our department
permalink: /news/
---

Stay informed about the latest news, achievements, and events from the Department of Cybernetics and Robotics.

<!-- markdownlint-disable MD033 -->
<div class="post-list">
{% assign sorted_posts = site.posts | sort: 'date' | reverse %}
{% for post in sorted_posts %}
  <div class="post-card">
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
    <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    <a href="{{ post.url }}">Read more →</a>
  </div>
{% endfor %}
</div>
<!-- markdownlint-enable MD033 -->