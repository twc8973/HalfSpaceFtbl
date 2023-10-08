---
title: Half Space Football
layout: base.njk
---

<div class="mt-3">
  {% for post in collections.blog %}
  <div class="mt-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ post.data.title }}</h5>
        <p class="card-text">{{post.date | asPostDate}}</p>
            <a href="{{post.url}}" class="btn btn-primary">Read</a>
      </div>
    </div>

  </div>
{%- endfor %}

</div>
