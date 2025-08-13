# Creating my own cli from sratch

Refered to the documentation [by](https://medium.com/@manavshrivastava/lets-build-a-cli-command-line-interface-with-node-js-d3b5faacc5ea) which made it atleast 10 times easier to understand how I can build my own cli from scratch, this is a fairly simple one where the entered string gets translated to a language that has been mentioned in the command line besied the option provided(-l in this case). 
As someone who is exploring git, github and bash commands as well, this was a small project that honestly felt extremely fun to work on though it did take some tries to make it work. 
If youre using the latest versions of yark, chalk etc etc the above documentation's code might need some tweaks (mine did).

  
## Libraries used :
1. Chalk : Adds colors and styles to the console output. [by](https://www.npmjs.com/package/chalk/v/4.1.0)
2. Yargs : Helps in building the command line interface. [by](https://www.npmjs.com/package/yargs)
3. Google Translate API :	Allows your CLI to translate text directly in the terminal. [by](https://cloud.google.com/translate/docs/reference/rest)
4. Figlet : Adds loading spinners while performing async tasks (e.g., fetching data). [by](https://www.npmjs.com/package/figlet)
5. Boxen : Draws boxes around text in the terminal. [by](https://www.npmjs.com/package/boxen)



## To make it work on your system

1. **Fork** this repository on GitHub.  
2. **Clone** your fork to your local machine:  
   ```bash
   git clone <your-fork-url>
   cd <repo-name>
   ```

3. **Install the required dependencies**:

   ```bash
   npm install
   ```

4. **Link the CLI globally** so you can use it anywhere:

   ```bash
   npm install -g
   ```

   > This will register your CLI command system-wide.

5. **Run the CLI**:

   ```bash
   <cli-command>
   ```

   > This will guide you on how to translate text or check the CLI version.

---

## ⚠ If you face errors

### 1. `EEXIST: file already exists`

This means a previous version of the CLI is already linked.
To fix:

```bash
npm uninstall -g <cli-command>
npm link
```

Or force overwrite:

```bash
npm link --force
```

### 2. `Cannot find module '<module-name>'`

This happens when dependencies are missing.
To fix:

```bash
npm install
```

### 3. CLI not found after installation

Make sure your global `npm` bin directory is in your system `PATH`.
On macOS/Linux:

```bash
echo $PATH
```

On Windows:

```powershell
echo $env:PATH
```


