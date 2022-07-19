### Hi there 👋
This is where I keep all of my public projects and gists. If anything here seems interesting, feel free to contact me via [📬 email](mailto:georgefogle@hey.com).

Currently, I'm interested in focused on creating a monorepo codebase that hundreds, even thousands, of engineers could work on simulataneously with minimal friction. The core set of technologies I'm using to make that happen are web servers using [vertx](https://vertx.io/), built and deployed with [bazel](https://bazel.build/) and hosted on [kubernetes](https://kubernetes.io/).

## 🧰 Projects
Currently, a few of the projects that I'm working on to support that example project are:

### `bin` installation
This is a script that recreates my entire dev profile in the instance I get a new laptop. It's meant to simulate what an engineer might run as a new hire starting on day one to get their machine set up.

### Localstack
This project sets up [localstack](https://localstack.cloud/) on a [minikube](https://minikube.sigs.k8s.io/docs/start/) instance to allow for local-only development of AWS-hosted projects. This facilitates local DynamoDB databases, SQS queues, etc.

### DynamoDB migration CLI
This is my small project to be like a [knex]() for DynamoDB to recreate a DynamoDB table from nothing.

<!--
### Bazel and Kubernetes

<div align="center">
  <a href="https://bazel.build">
    <img width="100px" height="auto" src="https://bazel.build/images/bazel-icon.svg" />
  </a>
  <a href="https://kubernetes.io">
    <img width="100px" height="auto" src="https://kubernetes.io/images/favicon.png" />
  </a>
  <br>
</div>

I'm migrating my various subprojects to this repo and using a Bazel build system. I'm changing all of my Docker + Compose based projects to instead run locally on Kubernetes.



### 🔋 **fmono**
a Fastify monorepo template project with a batteries-included setup. The goal is to create a web + api monorepo that ideally hundreds - even thousands - of developers could work in without all the negative connotations that come along with the word "monorepo" like slow review cycles, excessive storage size, etc.

The server uses the Fastify [plugin system](https://www.fastify.io/docs/latest/Plugins/) which is similar to Rails [engines](https://guides.rubyonrails.org/engines.html) to encapsulate sections of an application: home, login, search etc.

The client-side is inspired by other tooling - and even uses some of - [wmr](https://github.com/preactjs/wmr), [snowpack](https://github.com/snowpackjs/snowpack) etc. to take advantage of [Import Maps](https://github.com/WICG/import-maps) and eliminate alot of the tooling around setting up "modern" web applications; while still providing a production pipeline with tools like [esbuild](https://github.com/evanw/esbuild) for efficient bundling, minification etc. if that's something your application requires.


**gfogle/gfogle** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...

-->

## Useful Links

- 🎥 [Kubernetes 101](https://www.youtube.com/watch?v=s_o8dwzRlu4)


