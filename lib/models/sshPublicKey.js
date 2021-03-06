/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the SshPublicKey class.
 * @constructor
 * Contains information about SSH certificate public key and the path on the
 * Linux VM where the public key is placed.
 * @member {string} [path] Gets or sets the full path on the created VM where
 * SSH public key is stored. If the file already exists, the specified key is
 * appended to the file.
 * 
 * @member {string} [keyData] Gets or sets Certificate public key used to
 * authenticate with VM through SSH.The certificate must be in Pem format
 * with or without headers.
 * 
 */
function SshPublicKey(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.path !== undefined) {
      this.path = parameters.path;
    }
    if (parameters.keyData !== undefined) {
      this.keyData = parameters.keyData;
    }
  }    
}


/**
 * Validate the payload against the SshPublicKey schema
 *
 * @param {JSON} payload
 *
 */
SshPublicKey.prototype.serialize = function () {
  var payload = {};
  if (this['path'] !== null && this['path'] !== undefined) {
    if (typeof this['path'].valueOf() !== 'string') {
      throw new Error('this[\'path\'] must be of type string.');
    }
    payload['path'] = this['path'];
  }

  if (this['keyData'] !== null && this['keyData'] !== undefined) {
    if (typeof this['keyData'].valueOf() !== 'string') {
      throw new Error('this[\'keyData\'] must be of type string.');
    }
    payload['keyData'] = this['keyData'];
  }

  return payload;
};

/**
 * Deserialize the instance to SshPublicKey schema
 *
 * @param {JSON} instance
 *
 */
SshPublicKey.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['path'] !== undefined) {
      this['path'] = instance['path'];
    }

    if (instance['keyData'] !== undefined) {
      this['keyData'] = instance['keyData'];
    }
  }

  return this;
};

module.exports = SshPublicKey;
