'use strict';"use strict";
var ng_zone_1 = require('angular2/src/core/zone/ng_zone');
var parse5_adapter_1 = require('angular2/src/platform/server/parse5_adapter');
var post_message_bus_1 = require('angular2/src/web_workers/shared/post_message_bus');
var worker_app_common_1 = require('./worker_app_common');
var core_1 = require('angular2/core');
var message_bus_1 = require('angular2/src/web_workers/shared/message_bus');
var compiler_1 = require('angular2/src/compiler/compiler');
// TODO(jteplitz602) remove this and compile with lib.webworker.d.ts (#3492)
var _postMessage = {
    postMessage: function (message, transferrables) {
        postMessage(message, transferrables);
    }
};
exports.WORKER_APP_APPLICATION = [
    worker_app_common_1.WORKER_APP_APPLICATION_COMMON,
    compiler_1.COMPILER_PROVIDERS,
    /* @ts2dart_Provider */ { provide: message_bus_1.MessageBus, useFactory: createMessageBus, deps: [ng_zone_1.NgZone] },
    /* @ts2dart_Provider */ { provide: core_1.APP_INITIALIZER, useValue: setupWebWorker, multi: true }
];
function createMessageBus(zone) {
    var sink = new post_message_bus_1.PostMessageBusSink(_postMessage);
    var source = new post_message_bus_1.PostMessageBusSource();
    var bus = new post_message_bus_1.PostMessageBus(sink, source);
    bus.attachToZone(zone);
    return bus;
}
function setupWebWorker() {
    parse5_adapter_1.Parse5DomAdapter.makeCurrent();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2VyX2FwcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtMWJHZVFGT28udG1wL2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS93b3JrZXJfYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx3QkFBcUIsZ0NBQWdDLENBQUMsQ0FBQTtBQUd0RCwrQkFBK0IsNkNBQTZDLENBQUMsQ0FBQTtBQUM3RSxpQ0FJTyxrREFBa0QsQ0FBQyxDQUFBO0FBQzFELGtDQUE0QyxxQkFBcUIsQ0FBQyxDQUFBO0FBQ2xFLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5Qyw0QkFBeUIsNkNBQTZDLENBQUMsQ0FBQTtBQUN2RSx5QkFBaUMsZ0NBQWdDLENBQUMsQ0FBQTtBQUVsRSw0RUFBNEU7QUFDNUUsSUFBSSxZQUFZLEdBQUc7SUFDakIsV0FBVyxFQUFFLFVBQUMsT0FBWSxFQUFFLGNBQTZCO1FBQ2pELFdBQVksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDOUMsQ0FBQztDQUNGLENBQUM7QUFFVyw4QkFBc0IsR0FBMkM7SUFDNUUsaURBQTZCO0lBQzdCLDZCQUFrQjtJQUNsQix1QkFBdUIsQ0FBQyxFQUFDLE9BQU8sRUFBRSx3QkFBVSxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxnQkFBTSxDQUFDLEVBQUM7SUFDM0YsdUJBQXVCLENBQUMsRUFBQyxPQUFPLEVBQUUsc0JBQWUsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUM7Q0FDMUYsQ0FBQztBQUVGLDBCQUEwQixJQUFZO0lBQ3BDLElBQUksSUFBSSxHQUFHLElBQUkscUNBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEQsSUFBSSxNQUFNLEdBQUcsSUFBSSx1Q0FBb0IsRUFBRSxDQUFDO0lBQ3hDLElBQUksR0FBRyxHQUFHLElBQUksaUNBQWMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDM0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixNQUFNLENBQUMsR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUVEO0lBQ0UsaUNBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDakMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Tmdab25lfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS96b25lL25nX3pvbmUnO1xuaW1wb3J0IHtUeXBlLCBpc1ByZXNlbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9kaSc7XG5pbXBvcnQge1BhcnNlNURvbUFkYXB0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9zZXJ2ZXIvcGFyc2U1X2FkYXB0ZXInO1xuaW1wb3J0IHtcbiAgUG9zdE1lc3NhZ2VCdXMsXG4gIFBvc3RNZXNzYWdlQnVzU2luayxcbiAgUG9zdE1lc3NhZ2VCdXNTb3VyY2Vcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3dlYl93b3JrZXJzL3NoYXJlZC9wb3N0X21lc3NhZ2VfYnVzJztcbmltcG9ydCB7V09SS0VSX0FQUF9BUFBMSUNBVElPTl9DT01NT059IGZyb20gJy4vd29ya2VyX2FwcF9jb21tb24nO1xuaW1wb3J0IHtBUFBfSU5JVElBTElaRVJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtNZXNzYWdlQnVzfSBmcm9tICdhbmd1bGFyMi9zcmMvd2ViX3dvcmtlcnMvc2hhcmVkL21lc3NhZ2VfYnVzJztcbmltcG9ydCB7Q09NUElMRVJfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvY29tcGlsZXInO1xuXG4vLyBUT0RPKGp0ZXBsaXR6NjAyKSByZW1vdmUgdGhpcyBhbmQgY29tcGlsZSB3aXRoIGxpYi53ZWJ3b3JrZXIuZC50cyAoIzM0OTIpXG5sZXQgX3Bvc3RNZXNzYWdlID0ge1xuICBwb3N0TWVzc2FnZTogKG1lc3NhZ2U6IGFueSwgdHJhbnNmZXJyYWJsZXM/OltBcnJheUJ1ZmZlcl0pID0+IHtcbiAgICAoPGFueT5wb3N0TWVzc2FnZSkobWVzc2FnZSwgdHJhbnNmZXJyYWJsZXMpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgV09SS0VSX0FQUF9BUFBMSUNBVElPTjogQXJyYXk8YW55IC8qVHlwZSB8IFByb3ZpZGVyIHwgYW55W10qLz4gPSBbXG4gIFdPUktFUl9BUFBfQVBQTElDQVRJT05fQ09NTU9OLFxuICBDT01QSUxFUl9QUk9WSURFUlMsXG4gIC8qIEB0czJkYXJ0X1Byb3ZpZGVyICovIHtwcm92aWRlOiBNZXNzYWdlQnVzLCB1c2VGYWN0b3J5OiBjcmVhdGVNZXNzYWdlQnVzLCBkZXBzOiBbTmdab25lXX0sXG4gIC8qIEB0czJkYXJ0X1Byb3ZpZGVyICovIHtwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsIHVzZVZhbHVlOiBzZXR1cFdlYldvcmtlciwgbXVsdGk6IHRydWV9XG5dO1xuXG5mdW5jdGlvbiBjcmVhdGVNZXNzYWdlQnVzKHpvbmU6IE5nWm9uZSk6IE1lc3NhZ2VCdXMge1xuICBsZXQgc2luayA9IG5ldyBQb3N0TWVzc2FnZUJ1c1NpbmsoX3Bvc3RNZXNzYWdlKTtcbiAgbGV0IHNvdXJjZSA9IG5ldyBQb3N0TWVzc2FnZUJ1c1NvdXJjZSgpO1xuICBsZXQgYnVzID0gbmV3IFBvc3RNZXNzYWdlQnVzKHNpbmssIHNvdXJjZSk7XG4gIGJ1cy5hdHRhY2hUb1pvbmUoem9uZSk7XG4gIHJldHVybiBidXM7XG59XG5cbmZ1bmN0aW9uIHNldHVwV2ViV29ya2VyKCk6IHZvaWQge1xuICBQYXJzZTVEb21BZGFwdGVyLm1ha2VDdXJyZW50KCk7XG59XG4iXX0=