# _Mr. Roboger's Neighborhood_

_This is a practice webpage that will return a curated response based on a number provided by the user_

#### By _Sage Sypert_

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _jQuery_
* _Bootstrap_
* _GitHub_
* _Git Bash_
* _Visual Studio Code_
* _Google Chrome Developer Tools_

## Description

_Mr. Roboger's Neighborhood is basic webpage that will return a series of numbers and words that are generated depending on the number the user submits. For every "1" in the chosen number, it will be replaced by the word "Beep!". For every "2" in the chosen number, it will be replaced by the word "Boop!". For every "3" in the chosen number, it will be replaced by the phrase "Won't you be my neighbor?". User can enter a new number at any time._

## Setup/Installation Requirements

* _To view this webpage, follow this link in a modern browser_
* _You can also use git to make a copy of this project with your terminal by inputting the following commands:  $cd directory (of your choice), then:  git clone https://github.com/sagesypert/mr-robogers-neighborhood.git_
* _Remove all remotes pointing to my directory by typing:  $ git remote rm origin_
* _Add your own remote repository by typing:  $ git remote add (location nickname) followed by your repository's URL_
* _Access your copied files wherever you prefer to code! You can do this by typing in your terminal:  $ code ._

## Specs

Describe: userInputArray(numbers)

Test: If any number inputted by user contains a 1 it is returned with the word "Beep!"
Expect: userNumber.push(beep)

Test: If any number inputted by user contains a 2 it is returned with word "Boop!"
Expect:  userNumber.push(boop)

Test: If any number inputted by user contains a 3 it is returned with word "Won't you be my neighbor?"
Expect:  userNumber.push(neighbor)

Test: Program will recognize when a number contains 1,2, or 3 and return with a string of numbers replacing 1,2, or 3 with "beep, "boop", or "Won't you be my neighbor?"
Expect:  return userNumber

Test: Program will recognize when a number contains 1,2, or 3 and return with a string of numbers replacing 1,2, or 3 with "beep, "boop", or "Won't you be my neighbor?". Program will still include range of other numbers not matching those conditions in the string.
Expect:  return userNumber

## Known Bugs

* _No Known Issues_

## License

_MIT License_

Copyright (c) 2021 Sage Sypert

## Contact Information

_Sage Sypert <sage.sypert@gmail.com>_