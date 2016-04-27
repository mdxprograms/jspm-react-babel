# jspm + react + babel demo

## things to note

In ```config.js```, in order to use react you'll have to have ```"blacklist": []``` added to babelOptions:
  ```
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ],
    "blacklist": []
  },
  ```
