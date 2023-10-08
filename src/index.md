---
title: Half Space Football
layout: base.njk
---

## Posts

{% for post in collections.blog %}
<a href="{{post.url}}">

<article>
  <header>
  <h3>{{ post.data.title }}</h3>
  <h4>{{ post.data.date }}</h4>
  </header>
</article>
<hr>

{%- endfor %}
