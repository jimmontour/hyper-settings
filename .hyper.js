module.exports = {
   updateChannel: 'canary',
   config: {
      // default font size in pixels for all tabs
      fontSize: 16,
      windowSize: [1080, 720],
      fontFamily: '"Fira Code", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
      lineHeight: 1.1,
      letterSpacing: 1,
      cursorShape: 'BLOCK',
      wickedBorder: true,
      padding: '10px',
      shell: 'C:\\Program Files\\Git\\git-cmd.exe',
      shellArgs: ['--command=usr/bin/bash.exe', '-l', '-i'],
      env: { TERM: 'cygwin' },
   },

   plugins: [
      "hyperterm-cobalt2-theme",
      "hyperpower",
      "hyper-drop-file",
      "hypercwd",
      "Hyperline",
      "hyperterm-summon",
      "hyper-font-ligatures",
      "hyperterm-dibdabs",
      "hyperlinks",
      "hyper-statusline-extended",
      "hyper-alt-click",
      "hyperterm-safepaste",
   ],

   // in development, you can create a directory under
   // `~/.hyperterm_plugins/local/` and include it here
   // to load it and avoid it being `npm install`ed
   // localPlugins: ['hyperterm-cobalt2-theme'],


};
