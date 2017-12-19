# raster-foundry-docs

## Swagger Extensions

To provide a rich documentation experience, we leverage swagger extensions.

### Documentation Top Matter

This is the copy that is presented first.

```
  x-top-matter:
    - title: Introduction
      level: 1
      content: |
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quaerat cupiditate odio nihil tempore, autem ipsam animi voluptate quia deleniti neque amet blanditiis deserunt itaque laudantium voluptas consequatur dolore officiis nulla.

        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quaerat cupiditate odio nihil tempore, autem ipsam animi voluptate quia deleniti neque amet blanditiis deserunt itaque laudantium voluptas consequatur dolore officiis nulla.

        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quaerat cupiditate odio nihil tempore, autem ipsam animi voluptate quia deleniti neque amet blanditiis deserunt itaque laudantium voluptas consequatur dolore officiis nulla.
    - title: Using the API
      level: 2
      content: |
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quaerat cupiditate odio nihil tempore, autem ipsam animi voluptate quia deleniti neque amet blanditiis deserunt itaque laudantium voluptas consequatur dolore officiis nulla.

        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quaerat cupiditate odio nihil tempore, autem ipsam animi voluptate quia deleniti neque amet blanditiis deserunt itaque laudantium voluptas consequatur dolore officiis nulla.

        Testing testing testing.
```

### Resources

We present endpoints in the context of the resources they represent. We use a top-level list of the resources we want to
present along with optional details about these resources.

The top-level list:
```
  x-resources:
    - name: Projects
      description: This describes project resource
      further-description:
        - title: Project permissions
          content: |
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quaerat cupiditate odio nihil tempore, autem ipsam animi voluptate quia deleniti neque amet blanditiis deserunt itaque laudantium voluptas consequatur dolore officiis nulla.

    - name: Scenes
    - name: Tokens
    - name: Tools
```

Each path can then reference the resource they represent via `x-resource: <resource name>`

## Install Dependencies
Install node dependencies via [yarn](https://yarnpkg.com/en/) (we also suggest using node version manager ([nvm](https://github.com/creationix/nvm)): `yarn install`

## Development server
Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `yarn test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `yarn e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `yarn start`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
