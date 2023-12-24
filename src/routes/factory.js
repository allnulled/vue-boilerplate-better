export default (components) => {
    return [
        {
            path: "/about",
            component: components.AboutPage,
        },
        {
            path: "/contact",
            component: components.ContactPage,
        },
        {
            path: "/settings",
            component: components.SettingsPage,
        },
        {
            path: "/",
            component: components.HomePage,
        },
    ];
}