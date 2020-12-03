## Building

The only package that is require is `ejs`, which can be installed using npm or yarn. Note that the command
has to be installed globally, since the build script uses the `ejs` command. Once this is installed, 
simply run `sh build.sh`. This command will compile the website and output it to the parent directory.

## Stack

The RPI-IEEE website uses EJS so that the data is separate from the website structure. In other words, if 
we want to make a change we can just edit the respective JSON file and recompile. All data can be found in the `/data` directory. 

