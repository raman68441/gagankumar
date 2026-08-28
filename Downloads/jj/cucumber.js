module.exports = {
    default: {
        require: [
            'step-definitions/**/*.js',
            'support/**/*.js'
        ],
        format: [
            'progress',
            'html:cucumber-report.html'
        ],
        paths: [
            'feature/**/*.feature'
        ]
    }
};