import subprocess
import sys
import apiHandler



# Help to install packages form python file (this was made to works with replit)
def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])


# Install every package needed
# Package name should be used

install("pymongo")
install("dnspython")
install("Flask")
install("Flask-Cors")

apiHandler.app.run()