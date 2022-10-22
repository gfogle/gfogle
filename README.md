### Hi there 👋
This is where I keep all of my public projects and gists. If anything here seems interesting, feel free to contact me via [📬 email](mailto:georgefogle@hey.com).

Currently, I'm interested in focused on creating a monorepo codebase that hundreds, even thousands, of engineers could work on simulataneously with minimal friction. The core set of technologies I'm using to make that happen are web servers using [vertx](https://vertx.io/).

## 🧰 Projects
The codebase has the capability to have multiple projects and run them in parallel locally by adding the run step to the `make start` and `include` them in the top-level `settings.gradle` file. Depending on compile time performances they could all be run at once locally, via container images on a local minikube cluster etc.

Currently, a few of the projects that I'm working on to support that example project are:

### `bin` installation
This is a script that recreates my entire dev profile in the instance I get a new laptop. It's meant to simulate what an engineer might run as a new hire starting on day one to get their machine set up.

### `www` ecommerce monorepo
A sample "care.com" company that supports major verticals like: childcare, ecommerce ( clothing, pharmacy, insurance etc. ), adoptions, telehealth, donations etc. The
goal of this is to have a monolithic application that runs locally, but can be
dynamically configured to deploy its parts independently.

<!--
### backoffice ( not in project )
A sample "backoffice" application as a monolithic vert.x server. Organized by domains where the top-level domains are departments or major systems and then sub-domains wihtin those bounded contexts for it's major capabilities. Each sub-domain is then aligned to an [MV*]() layered application structure that the core server can mount and execute.

An example structure looks like:
```
backoffice
--- accounting
--- billing
--- finance
--- inventory
--- oms
    --- fulfillment
    --- shipping
```
-->

## Useful Links

- 🎥 [Kubernetes 101](https://www.youtube.com/watch?v=s_o8dwzRlu4)


