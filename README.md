# netlify-redirect-parser-action

An action to parse the `_redirects` file within given netlify repository.

## Rationale

This action is mainly intended to be used within the [devopsdays-web](https://github.com/devopsdays/devopsdays-web) repository as we have trouble linting our `_redirects` file.

It assumes that the `_redirects` file is in the `/static` folder though this should probably be altered and added as a `core.getInput()` though I didn't feel the need.

## Example Usage

```yaml
jobs:
    parse:
        # ...
        steps:
            # ...
            - name: Lint _redirects
              uses: chriscoffee/netlify-redirect-parser-action@v1
            # ...
```