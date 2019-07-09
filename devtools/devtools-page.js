(function () {
    if (preferences.showDevToolsPanel)
        chrome.devtools.panels.create('LibreThisCookie', 'img/icon_32x32.png', 'devtools/panel.html');
})();
