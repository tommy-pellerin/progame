// Webpack utilise ce module Node.js pour travailler avec les dossiers.
const path = require('path');
//nous allons utiliser le plug-in "MiniCSSExtract"
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//importer Dotenv
const Dotenv = require('dotenv-webpack');

// Ceci est la configuration principale de ton projet.
// Ici, tu peux écrire les différentes options que tu souhaites, et dire à Webpack quoi faire.
module.exports = (env) => {
  // Ici, faisons un console.log pour voir si ça fonctionne bien :
  console.log("NODE_ENV:", env.NODE_ENV);

  return {

    // Ceci est le chemin vers le "point d'entrée" de ton app.
    // C'est depuis ce fichier que Webpack commencera à travailler.
    entry: './src/index.js',

    // C'est ici qu'on dit à Webpack où mettre le fichier résultant avec tout ton JS.
    output: {
      // Le chemin relatif au dossier courant (la racine du projet)
      path: path.resolve(__dirname, 'dist'),
      // Le nom du fichier de ton bundle JS
      filename: 'bundle.js',
      // L'URL relatif au HTML pour accéder aux assets de l'application. Ici,
      // le HTML est situé à la racine du projet, donc on met une chaîne vide.
      publicPath: '',
    },
    
    module: {
      rules: [
        //Gestion des images
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
        },
        //Gestion des fonts
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        //Ajout de Babel loader
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        //Ajout de SASS loader
        {
          // Pour le SASS :
          test: /\.(sa|sc|c)ss$/, // On applique notre règle aux fichiers .sass, .scss et .cs
          use: [
            // Attention, les loaders sont ajoutés en sens inverse !!
            // Effectivement, c'est le dernier loader qui est exécuté en premier.
            // Donc celui-ci arrive en fin de chaîne :
            {
              loader: 'css-loader', // Ce loader permet d'utiliser url() et @import dans ton CSS
            },
            {
              // Ensuite on utilise le loader de postCSS, qui ajoutera un minifier par exemple,
              // ou bien un préfixeur automatique des règles CSS (--moz par exemple)
              loader: 'postcss-loader',
            },
            {
              // En premier, on transforme le SASS en CSS :
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
              },
            },
          ],
        },
        //nous allons utiliser le plug-in "MiniCSSExtract"
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              // On le met en tout premier, afin qu'il soit exécuté en dernier,
              // une fois que tous les changements souhaités sont appliqués à notre CSS.
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
              },
            },
          ],
        },
        //installe pour lire les image dans le fichier html, install avec pnpm add --save-dev html-loader
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
            },
          ],
        },


      ],
    },
    plugins: [
      //MiniCssExtractPlugin
      new MiniCssExtractPlugin({
        filename: 'bundle.css',
      }),
      //DOTDENV
      new Dotenv(),
    ],
    // Par défaut, le mode de Webpack est "production". En fonction de ce qui est
    // écrit ici, tu pourras appliquer différentes méthodes dans ton bundle final.
    // Pour le moment, nous avons besoin du mode "développement", car nous n'avons,
    // par exemple, pas besoin de minifier notre code.
    mode: 'development',
  };

};