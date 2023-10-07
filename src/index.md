---
title: My First Eleventy Site
layout: base.njk
---

## Macaroon brownie carrot cake

How to make it goes here
Lots of instructions

![alt text](./images/400.png "Title")
![alt text](./images/600.png "Title")
![alt text](./images/800.png "Title")
![alt text](./images/1000.png "Title")
![alt text](./images/1200.png "Title")
![alt text](./images/1400.png "Title")

{% for page in collections.pages %}

- [{{ page.data.title }}]({{page.url}})
  {%- endfor %}
