Notes on Route Hooks

Context:
Assume an application as so (indices implied):
- application
| - child
| - other-child
  | - grand-child

If in child route, active tree is defined as the following routes:
application, child, child.index. If in application route: application,
application.index. Highest available will always be at the top of the
tree, i.e. child.index, or other-child.index. Parent is always down
tree, i.e. application.

Abbreviations:
- model hooks
  - bM: beforeModel
  - M: model
  - aM: afterModel
- main transition events
  - wT: willTransition
  - dT: didTransition
  - L: loading; fL: finally loaded
  - E: error
- transition router events
  - A: activate
  - D: deactivate
- route-controller hooks
  - sC: setupController
  - rC: resetController

## Transitions
- Full transition (Ft) when route leaves branch
- Partial transition (Pt) when route traverses branch
- FT in: bM, L, M, aM, A, sC, dT, fL
- FT out: wT, rC, D, dT (@ highest available)
- PT in: wT (@ origin), bM, L, M, aM, dT, fL

## wT, dT
- On model refresh
- On highest available route
- wT: when transition is initiated
- dT: when transition is complete

## bM, M, aM
- On model refresh
- On entire active route tree
- Always in conjunction and order of: bM, (L), M, aM ... (fL)

## sC, rC
- sC
  - After all model hooks in active tree are fired
  - Only after A, therefore, only after full transition

## A, D
- Only when full router transition complete
- D never occurs on application route
- D does occur on application.index route
- A only occurs on initial load for application route

## Refreshing a model
- When refreshing model on a route refreshes models of that
  route's children as well
  - Causes cascade of model hooks (bM, M, aM),
    and main transition events (wT, dT, l)
