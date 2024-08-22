'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var React = require('react');

var InputToken = function (props) {
    var name = props.name, onKeyDown = props.onKeyDown, length = props.length, id = props.id, className = props.className, onChange = props.onChange;
    var _a = React.useState(Array(length).fill(undefined)), value = _a[0], setValue = _a[1];
    var tokenInputRef = React.useRef(null);
    React.useEffect(function () {
        var newValue = Array(length).fill("");
        value.forEach(function (v, i) {
            newValue[i] = v;
        });
        setValue(newValue);
    }, [length]);
    React.useEffect(function () {
        onChange === null || onChange === void 0 ? void 0 : onChange(value.join(""));
    }, [value]);
    var onInputChange = function (value, index) {
        var _a, _b, _c, _d;
        if (value) {
            if (index < length - 1) {
                (_b = (_a = tokenInputRef.current) === null || _a === void 0 ? void 0 : _a.children[index + 1]) === null || _b === void 0 ? void 0 : _b.focus();
            }
        }
        else {
            if (index > 0) {
                (_d = (_c = tokenInputRef.current) === null || _c === void 0 ? void 0 : _c.children[index - 1]) === null || _d === void 0 ? void 0 : _d.focus();
            }
        }
    };
    var onInputKeyDown = function (event) {
        if (onKeyDown)
            onKeyDown(event);
    };
    return (React.createElement("div", { ref: tokenInputRef, 
        // @ts-expect-error  token input container name attribute
        name: name, tabIndex: -1, className: "tokenInputContainer" }, Array.from({ length: length }).map(function (_digit, idx) { return (React.createElement("input", { onChange: function (e) {
            // @ts-expect-error  token input container name attribute
            var newValue = tslib.__spreadArray([], value, true);
            newValue[idx] = e.target.value;
            setValue(newValue);
            onInputChange(e.target.value, idx);
        }, value: value[idx], onKeyDown: onInputKeyDown, maxLength: 1, name: name && "".concat(name, "[").concat(idx, "]"), id: id, className: className })); })));
};

// import React, { useState } from "react";

exports.default = InputToken;
