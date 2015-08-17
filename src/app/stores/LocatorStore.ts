/// <reference path="../../../dojo.d.ts"/>
/// <amd-dependency path="dojo/Stateful" name="Stateful"/>
/// <amd-dependency path="dojo/topic" name="topic"/>

import { ICoords } from '../interfaces.d';

declare var Stateful: dojo.Stateful;
declare var topic: dojo.topic;

class Store extends dojo.Stateful implements ICoords {
  x = 0
  y = 0
};

// http://www.anujgakhar.com/2013/08/29/singletons-in-dojo/
if (!_instance) {
  var _instance: Store = new Store();
  topic.subscribe('UPDATE-XY', (data: ICoords) => {
    _instance.set('x', data.x);
    _instance.set('y', data.y);
  });
}
export default _instance;