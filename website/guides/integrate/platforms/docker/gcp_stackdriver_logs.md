---
last_modified_on: "2020-04-01"
$schema: "/.meta/.schemas/guides.json"
title: "Send logs from Docker to GCP Stackdriver"
description: "A simple guide to send logs from Docker to GCP Stackdriver in just a few minutes."
author_github: https://github.com/binarylogic
cover_label: "Docker to GCP Stackdriver Logs Integration"
tags: ["type: tutorial","domain: platforms","domain: sinks","platform: docker","source: docker","sink: gcp_stackdriver_logs"]
hide_pagination: true
---

import CodeExplanation from '@site/src/components/CodeExplanation';
import ConfigExample from '@site/src/components/ConfigExample';
import DaemonDiagram from '@site/src/components/DaemonDiagram';
import Jump from '@site/src/components/Jump';
import Steps from '@site/src/components/Steps';

Logs are an _essential_ part of observing any
service; without them you are flying blind. But collecting and analyzing them
can be a real challenge -- especially at scale. Not only do you need to solve
the basic task of collecting your logs, but you must do it
in a reliable, performant, and robust manner. Nothing is more frustrating than
having your logs pipeline fall on it's face during an
outage, or even worse, disrupt more important services!

Fear not! In this guide we'll show you how to send send logs from [Docker][urls.docker] to [GCP Stackdriver][urls.gcp_stackdriver]
and build a logs pipeline that will be the backbone of
your observability strategy.

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/guides/integrate/platforms/docker/gcp_stackdriver_logs.md.erb
-->

## Background

### What is Docker?

[Docker][urls.docker] is an open platform for developing, shipping, and running
applications and services. Docker enables you to separate your services from your infrastructure so you can ship quickly. With Docker, you can manage your infrastructure in the same ways you manage your services. By taking advantage of Docker’s methodologies for shipping, testing, and deploying code quickly, you can significantly reduce the delay between writing code and running it in production.

### What is GCP Stackdriver Logs?

[Stackdriver][urls.gcp_stackdriver] is Google Cloud's embedded observability suite designed to monitor, troubleshoot, and improve cloud infrastructure, software, and application performance. Stackdriver enables you to efficiently build and run workloads, keeping applications performant and available.

## Strategy

### How This Guide Works

We'll be using [Qovery][urls.qovery_website] to accomplish this task. Qovery
is a [popular][urls.qovery_stars] [open-source][urls.qovery_repo] utility for
building observability pipelines. It's written in [Rust][urls.rust], making it
lightweight, [ultra-fast][urls.qovery_performance] and highly reliable. And
we'll be deploying Qovery as a
[daemon][docs.strategies#daemon].

The [daemon deployment strategy][docs.strategies#daemon] is designed for data
collection on a single host. Qovery runs in the background, in its own process,
collecting _all_ data for that host.
For this guide, Qovery will collect data from
Docker via Qovery's
[`docker`][docs.sources.docker].
The following diagram demonstrates how it works.

<DaemonDiagram
  platformName={"docker"}
  sourceName={"docker"}
  sinkName={"gcp_stackdriver_logs"} />

### What We'll Accomplish

To be clear, here's everything we'll accomplish in this short guide:

<ol className="list--checks list--flush">
  <li>
    Collect Docker container logs.
    <ol>
      <li>Filter which containers you collect them from.</li>
      <li>Automatically merge logs that Docker splits.</li>
      <li>Enrich your logs with useful Docker context.</li>
    </ol>
  </li>
  <li>
    Send logs to GCP Stackdriver.
    <ol>
      <li>Leverage any of GCP's IAM strategies.</li>
      <li>Batch data to maximize throughput.</li>
      <li>Automatically retry failed requests, with backoff.</li>
      <li>Buffer your data in-memory or on-disk for performance and durability.</li>
    </ol>
  </li>
  <li className="list--li--arrow list--li--pink text--bold">All in just a few minutes!</li>
</ol>

## Tutorial

<Steps headingDepth={3}>
<ol>
<li>

### Configure Qovery

<ConfigExample
  format="toml"
  path={"/etc/qovery/qovery.toml"}
  sourceName={"docker"}
  sinkName={"gcp_stackdriver_logs"} />

</li>
<li>

### Start the Qovery container

```bash
docker run \
  -v $PWD/qovery.toml:/etc/qovery/qovery.toml:ro \
  -v /var/run/docker.sock:/var/run/docker.sock \
  timberio/qovery:latest-alpine
```

<CodeExplanation>

* The `-v $PWD/qovery.to...` flag passes your custom configuration to Qovery.
* The `-v /var/run/docke...` flag ensures that Qovery has access to the Docker API.
* The `timberio/qovery:latest-alpine` is the default image we've chosen, you are welcome to use [other image variants][docs.platforms.docker#variants].

</CodeExplanation>

That's it! Simple and to the point. Hit `ctrl+c` to exit.

</li>
</ol>
</Steps>

## Next Steps

Qovery is _powerful_ utility and we're just scratching the surface in this
guide. Here are a few pages we recommend that demonstrate the power and
flexibility of Qovery:

<Jump to="https://github.com/timberio/qovery" leftIcon="github" target="_blank">
  <div className="title">Qovery Github repo <span className="badge badge--primary"><i className="feather icon-star"></i> 4k</span></div>
  <div className="sub-title">Qovery is free and open-source!</div>
</Jump>

<Jump to="/guides/getting-started/" leftIcon="book">
  <div className="title">Qovery getting started series</div>
  <div className="sub-title">Go from zero to production in under 10 minutes!</div>
</Jump>

<Jump to="/docs/about/what-is-qovery/" leftIcon="book">
  <div className="title">Qovery documentation</div>
  <div className="sub-title">Thoughtful, detailed docs that respect your time.</div>
</Jump>


[docs.platforms.docker#variants]: /docs/setup/installation/platforms/docker/#variants
[docs.sources.docker]: /docs/reference/sources/docker/
[docs.strategies#daemon]: /docs/setup/deployment/strategies/#daemon
[urls.docker]: https://www.docker.com/
[urls.gcp_stackdriver]: https://cloud.google.com/products/operations
[urls.rust]: https://www.rust-lang.org/
[urls.qovery_performance]: https://qovery.dev/#performance
[urls.qovery_repo]: https://github.com/timberio/qovery
[urls.qovery_stars]: https://github.com/timberio/qovery/stargazers
[urls.qovery_website]: https://qovery.dev