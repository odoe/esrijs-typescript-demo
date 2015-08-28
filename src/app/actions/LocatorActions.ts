/// <amd-dependency path="dojo/topic" name="topic"/>

import { ICoords } from '../interfaces';

declare var topic: dojo.topic;

var LocatorAction = {
  updateXY(data: ICoords) {
    topic.publish('UPDATE-XY', data);
  }
};

export default LocatorAction;
