# code-algorithms
algorithms implemented for reference

## Git commands
https://github.com/joshnh/Git-Commands

## Git commits
Push existing repository from the command line:
1. Create a folder or project in your local.
2. `git init` to make the project into git repository.
3. `git remote add origin https-repo-link`.
4. `git branch -M main` rename the current branch to main.
5. `git push -u origin main`  -  push changes to main

### If there are already existing changes in main - pull
git pull --rebase origin

## Pull Request steps
1. Resolve comments on pull request 
2. Push the changes to remote branch
3. Wait for approval
4. Rebase from main
   - `git checkout main`
   -  `git pull rebase`
   -  `git checkout branch`
   -  `git rebase main`
   -  `git push --force`
5. Squash to commit
6. Merge PR to main

## Push changes to remote branch
https://www.freecodecamp.org/news/git-push-local-branch-to-remote-how-to-publish-a-new-branch-in-git/

## Best practices for commit messages
https://cbea.ms/git-commit/

## Changing commit messages
https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message

## Best practices for naming branches
https://tilburgsciencehub.com/building-blocks/collaborate-and-share-your-work/use-github/naming-git-branches/

## Delete all local branches
git branch | grep -v "main" | xargs git branch -D

## Delete local branch
git branch -d <branch name>
