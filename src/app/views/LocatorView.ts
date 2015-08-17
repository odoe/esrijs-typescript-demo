/// <reference path="../../../dojo.d.ts"/>
/// <reference path="../../../arcgis-js-api.d.ts"/>
/// <amd-dependency path="dojo/_base/declare" name="dojoDeclare"/>
/// <amd-dependency path="dijit/_WidgetBase" name="_WidgetBase"/>
/// <amd-dependency path="dijit/_TemplatedMixin" name="_TemplatedMixin"/>
/// <amd-dependency path="dbind/bind" name="bind"/>
/// <amd-dependency path="dojo/text!./templates/LocatorView.html" name="templateString"/>

declare var dojoDeclare: dojo._base.declare;
declare var _WidgetBase: dijit._WidgetBase;
declare var _TemplatedMixin: dijit._TemplatedMixin;
declare var templateString: string;
declare var bind: any;

import store from 'app/stores/LocatorStore';
import * as format from 'app/helpers/NumFormatter';

let fixed: Function = format(3);

var LocatorView = dojoDeclare([_WidgetBase, _TemplatedMixin], {
  templateString,
  postCreate() {
    var xStore = bind(fixed).to(store, 'x');
    var yStore = bind(fixed).to(store, 'y');

    bind(this.yNode).to(yStore);
    bind(this.xNode).to(xStore);
  }
});

export default LocatorView;