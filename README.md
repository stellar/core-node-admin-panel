## Getting Started

Copy `.env.example` to `.env` and ensure the values match your stellar-core instance.
`npm start`

# core-node-admin-panel

## Proposal

- **Who**: For people running validation nodes
- **Why**: It’s difficult to set up and understand whether you have a robust node, or if it’s fragile
- **What**: A UI admin tool set to understand the health and risks of your node, along with hints on how to strengthen it.
- **How**: Create views and analyses to help surface common detectable, but perhaps non obvious weak points.

## Phase 1

### Quorum halting analysis

Administrators need to choose a robust quorum slice, but it’s hard to know how your selection will react to various network failures. After fetching the full transitive quorum, the application will run scenarios in which groups of 1-3 nodes die. Any runs in which that failure state causes our own node to die will be marked as a fatal case, and shown to the user, along with the paths creating the vulnerability

### Expose API endpoints

Start as a simple pull json api which can be converted to push mechanisms in the future if necessary. Should use the [json:api](<[https://jsonapi.org/](https://jsonapi.org/)>) format

- **/nodes/flaky** Flaky nodes in quorum, in order to create easy alerting mechanisms
- **/nodes/halting** Single nodes that, if they go down, would halt the current node

Implementation Notes

- Package it in the default docker
- Use sqlite as the data store
- NodeJS + Typescript

## Phase 2

Add ‘what if’ scenarios: Visualize health of your node after making possible changes to you quorum set without having to actually make the change and revalidate

- Add node X to my quorum set
- Remove node Y from my quorum set
- Stop depending on organization Z
