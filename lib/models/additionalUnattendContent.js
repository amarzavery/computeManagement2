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
 * Initializes a new instance of the AdditionalUnattendContent class.
 * @constructor
 * Gets or sets additional XML formatted information that can be included in
 * the Unattend.xml file, which is used by Windows Setup. Contents are
 * defined by setting name, component name, and the pass in which the content
 * is a applied.
 * @member {string} [passName] Gets or sets the pass name. Currently, the only
 * allowable value is oobeSystem. Possible values for this property include:
 * 'oobeSystem'.
 * 
 * @member {string} [componentName] Gets or sets the component name.
 * Currently, the only allowable value is Microsoft-Windows-Shell-Setup.
 * Possible values for this property include: 'Microsoft-Windows-Shell-Setup'.
 * 
 * @member {string} [settingName] Gets or sets setting name (e.g.
 * FirstLogonCommands, AutoLogon ). Possible values for this property
 * include: 'AutoLogon', 'FirstLogonCommands'.
 * 
 * @member {string} [content] Gets or sets XML formatted content that is added
 * to the unattend.xml file in the specified pass and component.The XML must
 * be less than 4 KB and must include the root element for the setting or
 * feature that is being inserted.
 * 
 */
function AdditionalUnattendContent(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.passName !== undefined) {
      this.passName = parameters.passName;
    }
    if (parameters.componentName !== undefined) {
      this.componentName = parameters.componentName;
    }
    if (parameters.settingName !== undefined) {
      this.settingName = parameters.settingName;
    }
    if (parameters.content !== undefined) {
      this.content = parameters.content;
    }
  }    
}


/**
 * Validate the payload against the AdditionalUnattendContent schema
 *
 * @param {JSON} payload
 *
 */
AdditionalUnattendContent.prototype.serialize = function () {
  var payload = {};
  if (this['passName'] !== null && this['passName'] !== undefined) {
    if (typeof this['passName'].valueOf() !== 'string') {
      throw new Error('this[\'passName\'] must be of type string.');
    }
    payload['passName'] = this['passName'];
  }

  if (this['componentName'] !== null && this['componentName'] !== undefined) {
    if (typeof this['componentName'].valueOf() !== 'string') {
      throw new Error('this[\'componentName\'] must be of type string.');
    }
    payload['componentName'] = this['componentName'];
  }

  if (this['settingName'] !== null && this['settingName'] !== undefined) {
    if (typeof this['settingName'].valueOf() !== 'string') {
      throw new Error('this[\'settingName\'] must be of type string.');
    }
    payload['settingName'] = this['settingName'];
  }

  if (this['content'] !== null && this['content'] !== undefined) {
    if (typeof this['content'].valueOf() !== 'string') {
      throw new Error('this[\'content\'] must be of type string.');
    }
    payload['content'] = this['content'];
  }

  return payload;
};

/**
 * Deserialize the instance to AdditionalUnattendContent schema
 *
 * @param {JSON} instance
 *
 */
AdditionalUnattendContent.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['passName'] !== undefined) {
      this['passName'] = instance['passName'];
    }

    if (instance['componentName'] !== undefined) {
      this['componentName'] = instance['componentName'];
    }

    if (instance['settingName'] !== undefined) {
      this['settingName'] = instance['settingName'];
    }

    if (instance['content'] !== undefined) {
      this['content'] = instance['content'];
    }
  }

  return this;
};

module.exports = AdditionalUnattendContent;
