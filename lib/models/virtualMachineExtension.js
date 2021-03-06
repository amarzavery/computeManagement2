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

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the VirtualMachineExtension class.
 * @constructor
 * Describes a Virtual Machine Extension.
 * @member {string} [publisher] Gets or sets the name of the extension handler
 * publisher.
 * 
 * @member {string} [virtualMachineExtensionType] Gets or sets the type of the
 * extension handler.
 * 
 * @member {string} [typeHandlerVersion] Gets or sets the type version of the
 * extension handler.
 * 
 * @member {boolean} [autoUpgradeMinorVersion] Gets or sets whether the
 * extension handler should be automatically upgraded across minor versions.
 * 
 * @member {object} [settings] Gets or sets Json formatted public settings for
 * the extension.
 * 
 * @member {object} [protectedSettings] Gets or sets Json formatted protected
 * settings for the extension.
 * 
 * @member {string} [provisioningState] Gets or sets the provisioning state,
 * which only appears in the response.
 * 
 * @member {object} [instanceView] Gets or sets the virtual machine extension
 * instance view.
 * 
 * @member {string} [instanceView.name] Gets or sets the virtual machine
 * extension name.
 * 
 * @member {string} [instanceView.type] Gets or sets the full type of the
 * extension handler which includes both publisher and type.
 * 
 * @member {string} [instanceView.typeHandlerVersion] Gets or sets the type
 * version of the extension handler.
 * 
 * @member {array} [instanceView.substatuses] Gets or sets the resource status
 * information.
 * 
 * @member {array} [instanceView.statuses] Gets or sets the resource status
 * information.
 * 
 */
function VirtualMachineExtension(parameters) {
  VirtualMachineExtension['super_'].call(this, parameters);
  if (parameters !== null && parameters !== undefined) {
    if (parameters.publisher !== undefined) {
      this.publisher = parameters.publisher;
    }
    if (parameters.virtualMachineExtensionType !== undefined) {
      this.virtualMachineExtensionType = parameters.virtualMachineExtensionType;
    }
    if (parameters.typeHandlerVersion !== undefined) {
      this.typeHandlerVersion = parameters.typeHandlerVersion;
    }
    if (parameters.autoUpgradeMinorVersion !== undefined) {
      this.autoUpgradeMinorVersion = parameters.autoUpgradeMinorVersion;
    }
    if (parameters.settings !== undefined) {
      this.settings = parameters.settings;
    }
    if (parameters.protectedSettings !== undefined) {
      this.protectedSettings = parameters.protectedSettings;
    }
    if (parameters.provisioningState !== undefined) {
      this.provisioningState = parameters.provisioningState;
    }
    if (parameters.instanceView) {
      this.instanceView = new models['VirtualMachineExtensionInstanceView'](parameters.instanceView);
    }
  }    
}

util.inherits(VirtualMachineExtension, models['Resource']);

/**
 * Validate the payload against the VirtualMachineExtension schema
 *
 * @param {JSON} payload
 *
 */
VirtualMachineExtension.prototype.serialize = function () {
  var payload = VirtualMachineExtension['super_'].prototype.serialize.call(this);
  if (this['publisher'] !== null && this['publisher'] !== undefined) {
    if (typeof this['publisher'].valueOf() !== 'string') {
      throw new Error('this[\'publisher\'] must be of type string.');
    }
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['publisher'] = this['publisher'];
  }

  if (this['virtualMachineExtensionType'] !== null && this['virtualMachineExtensionType'] !== undefined) {
    if (typeof this['virtualMachineExtensionType'].valueOf() !== 'string') {
      throw new Error('this[\'virtualMachineExtensionType\'] must be of type string.');
    }
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['type'] = this['virtualMachineExtensionType'];
  }

  if (this['typeHandlerVersion'] !== null && this['typeHandlerVersion'] !== undefined) {
    if (typeof this['typeHandlerVersion'].valueOf() !== 'string') {
      throw new Error('this[\'typeHandlerVersion\'] must be of type string.');
    }
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['typeHandlerVersion'] = this['typeHandlerVersion'];
  }

  if (this['autoUpgradeMinorVersion'] !== null && this['autoUpgradeMinorVersion'] !== undefined) {
    if (typeof this['autoUpgradeMinorVersion'] !== 'boolean') {
      throw new Error('this[\'autoUpgradeMinorVersion\'] must be of type boolean.');
    }
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['autoUpgradeMinorVersion'] = this['autoUpgradeMinorVersion'];
  }

  if (this['settings'] !== null && this['settings'] !== undefined) {
    if (typeof this['settings'] !== 'object') {
      throw new Error('this[\'settings\'] must be of type object.');
    }
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['settings'] = this['settings'];
  }

  if (this['protectedSettings'] !== null && this['protectedSettings'] !== undefined) {
    if (typeof this['protectedSettings'] !== 'object') {
      throw new Error('this[\'protectedSettings\'] must be of type object.');
    }
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['protectedSettings'] = this['protectedSettings'];
  }

  if (this['provisioningState'] !== null && this['provisioningState'] !== undefined) {
    if (typeof this['provisioningState'].valueOf() !== 'string') {
      throw new Error('this[\'provisioningState\'] must be of type string.');
    }
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['provisioningState'] = this['provisioningState'];
  }

  if (this['instanceView']) {
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['instanceView'] = this['instanceView'].serialize();
  }

  return payload;
};

/**
 * Deserialize the instance to VirtualMachineExtension schema
 *
 * @param {JSON} instance
 *
 */
VirtualMachineExtension.prototype.deserialize = function (instance) {
  VirtualMachineExtension['super_'].prototype.deserialize.call(this, instance);
  if (instance) {
    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['publisher'] !== undefined) {
        this['publisher'] = instance['properties']['publisher'];
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['type'] !== undefined) {
        this['virtualMachineExtensionType'] = instance['properties']['type'];
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['typeHandlerVersion'] !== undefined) {
        this['typeHandlerVersion'] = instance['properties']['typeHandlerVersion'];
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['autoUpgradeMinorVersion'] !== undefined) {
        this['autoUpgradeMinorVersion'] = instance['properties']['autoUpgradeMinorVersion'];
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['settings'] !== undefined) {
        this['settings'] = instance['properties']['settings'];
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['protectedSettings'] !== undefined) {
        this['protectedSettings'] = instance['properties']['protectedSettings'];
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['provisioningState'] !== undefined) {
        this['provisioningState'] = instance['properties']['provisioningState'];
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['instanceView']) {
        this['instanceView'] = new models['VirtualMachineExtensionInstanceView']().deserialize(instance['properties']['instanceView']);
      }
    }
  }

  return this;
};

module.exports = VirtualMachineExtension;
