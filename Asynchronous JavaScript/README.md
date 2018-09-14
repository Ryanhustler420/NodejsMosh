# Asynchronous JavaScript Example Code

## Callback-based approach

```JavaScript

  getUser(1, (user) => {
    getRepositories(user.gitHubUsername, (repos) => {
      getCommits(repos[0], (commits) => {
        console.log(commits);
      })
    })
  });

```
## Promise-based approach

```JavaScript

  getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('Commits', commits))
    .catch(err => console.log('Error', err.message));

```

## Async and Await approach

```JavaScript

  async function displayCommits() {
    try {
      const user = await getUser(1);
      const repos = await getRepositories(user.gitHubUsername);
      const commits = await getCommits(repos[0]);
      console.log(commits);
    }
    catch (err) {
      console.log('Error', err.message);
    }
  }
  displayCommits();

```

```JavaScript

  function getUser(id) {
    return new Promise((resolve, reject) => {
      // Kick off some async work
      setTimeout(() => {
        console.log('Reading a user from a database...');
        resolve({ id: id, gitHubUsername: 'mosh' });
      }, 2000);
    });
  }

  function getRepositories(username) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Calling GitHub API...');
        // resolve(['repo1', 'repo2', 'repo3']);
        reject(new Error('Could not get the repos.'));
      }, 2000);  
    });
  }

  function getCommits(repo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Calling GitHub API...');
        resolve(['commit']);
      }, 2000);
    });
  }

```
## Promise

```JavaScript

  const p = new Promise((resolve, reject) => {
    // Kick off some async work
    // ...
    setTimeout(() => {
      resolve(1); // pending => resolved, fulfilled
      reject(new Error('message')); // pending => rejected
    }, 2000);
  });

  p
    .then(result => console.log('Result', result))
    .catch(err => console.log('Error', err.message));

```

## Example of Promise Static Method's

```JavaScript

  Promise.reolve(1);
  Promise.reject(new Error(''));
  Promise.all([p1, p2]);
  Promise.race([p1, p2]);

  const p1 = new Promise((resolve) => {
    setTimeout(() => {
      console.log('Async operation 1...');
      resolve(1);
    }, 2000);
  });

  const p2 = new Promise((resolve) => {
    setTimeout(() => {
      console.log('Async operation 2...');
      resolve(2);
    }, 2000);
  });

  Promise.race([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log('Error', err.message));

```
