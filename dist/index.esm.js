import { jsx, jsxs } from 'react/jsx-runtime';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var AnswerText = function (_a) {
    var answer = _a.answer;
    return (jsx("div", __assign({ className: "border p-4 shadow transition w-full delay-75 hover:bg-slate-200" }, { children: answer })));
};

var QuestionText = function (_a) {
    var questionText = _a.questionText;
    return jsx("div", { children: questionText });
};

var SINGLE_ANSWER = 1;
var TWO_ANSWERS = 2;
var calculateGridClassOnAuto = function (itemCount) {
    switch (itemCount) {
        case SINGLE_ANSWER:
            return "";
        case TWO_ANSWERS:
            return "grid-cols-2";
        default:
            return "";
    }
};
var AnswersWrapper = function (_a) {
    var answers = _a.answers, _b = _a.type, type = _b === void 0 ? "auto" : _b;
    if (!answers) {
        throw Error("Answers must exists, and ");
    }
    var wrapperClass = "";
    switch (type) {
        case "auto":
            wrapperClass = calculateGridClassOnAuto(answers === null || answers === void 0 ? void 0 : answers.length);
            break;
        case "horizontal":
            wrapperClass = "grid-flow-col";
            break;
        case "vertical":
            wrapperClass = "grid-flow-row";
            break;
        default:
            wrapperClass = type;
            break;
    }
    return (jsx("div", __assign({ className: "grid ".concat(wrapperClass) }, { children: answers === null || answers === void 0 ? void 0 : answers.map(function (answer) { return (jsx(AnswerText, { answer: answer }, answer)); }) })));
};

var Question = function (_a) {
    var answers = _a.answers, questionText = _a.questionText;
    return (jsxs("div", { children: [jsx(QuestionText, { questionText: questionText }), jsx(AnswersWrapper, { answers: answers })] }));
};

var QuestionView = function (_a) {
    var answers = _a.answers, questionText = _a.questionText;
    return (jsx(Question, { answers: answers, questionText: questionText }));
};

export { AnswerText, AnswersWrapper, Question, QuestionText, QuestionView };
//# sourceMappingURL=index.esm.js.map
