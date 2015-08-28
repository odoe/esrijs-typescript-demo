/// <amd-dependency path="dojo/domReady!"/>
import MapView from 'app/views/MapView';
import LocatorView from 'app/views/LocatorView';

var node: HTMLElement = document.getElementById('map-area');
var node2: HTMLElement = document.getElementById('locator-area');
var mapView = new MapView(null, node);
var locatorView = new LocatorView(null, node2);