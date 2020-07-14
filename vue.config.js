module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/scss/_variables.scss";
                `
            }
        }
    },
    publicPath: '/sfp/'
};