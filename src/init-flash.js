const path = require('path');

const getPluginName = () => {
  switch (process.platform) {
    case 'win32':
      return 'pepper-flash-player/pepflashplayer64_32_0_0_445.dll';
    case 'darwin':
      return 'pepper-flash-player/PepperFlashPlayer.plugin';
    case 'linux':
      return 'pepper-flash-player/libpepflashplayer.so';
  }
};

module.exports = (app) => {
  const pluginName = getPluginName();

  app.commandLine.appendSwitch(
    'ppapi-flash-path',
    path.join(__dirname, pluginName),
  );

  app.commandLine.appendSwitch('ppapi-flash-version', '32.0.0.445');
};
