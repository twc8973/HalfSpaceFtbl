---
title: Half Space Football
layout: base.njk
---

## Posts

{% for post in collections.blog %}

- [{{ post.data.title }}]({{post.url}})
  {%- endfor %}
