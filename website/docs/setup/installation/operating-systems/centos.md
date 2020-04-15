---
last_modified_on: "2020-04-01"
title: Install Qovery On CentOS
sidebar_label: CentOS
description: Install Qovery on CentOS
---

import CodeExplanation from '@site/src/components/CodeExplanation';
import ConfigExample from '@site/src/components/ConfigExample';
import DaemonDiagram from '@site/src/components/DaemonDiagram';
import InstallationCommand from '@site/src/components/InstallationCommand';
import Steps from '@site/src/components/Steps';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This document will cover installing Qovery on CentOS.

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/docs/setup/installation/operating-systems/centos.md.erb
-->

## Install

<Tabs
  block={true}
  defaultValue="daemon"
  values={[{"label":"As a Daemon","value":"daemon"}]}>
<TabItem value="daemon">

The [daemon deployment strategy][docs.strategies#daemon] is designed for data
collection on a single host. Qovery runs in the background, in its own process,
collecting _all_ data for that host.
Typically data is collected from a process manager, such as Journald via
Qovery's [`journald` source][docs.sources.journald], but can be collected
through any of Qovery's [sources][docs.sources].
The following diagram demonstrates how it works.

<DaemonDiagram
  platformName={null}
  sourceName={null}
  sinkName={null} />

---

<Tabs
  centered={true}
  className={"rounded"}
  defaultValue={"rpm"}
  placeholder="Please choose an installation method..."
  select={false}
  size={null}
  values={[{"group":"Package managers","label":"RPM","value":"rpm"},{"group":"Nones","label":"Qovery CLI","value":"qovery-cli"},{"group":"Platforms","label":"Docker CLI","value":"docker-cli"},{"group":"Platforms","label":"Docker Compose","value":"docker-compose"}]}>
<TabItem value="rpm">

<Steps headingDepth={3}>
<Tabs
  centered={true}
  className="rounded"
  defaultValue="arm64"
  values={[{"label":"ARM64","value":"arm64"},{"label":"ARMv7","value":"armv7"},{"label":"x86_64","value":"x86_64"}]}>

<TabItem value="arm64">

1.  ### Download the Qovery `.rpm` file

    ```bash
    curl -O https://packages.timber.io/qovery/0.8.X/qovery-aarch64.rpm
    ```

    [Looking for a specific version?][docs.package_managers.rpm#versions]

2.  ### Install the Qovery `.rpm` package directly

    ```bash
    sudo rpm -i qovery-aarch64.rpm
    ```

3.  ### Configure Qovery

    <ConfigExample
      format="toml"
      path={"/etc/qovery/qovery.toml"}
      sourceName={"journald"}
      sinkName={null} />

4.  ### Start Qovery

    ```bash
    sudo systemctl start qovery
    ```

</TabItem>
<TabItem value="armv7">

1.  ### Download the Qovery `.rpm` file

    ```bash
    curl -O https://packages.timber.io/qovery/0.8.X/qovery-armv7hl.rpm
    ```

    [Looking for a specific version?][docs.package_managers.rpm#versions]

2.  ### Install the Qovery `.rpm` package directly

    ```bash
    sudo rpm -i qovery-armv7hl.rpm
    ```

3.  ### Configure Qovery

    <ConfigExample
      format="toml"
      path={"/etc/qovery/qovery.toml"}
      sourceName={"journald"}
      sinkName={null} />

4.  ### Start Qovery

    ```bash
    sudo systemctl start qovery
    ```

</TabItem>
<TabItem value="x86_64">

1.  ### Download the Qovery `.rpm` file

    ```bash
    curl -O https://packages.timber.io/qovery/0.8.X/qovery-x86_64.rpm
    ```

    [Looking for a specific version?][docs.package_managers.rpm#versions]

2.  ### Install the Qovery `.rpm` package directly

    ```bash
    sudo rpm -i qovery-x86_64.rpm
    ```

3.  ### Configure Qovery

    <ConfigExample
      format="toml"
      path={"/etc/qovery/qovery.toml"}
      sourceName={"journald"}
      sinkName={null} />

4.  ### Start Qovery

    ```bash
    sudo systemctl start qovery
    ```

</TabItem>
</Tabs>
</Steps>

</TabItem>
<TabItem value="qovery-cli">

<Steps headingDepth={3}>
<ol>
<li>

### Install Qovery

<InstallationCommand />

</li>
<li>

### Configure Qovery

<ConfigExample
  format="toml"
  path={"qovery.toml"}
  sourceName={"journald"}
  sinkName={null} />

</li>
<li>

### Start Qovery

```bash
qovery --config qovery.toml
```

That's it! Simple and to the point. Hit `ctrl+c` to exit.

</li>
</ol>
</Steps>

</TabItem>
<TabItem value="docker-cli">

<Steps headingDepth={3}>
<ol>
<li>

### Configure Qovery

<ConfigExample
  format="toml"
  path={"/etc/qovery/qovery.toml"}
  sourceName={"journald"}
  sinkName={null} />

</li>
<li>

### Start the Qovery container

```bash
docker run \
  -v $PWD/qovery.toml:/etc/qovery/qovery.toml:ro \
  timberio/qovery:latest-alpine
```

<CodeExplanation>

* The `-v $PWD/qovery.to...` flag passes your custom configuration to Qovery.
* The `timberio/qovery:latest-alpine` is the default image we've chosen, you are welcome to use [other image variants][docs.platforms.docker#variants].

</CodeExplanation>

That's it! Simple and to the point. Hit `ctrl+c` to exit.

</li>
</ol>
</Steps>

</TabItem>
<TabItem value="docker-compose">

compose!

</TabItem>
</Tabs>
</TabItem>
</Tabs>


[docs.package_managers.rpm#versions]: /docs/setup/installation/package-managers/rpm/#versions
[docs.platforms.docker#variants]: /docs/setup/installation/platforms/docker/#variants
[docs.sources.journald]: /docs/reference/sources/journald/
[docs.sources]: /docs/reference/sources/
[docs.strategies#daemon]: /docs/setup/deployment/strategies/#daemon