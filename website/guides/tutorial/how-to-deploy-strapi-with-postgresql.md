---
last_modified_on: "2021-04-28"
$schema: "/.meta/.schemas/guides.json"
title: How to deploy Strapi with PostgreSQL
description: This tutorial show you how to deploy Strapi with PostgreSQL in a few steps
author_github: https://github.com/evoxmusic
tags: ["type: tutorial", "framework: strapi", "database: postgresql"]
hide_pagination: true
---
import Alert from '@site/src/components/Alert';
import Assumptions from '@site/src/components/Assumptions';
import Jump from '@site/src/components/Jump';

> This tutorial is linked to this [Strapi tutorial](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/qovery.html)

This is a step-by-step guide for deploying a Strapi project on Qovery.

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/guides/tutorial/how-to-deploy-strapi-with-postgresql.md.erb
-->

## Deploying with the web interface
### 1. Create a Qovery Account
Visit [the Qovery dashboard][urls.start_qovery] to create an account if you don't already have one.

### 2. Create a project
* Click on the **create a project** button and give a name to your project.
* Click on **next**.

<Alert type="info">

  One project can have multiple apps running. This is convenient to group your backend, frontend, database etc.

</Alert>

### 3. Add your Strapi app
* Click on the **create an application** button and select your Github or Gitlab repository where your Strapi app is located.
* Click on **next**.

### 4. Add a PostgreSQL database
* Click on add a **PostgreSQL** database.
* Select the version
* Give a name to your PostgreSQL database.
* Click on **next**.

### 5. Add a storage
* Click on add a **Storage**.
* Give a name to your storage.
* Select the storage type between Slow HDD, HDD, SSD, and Fast SSD. (SSD is recommended)
* Select the size.
* Give a mount point.

### 6. Deploy
Click on the **Deploy** button. Your app should be deployed: you can see the status in real time by clicking on **Deployment logs**.

## Deploying with the CLI
### 1. Create a Qovery Account
[Install the Qovery CLI][docs.using-qovery.interface.cli] and type the command `qovery auth` to create an account if you don't already have one.

### 2. Add a .qovery.yml File
Place a `.qovery.yml` file at the root of your project. Do not forget the dot when naming the file.

```yaml
application:
  name: GIVE_A_NAME_TO_YOUR_APP
  project: GIVE_A_PROJECT_NAME
  publicly_accessible: true
  storage: # qovery will attach automatically a SSD storage on /srv/app
    - name: data
      type: ssd
      size: 5GB
      mount_point: /srv/app
databases:
- type: postgresql # qovery will create a managed PostgreSQL database
  version: 12
  name: psql
routers:
- name: main
  custom_domains: # optional: only if you want to use your domain
  - branch: master
    domain: my.domain.tld
  routes:
  - application_name: strapi
    paths:
    - /*
```

<Alert type="success">

For more information about the `.qovery.yml` file, please refer to [the Qovery application documentation][docs.using-qovery.configuration.applications].

</Alert>


Alternatively, you can deploy your Strapi application with a PostgreSQL database in the Qovery dashboard.

### 3. Add a Dockerfile (optional)

By default, Qovery uses Buildpacks to build and run your Strapi application. But it is also possible to build and run your application by providing a `Dockerfile` (see [Qovery documentation][docs.using-qovery.configuration.applications#application-build] for more information).

### 4. Deploy

1. Commit your changes and push them to GitHub or GitLab.
2. Execute the `qovery status --watch` command to see in real time your Strapi application deployment status. When the status of your application is `RUNNING`, it means it has been successfully deployed.

## Scaling

For vertical scaling, Qovery lets you upgrade your CPU and RAM per an instance. For horizontal scaling, Qovery auto-scales the number of instance running depending on the CPU and Memory usage.


<Jump to="/guides/tutorial/">Tutorial</Jump>


[docs.using-qovery.configuration.applications#application-build]: /docs/using-qovery/configuration/applications/#application-build
[docs.using-qovery.configuration.applications]: /docs/using-qovery/configuration/applications/
[docs.using-qovery.interface.cli]: /docs/using-qovery/interface/cli/
[urls.start_qovery]: https://start.qovery.com
