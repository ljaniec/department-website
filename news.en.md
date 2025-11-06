---
layout: page
title: News
lang: en
permalink: /news/
pagination:
  enabled: true
  per_page: 10
  permalink: '/news/page:num/'
  title: 'News - page :num'
  sort_field: 'date'
  sort_reverse: true
---

{% assign lang_posts = paginator.posts | where: 'lang', 'en' %}

{% if lang_posts and lang_posts.size > 0 %}
	<ul class="post-list">
	{% for post in lang_posts %}
		<li>
			<a href="{{ post.url }}">{{ post.title }}</a>
			<span class="post-meta">{{ post.date | date: "%B %d, %Y" }}</span>
			{% if post.excerpt %}<p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>{% endif %}
		</li>
	{% endfor %}
	</ul>
{% else %}
	<p>No news yet.</p>
{% endif %}

<nav class="pagination" role="navigation">
		{% if paginator.previous_page %}
			<a class="prev" href="{{ paginator.previous_page_path }}">« Newer</a>
		{% endif %}
		{% if paginator.page_trail %}
			{% for trail in paginator.page_trail %}
				<a class="page-number{% if trail.num == paginator.page %} active{% endif %}" href="{{ trail.path }}">{{ trail.num }}</a>
			{% endfor %}
		{% endif %}
		{% if paginator.next_page %}
			<a class="next" href="{{ paginator.next_page_path }}">Older »</a>
		{% endif %}
</nav>
