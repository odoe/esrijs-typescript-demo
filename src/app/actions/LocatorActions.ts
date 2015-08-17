/// <reference path="../../../dojo.d.ts"/>
/// <reference path="../interfaces.d.ts"/>
/// <amd-dependency path="dojo/topic" name="topic"/>

import { ICoords } from '../interfaces.d';

declare var topic:dojo.topic;

var LocatorAction = {
  updateXY(data:ICoords) {
    topic.publish('UPDATE-XY', data);
  }
};

export default LocatorAction;
