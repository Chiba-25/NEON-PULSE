NEON PULSE - desktop app

GLOBAL HOTKEYS (work in the background)
  Ctrl+Alt+1..9, 0, -, =   play pads 1-12
  Ctrl+Alt+S               stop all
  Ctrl+Alt+T               toggle always-on-top

BUILD THE EXE WITHOUT INSTALLING ANYTHING (GitHub does it for you)
  1. Create a free GitHub repo and upload everything in this folder
     (including the hidden .github folder).
  2. Open the Actions tab -> "Build Windows EXE" -> Run workflow.
  3. When it finishes, download the NeonPulse-exe artifact. NeonPulse.exe is a
     single portable file, no installer.

BUILD ON YOUR OWN PC (needs Node.js)
  npm install
  npm run build        -> dist/NeonPulse.exe
  npm start            -> run without building

SHARING WITH OTHERS
  Other apps only see real audio devices, so you still need a virtual cable
  (VB-CABLE / BlackHole). See the "Go Live" panel in the app.
