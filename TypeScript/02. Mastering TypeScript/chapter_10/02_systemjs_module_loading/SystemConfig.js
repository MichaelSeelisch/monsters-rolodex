SystemJS.config({
    packages: {
        'lib': { defaultExtension: 'js' }
    }
});
SystemJS.import('main.js');
