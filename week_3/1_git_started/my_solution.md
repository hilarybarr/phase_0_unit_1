## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
This is used to stage all your changes, which means you alert Git to the fact that you have made changes.

#### branch
Branch creates a copy of code so you can play around with it without affecting the work on the master branch. You can then incorporate those changes back into the master branch using merge.

#### checkout
Changes branches, in essence checking them out.

#### clone
Makes a local repository of a Github fork. Unlike a branch, the fork is independent from the original repository.

#### commit
Commit saves a set of changes as a snapshot of the repository.

#### fetch
Pulls in changes not present in your local repository without modifying your files

#### log
Shows you all the changes you've made in order

#### merge
A merge copies changes from one branch into another. One you've finished working on a branch and are ready to combine it back into the master branch, use merge since you don't need the other branch to be separate anymore, then delete the branch.


#### pull
A pull request fetches changes from a Github repo and automatically merges them into your local repo.

#### push
When you are ready to share your changes with others, this pushes changes to a remote branch like Github for deployment

#### reset
Removes a file from staging.

#### rm
Rm means remove, or delete.

#### status
This provides you with information on the current state. You can see what files have been added, which are untracked, which are staged, and which branch you are working in






## Release 4: Git Workflow

PUSH FILES TO A REMOTE REPO:
The first time:
git remote add origin github.com/username/name.git
git push -u origin master

git push origin master


FETCH CHANGES:
The first time, need to add remote to upstream repo:
git remote add upstream github.com/username/name.git

To fetch from the upstream repo:
git fetch upstream
git merge upstream/master

To fetch from the origin repo:
git pull origin master


COMMMIT LOCALLY:
git add filename
git commit -m"Message"







## Release 5: Reflection

What parts of your strategy worked? What problems did you face?
I have been practicing basic Github commands using the terminal the past two weeks, and felt that Github clicked in my brain toward the end of last week after going through tutorials over and over again. I practiced both cloning a repository that I forked and initializing a new repository then connecting it to a repository on Github to ensure that I understand how to do this. Also, helping another boot pull changes from Github helped solidify my understanding of how to do this.


What questions did you have while coding? What resources did you find to help you answer them?
I had been having trouble understanding the difference between git status, git log, and git diff, and the examples in the Code School Try Git tutorial helped clarify this by demonstrating what occurs in terminal when you use each.


What concepts are you having trouble with, or did you just figure something out? If so, what?
I realized that you only need to add a remote to an origin/upstream once for a working directory, then you just go directly to pushing or pulling after committing. I also gained a better understanding of the difference between forking, cloning, and branching. A fork is a copy of another repo on Github. Cloning creates a local copy of your fork. A branch creates a copy you can make separate commits to within the same repository, which you can then merge into the master branch. Unlike a branch, a fork is independent from the original repository.


Did you learn any new skills or tricks?
I learned that Github requires a Readme file, which I didn't realize before. I also learned that typing git help in the terminal shows the 21 most common Github commands.


How confident are you with each of the Learning Competencies?
I still have a slightly hazy image in my head of what it looks like when a large team uses Github (for example, what branching looks like). I also don't fully understand how to use gitignore. Overall though, I feel confident about basic Git commands. 


Which parts of the challenge did you enjoy?
I enjoyed the Code School Try Git tutorial because it explained how to use Github in a comprehensible, interactive way. 

Which parts of the challenge did you find tedious?
I found staging every single file in a working directory tedious at times, but learning about the ability to use wildcards to stage files of the same type helped with this.
