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
 * Initializes a new instance of the VirtualMachineCaptureParameters class.
 * @constructor
 * Capture Virtual Machine parameters.
 * @member {string} vhdPrefix Gets or sets the captured VirtualHardDisk's name
 * prefix.
 * 
 * @member {string} destinationContainerName Gets or sets the destination
 * container name.
 * 
 * @member {boolean} overwriteVhds Gets or sets whether it overwrites
 * destination VirtualHardDisk if true, in case of conflict.
 * 
 */
function VirtualMachineCaptureParameters(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.vhdPrefix !== undefined) {
      this.vhdPrefix = parameters.vhdPrefix;
    }
    if (parameters.destinationContainerName !== undefined) {
      this.destinationContainerName = parameters.destinationContainerName;
    }
    if (parameters.overwriteVhds !== undefined) {
      this.overwriteVhds = parameters.overwriteVhds;
    }
  }    
}


/**
 * Validate the payload against the VirtualMachineCaptureParameters schema
 *
 * @param {JSON} payload
 *
 */
VirtualMachineCaptureParameters.prototype.serialize = function () {
  var payload = {};
  if (this['vhdPrefix'] === null || this['vhdPrefix'] === undefined || typeof this['vhdPrefix'].valueOf() !== 'string') {
    throw new Error('this[\'vhdPrefix\'] cannot be null or undefined and it must be of type string.');
  }
  payload['vhdPrefix'] = this['vhdPrefix'];

  if (this['destinationContainerName'] === null || this['destinationContainerName'] === undefined || typeof this['destinationContainerName'].valueOf() !== 'string') {
    throw new Error('this[\'destinationContainerName\'] cannot be null or undefined and it must be of type string.');
  }
  payload['destinationContainerName'] = this['destinationContainerName'];

  if (this['overwriteVhds'] === null || this['overwriteVhds'] === undefined || typeof this['overwriteVhds'] !== 'boolean') {
    throw new Error('this[\'overwriteVhds\'] cannot be null or undefined and it must be of type boolean.');
  }
  payload['overwriteVhds'] = this['overwriteVhds'];

  return payload;
};

/**
 * Deserialize the instance to VirtualMachineCaptureParameters schema
 *
 * @param {JSON} instance
 *
 */
VirtualMachineCaptureParameters.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['vhdPrefix'] !== undefined) {
      this['vhdPrefix'] = instance['vhdPrefix'];
    }

    if (instance['destinationContainerName'] !== undefined) {
      this['destinationContainerName'] = instance['destinationContainerName'];
    }

    if (instance['overwriteVhds'] !== undefined) {
      this['overwriteVhds'] = instance['overwriteVhds'];
    }
  }

  return this;
};

module.exports = VirtualMachineCaptureParameters;
