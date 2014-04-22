## 1. [Git and Github](1_get_started/readme.md) Reflection

*What struggles did you have setting up git and GitHub? What did you learn in the process?

When I set up Git, I found that I wasn't sure how to find which directory Git is installed in. Googling this, I found the answer to be /usr/local/git. This reinforced the value of Google in addressing questions about software.

I received a "permission denied" error while setting up SSH keys but was able to remedy the problem by following the troubleshooting instructions. 

Initially, I was confused about the difference between git init and git clone. The Git reference book clarified that one or the other is used to set up a repository depending on whether you are importing an existing project or directory into Git or cloning an existing Git repository from another server. 



* Write an explanation of and compare git and GitHub to a non-technical audience.
* 
Git is software that exists locally on a computer which lets a person save and revisit different versions of their work. GitHub is a website that allows developers to host their Git repositories ( directories of all the versions of their work). Morever, GitHub enables developers to share their code, comment on others' code , and collaborate. Users can take code that someone else wrote and edit it under their own account through a method called "forking". Users can then suggest that their changes be added to the original repository through a "pull request." If approved, the change would be "merged" with the original repository. 


*Describe what version control is and how GitHub helps with it.

Version control is a system that keeps track of the changes a person makes to a file (whether it be text for a book, code for software, etc). GitHub helps with version control by hosting changes made in Git, which is a popular Version Control System. If a person wants to share what is on their computer, they must "push", or upload, the files to GitHub. Other members of a development team can then access another person's repositories at any time and share any versions of changes that they make.



*Why do developers use version control (git)? Does that make sense to you? Why or why not?

Developers use version control so that they can look back at earlier versions of code to see what changes were made, when, and by whom. This makes sense because it allows developers to track their progress over time. Developers also use version control to collaborate with other developers via "merging", which takes commits by two or more people and combines them into a new document without overwriting one another.  It makes sense that developers use git in particular because its distributed nature prevents work from getting lost. If one person's local repository is damaged, they can pull everything back into their local repository from another server. 



*What doesn't make sense? What does?

The concept of version control makes sense and is brilliant. My life would have been so much easier with Git during college, since I always saved dozens of versions of every file I was working on! The concept of using the terminal to interact with Git makes sense as well; studying the  terminal in the Pre-Phase 0 lessons proved to be helpful here.

I don't fully understand the difference between password caching and SSH keys and will continue to explore this.

I was also a bit confused about the general order in which commands are given (i.e. whether you connect to a remote server before or after adding and committing), but feel this will become clearer with more practice.


