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
<br>

- NodeJs to compile the given code
- Netcat to listen

