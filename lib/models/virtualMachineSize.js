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
 * Initializes a new instance of the VirtualMachineSize class.
 * @constructor
 * Describes the properties of a VM size.
 * @member {string} [name] Gets or sets the VM size name.
 * 
 * @member {number} [numberOfCores] Gets or sets the Number of cores supported
 * by a VM size.
 * 
 * @member {number} [osDiskSizeInMB] Gets or sets the OS disk size allowed by
 * a VM size.
 * 
 * @member {number} [resourceDiskSizeInMB] Gets or sets the Resource disk size
 * allowed by a VM size.
 * 
 * @member {number} [memoryInMB] Gets or sets the Memory size supported by a
 * VM size.
 * 
 * @member {number} [maxDataDiskCount] Gets or sets the Maximum number of data
 * disks allowed by a VM size.
 * 
 */
function VirtualMachineSize(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.name !== undefined) {
      this.name = parameters.name;
    }
    if (parameters.numberOfCores !== undefined) {
      this.numberOfCores = parameters.numberOfCores;
    }
    if (parameters.osDiskSizeInMB !== undefined) {
      this.osDiskSizeInMB = parameters.osDiskSizeInMB;
    }
    if (parameters.resourceDiskSizeInMB !== undefined) {
      this.resourceDiskSizeInMB = parameters.resourceDiskSizeInMB;
    }
    if (parameters.memoryInMB !== undefined) {
      this.memoryInMB = parameters.memoryInMB;
    }
    if (parameters.maxDataDiskCount !== undefined) {
      this.maxDataDiskCount = parameters.maxDataDiskCount;
    }
  }    
}


/**
 * Validate the payload against the VirtualMachineSize schema
 *
 * @param {JSON} payload
 *
 */
VirtualMachineSize.prototype.serialize = function () {
  var payload = {};
  if (this['name'] !== null && this['name'] !== undefined) {
    if (typeof this['name'].valueOf() !== 'string') {
      throw new Error('this[\'name\'] must be of type string.');
    }
    payload['name'] = this['name'];
  }

  if (this['numberOfCores'] !== null && this['numberOfCores'] !== undefined) {
    if (typeof this['numberOfCores'] !== 'number') {
      throw new Error('this[\'numberOfCores\'] must be of type number.');
    }
    payload['numberOfCores'] = this['numberOfCores'];
  }

  if (this['osDiskSizeInMB'] !== null && this['osDiskSizeInMB'] !== undefined) {
    if (typeof this['osDiskSizeInMB'] !== 'number') {
      throw new Error('this[\'osDiskSizeInMB\'] must be of type number.');
    }
    payload['osDiskSizeInMB'] = this['osDiskSizeInMB'];
  }

  if (this['resourceDiskSizeInMB'] !== null && this['resourceDiskSizeInMB'] !== undefined) {
    if (typeof this['resourceDiskSizeInMB'] !== 'number') {
      throw new Error('this[\'resourceDiskSizeInMB\'] must be of type number.');
    }
    payload['resourceDiskSizeInMB'] = this['resourceDiskSizeInMB'];
  }

  if (this['memoryInMB'] !== null && this['memoryInMB'] !== undefined) {
    if (typeof this['memoryInMB'] !== 'number') {
      throw new Error('this[\'memoryInMB\'] must be of type number.');
    }
    payload['memoryInMB'] = this['memoryInMB'];
  }

  if (this['maxDataDiskCount'] !== null && this['maxDataDiskCount'] !== undefined) {
    if (typeof this['maxDataDiskCount'] !== 'number') {
      throw new Error('this[\'maxDataDiskCount\'] must be of type number.');
    }
    payload['maxDataDiskCount'] = this['maxDataDiskCount'];
  }

  return payload;
};

/**
 * Deserialize the instance to VirtualMachineSize schema
 *
 * @param {JSON} instance
 *
 */
VirtualMachineSize.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['name'] !== undefined) {
      this['name'] = instance['name'];
    }

    if (instance['numberOfCores'] !== undefined) {
      this['numberOfCores'] = instance['numberOfCores'];
    }

    if (instance['osDiskSizeInMB'] !== undefined) {
      this['osDiskSizeInMB'] = instance['osDiskSizeInMB'];
    }

    if (instance['resourceDiskSizeInMB'] !== undefined) {
      this['resourceDiskSizeInMB'] = instance['resourceDiskSizeInMB'];
    }

    if (instance['memoryInMB'] !== undefined) {
      this['memoryInMB'] = instance['memoryInMB'];
    }

    if (instance['maxDataDiskCount'] !== undefined) {
      this['maxDataDiskCount'] = instance['maxDataDiskCount'];
    }
  }

  return this;
};

module.exports = VirtualMachineSize;
