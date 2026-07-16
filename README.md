# MeshCentral Setup

This repository contains a customized MeshCentral server setup.

## Current Configuration
- **Server**: MeshCentral v1.1.57
- **Mode**: LAN Mode
- **Ports**: 443 (HTTPS), 80 (HTTP Redirection)

## Running the Server
To start the server locally, navigate to the root directory and run:
```powershell
npm start
```

## Render Deployment
This project includes a Render configuration file for deployment. To deploy it:
1. Connect this repository to Render.
2. Create a web service using the included render.yaml.
3. Render will use the `npm install` build step and `npm start` startup command.

## Maintenance
- Sensitive data in `meshcentral-data/` is excluded by `.gitignore`.
- Temporary scratch files and logs are regularly cleaned up.
