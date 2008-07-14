from distutils.core import setup
import py2exe

includes = ["encodings", "encodings.*"]
options = {"py2exe":
            {   "compressed": 1,
                "optimize": 2,
                "includes": includes,
                "bundle_files": 1
            }
          }
setup(   
    version = "0.1.0",
    description = "search panda",
    name = "search panda",
    options = options,
    zipfile=None,
    console=["search.py"]
    # console=[{"script": "search.py", "icon_resources": [(1, "search.ico")] }] 
    )
