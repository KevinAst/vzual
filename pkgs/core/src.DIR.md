# src directory

The `pkgs/core/src/` directory is a common resource that is shared
across multiple sub-projects _(through programatic code references)_.

It is a symbolic link:

| **FROM**: `pkgs/core/src/` --> **TO**: `pkgs/server/src/core/` **_(the master source)_**

- This is part of our project's
  [KISS](https://en.wikipedia.org/wiki/KISS_principle) **monorepo**.

- It is `.gitignore`d to prevent duplicate entries within the git
  repo.

- The master source is located in the **server** sub-project, in
  support of [Heroku](https://www.heroku.com/)'s git-based deployment
  of our server.

- It is <mark>manually setup</mark> in your local project _(one time
  only - at project setup time)_.

  Use your OS-appropriate command to create this symbolic link:

  ```sh
  $ cd $ProjRoot\vzual\pkgs\core

  # make the hard link by referencing the master source (ex: DOS command)
  $ mklink /J src ..\server\src\core

  # verify it looks good (ex: cygwin command)
  $ ls -laf
    .gitignore
    src -> /cygdrive/c/dev/vzual/pkgs/server/src/core/

  # verify it is working
  $ cd src 
  ```
