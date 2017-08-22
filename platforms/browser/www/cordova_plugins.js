cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-hot-code-push-plugin/www/chcp.js",
        "id": "cordova-hot-code-push-plugin.chcp",
        "pluginId": "cordova-hot-code-push-plugin",
        "clobbers": [
            "chcp"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-hot-code-push-plugin": "1.5.3"
}
// BOTTOM OF METADATA
});