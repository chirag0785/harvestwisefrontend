module.exports = {
    "extends": [
        "react-app",
        "react-app/jest"
    ],
    rules: {
        'no-unused-vars': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        // Add more rules here as needed, set them to 'warn'
    },
    "plugins": [
        "react-hooks" // Ensure this plugin is included
    ]
};
