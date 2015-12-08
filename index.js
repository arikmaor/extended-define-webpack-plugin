/*
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author Arik Maor
 */
var _ = require('underscore');
var webpack = require('webpack');

module.exports = ExtendedDefinePlugin;

function ExtendedDefinePlugin(definitions) {
    return new webpack.DefinePlugin(deepJsonStringify(definitions));
}

function deepJsonStringify(definitions) {
    return _.each(definitions, function (val, key) {
        definitions[key] = _.isString(val) ?
            JSON.stringify(val) :
            deepJsonStringify(definitions[key]);
    });
}