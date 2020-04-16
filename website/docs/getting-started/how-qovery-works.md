---
last_modified_on: "2020-04-16"
title: "How Qovery works?"
description: "High-level description of how Qovery works."
---

import Jump from '@site/src/components/Jump';

import SVG from 'react-inlinesvg';

<SVG src="/img/components.svg" />

Qovery is a lightweight, ultra-fast, [open-source][urls.qovery_repo] tool for
building observability pipelines. Compared to Logstash and friends, Qovery
[improves throughput by ~10X while significanly reducing CPU and memory
usage][urls.qovery_performance].

### Principles

* **Reliability First.** - Built in [Rust][urls.rust], Qovery's primary design goal is reliability.
* **Single Responsibility.** - Qovery is a _data router_, it does not plan to become a distributed processing framework.

### Who should use Qovery?

* You _SHOULD_ use Qovery to replace Logstash, Fluent*, Telegraf, Beats, or similar tools.
* You _SHOULD_ use Qovery as a Kafka consumer/producer for observability data.
* You _SHOULD_ use Qovery in resource constrained environments (such as devices).
* You _SHOULD NOT_ use Qovery if you need an advanced distributed stream processing framework.
* You _SHOULD NOT_ use Qovery to replace Kafka. Qovery is designed to work with Kafka!
* You _SHOULD NOT_ use Qovery for non-observability data such as analytics data.

### Community

* Qovery is **downloaded over 100,000 times per day**.
* Qovery's largest user **processes over 10TB daily**.
* Qovery is **used by multiple fortune 500 companies** with stringent production requirements.
* Qovery has **over 15 active contributors** and growing.

<Jump to="/guides/getting-started/">Get started</Jump>


[urls.qovery_performance]: https://docs.qovery.com
[urls.qovery_repo]: https://github.com/qovery
[urls.rust]: https://www.rust-lang.org/