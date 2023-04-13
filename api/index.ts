import Manifest from './src/manifest';

function start() :void {
  const manifest = new Manifest();
  return manifest.start();
}

start();
