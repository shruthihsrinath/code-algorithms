# code-algorithms
algorithms implemented for reference

## git commits
Push existing repository from the command line:
1. Create a folder or project in your local.
2. `git init` to make the project into git repository.
3. `git remote add origin https-repo-link`.
4. `git branch -M main` rename the current branch to main.
5. `git push -u origin main`  -  push changes to main

### if there are already existing changes in main - pull
git pull --rebase origin

## Pull Request steps
1. Resolve comments on pull request
2. Push the changes to remote branch
3. Wait for approval
4. Rebase from main
5. Squash to commit
6. Merge PR to main
