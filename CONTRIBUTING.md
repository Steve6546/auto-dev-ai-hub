# Contributing to AutoDev AI Hub

First off, thank you for considering contributing to AutoDev AI Hub! It's people like you that make this project such a great tool.

## Where do I go from here?

If you've noticed a bug or have a feature request, [make one](https://github.com/Steve6546/UIU123/issues/new)! It's generally best if you get confirmation of your bug or approval for your feature request this way before starting to code.

### Fork & create a branch

If this is something you think you can fix, then [fork AutoDev AI Hub](https://github.com/Steve6546/UIU123/fork) and create a branch with a descriptive name.

A good branch name would be (where issue #38 is the ticket you're working on):

```sh
git checkout -b 38-add-awesome-new-feature
```

### Get the style right

Your patch should follow the same conventions & pass the same code quality checks as the rest of the project.

### Implement your fix or feature

At this point, you're ready to make your changes! Feel free to ask for help; everyone is a beginner at first :smile_cat:

### Make a Pull Request

At this point, you should switch back to your master branch and make sure it's up to date with AutoDev AI Hub's master branch:

```sh
git remote add upstream git@github.com:Steve6546/UIU123.git
git checkout master
git pull upstream master
```

Then update your feature branch from your local copy of master, and push it!

```sh
git checkout 38-add-awesome-new-feature
git rebase master
git push --force origin 38-add-awesome-new-feature
```

Finally, go to GitHub and [make a Pull Request](https://github.com/Steve6546/UIU123/compare)

### Keeping your Pull Request updated

If a maintainer asks you to "rebase" your PR, they're saying that a lot of code has changed, and that you need to update your branch so it's easier to merge.

To learn more about rebasing in Git, there are a lot of good resources, but here's the suggested workflow:

```sh
git checkout 38-add-awesome-new-feature
git pull --rebase upstream master
git push --force-with-lease 38-add-awesome-new-feature
```
