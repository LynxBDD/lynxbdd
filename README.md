# Lynx BDD

Utilities and tools for Behavior Driven Development.

> The lynxbdd repository is currently a **Work in Progress**.
>
> This README file will be updated once the initial work is complete.

This is a new project that will be used to deliver and maintain major updates to two existing projects listed below:

- [@lynxwall/cucumber-tsflow](https://www.npmjs.com/package/@lynxwall/cucumber-tsflow)
- [Cucumber TsFlow for VS Code](https://marketplace.visualstudio.com/items?itemName=lynxwall.cucumber-tsflow-vscode)

In addition, future utilities and tools for Behavior Driven Development will be included in this library as they are developed.

## Why the New Library?

The current version of cucumber-tsflow uses TypeScript experimental decorators and vue-sfc for Vue component transforms. In addition, the current version contains a Gherkin parser that is bundled with the code. While these technologies work and support most use cases, the decorator technology in TypeScript has been finalized and there are some limitations to using vue-sfc for Vue component transforms.

With the companion VS Code extension, Cucumber TsFlow for VS Code, executing tests within the test runner are slow due to the way that individual test scenarios are executed with the existing cucumber-tsflow implementation. Basically, for each test scenario a new process is started and the cucumber configuration is loaded into that process before executing the tests.

Both of these packages are also maintained in two separate repositories.

As a result of these considerations, we've decided to perform a major re-write and rebranding of the lynxwall/cucumber-tsflow implementation. This re-branding will bring all utilities and tools under a single brand name, LynxBDD, that will be maintained in the lynxbdd monorepo.

### Rebranding Cucumber-tsflow

The current implementation of cucumber-tsflow will be split into two separate packages with the following names:

- **@lynxwall/lynxbdd-cucumber** - Replaces @lynxwall/cucumber-tsflow
- **@lynxwall/lynxbdd-gherkin** - Code currently in cucumber-tsflow that will be split out into it's own package for re-use in other utilities and tools.

Along with the rebranding there are several high-level goals:

- Replace the current implementation of experimental decorators with the finalized version of decorators in TypeScript 5.x and up.
- Replace the use of vue-sfc for Vue component transformations with vue-jest, which is designed to work in tests and provides better configuration options.
- Refactor the internal message handler that receives messages from Cucumber.js to make it available to consumers of this package, which puts us in a better position to improve performance with the companion VS Code extension.
- General code refactor to eliminate as many side effects as possible while making the code more efficient.

### Rebranding "Cucumber TsFlow for VS Code"

To maintain naming consistency, the VS Code extension will be renamed to the following:

- **LynxBDD Cucumber for VS Code**

In addition to rebranding, there are several high-level goals:

- Take advantage of lynxbdd-cucumber updates to execute all tests from the test runner in a single process. This will allow the support of parallel test execution within the test runner.
- Add support to generate test "steps" from feature files.
- General code refactor to eliminate as many side effects as possible while making the code more efficient.

## Documentation Site

In addition to building a suite of utilities and tools for Behavior Driven Development, and new site will be created to provide documentation for these utilities and tools.

New Site: [LynxBDD](http://lynxbdd.com)

> Currently the link above will take you to a default landing page. As we build out this suite of packages, the documentation site will also be updated.
