import { __spreadArray } from 'tslib';
import React, { useState, useRef, useEffect } from 'react';

var InputToken = function (props) {
    var name = props.name, onKeyDown = props.onKeyDown, length = props.length, id = props.id, className = props.className;
    var _a = useState(Array(length).fill(undefined)), value = _a[0], setValue = _a[1];
    var tokenInputRef = useRef(null);
    useEffect(function () {
        var newValue = Array(length).fill("");
        value.forEach(function (v, i) {
            newValue[i] = v;
        });
        setValue(newValue);
    }, [length]);
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
    var onSubmit = function (e) {
        var _a;
        onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
        (_a = props === null || props === void 0 ? void 0 : props.onSubmit) === null || _a === void 0 ? void 0 : _a.call(props, value.join(""));
    };
    return (React.createElement("div", { ref: tokenInputRef, 
        // @ts-expect-error  token input container name attribute
        name: name, tabIndex: -1, className: "tokenInputContainer" }, Array.from({ length: length }).map(function (_digit, idx) { return (React.createElement("input", { onChange: function (e) {
            // @ts-expect-error  token input container name attribute
            var newValue = __spreadArray([], value, true);
            newValue[idx] = e.target.value;
            setValue(newValue);
            onInputChange(e.target.value, idx);
        }, value: value[idx], onKeyDown: onSubmit, maxLength: 1, name: name && "".concat(name, "[").concat(idx, "]"), id: id, className: className })); })));
};

// import React, { useState } from "react";

export { InputToken as default };
