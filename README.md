# Depot

Depot is a framework for UI designers who work on large-scale projects. It provides a set of tools to prototype designs which span multiple platforms and are meant to be maintained for multiple versions.

At large scale projects typically consist of several services run by different teams of developers. Each team may have a different implementation of the same UI components. These implementations often come out of sync, so the UI designers must maintain several versions of the same components at once. It becomes even more complicated when you design for several platforms and devices at once.

At Yandex we have found that it might be easier to tackle this task with code instead of conventional visual tools. Depot is what our designers have been using internally to prototype and document interactions for further implementation by developers. We are sharing this early preview to gather feedback from a wider audience and to make better tools for designers facing the problems large-scale projects have.


## Install

```
npm install -g dpt
```

## Getting started

To create your first project, run this command:

```
dpt init project_name
```

Then, go to your project directory and set up dependencies:

```
cd project_name
npm install
```

Finally, run your project:

```
npm start
```

## Usage

Depot is based on [BEM methodology](https://bem.info) and is divided into BEM blocks and prototypes you build upon them. When you open your first project, you are presented with the Depot documentation viewer. From there, you can create new blocks and libraries of blocks, you can view docs, you can switch between versions and platforms, and create new versions.

### Directory structure and blocks

The template project has several directories created for you.

```
blocks/
const/
projects/
vendor/
```

The most important one is `blocks/`. Depot is based on BEM methodology, and `blocks/` is the places where Depot looks for blocks to construct prototypes from. All blocks are organised in libraries, have versions, and three files for JavaScript, styles and documentation.

```
blocks/
    <library name>/
        <block name>/
            <version>/
                <block name>.bml.js
                <block name>.less
                <block name>.md
```

### Projects
