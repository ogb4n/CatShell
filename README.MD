# HIDDEN  NETCAT REVERSE SHELL

## !!! Read this Before use !!!
<br>
This is a cyber-lab project aiming to understand how a malware could work and could be done.
This project is Educational purpose only and i'm not responsible for any illegal use you may have with it. This is using libraries that could have been deprecated or updated, so please consider that you will probably encouter bugs & errors.
<br><br>

## What is it ?
<br>
A very simple reverse shell :)
<br><br>

This is a Node.JS program using electron and some other libraries to pop up a window like a real program would do at the exception that it spawn a process that is detached from the main window  that iniate a connexion to the "attacker" from the "infected" computer.
<br><br>

## How does it works ?
<br>

When you start the executable a script will be executed at the same moment the "shitty app" starts, it goals is to copy the executable hidden script to a not much spotted folder on the "infected" machine and just make it as a service then start it. The script will initialize a connexion through a Netcat listening port on the "attacker" machine. 

## What you will need ? 
<br><br>

- NodeJs to compile the given code
- Netcat to listen
<br><br>
### How to use & edit
<br><br>
- You will need first to install libraries with `npm -i` from inside the CatShell folder and then install the pkg package with `sudo npm i pkg -g`

- You will need to build the "infected file" with the command : `pkg ressources.js`

- Start Tailwind from the folder with the command `npx tailwindcss -i ./src/input.css -o ./src/output.css --watch` to get the electron website working properly

- First, on the pc you want to get the shell from the victim, just start ncat with the command : `nc -l 4444`, 
start the main.js file with the command : 'node main.js' on the victims PC . If everything is working up, you can build the main.js file with the command : `pkg main.js` and then start sending it to your victims.