const CracoAntDesignPlugin = require("craco-antd");
const CracoLessPlugin = require("craco-less");
const CracoAlias = require("craco-alias");
const pallet = {
    "@primary-color": "#5E43FF",
    "@black": "#252224",
    "@red": "#DE4242",
    "@indigo": "#2D4362",
    "@sky": "#82C3DE",
    "@white": "#FFFFFF",
    "@yellow": "#ECA51B",
    "@lightgray": "#EAEAEA",
    "@neongreen": "#2CDF3D",
    "@gray": "#B0B0B0",
};
module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: "options",
                baseUrl: "./src",
                aliases: {
                    "@": "./",
                    "@apis": "./apis",
                    "@assets": "./assets",
                    "@components": "./components",
                    "@hooks": "./hooks",
                    "@pages": "./pages",
                    "@redux": "./redux",
                    "@utils": "./utils",
                },
            },
        },
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: pallet,
                        javascriptEnabled: true,
                    },
                },
            },
        },
        {
            plugin: CracoAntDesignPlugin,
            options: {
                customizeTheme: pallet,
            },
        },
    ],
};
