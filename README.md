# CookAlong
Master the art of cooking with your hands-free, digital sous chef who guides you through recipes by voice command.

## Minimum Viable Product (MVP)
- Take a recipe either directly from the user or by scrapping one online
- Read it back to the user one step at a time 
- Start off with a checklist of ingredients and supplies needed like pans to make sure the user has everything they need before they begin
- Read each step and wait for the user’s voice commands before continuing
- Set timers for any steps that include time information 
- [Some common commands to implement](https://support.google.com/googlenest/answer/7309433?hl=en)

## Stretch Goals
- Add user accounts so user's can save their recipes and any edits
- Convert recipes to account for more or less portions
- Add ability to scan recipes through Optical Character Recognition (OCR) so the user doesn’t have to manually input family / hardcopy recipes
- Add cute images / art for each ingredient to make cards for the user to click or swipe past to ensure the user isn’t forgetting an item
- Add extra tutorial gifs / videos / links on more complicated or skill based steps to help new cooks (user can toggle these on or off based on skill level)
  - Ex. how to dice an onion, how to safely flambe a dish, how to debone a fish, etc


## Resources
### General Software
- [Git Bash for Windows](https://gitforwindows.org)
  - For command line Git on Windows
- Any text editor can be used eg. [Visual Studio Code](https://code.visualstudio.com/)
- [Figma](https://www.figma.com/)
    - Free UX design tool that is completely web-based
- [Adobe XD](https://www.adobe.com/products/xd.html)
    - More sophisticated UX tool, you can have one project for free

### Tech Stack
- [Ruby on Rails](https://guides.rubyonrails.org/) 
  - Framework for web development
  - Uses [Ruby](https://www.ruby-lang.org/en/) for its language
    - [A 30 min interactive tutorial/walkthrough of Ruby](https://try.ruby-lang.org/)
    - [A 1.5 hour beginner course to Rails](https://www.pluralsight.com/courses/code-school-rails-for-zombies)
    - [Other tutorials if you want to learn more!](https://www.fullstackacademy.com/blog/learn-ruby-on-rails-for-free-with-these-6-websites)
- [PostgreSQL](https://www.postgresql.org/)
  - Free, open source, object-relational database
- [Recipe APIs](https://rapidapi.com/blog/recipe-apis/) for both searching or scraping recipes
- Google Cloud Speech Services
  - [Speech to Text](https://cloud.google.com/speech-to-text/)
    - [Ruby API Client library for the Cloud Speech-to-Text API](https://github.com/googleapis/google-cloud-ruby/tree/master/google-cloud-speech)
  - [Text to Speech](https://cloud.google.com/text-to-speech/)

### [Getting Started](https://docs.google.com/document/d/1197JNFaopJMXiP0vzkoyVo8SGoiRdAdkvnnxDlJdD74/edit?usp=sharing)
Here's hopefully a helpful guide to setting up everything on your computer. It is mostly geared towards a Windows user, but I think it should also include macOS options.

### Suggestions
- [AngularJS](https://angularjs.org/) vs [ReactJS](https://reactjs.org/) vs [Bootstrap](https://getbootstrap.com/)
  - Frontend frameworks for web development
  - If we go by google search results, React is the most popular to pair with RoR out of the 3 options. However, all of them are pretty widely used. 

### Learning Resources
Look through all of these resources at the beginning of the semester!
- [How to be successful in ACM Projects](https://docs.google.com/document/d/18Zi3DrKG5e6g5Bojr8iqxIu6VIGl86YBSFlsnJnlM88/edit?usp=sharing)
-	[Overview of making API calls](https://snipcart.com/blog/apis-integration-usage-benefits)
- [Professor Cole's How to Program (and the "yellow pad" technique)](https://personal.utdallas.edu/~jxc064000/HowToProgram.html)

### [Common GitHub Commands](https://education.github.com/git-cheat-sheet-education.pdf)
[GitHub Cheatsheet PDF](https://www.atlassian.com/dam/jcr:8132028b-024f-4b6b-953e-e68fcce0c5fa/atlassian-git-cheatsheet.pdf)

Login:

| Command | Description |
| ------ | ------ |
| git config --global user.name "username" |  |
| git config --global user.email "email" |  |
| git config user.name | Checks that you're in, in case you’re unsure |

First Time Setup:

| Command | Description |
| ------ | ------ |
| git clone | Creates local copy of remote repo. Try to not do this again unless you blew up your computer |

General Use

| Command | Description |
| ------ | ------ |
| cd "CookAlong" | Change directories over to our repository |
| git branch | Lists branches for you |
| git branch "branch name" | Makes new branch |
| git checkout "branch name" | Switch to branch |
| git checkout -b "branch name" | Same as 2 previous commands together |
| git add . | Finds all changed files |
| git commit -m "Testing123" | Commit with message |
| git push origin "branch" | Push to branch |
| git pull origin "branch" | Pull updates from a specific branch |
