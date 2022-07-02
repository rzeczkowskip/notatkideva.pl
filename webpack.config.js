const Encore = require('@symfony/webpack-encore');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  .setOutputPath('./static/dist')
  .setPublicPath('/dist')
  .cleanupOutputBeforeBuild()

  .disableSingleRuntimeChunk()

  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .enableIntegrityHashes(Encore.isProduction())

  .configureManifestPlugin((options) => {
    const manifestFileName = Encore.isProduction() ? 'manifest.json' : 'manifest_dev.json';
    options.fileName = `../../data/${manifestFileName}`;
  })

  .enableSassLoader()
  .enablePostCssLoader()

  .addPlugin(new ESLintWebpackPlugin())

  .enableIntegrityHashes(Encore.isProduction())

  .addEntry('app', './assets/src/app.js')
// .copyFiles({
//   from: './assets/src/images',
//   to: Encore.isProduction() ? 'images/[path][name].[hash:8].[ext]' : 'images/[path][name].[ext]',
//   pattern: /\.(png|jpe?g|gif|svg)$/,
// })
;

Encore.configureWatchOptions((watchOptions) => {
  /* eslint-disable no-param-reassign */
  watchOptions.poll = 250; // check for changes every 250 milliseconds
});

module.exports = Encore.getWebpackConfig();
