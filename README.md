# Cypress Course Apps

# Setup Environment

This document outlines the steps needed to set up your development environment.

---

## Step 1: Install Node

- Follow the instructions in the Module 1 document to install Node.

---

## Step 2: Create a GitHub Account and Generate a Personal Access Token (PAT)

1. **Create an Account:**  
   Visit [GitHub](http://github.com) to create your account.

2. **Generate a PAT:**  
   - Go to [GitHub Settings - Tokens](https://github.com/settings/tokens).  
   - Generate a personal access token (PAT) as passwords are deprecated.  
   - **Note:** Save your PAT securely, as it will be needed when pushing or pulling repositories.

---

## Step 3: Setup Git Locally

### For Windows Users:

1. **Download and Install Git:**
   - Visit the [Git for Windows download page](https://git-scm.com/download/win) and click **Download** to get the `.exe` installer.
   - Run the installer:
     - Open the downloaded `.exe` file.
     - Click **Next** through the installation steps.
     - Select **Git Bash** when prompted for a terminal emulator.
     - Keep the default settings unless you need custom options.
     - Click **Install** and then **Finish**.

2. **Verify Installation:**
   - Open **Command Prompt (cmd)** or **Git Bash** and run:
     ```
     git --version
     ```

3. **Configure Git (Sign in to GitHub):**
   - Open Git Bash or Command Prompt and set your name and email:
     ```
     git config --global user.name "Your Name"
     git config --global user.email "your-email@example.com"
     ```
   - The first time you push or pull a repository, Git will ask for your GitHub username and password (or token). Use your PAT when prompted.

---

### For Mac Users:

1. **Install Git using Homebrew:**
  ```
  brew install git
  ```

2. **Verify Installation:**
- Open Terminal and run:
  ```
  git --version
  ```

3. **Configure Git (Sign in to GitHub):**
- Follow the same sign in steps as above:
  ```
  git config --global user.name "Your Name"
  git config --global user.email "your-email@example.com"
  ```

---

## Clone the Repository

1. **Clone the Repository:**
- Open your terminal or Git Bash, navigate to your desired directory, and run:
  ```
  git clone https://github.com/AlmondRepo/cypress-course-apps.git
  ```

2. **Navigate to the Signup Repository:**
- Change into the `signup` folder inside the cloned repository:
  ```
  cd cypress-course-apps/signup
  ```

3. **Install Packages:**
- Run the following command to install the required packages:
  ```
  npm install
  ```

4. **Run the Application:**
- Start the application by running:
  ```
  npm start
  ```
- You should be redirected to [http://localhost:3000](http://localhost:3000).

5. **Install Cypress (Development Dependency):**
- Run:
  ```
  npm install cypress --save-dev --ignore-scripts
  ```

6. **Install Cypress via npx:**
- Run:
  ```
  npx cypress install
  ```

7. 
- Run:
  ```
  npx cypress open
  ```

To open the Cypress Devtool

---

Good luck!
