# konfig.yaml

`konfig.yaml` is a required configuration file that tells `konfig` CLI how to operate. Explore the schema [here](/docs/konfig-yaml/schema).

## Example

Here is an example `konfig.yaml` that contains configuration to generate SDKs for many languages.

```yaml
outputDirectory: /tmp/acme-sdks-out
specPath: api.yaml
generators:
  java:
    version: 1.0.0
    groupId: com.acme
    artifactId: acme-java-sdk
    outputDirectory: java
    git:
      userId: konfig-dev
      repoId: acme-sdks/tree/main/java
  python:
    version: 1.0.0
    packageName: acme_client
    projectName: acme-python-sdk
    outputDirectory: python
    git:
      userId: konfig-dev
      repoId: acme-sdks/tree/main/python
  typescript:
    version: 1.0.0
    npmName: acme-typescript-sdk
    outputDirectory: typescript
    git:
      userId: konfig-dev
      repoId: acme-sdks/tree/main/typescript
  csharp:
    version: 1.0.0
    packageName: Acme.Net
    logoPath: logo.png
    outputDirectory: csharp
    git:
      userId: konfig-dev
      repoId: acme-sdks/tree/main/csharp
  swift:
    version: 1.0.0
    projectName: Acme
    podAuthors: acme.com
    outputDirectory: swift
    git:
      userId: konfig-dev
      repoId: acme-sdks/tree/main/swift
  objc:
    version: 1.0.0
    podName: AcmeClient
    authorName: acme.com
    authorEmail: engineering@acme.com
    classPrefix: A
    outputDirectory: objc
    git:
      userId: konfig-dev
      repoId: acme-sdks/tree/main/objc
  kotlin:
    version: 1.0.0
    groupId: com.acme
    artifactId: acme-kotlin-sdk
    outputDirectory: kotlin
    git:
      userId: konfig-dev
      repoId: acme-sdks/tree/main/kotlin
  go:
    version: 1.0.0
    packageName: acme
    outputDirectory: go
    git:
      userId: konfig-dev
      repoId: acme-sdks/go
  php:
    version: 1.0.0
    packageName: acme-php
    outputDirectory: php
    git:
      userId: konfig-dev
      repoId: acme-sdks/tree/main/php
```
