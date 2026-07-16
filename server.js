const { spawn } = require('child_process');
const path = require('path');

const port = process.env.PORT || '3000';
const bindHost = process.env.BIND_HOST || '0.0.0.0';
const certName = process.env.MESHCENTRAL_CERT || 'localhost';

const meshCentralEntry = path.join(__dirname, 'node_modules', 'meshcentral', 'meshcentral.js');

const redirPort = process.env.REDIR_PORT || '0';
const redirAliasPort = process.env.REDIR_ALIAS_PORT || '0';

const child = spawn(process.execPath, [
  meshCentralEntry,
  '--port', port,
  '--aliasport', port,
  '--redirport', redirPort,
  '--rediraliasport', redirAliasPort,
  '--portbind', bindHost,
  '--redirportbind', bindHost,
  '--cert', certName
], {
  stdio: 'inherit',
  env: {
    ...process.env,
    PORT: port,
    NODE_ENV: process.env.NODE_ENV || 'production'
  }
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  }
  process.exit(code ?? 0);
});

['SIGINT', 'SIGTERM'].forEach((signal) => {
  process.on(signal, () => child.kill(signal));
});
