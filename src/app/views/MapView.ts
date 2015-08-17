/// <reference path="../../../dojo.d.ts"/>
/// <reference path="../../../arcgis-js-api.d.ts"/>
/// <amd-dependency path="dojo/_base/declare" name="dojoDeclare"/>
/// <amd-dependency path="dojo/on" name="on"/>
/// <amd-dependency path="dijit/_WidgetBase" name="_WidgetBase"/>
/// <amd-dependency path="dijit/_TemplatedMixin" name="_TemplatedMixin"/>
/// <amd-dependency path="esri/map" name="Map"/>

declare var dojoDeclare: dojo._base.declare;
declare var on: dojo.on;
declare var _WidgetBase: dijit._WidgetBase;
declare var _TemplatedMixin: dijit._TemplatedMixin;
declare var Map: any;

import LocatorAction from 'app/actions/LocatorActions';


var MapView: any = dojoDeclare([_WidgetBase, _TemplatedMixin], {
  templateString: '<div class="map-container"></div>',
  postCreate() {
    var map = new Map(this.domNode, {
      center: [-118, 34.5],
      zoom: 8,
      basemap: 'topo'
    });
    this.set('map', map);
    var handle = on(map, 'mouse-move', (e: any) => {
      LocatorAction.updateXY(e.mapPoint);
    });
    this.own(handle);
  }
});


export default MapView;