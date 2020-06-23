# sudokuJS

A fullstack toy sudoku game app built on the MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack. This was a side project primarily used to learn bcryptJS, json web tokens (JWT), and modern React hooks/context. Sample sudoku games are pulled from the Kaggle sudoku dataset https://www.kaggle.com/bryanpark/sudoku

## Tech Stack

This project uses the MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack. Modules are written in TypeScript, compiled to JavaScript, transpiled for web compatibility using Babel, and bundled with Webpack. Login/authentication uses bcrpytJS to hash/salt and compare passwords, and JWTs to persist user sessions.
MongoDB CRUD is provided by Mongoose.

## Build Process

To build:

1. install dependencies
<pre><code>> npm install </code></pre>

2. compile TypeScript
<pre><code>> tsc </code></pre>

3. bundle client
<pre><code>> npm run client:build </code></pre>

4. ensure you have a local instance of MongoDB running. Either point your ENV variables to the desired database, or edit the development database url in server/db/index.ts

<pre><code>const connectURL = process.env.MONGODB ||
 'mongodb://localhost/YOUR_DB_NAME';</code></pre>

5. either set your PORT env variable to your desired port, or edit the dev port in server/index.ts

<pre><code>const port = process.env.PORT || 3000;</code></pre>

6. launch server

<pre><code>> npm run server:start</code></pre>

or, in nodemon for development

<pre><code>> npm run server:dev</code></pre>