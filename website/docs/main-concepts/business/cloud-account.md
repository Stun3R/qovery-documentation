---
last_modified_on: "2020-09-29"
title: "Cloud Account"
description: "Understand the concept of Cloud Accounts in Qovery"
---
### Deploy on your own Cloud Account

Qovery has taken provider-agnostic approach to the cloud. Our Engine is designed to support any cloud provider. What it means to you, is that you can deploy your projects using multiple cloud accounts,
from multiple cloud providers.

<img src="/img/providers.png" />

### Real multi-cloud in action

Do you want to have a reliable production environment but also save money on staging platforms which are not crucial?
No problem! You can deploy your reliable production system on AWS, and to save resources, deploy other non-production
enironments using one of cheaper cloud providers. Qovery brings you a real multicloud capabilities which are fully transparent for
application developers.

<div style={{display: 'flex', justifyContent: 'space-evenly'}}>

<img style={{maxWidth: '200px'}} src="/img/logos/aws.svg" />

<img style={{maxWidth: '200px'}} src="/img/logos/do.svg" />

<img style={{maxWidth: '200px'}} src="/img/logos/scw.svg" />

</div>

All you need to do to benefit from cloud-agnostic deployments is to provide us with credentials to your cloud accounts
and declare a simple [Policy][docs.main-concepts.business.policy] to use them.


[docs.main-concepts.business.policy]: /docs/main-concepts/business/policy/