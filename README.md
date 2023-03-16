# Nuxt Group Chunks

## A word of caution

**This is a proof of concept.** It is not recommended to use this module in production.

Nuxt effectively groups chunks by routes. Chunks shared between routes are served separately to benefit from browser caching and not add network overhead.

Please perform benchmarks before and after using this module.
