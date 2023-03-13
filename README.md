# Coffeegerm Bit Monorepo

## Create

Bit lets us create components very easily using the command `bit create`

## Compile

`bit compile`

## Tagging

`bit tag --message "Message here"` will tag any changes made to components with the message that you pass for what changes you made. Think of this as its own sort of commit to bit's internal versioning for our components

## Install

Bit manages our dependencies under the hood for us when it comes to its components. Rather than calling `yarn install` to add packages we instead use `bit install`.

## Status

Will alert you of what new components you have and will let you know if you need to install any external dependencies for the component. See install section

`bit status`

## Link

`bit link`

## Start

`bit start`

## Watch

`bit watch` will monitor your code as you make changes and recompile it for you as work

## Test

Bit has jest testing built in and will allow to run your tests from within your components with `bit test`.
You can easily watch your code changes by appending `--watch`

## Reset tagged changes

`bit reset` to unstage changes after a `bit tag` command

## Export to Bit Cloud
