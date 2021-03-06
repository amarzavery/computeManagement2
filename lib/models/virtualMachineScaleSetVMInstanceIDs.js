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

var util = require('util');

/**
 * @class
 * Initializes a new instance of the VirtualMachineScaleSetVMInstanceIDs class.
 * @constructor
 * Specifies the list of virtual machine scale set instance IDs.
 * @member {array} [instanceIds] Gets or sets the virtual machine scale set
 * instance ids.
 * 
 */
function VirtualMachineScaleSetVMInstanceIDs(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.instanceIds) {
      var tempParametersinstanceIds = [];
      parameters.instanceIds.forEach(function(element) {
        if (element !== undefined) {
          element = element;
        }
        tempParametersinstanceIds.push(element);
      });
      this.instanceIds = tempParametersinstanceIds;
    }
  }    
}


/**
 * Validate the payload against the VirtualMachineScaleSetVMInstanceIDs schema
 *
 * @param {JSON} payload
 *
 */
VirtualMachineScaleSetVMInstanceIDs.prototype.serialize = function () {
  var payload = {};
  if (util.isArray(this['instanceIds'])) {
    payload['instanceIds'] = [];
    for (var i = 0; i < this['instanceIds'].length; i++) {
      if (this['instanceIds'][i] !== null && this['instanceIds'][i] !== undefined) {
        if (typeof this['instanceIds'][i].valueOf() !== 'string') {
          throw new Error('this[\'instanceIds\'][i] must be of type string.');
        }
        payload['instanceIds'][i] = this['instanceIds'][i];
      }
    }
  }

  return payload;
};

/**
 * Deserialize the instance to VirtualMachineScaleSetVMInstanceIDs schema
 *
 * @param {JSON} instance
 *
 */
VirtualMachineScaleSetVMInstanceIDs.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['instanceIds']) {
      var tempInstanceinstanceIds = [];
      instance['instanceIds'].forEach(function(element1) {
        if (element1 !== undefined) {
          element1 = element1;
        }
        tempInstanceinstanceIds.push(element1);
      });
      this['instanceIds'] = tempInstanceinstanceIds;
    }
  }

  return this;
};

module.exports = VirtualMachineScaleSetVMInstanceIDs;
