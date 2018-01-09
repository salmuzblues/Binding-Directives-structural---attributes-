"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.message = 'Angular – two way  Binding Syntax';
        this.isThisRed = true;
    }
    // create a getter for ngStyle
    AppComponent.prototype.getInlineStyle = function (message) {
        // var
        var styleMessage = {
            'color': message.length > 6 ? 'red' : 'green',
            'text-decoration': message.length > 6 ? 'underline' : 'none'
        };
        return styleMessage;
    };
    // create ngClass
    AppComponent.prototype.getClasses = function (message) {
        // var
        var classes = {
            red: message.length > 8,
            bolder: message.length > 15
        };
        return classes;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'two-way-binding',
        template: "\n\t  <div>\n\t    <h1>{{message}}</h1> \n\t    <input type=\"text\" [(ngModel)]=\"message\"/>\n\t  </div>\n    \n    <h2> ngStyle </h2>\n    <!-- Template ngStyle  -->\n    <h4> Ussing Method</h4>\n    <p [ngStyle]=\"getInlineStyle(message)\">{{message}}</p>\n    <!-- this just one style  -->\n    <h4>Using Direct</h4>\n    <p [style.font-family]=\"message.length > 15 ? 'times' : 'Arial'\">{{message}} </p> <br>\n    <h2>ngClases</h2>\n    <h4>Ussing Method</h4>\n    <p [ngClass]=\"getClasses(message)\">{{message}}</p><br>\n    <h4>Ussing direct</h4>\n    <p [class.red]=\"isThisRed\">{{message}} </p>\n    \n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map