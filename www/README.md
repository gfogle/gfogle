# www
A sample "care.com" company that supports major verticals like: childcare, ecommerce ( clothing, pharmacy, insurance etc. ), adoptions, telehealth, donations etc. The
goal of this is to have a monolithic application that runs locally, but can be
dynamically configured to deploy its parts independently.

## What and Why
Codebase that contains one monolithic vert.x application locally that is capable of being deployed in smaller units. Some assumptions:

- **No Bazel** its ok to align the codebase to where it _could_ have Bazel added later but assume thats not going to happen and you need to use Gradle

- **Vert.x via Reflection** vert.x is very performant which will enable smaller container images but we'll need to use some libraries - dagger, etc. - and reflection to create a similar experience to Spring autoloading.

The minimal constraints that the codebase has to impose / work within:

- **Fast Compiles** given the amount of code this could end up housing, the compile times _have_ to be fast; and stay that way. The compile times should get tracked and potentially be able to be pushed to a stats collection. This could impose design constraints on the approaches such as limited dependencies, codegen, incremental builds etc.

- **Trunk Based** no git flow nonsense and only allow squash merging into `main`. This should be heavily restricted via CODEOWNERS and a limited set of admins who have the ability to modify anything about the global settings. Have to be able to tag and version at the git commit level and hotfix off of a specific tag.

- **Separate Deployables** some sortve ability to deploy pieces of the application driven by configuration. Have to be able to know if those separate pieces have changes via some mechanism: docker hashes etc.

## Explore
Some additional concepts to include in the project are:

- **webpack with gradle** the vertx gradle plugin has docs suggesting its possible to have it watch for changes to both java and js to invoke webpack. See: https://vertx.io/blog/an-eclipse-vert-x-gradle-plugin/#using-with-webpack-or-any-other-custom-task

- **automatic repo size tracking** [this article](https://gitential.com/the-gitential-guide-on-how-to-reduce-the-size-of-your-git-repository/) has good content around managing the git repo size

## Structure
Current projected structure looks like:
```
www
--- account
    --- login
    --- mfa
    --- orders
    --- password
    --- profile
    --- register
    --- settings
--- adopt
    --- apply
--- care
    --- tutor
    --- watch
--- donate
--- infra
    --- analytics
    --- auth
    --- i18n
    --- notify
        --- email
        --- sms
    --- logging
    --- toggles
--- insure
    --- claim
    --- policy
    --- quote
--- marketing
    --- campaigns
    --- cms
    --- crm
    --- homepage
--- merchandise
    --- ads
    --- brands
    --- catalog
    --- deals
    --- facets
    --- recs
    --- reviews
    --- search
--- payment
    --- purchase ( checkout )
    --- wallet
--- pharmacy
    --- compound
    --- prescription
--- risk
    --- fraud
--- subscribe
--- telehealth
    --- chat
    --- schedule
    --- video
```

Other areas to find a location for:
- cart / basket
