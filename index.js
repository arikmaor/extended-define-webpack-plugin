/*
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author Arik Maor
 */
var _ = require('lodash');
var webpack = require('webpack');

module.exports = ExtendedDefinePlugin;

function ExtendedDefinePlugin(definitions) {
    var clonedDefinitions = _.cloneDeep(definitions);
    return new webpack.DefinePlugin(deepJsonStringify(clonedDefinitions));
}

function deepJsonStringify(definitions) {
    return _.each(definitions, function (val, key) {
        definitions[key] = _.isString(val) ?
            JSON.stringify(val) :
            deepJsonStringify(definitions[key]);
    });
}