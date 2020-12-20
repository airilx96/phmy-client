module.exports = {
    packagerConfig: {
        icon: 'icons/peacehotel',
        protocols: [{
            name: 'peacehotel-protocol',
            schemes: 'peacehotel',
        }, ],
        appCategoryType: 'public.app-category.games',
    },
    makers: [{
            name: '@electron-forge/maker-squirrel',
            config: {
                iconUrl: 'https://imgur.com/q3MBwUQ.png',
                setupIcon: 'icons/setup.ico',
                loadingGif: 'icons/setup-splash.gif',
            },
        },
        {
            name: '@electron-forge/maker-dmg',
            config: {},
        },
        {
            name: '@electron-forge/maker-zip',
            platforms: ['darwin'],
        },
        {
            name: '@electron-forge/maker-deb',
            config: {},
        },
        {
            name: '@electron-forge/maker-rpm',
            config: {},
        },
    ],
};