# How to start developing HTML templates on Windows

1. Enable WSL by following these steps:
   - Open "Control Panel".
   - Open "Programs and Features".
   - Click on "Turn Windows features on or off".
   - Find and check "Windows Subsystem for Linux".
2. Install "Ubuntu" from Microsoft Store.
3. After successfull install, open Ubuntu.
4. Follow post-install instructions on screen.
5. Paste this command to terminal `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash` to install node version manager (`nvm` for short).
6. Close terminal or enter `source ~/.bashrc` to refresh executables path.
7. Install node by using `nvm install node`.
8. Clone repository if you didn't already by using command `git clone <SSH || HTTPS repository address>`.
9. Move to 'frontend' directory from project root with `cd frontend`.
10. Run `npm install`.
11. Run `npm run build` for production ready version of frontend files.
12. Run `npm run build:dev` for development mode.
13. You can also run `npm run serve` if you want to start local web server to view files. Web server is implicitly started with `npm run build:dev` so no need to run these two together.

# How to start developing HTML templates on Unix based OS

Skip first 5 steps described above. Continue from 5. until the last.
