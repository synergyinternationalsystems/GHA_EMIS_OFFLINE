:: if [ -z "$GH_TOKEN" ]; then
::   echo "You must set the GH_TOKEN environment variable."
::   echo "See README.md for more details."
::   exit 1

:: This will build, package and upload the app to GitHub.
node_modules/.bin/build --win -p always --ia32
PAUSE