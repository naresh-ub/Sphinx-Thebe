"use strict";
(self["webpackChunk_anaconda_assistant"] = self["webpackChunk_anaconda_assistant"] || []).push([["lib_assistant_lib_index_js-webpack_sharing_consume_default_react-dom"],{

/***/ "../../lib/assistant-components/lib/AssistantComponentContext.js":
/*!***********************************************************************!*\
  !*** ../../lib/assistant-components/lib/AssistantComponentContext.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssistantComponentContext: () => (/* binding */ AssistantComponentContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Context for AssistantComponent
 * - Used to pass parentClassName to children
 * @alpha
 */
const AssistantComponentContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({});


/***/ }),

/***/ "../../lib/assistant-components/lib/api/assistantRequestGenerator.js":
/*!***************************************************************************!*\
  !*** ../../lib/assistant-components/lib/api/assistantRequestGenerator.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanSpecialPrefixes: () => (/* binding */ cleanSpecialPrefixes),
/* harmony export */   generateRequest: () => (/* binding */ generateRequest),
/* harmony export */   hasActiveCodeResponse: () => (/* binding */ hasActiveCodeResponse)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "../../lib/assistant-components/lib/utils/index.js");

function generateRequest(activeChat, activeNotebook) {
    if (!activeNotebook?.activeChatKey ||
        !activeChat ||
        !hasActiveCodeResponse(activeChat.inProgress)) {
        throw new Error('No active request');
    }
    return {
        session: activeChat.session,
        // If there is a summary in the active chat,
        // And if the total tokens of the chat + the summary tokens exceed the max tokens of the model,
        // we remove the oldest messages until the total tokens are under the limit.
        messages: cleanSpecialPrefixes((0,_utils__WEBPACK_IMPORTED_MODULE_0__.chatMessagesUnderLimit)(activeChat)),
        chatContext: convertToSDKContext(activeChat.context),
        responseMessageId: activeChat.inProgress.message_id
    };
}
function cleanSpecialPrefixes(messages) {
    const prefixes = [_utils__WEBPACK_IMPORTED_MODULE_0__.attachmentMessagePrefix];
    return messages.map(message => {
        const content = prefixes.reduce((acc, prefix) => acc.replace(prefix, ''), message.content);
        return { ...message, content };
    });
}
function hasActiveCodeResponse(active) {
    return active?.type === 'active';
}
function convertToSDKContext(context) {
    const variables = convertVariables(context);
    return { type: context.type, variables };
}
function convertVariables(context) {
    switch (context.type) {
        case 'graph-dataframe':
            return {
                name: context.variables.dataframe.name,
                dtypes_str: context.variables.dataframe.dtypesStr
            };
        case 'describe-dataframe':
            return {
                name: context.variables.dataframe.name,
                dtypes_str: context.variables.dataframe.dtypesStr
            };
        case 'explain-code':
            return {
                active_code_cell: context.variables.active_cell_code,
                selected_code: context.variables.selected_code
            };
        case 'comment-code':
            return {
                active_code_cell: context.variables.active_cell_code,
                selected_code: context.variables.selected_code
            };
        case 'improve-code':
            return {
                active_code_cell: context.variables.active_cell_code,
                selected_code: context.variables.selected_code
            };
        case 'debug-error':
            return context.variables;
        case 'suggestions-chat':
            return context.variables;
        case 'default-python':
            return {};
        default:
            return context.variables;
    }
}


/***/ }),

/***/ "../../lib/assistant-components/lib/api/feedback.js":
/*!**********************************************************!*\
  !*** ../../lib/assistant-components/lib/api/feedback.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   postExecutionResult: () => (/* binding */ postExecutionResult),
/* harmony export */   postFeedback: () => (/* binding */ postFeedback)
/* harmony export */ });
async function postFeedback(assistantSdk, request) {
    try {
        return await assistantSdk.submitFeedback(request);
    }
    catch (e) {
        console.error('Error posting feedback: ', e);
    }
}
async function postExecutionResult(assistantSdk, executingCode, success, error) {
    try {
        return await assistantSdk.submitCodeExecutionResult(createExecutionResult(executingCode, success, error));
    }
    catch (e) {
        console.error('Error posting feedback: ', e);
    }
}
function createExecutionResult(executingCode, success, error) {
    return {
        session: executingCode.session,
        executionResult: {
            code: executingCode.code,
            success,
            messageId: executingCode.activeMessageId,
            error: error ? { message: error.message, stack: error.stack, name: error.name } : null
        }
    };
}


/***/ }),

/***/ "../../lib/assistant-components/lib/api/index.js":
/*!*******************************************************!*\
  !*** ../../lib/assistant-components/lib/api/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanSpecialPrefixes: () => (/* reexport safe */ _assistantRequestGenerator__WEBPACK_IMPORTED_MODULE_1__.cleanSpecialPrefixes),
/* harmony export */   generateRequest: () => (/* reexport safe */ _assistantRequestGenerator__WEBPACK_IMPORTED_MODULE_1__.generateRequest),
/* harmony export */   hasActiveCodeResponse: () => (/* reexport safe */ _assistantRequestGenerator__WEBPACK_IMPORTED_MODULE_1__.hasActiveCodeResponse),
/* harmony export */   postExecutionResult: () => (/* reexport safe */ _feedback__WEBPACK_IMPORTED_MODULE_0__.postExecutionResult),
/* harmony export */   postFeedback: () => (/* reexport safe */ _feedback__WEBPACK_IMPORTED_MODULE_0__.postFeedback)
/* harmony export */ });
/* harmony import */ var _feedback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback */ "../../lib/assistant-components/lib/api/feedback.js");
/* harmony import */ var _assistantRequestGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assistantRequestGenerator */ "../../lib/assistant-components/lib/api/assistantRequestGenerator.js");




/***/ }),

/***/ "../../lib/assistant-components/lib/base-elements/BaseElement.js":
/*!***********************************************************************!*\
  !*** ../../lib/assistant-components/lib/base-elements/BaseElement.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseElement: () => (/* binding */ BaseElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AssistantComponentContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AssistantComponentContext */ "../../lib/assistant-components/lib/AssistantComponentContext.js");
/* harmony import */ var _style_styleUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/styleUtils */ "../../lib/assistant-components/lib/style/styleUtils.js");



/**
 * Assistant BaseElement component.
 * - Adds a class name to the div based on the parent component's class name.
 * - Allows for a custom replacement component to be provided by the context.
 * @alpha
 */
function BaseElement(props) {
    const { parentClassName, replaceChildren } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_AssistantComponentContext__WEBPACK_IMPORTED_MODULE_1__.AssistantComponentContext);
    const Tag = props.as || 'div';
    const MainContainer = props.mainContainer || false;
    const parentPrefix = parentClassName && !MainContainer ? `${parentClassName}-` : '';
    const asChildName = props.asChildName || Tag;
    const newParentClassName = `${parentPrefix}${asChildName}`;
    const childClassName = `${_style_styleUtils__WEBPACK_IMPORTED_MODULE_2__.rootClassName}-${newParentClassName}`;
    const replacement = replaceChildren?.(childClassName);
    if (replacement) {
        return replacement;
    }
    // Remove mainContainer, asChildName and as from props
    const { mainContainer, asChildName: _, as: __, ...cleanProps } = props;
    // Add the child class name to the className prop if it exists
    const addedClassName = props.className ? ` ${props.className}` : '';
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AssistantComponentContext__WEBPACK_IMPORTED_MODULE_1__.AssistantComponentContext.Provider, { value: {
            parentClassName: newParentClassName,
            replaceChildren
        } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, { ...cleanProps, className: childClassName + addedClassName })));
}


/***/ }),

/***/ "../../lib/assistant-components/lib/base-elements/Button.js":
/*!******************************************************************!*\
  !*** ../../lib/assistant-components/lib/base-elements/Button.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseElement */ "../../lib/assistant-components/lib/base-elements/BaseElement.js");


/**
 * Assistant Button component.
 * - Adds a class name to the div based on the parent component's class name.
 * - Allows for a custom replacement component to be provided by the context.
 * @alpha
 */
function Button(props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BaseElement__WEBPACK_IMPORTED_MODULE_1__.BaseElement, { ...props, as: "button" });
}


/***/ }),

/***/ "../../lib/assistant-components/lib/base-elements/Div.js":
/*!***************************************************************!*\
  !*** ../../lib/assistant-components/lib/base-elements/Div.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Div: () => (/* binding */ Div)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseElement */ "../../lib/assistant-components/lib/base-elements/BaseElement.js");


/**
 * Assistant Div component.
 * - Adds a class name to the div based on the parent component's class name.
 * - Allows for a custom replacement component to be provided by the context.
 * @alpha
 */
function Div(props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BaseElement__WEBPACK_IMPORTED_MODULE_1__.BaseElement, { ...props, as: "div" });
}


/***/ }),

/***/ "../../lib/assistant-components/lib/base-elements/Dropdown.js":
/*!********************************************************************!*\
  !*** ../../lib/assistant-components/lib/base-elements/Dropdown.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dropdown: () => (/* binding */ Dropdown),
/* harmony export */   styleOfDropdown: () => (/* binding */ styleOfDropdown)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Div */ "../../lib/assistant-components/lib/base-elements/Div.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "../../lib/assistant-components/lib/base-elements/Button.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Style */ "../../lib/assistant-components/lib/base-elements/Style.js");




/**
 * Style for the Dropdown component.
 * @alpha
 */
const styleOfDropdown = `

[class^='anaconda-assistant-'][class$='-dropdown'],
[class^='anaconda-assistant'][class*='-dropdown '] {
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #dfe3e7;
  padding: 0;
}

[class^='anaconda-assistant'][class$='-dropdown'],
[class^='anaconda-assistant'][class*='-dropdown is-open '],
[class^='anaconda-assistant'][class$='-dropdown is-open'] {
  position: relative;
}

[class^='anaconda-assistant-'][class$='-dropdown-selection'] {
  display: flex;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  align-items: center;
  padding: 7px 30px 7px 12px;
  cursor: pointer;
  min-width: 200px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  outline: none;
  color: var(--as-main-font-color, #2c303a);
}

[class^='anaconda-assistant-'][class$='-dropdown-selection'] [class^='anaconda-assistant-'][class$='-dropdown-selection-arrow'] {
  border-color: #999 transparent transparent;
  border-style: solid;
  border-width: 5px 5px 0;
  content: ' ';
  display: block;
  height: 0;
  margin-top: -ceil(2.5);
  position: absolute;
  right: 10px;
  top: 14px;
  width: 0;
}

[class^='anaconda-assistant-'][class*='-dropdown is-open '] [class^='anaconda-assistant-'][class$='-dropdown-selection'] [class^='anaconda-assistant-'][class$='-dropdown-selection-arrow'],
[class^='anaconda-assistant-'][class$='-dropdown is-open'] [class^='anaconda-assistant-'][class$='-dropdown-selection'] [class^='anaconda-assistant-'][class$='-dropdown-selection-arrow'] {
  border-color: transparent transparent #999;
  border-width: 0 5px 5px;
}

[class^='anaconda-assistant-'][class$='-dropdown-menu'],
[class^='anaconda-assistant-'][class$='-dropdown-menu is-open'] {
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-top: -1px;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1000;
  -webkit-overflow-scrolling: touch;
  border-radius: 4px;
  border: 1px solid #dfe3e7;
  background: #fff;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
  min-width: 200px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #2c303a;
  display: none;
}

[class^='anaconda-assistant-'][class$='-dropdown-menu is-open'] {
  display: block;
}

[class^='anaconda-assistant-'][class$='-dropdown-menu-option'],
[class^='anaconda-assistant-'][class*='-dropdown-menu-option'] {
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  padding: 10px;
  background: var(--as-main-bg-color-secondary, #fff);
  color: var(--as-main-font-color, #2c303a);
  border: none;
  width: 100%;
  text-align: left;
}

[class^='anaconda-assistant-'][class*='-dropdown-menu-option']:last-child {
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
}

[class^='anaconda-assistant-'][class*='-dropdown-menu-option'] {
  &:hover,
  &:focus {
    background-color: var(--as-main-bg-color-third, #ced2d9);
  }
}

[class^='anaconda-assistant-'][class*='-dropdown-menu-option is-selected'] {
  background-color: #0cca4a;
}
`;
/**
 * Dropdown component.
 * @alpha
 */
const Dropdown = (props) => {
    const { className, defaultSelection, options, selectionChanged } = props;
    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultSelection ?? options[0]);
    const [dropdownOpen, setDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const handleChange = (option) => {
        setSelectedOption(option);
        selectionChanged(option);
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            setDropdownOpen(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }
        if (dropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownOpen]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: dropdownRef, onKeyDown: handleKeyDown },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, { "data-testid": "anaconda-assistant-dropdown", asChildName: "dropdown", role: "button", className: `${dropdownOpen ? 'is-open' : ''} ${className}`, onClick: () => {
                setDropdownOpen(!dropdownOpen);
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_3__.Style, { asChildName: "style" }, styleOfDropdown),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Div__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "selection" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Div__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "label" }, selectedOption.label),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Div__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "arrow" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Div__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "menu", className: dropdownOpen ? 'is-open' : '' }, options.map((option) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, { key: option.value, asChildName: `option ${selectedOption.value === option.value ? 'is-selected' : ''}`, role: "option", onClick: () => handleChange(option) }, option.label)))))));
};


/***/ }),

/***/ "../../lib/assistant-components/lib/base-elements/Form.js":
/*!****************************************************************!*\
  !*** ../../lib/assistant-components/lib/base-elements/Form.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Form: () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseElement */ "../../lib/assistant-components/lib/base-elements/BaseElement.js");


/**
 * Assistant Form component.
 * - Adds a class name to the form element based on the parent component's class name.
 * - Allows for a custom replacement component to be provided by the context.
 * @alpha
 */
function Form(props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BaseElement__WEBPACK_IMPORTED_MODULE_1__.BaseElement, { ...props, as: "form" });
}


/***/ }),

/***/ "../../lib/assistant-components/lib/base-elements/Option.js":
/*!******************************************************************!*\
  !*** ../../lib/assistant-components/lib/base-elements/Option.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Option: () => (/* binding */ Option)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseElement */ "../../lib/assistant-components/lib/base-elements/BaseElement.js");


/**
 * Assistant Option component.
 * - Adds a class name to the option based on the parent component's class name.
 * - Allows for a custom replacement component to be provided by the context.
 * @alpha
 */
function Option(props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BaseElement__WEBPACK_IMPORTED_MODULE_1__.BaseElement, { ...props, as: "option" });
}


/***/ }),

/***/ "../../lib/assistant-components/lib/base-elements/Popup.js":
/*!*****************************************************************!*\
  !*** ../../lib/assistant-components/lib/base-elements/Popup.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Popup: () => (/* binding */ Popup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-spring/web */ "../../node_modules/@react-spring/web/dist/react-spring_web.modern.mjs");
/* harmony import */ var _utils_RemoveAfterHide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/RemoveAfterHide */ "../../lib/assistant-components/lib/utils/RemoveAfterHide.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons */ "../../lib/assistant-components/lib/icons.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "../../lib/assistant-components/lib/base-elements/index.js");





/**
 * Style for the Popup component.
 * @alpha
 */
const styleOfPopup = `
.anaconda-assistant-popup {
  position: fixed;
  width: 480px;
  right: 32px;
  bottom: 80px;
}

.as-animated-popup {
  position: absolute;
  border: 2px solid rgba(219, 105, 112, 0.4);
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: var(--as-main-bg-color-primary, #fff);
  z-index: 1;
}

.anaconda-assistant-popup-container {
  padding: 0 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.anaconda-assistant-popup-container-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
  color: var(--as-main-font-color-black, #212121);
}

.anaconda-assistant-popup-container-header-logo {
  display: flex;
  align-items: center;
  color: var(--as-main-font-color, #2c303a);
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
}

.anaconda-assistant-popup-container-header-logo-container {
  background: #4fab4f;
  border-radius: 4px;
  margin-right: 10px;
  padding: 8px 4px 5px 4px;
}

.anaconda-assistant-popup-container-header-logo-container-icon {
  width: 20px;
  height: 16px;
  color: white;
}

.anaconda-assistant-popup-container-header-close-icon {
  color: var(--as-main-font-color-black, #212121);
  cursor: pointer;
  background-color: transparent;
  border: none;
  svg {
    height: 14px;
    font-weight: 700;
  }
}

.anaconda-assistant-popup-container-warning {
  margin-bottom: 20px;
  color: #757575;
  background: #fcfccc;
  padding: 10px;
  font-size: 11px;
  border-radius: 4px;
  border: 1px solid #ebebbe;
  display: flex;
}

.anaconda-assistant-popup-container-warning-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 12px 0 3px;
}

.anaconda-assistant-popup-container-warning-container-icon {
  width: 23px;
  color: #ffba0a;
}

.anaconda-assistant-popup-container-buttons {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-bottom: 15px;
}

.anaconda-assistant-popup-container-buttons-wrapper {
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 590;
  letter-spacing: 0.02em;
}

.anaconda-assistant-popup-container-buttons-wrapper-container {
  width: 26px;
  height: 26px;
  background: rgba(0, 178, 255, 0.1);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}

.anaconda-assistant-popup-container-buttons-wrapper-container-icon {
  width: 13px;
  color: #00b2ff;
}

.anaconda-assistant-popup-container-buttons-button-icon {
  color: var(--as-main-font-color-secondary, rgba(33, 33, 33, 0.5));
  width: 8px;
  height: 12px;
}

.anaconda-assistant-popup-container-buttons-button:hover {
  background: var(--as-background-hover, #eaeaea);
  color: var(--as-main-font-color-black, rgba(0, 0, 0, 0.87));
}

.anaconda-assistant-popup-container-buttons-button  {
  background: var(--as-main-bg-color-primary, white);
  border: 1px solid var(--as-border-color-light, #e6e6e6);
}
`;
/**
 * Popup component.
 * @alpha
 */
const Popup = (props) => {
    const { width, headerTitle, warningMessage, bodyTitle, body, dialogClosed } = props;
    let { show } = props;
    const animationProps = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.useSpring)({
        right: 10,
        bottom: show ? 70 : -275,
        width: width ? width - 80 : 360
    });
    function closeDialog() {
        show = false;
        dialogClosed();
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_RemoveAfterHide__WEBPACK_IMPORTED_MODULE_2__.RemoveAfter, { delay: 500, show: show },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "popup", style: show ? { zIndex: 2 } : {} },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index__WEBPACK_IMPORTED_MODULE_4__.Style, { asChildName: "style" }, styleOfPopup),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.animated.div, { className: "as-animated-popup", style: animationProps },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "container" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "header" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "logo" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "container" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "icon" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.Icons.ChatBot, null))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "title" }, headerTitle ?? 'Anaconda Assistant')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index__WEBPACK_IMPORTED_MODULE_4__.Button, { asChildName: "close-icon", onClick: closeDialog, "aria-label": "Close dialog" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.Icons.Close, null))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "warning" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "container" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "icon" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.Icons.Warning, null))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "message" }, warningMessage)),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "buttons" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "wrapper" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "container" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "icon" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.Icons.Code, null))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "title" }, bodyTitle)),
                        body))))));
};


/***/ }),

/***/ "../../lib/assistant-components/lib/base-elements/Select.js":
/*!******************************************************************!*\
  !*** ../../lib/assistant-components/lib/base-elements/Select.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Select: () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseElement */ "../../lib/assistant-components/lib/base-elements/BaseElement.js");


/**
 * Assistant Select component.
 * - Adds a class name to the select based on the parent component's class name.
 * - Allows for a custom replacement component to be provided by the context.
 * @alpha
 */
function Select(props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BaseElement__WEBPACK_IMPORTED_MODULE_1__.BaseElement, { ...props, as: "select" });
}


/***/ }),

/***/ "../../lib/assistant-components/lib/base-elements/Style.js":
/*!*****************************************************************!*\
  !*** ../../lib/assistant-components/lib/base-elements/Style.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Style: () => (/* binding */ Style)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseElement */ "../../lib/assistant-components/lib/base-elements/BaseElement.js");


/**
 * Assistant Style component.
 * - Adds a class name to the div based on the parent component's class name.
 * - Allows for a custom replacement component to be provided by the context.
 * @alpha
 */
function Style(props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BaseElement__WEBPACK_IMPORTED_MODULE_1__.BaseElement, { ...props, as: "style" });
}


/***/ }),

/***/ "../../lib/assistant-components/lib/base-elements/baseElementUtils.js":
/*!****************************************************************************!*\
  !*** ../../lib/assistant-components/lib/base-elements/baseElementUtils.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   matchChildName: () => (/* binding */ matchChildName),
/* harmony export */   matchMultipleChildNames: () => (/* binding */ matchMultipleChildNames)
/* harmony export */ });
/**
 * Utility function to match a child name with a callback
 * @alpha
 */
function matchChildName(name, callback) {
    return childClassName => {
        if (childClassName === name ||
            childClassName.lastIndexOf(`-${name}`) !== -1 ||
            childClassName.match(name)) {
            return callback(childClassName);
        }
        return null;
    };
}
/**
 * Utility function to match multiple child names with callbacks
 * @alpha
 */
function matchMultipleChildNames(...childNamePairs) {
    return childClassName => {
        for (const childNamePair of childNamePairs) {
            const [name, callback] = childNamePair;
            const match = matchChildName(name, callback)(childClassName);
            if (match) {
                return match;
            }
        }
        return null;
    };
}


/***/ }),

/***/ "../../lib/assistant-components/lib/base-elements/index.js":
/*!*****************************************************************!*\
  !*** ../../lib/assistant-components/lib/base-elements/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseElement: () => (/* reexport safe */ _BaseElement__WEBPACK_IMPORTED_MODULE_0__.BaseElement),
/* harmony export */   Button: () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_1__.Button),
/* harmony export */   Div: () => (/* reexport safe */ _Div__WEBPACK_IMPORTED_MODULE_2__.Div),
/* harmony export */   Dropdown: () => (/* reexport safe */ _Dropdown__WEBPACK_IMPORTED_MODULE_8__.Dropdown),
/* harmony export */   Option: () => (/* reexport safe */ _Option__WEBPACK_IMPORTED_MODULE_5__.Option),
/* harmony export */   Popup: () => (/* reexport safe */ _Popup__WEBPACK_IMPORTED_MODULE_4__.Popup),
/* harmony export */   Select: () => (/* reexport safe */ _Select__WEBPACK_IMPORTED_MODULE_6__.Select),
/* harmony export */   Style: () => (/* reexport safe */ _Style__WEBPACK_IMPORTED_MODULE_7__.Style),
/* harmony export */   matchChildName: () => (/* reexport safe */ _baseElementUtils__WEBPACK_IMPORTED_MODULE_3__.matchChildName),
/* harmony export */   matchMultipleChildNames: () => (/* reexport safe */ _baseElementUtils__WEBPACK_IMPORTED_MODULE_3__.matchMultipleChildNames),
/* harmony export */   styleOfDropdown: () => (/* reexport safe */ _Dropdown__WEBPACK_IMPORTED_MODULE_8__.styleOfDropdown)
/* harmony export */ });
/* harmony import */ var _BaseElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseElement */ "../../lib/assistant-components/lib/base-elements/BaseElement.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "../../lib/assistant-components/lib/base-elements/Button.js");
/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Div */ "../../lib/assistant-components/lib/base-elements/Div.js");
/* harmony import */ var _baseElementUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baseElementUtils */ "../../lib/assistant-components/lib/base-elements/baseElementUtils.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Popup */ "../../lib/assistant-components/lib/base-elements/Popup.js");
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Option */ "../../lib/assistant-components/lib/base-elements/Option.js");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Select */ "../../lib/assistant-components/lib/base-elements/Select.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Style */ "../../lib/assistant-components/lib/base-elements/Style.js");
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Dropdown */ "../../lib/assistant-components/lib/base-elements/Dropdown.js");











/***/ }),

/***/ "../../lib/assistant-components/lib/chat-elements/AddContextPopup.js":
/*!***************************************************************************!*\
  !*** ../../lib/assistant-components/lib/chat-elements/AddContextPopup.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddContextPopup: () => (/* binding */ AddContextPopup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../lib/assistant-components/lib/utils/index.js");
/* harmony import */ var _SelectDataframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectDataframe */ "../../lib/assistant-components/lib/chat-elements/SelectDataframe.js");
/* harmony import */ var _base_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-elements */ "../../lib/assistant-components/lib/base-elements/index.js");




/**
 * Add Context Popup component.
 * @alpha
 */
const AddContextPopup = (props) => {
    const { width, onAddContext, dataFrames, activeChatAvailable, setAttachContextOpen, attachContextOpen, makeChatRequest, enableDataCollection } = props;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!dataFrames?.length) {
            setAttachContextOpen(false);
        }
    }, [dataFrames, setAttachContextOpen]);
    function closeExplainDialog() {
        setAttachContextOpen(false);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_3__.Popup, { width: width, show: attachContextOpen, headerTitle: 'Anaconda Assistant', warningMessage: `By attaching a dataframe to the conversation, the dataframe column names and types will be
                  sent to ${enableDataCollection ? 'the Anaconda Servers and to ' : ''}
                  OpenAI.`, bodyTitle: 'Select Dataframe', body: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SelectDataframe__WEBPACK_IMPORTED_MODULE_2__.SelectDataFrame, { makeChatRequest: makeChatRequest, dataFrames: dataFrames, buttonLabel: activeChatAvailable
                ? 'Attach dataframe to current chat'
                : 'Attach dataframe to new chat', onSubmit: dataframe => {
                setAttachContextOpen(false);
                const instruction = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.attachmentDataframeInstruction)(dataframe.name, dataframe.cols);
                onAddContext(instruction);
            } }), dialogClosed: closeExplainDialog }));
};


/***/ }),

/***/ "../../lib/assistant-components/lib/chat-elements/ChatInput.js":
/*!*********************************************************************!*\
  !*** ../../lib/assistant-components/lib/chat-elements/ChatInput.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatInput: () => (/* binding */ ChatInput),
/* harmony export */   styleOfChatInput: () => (/* binding */ styleOfChatInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _github_paste_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @github/paste-markdown */ "../../node_modules/@github/paste-markdown/dist/index.js");
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! usehooks-ts */ "../../node_modules/usehooks-ts/dist/index.mjs");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons */ "../../lib/assistant-components/lib/icons.js");
/* harmony import */ var _base_elements_Div__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-elements/Div */ "../../lib/assistant-components/lib/base-elements/Div.js");
/* harmony import */ var _base_elements_Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-elements/Style */ "../../lib/assistant-components/lib/base-elements/Style.js");
/* harmony import */ var _base_elements_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base-elements/Button */ "../../lib/assistant-components/lib/base-elements/Button.js");
/* harmony import */ var rich_textarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rich-textarea */ "../../node_modules/rich-textarea/lib/index.mjs");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-tooltip */ "../../node_modules/react-tooltip/dist/react-tooltip.min.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store */ "../../lib/assistant-components/lib/store/index.js");










/**
 * Style for the ChatInput component.
 * @alpha
 */
const styleOfChatInput = `
.anaconda-assistant-chat-input {
  --background-color: var(--as-main-bg-color-secondary, #fff);
  --border-color: var(--as-border-color, #2c303a);
  --text-color: var(--as-main-font-color, #2c303a);
  --text-color-disabled: #f00;
  --button-bg-color-default: #0cca4a;
  --button-color-default: white;
  --button-bg-color-hover: #4fab4f;
  --button-color-hover: #06262d;
  --button-bg-color-disabled: rgba(67, 176, 73, 0.50);
  display: flex;
  position: relative;
}

.anaconda-assistant-chat-input form {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 35px;
  max-height: 215px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background: var(--background-color);
  z-index: 100;
}

.anaconda-assistant-chat-input form textarea {
  color: var(--text-color);
  border: none;
  resize: none;
  flex: 1;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  min-height: 20px;
  max-height: 200px;
  background-color: red;

}

.anaconda-assistant-chat-input form textarea:disabled {
  cursor: not-allowed;
}

.anaconda-assistant-chat-input form textarea::placeholder:disabled {
  cursor: not-allowed;
  color: var(--text-color-disabled);
}

.anaconda-assistant-chat-input form textarea::placeholder {
  color: #6a718a;
  font-style: italic;
}

.anaconda-assistant-chat-input-submit-button,
.anaconda-assistant-chat-input-stop-button {
  border: none;
  background: var(--button-bg-color-default);
  color: var(--button-color-default);
  border-radius: 4px;
  cursor: pointer;
  height: calc(100% - 16px);
  padding: 7px 10px;
  z-index: 10;
  margin-left: -48px;
}
.anaconda-assistant-chat-input-submit-button {
  &:hover,
  &:focus {
    background: var(--button-bg-color-hover);
    color: var(--button-color-hover);
  }
}

.anaconda-assistant-chat-input-stop-button {
  background: #6A718A;
}

.anaconda-assistant-chat-input-submit-button-send-icon {
  width: 20px;
}

[class^='anaconda-assistant-'][class$='-context-selector'],
[class^='anaconda-assistant-'][class$='-context-selector is-open'] {
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-bottom: -1px;
  margin-left: -16px;
  position: absolute;
  bottom: 100%;
  width: 100%;
  z-index: 1000;
  -webkit-overflow-scrolling: touch;
  border-radius: 4px;
  border: 1px solid #dfe3e7;
  background: #fff;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
  min-width: 200px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #2c303a;
  display: none;
}

[class^='anaconda-assistant-'][class$='-context-selector is-open'] {
  display: block;
}

[class^='anaconda-assistant-'][class$='-context-selector-list'] {
  max-height: 300px;
  overflow-y: auto;
}

[class^='anaconda-assistant-'][class$='-context-selector-list']::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
}

[class^='anaconda-assistant-'][class$='-context-selector-list']::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: #ced2d9;
  margin: 2px;
}

[class^='anaconda-assistant-'][class*='-context-selector-list-option'],
[class^='anaconda-assistant-'][class$='-context-selector-title'] {
  box-sizing: border-box;
  display: flex;
  padding: 8px 10px;
  flex-direction: row;
  align-items: center;
}

[class^='anaconda-assistant-'][class$='-context-selector-title'] {
  display: flex;
  flex-direction: column;
  background: #e9e6fe;
  border-radius: 8px;
  color: #2C303A;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  margin: 8px;
}

[class^='anaconda-assistant-'][class*='-context-selector-list-label'] {
  flex-grow: 1;
}
[class^='anaconda-assistant-'][class*='-context-selector-list-description'] {
  display: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: min-content;
}

[class^='anaconda-assistant-'][class*='-context-selector-list-option']:last-child {
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
}

[class^='anaconda-assistant-'][class*='-context-selector-list-option']:focus-visible {
  outline: none;
}


[class^='anaconda-assistant-'][class*='-context-selector-list-option']:focus,
[class^='anaconda-assistant-'][class*='-context-selector-list-option']:hover {
  background-color: #ced2d9;
}

[class^='anaconda-assistant-'][class*='-context-selector-list-option']:focus [class^='anaconda-assistant-'][class*='-context-selector-list-description'],
[class^='anaconda-assistant-'][class*='-context-selector-list-option']:hover [class^='anaconda-assistant-'][class*='-context-selector-list-description']{
  display: flex;
}

[class^='anaconda-assistant-'][class*='-context-selector-list-option is-selected'] {
  background-color: #0cca4a;
}
`;
/**
 * Chat Input component.
 * @alpha
 */
const ChatInput = react__WEBPACK_IMPORTED_MODULE_0___default().memo((props) => {
    const { msg, setMsg, sendMessage, loading, onInstructionUpdate, placeholder, maxTokens, setHidePopups, contextSelectorOptions = [] } = props;
    const contextSelectorFeatureFlagEnabled = (0,_store__WEBPACK_IMPORTED_MODULE_7__.getAssistantStore)().getFeatureFlagBool('assistant-show-context-selector', false);
    const placeholderIfLoading = loading ? 'Press "Enter" to stop the response' : placeholder;
    const textAreaID = 'as-instruction-input-textarea';
    const textareaRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    // const contextSelectorRef = useRef<HTMLDivElement>(null);
    // Tokens are generally 3 characters long, so we limit the input to 1/3 of the total limit
    const maxTextareaInputLength = maxTokens;
    const [contextSelectorEnabled, setContextSelectorEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [contextSelectorFilter, setContextSelectorFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [contextSelectorOptionsFiltered, setContextSelectorOptionsFiltered] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(contextSelectorOptions);
    const [currentCursorPosition, setCurrentCursorPosition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const contextOptionsRefs = [];
    const [contextOptionsIndex, setContextOptionsIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const contextDescriptionMap = contextSelectorOptions.reduce((map, option) => {
        map[option.value] = option.description;
        return map;
    }, {});
    const contextStringRenderer = (0,rich_textarea__WEBPACK_IMPORTED_MODULE_8__.createRegexRenderer)([
        [
            /@([^\s]+)/g,
            ({ key, value }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { key: key, style: Object.keys(contextDescriptionMap).some(context => context === value.replace('@', ''))
                    ? { color: '#6c5af6' }
                    : {} }, value))
        ]
    ]);
    const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
        if (msg.trim() !== '') {
            sendMessage(msg.trim());
        }
        e.preventDefault();
    }, [msg, sendMessage]);
    const handleTextareaKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
        const isCharacterKey = e.key.length === 1 && e.key.match(/\S/);
        if (e.key === 'Enter' && !e.shiftKey) {
            handleSubmit(e);
            setHidePopups(true);
            setContextSelectorEnabled(false);
            setContextSelectorFilter('');
        }
        else if (e.key === '@' && contextSelectorFeatureFlagEnabled) {
            setContextSelectorFilter('');
            setContextSelectorEnabled(true);
        }
        else if ((e.key === ' ' || e.key === 'Tab' || e.key === 'Escape') &&
            contextSelectorFeatureFlagEnabled) {
            setContextSelectorEnabled(false);
            setContextSelectorFilter('');
        }
        else {
            if (contextSelectorEnabled && contextSelectorFeatureFlagEnabled) {
                if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    setCurrentCursorPosition(textareaRef.current?.selectionStart ?? 0);
                    contextOptionsRefs[0]?.focus();
                }
                if (isCharacterKey) {
                    setContextSelectorFilter(`${contextSelectorFilter}${e.key}`);
                }
                if (e.key === ' ' || e.key === 'Tab') {
                    setContextSelectorEnabled(false);
                    setContextSelectorFilter('');
                }
                else if (e.key === 'Backspace') {
                    if (contextSelectorFilter.length > 0) {
                        setContextSelectorFilter(contextSelectorFilter.slice(0, -1));
                    }
                    else {
                        setContextSelectorEnabled(false);
                        setContextSelectorFilter('');
                    }
                }
            }
        }
    }, [handleSubmit, setHidePopups]);
    const handleTextareaOnChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
        const nextMsg = textareaRef.current?.value.slice(0, maxTextareaInputLength + 1) || '';
        onInstructionUpdate(nextMsg);
        setMsg(nextMsg);
    }, [onInstructionUpdate, setMsg, maxTextareaInputLength]);
    const handleContextSelection = (option, thisPosition = textareaRef.current?.selectionStart) => {
        const cursorPosition = thisPosition;
        const textBeforeCursor = msg.slice(0, cursorPosition);
        const textAfterCursor = msg.slice(cursorPosition);
        const lastAtSignIndex = textBeforeCursor.lastIndexOf('@') + 1;
        const newTextBeforeCursor = textBeforeCursor.slice(0, lastAtSignIndex);
        const newText = newTextBeforeCursor + option.value + textAfterCursor;
        setMsg(newText);
        setContextSelectorEnabled(false);
        textareaRef.current?.focus();
    };
    const handleContextSelectorKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e, option, index, length) => {
        e.preventDefault();
        if (e.key === 'Enter' && !e.shiftKey) {
            handleContextSelection(option, currentCursorPosition);
        }
        else if (length > 0 && e.key === 'ArrowUp') {
            setContextOptionsIndex(Math.max(0, index - 1));
        }
        else if (length > 0 && e.key === 'ArrowDown') {
            setContextOptionsIndex(Math.min(index + 1, length - 1));
        }
        else if (e.key === 'Escape') {
            setContextSelectorEnabled(false);
            textareaRef.current?.focus();
        }
    }, [currentCursorPosition, handleContextSelection]);
    const handleContextOptionFocus = (index) => {
        setContextOptionsIndex(index);
    };
    (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_9__.useEffectOnce)(() => {
        if (textareaRef.current) {
            (0,_github_paste_markdown__WEBPACK_IMPORTED_MODULE_1__.subscribe)(textareaRef.current);
        }
    });
    // Focus the textarea when the chat stops loading
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!loading) {
            if (textareaRef.current) {
                textareaRef.current.focus();
            }
        }
    }, [loading, textAreaID]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (contextSelectorOptions.length > 0) {
            setContextSelectorOptionsFiltered(contextSelectorOptions.filter(option => option.value.toLowerCase().startsWith(contextSelectorFilter.toLowerCase())));
        }
    }, [contextSelectorFilter, contextSelectorOptions]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        contextOptionsRefs[contextOptionsIndex]?.focus();
    }, [contextOptionsIndex]);
    // The following lines make the textarea grow with the text
    let textareaScrollHeight = 0;
    let formHeight = 0;
    let formMarginTop = 0;
    const maxTextareaHeight = 200;
    const minTextareaHeight = 53;
    if (!msg) {
        textareaScrollHeight = 0;
        formHeight = minTextareaHeight;
        formMarginTop = 0;
    }
    else {
        textareaScrollHeight = textareaRef.current?.scrollHeight || 0;
        formHeight = textareaScrollHeight;
        formMarginTop = formHeight >= minTextareaHeight ? minTextareaHeight - formHeight : 0;
        if (formMarginTop < -(maxTextareaHeight - minTextareaHeight)) {
            formMarginTop = -(maxTextareaHeight - minTextareaHeight);
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_3__.Div, { asChildName: "chat-input" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Style__WEBPACK_IMPORTED_MODULE_4__.Style, { asChildName: "style" }, styleOfChatInput),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { style: {
                height: formHeight,
                marginTop: formMarginTop,
                maxHeight: maxTextareaHeight
            }, onSubmit: handleSubmit },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(rich_textarea__WEBPACK_IMPORTED_MODULE_8__.RichTextarea, { ref: textareaRef, style: {
                    width: '100%',
                    height: formHeight,
                    minHeight: '53px',
                    padding: '16px 56px 16px 16px',
                    boxSizing: 'border-box'
                }, value: msg, placeholder: placeholderIfLoading, className: textAreaID, disabled: loading, id: textAreaID, maxLength: maxTextareaInputLength, onKeyDown: handleTextareaKeyDown, onChange: handleTextareaOnChange }, contextStringRenderer),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_3__.Div, { asChildName: "context-selector", className: contextSelectorEnabled && contextSelectorOptionsFiltered.length > 0 ? 'is-open' : '' },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_3__.Div, { asChildName: "title" }, "Select context"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_3__.Div, { asChildName: "list" }, contextSelectorOptionsFiltered.map((option, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: option.value, className: `anaconda-assistant-context-selector-list-option`, role: "option", ref: el => (el ? (contextOptionsRefs[index] = el) : null), tabIndex: contextOptionsIndex === index ? 0 : -1, onFocus: () => handleContextOptionFocus(index), onKeyDown: e => handleContextSelectorKeyDown(e, option, index, contextSelectorOptionsFiltered.length), onClick: () => handleContextSelection(option) },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_3__.Div, { asChildName: "label" }, option.label),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_3__.Div, { asChildName: "description", "data-tooltip-id": `context-element-${option.value}`, "data-tooltip-content": `${contextDescriptionMap[option.value]}` }, "\u24D8"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_6__.Tooltip, { key: option.value, id: `context-element-${option.value}`, place: "left", style: { width: '50%', zIndex: '999' } })))))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Button__WEBPACK_IMPORTED_MODULE_5__.Button, { asChildName: loading ? 'stop-button' : 'submit-button', "data-testid": loading ? 'stop-button' : 'submit-button', "data-tooltip-id": "assistant-send-button-tooltip", "data-tooltip-content": loading ? 'Cancel' : 'Send', onClick: props.onStop },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_3__.Div, { asChildName: "send-icon" }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.Icons.Stop, null) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.Icons.Send, null)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_6__.Tooltip, { className: "anaconda-assistant-tooltip", id: "assistant-send-button-tooltip", place: "top" })))));
});


/***/ }),

/***/ "../../lib/assistant-components/lib/chat-elements/ChatPanelFooter.js":
/*!***************************************************************************!*\
  !*** ../../lib/assistant-components/lib/chat-elements/ChatPanelFooter.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatPanelFooter: () => (/* binding */ ChatPanelFooter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ */ "../../lib/assistant-components/lib/index.js");
/* harmony import */ var use_resize_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-resize-observer */ "../../node_modules/use-resize-observer/dist/bundle.esm.js");



function ChatPanelFooter({ scrollFn, tokenLimit, fetchFileSummary }) {
    const [activeChatKey, messagesLength, inProgressMessage, activeChatTokens, activeChatMaxTokens, activeChatType, activeNotebookState, addInstruction, summarizedFiles, isPro, error, makeChatRequest, resetToHomeScreen, setCellError, hidePopups, activeChat, attachContextOpen, abortChatRequest, account, resetActiveChat, activeNotebook, setAttachContextOpen, setHidePopups, enableDataCollection] = (0,___WEBPACK_IMPORTED_MODULE_1__.useStore)(state => [
        (0,___WEBPACK_IMPORTED_MODULE_1__.getActiveChat)(state)?.key,
        (0,___WEBPACK_IMPORTED_MODULE_1__.getActiveChat)(state)?.messages.length,
        (0,___WEBPACK_IMPORTED_MODULE_1__.getActiveChat)(state)?.inProgress,
        (0,___WEBPACK_IMPORTED_MODULE_1__.getActiveChat)(state)?.tokens,
        (0,___WEBPACK_IMPORTED_MODULE_1__.getActiveChat)(state)?.maxTokens,
        (0,___WEBPACK_IMPORTED_MODULE_1__.getActiveChat)(state)?.inProgress?.type,
        (0,___WEBPACK_IMPORTED_MODULE_1__.getActiveNotebook)(state)?.notebookState,
        state.addInstruction,
        state.summarizedFiles,
        state.account?.metadata?.is_pro_tier,
        (0,___WEBPACK_IMPORTED_MODULE_1__.getActiveNotebook)(state)?.notebookState.error,
        state.makeChatRequest,
        state.resetToHomeScreen,
        state.setCellError,
        state.hidePopups,
        (0,___WEBPACK_IMPORTED_MODULE_1__.getActiveChat)(state),
        state.attachContextOpen,
        state.abortChatRequest,
        state.account,
        state.resetActiveChat,
        (0,___WEBPACK_IMPORTED_MODULE_1__.getActiveNotebook)(state),
        state.setAttachContextOpen,
        state.setHidePopups,
        state.settings.enableDataCollection
    ]);
    const [instructionTokens, setInstructionTokens] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const { ref, width } = (0,use_resize_observer__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const contextSelectorOptions = [];
    if (isPro) {
        activeNotebookState?.dataframes?.forEach((dataframe) => {
            contextSelectorOptions.push({
                label: `@dataframe:${dataframe.name}`,
                value: `dataframe:${dataframe.name}`,
                description: `Add a DataFrame as context. WARNING: Do not share any sensitive data`
            });
        });
        const fileNames = Object.keys(summarizedFiles);
        fileNames.forEach((fileName) => {
            contextSelectorOptions.push({
                label: `@file:${fileName}`,
                value: `file:${fileName}`,
                description: `Add a File as context. WARNING: Do not share any sensitive data`
            });
        });
    }
    function addNewInstruction(instruction) {
        addInstruction({ instruction, fetchFileSummary });
        setTimeout(scrollFn, 100);
    }
    const maxTokens = activeChatMaxTokens != null ? activeChatMaxTokens : tokenLimit;
    const [totalTokens, setTotalTokens] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(activeChatTokens != null ? activeChatTokens + instructionTokens : 0);
    const [msg, setMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const timeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(undefined);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (timeoutRef.current)
            clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            clearTimeout(timeoutRef.current);
            let _instructionTokens = instructionTokens;
            if (!msg && inProgressMessage == null) {
                _instructionTokens = 0;
                setInstructionTokens(0);
            }
            setTotalTokens(activeChatTokens != null ? activeChatTokens + _instructionTokens : 0);
        }, 250);
        return () => clearTimeout(timeoutRef.current);
    }, [messagesLength, activeChatTokens, instructionTokens, inProgressMessage, msg]);
    function updateTokenCount(instruction) {
        setInstructionTokens((0,___WEBPACK_IMPORTED_MODULE_1__.countTokens)(instruction));
    }
    function sendMessage(instruction) {
        addNewInstruction(instruction);
        setMsg('');
    }
    const contextSelectorFeatureFlagEnabled = (0,___WEBPACK_IMPORTED_MODULE_1__.getAssistantStore)().getFeatureFlagBool('assistant-show-context-selector', false);
    const placeholder = activeChatKey != null
        ? contextSelectorFeatureFlagEnabled && isPro
            ? 'Type @ to add context to this chat...'
            : 'Reply to this chat...'
        : `Or start a new chat without ${(0,___WEBPACK_IMPORTED_MODULE_1__.getAssistantStore)().clientContextType} context here...`;
    const loading = activeChatType === 'active';
    const dataFrames = activeNotebook?.notebookState.dataframes;
    // Focus the textarea when the chat stops loading
    const hiddenInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (loading) {
            if (hiddenInputRef.current) {
                hiddenInputRef.current.focus();
            }
        }
    }, [loading]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.ErrorPopup, { width: width, error: error, hidePopups: hidePopups, enableDataCollection: enableDataCollection, makeChatRequest: makeChatRequest, resetToHomeScreen: resetToHomeScreen, setCellError: setCellError }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.AddContextPopup, { onAddContext: sendMessage, makeChatRequest: makeChatRequest, attachContextOpen: attachContextOpen, dataFrames: dataFrames, setAttachContextOpen: setAttachContextOpen, activeChatAvailable: activeChat !== null }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-chat-footer-container", ref: ref },
            loading && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", ref: hiddenInputRef, style: { position: 'absolute', top: -100, opacity: 0 }, onKeyDown: e => {
                    const isEnter = e.keyCode === 13;
                    if (!isEnter)
                        return;
                    e.preventDefault();
                    abortChatRequest();
                } })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.ChatInput, { msg: msg, setMsg: setMsg, sendMessage: sendMessage, loading: loading, onInstructionUpdate: updateTokenCount, placeholder: placeholder, maxTokens: maxTokens, setHidePopups: setHidePopups, onStop: abortChatRequest, contextSelectorOptions: contextSelectorOptions }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.Footer, { resetActiveChat: resetActiveChat, setAttachContextOpen: setAttachContextOpen, loading: activeChatType != null, dataframesLength: dataFrames?.length, activeChatKey: activeChatKey, activeChatType: activeChatType, tokens: totalTokens, maxTokens: maxTokens, isPro: Boolean(account?.metadata?.is_pro_tier) }))));
}


/***/ }),

/***/ "../../lib/assistant-components/lib/chat-elements/ErrorPopup.js":
/*!**********************************************************************!*\
  !*** ../../lib/assistant-components/lib/chat-elements/ErrorPopup.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorPopup: () => (/* binding */ ErrorPopup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons */ "../../lib/assistant-components/lib/icons.js");
/* harmony import */ var _base_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-elements */ "../../lib/assistant-components/lib/base-elements/index.js");



/**
 * Style for the ErrorPopup component.
 * @alpha
 */
const styleOfErrorPopup = `
.anaconda-assistant-popup-container-buttons-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3px;
  border-radius: 8px;
  padding: 9px 12px 9px 12px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: unset;
}

`;
/**
 * Error Popup component.
 * @alpha
 */
const ErrorPopup = (props) => {
    const { width, error, hidePopups, enableDataCollection, makeChatRequest, resetToHomeScreen, setCellError } = props;
    const [showError, setShowError] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        // Hide the popup if there's a response in progress
        if (hidePopups) {
            setShowError(false);
            return;
        }
        // Show the popup if there's an error
        if (error) {
            setShowError(true);
        }
        else {
            setShowError(false);
        }
    }, [error, hidePopups]);
    function closeErrorDialog() {
        setCellError(null);
    }
    function handleDebugCode(error) {
        resetToHomeScreen();
        makeChatRequest({
            context: {
                type: 'debug-error',
                variables: {
                    error_cell_code: error?.cell.source,
                    error_output: error?.errorText
                }
            },
            instruction: ''
        });
        setCellError(null);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Style, { asChildName: "style" }, styleOfErrorPopup),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Popup, { width: width, show: showError, headerTitle: 'Anaconda Assistant', warningMessage: `By debugging the active code cell, the error tied to the active code cell, and the
                  code of the active code cell will be sent to
                  ${enableDataCollection ? 'the Anaconda Servers and to ' : ''}
                  OpenAI.`, bodyTitle: 'Start a new conversation', body: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Button, { asChildName: "button", onClick: () => handleDebugCode(error) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "title" }, "Debug the active code cell"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "icon" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_1__.Icons.ChevronRight, null))), dialogClosed: closeErrorDialog })));
};


/***/ }),

/***/ "../../lib/assistant-components/lib/chat-elements/Footer.js":
/*!******************************************************************!*\
  !*** ../../lib/assistant-components/lib/chat-elements/Footer.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Footer: () => (/* binding */ Footer),
/* harmony export */   styleOfFooter: () => (/* binding */ styleOfFooter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons */ "../../lib/assistant-components/lib/icons.js");
/* harmony import */ var _base_elements_Div__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-elements/Div */ "../../lib/assistant-components/lib/base-elements/Div.js");
/* harmony import */ var _base_elements_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-elements/Button */ "../../lib/assistant-components/lib/base-elements/Button.js");
/* harmony import */ var _base_elements_Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-elements/Style */ "../../lib/assistant-components/lib/base-elements/Style.js");





/**
 * Style for the Footer component.
 * @alpha
 */
const styleOfFooter = `
.anaconda-assistant-chat-footer {
  --text-color: #6a718a;

  color: var(--text-color);
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  align-items: bottom;
}

.anaconda-assistant-chat-footer-token {
  display: flex;
  flex-direction: column;
}

.anaconda-assistant-chat-footer-token-bar {
  display: flex;
  width: 72px;
  margin-right: 16px;
  margin-bottom: 6px;
  background: #e1e1e1;
}

.anaconda-assistant-chat-footer-token-bar-filled {
  height: 7px;
  background: linear-gradient(270deg, #ffb84f 0%, #76dd5c 100%), #80b241;
  transition: width 1s ease-in-out;
}

.anaconda-assistant-chat-footer-token-text {
  display: flex;
  margin-right: 4px;
}

.anaconda-assistant-chat-footer-token-text-count {
  display: flex;
  font-weight: bold;
  padding-left: 5px;
  padding-right: 5px;
}

.anaconda-assistant-chat-footer-attach-context {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
}

.anaconda-assistant-chat-footer-attach-context-button {
  border: none;
  background: inherit;
  padding: 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--text-color);
}

anaconda-assistant-chat-footer-attach-context-button:hover {
  filter: brightness(1.2);
}

.anaconda-assistant-chat-footer-attach-context-button:disabled {
  color: #999;
  cursor: not-allowed;
}
`;
/**
 * Footer component.
 * @alpha
 */
const Footer = react__WEBPACK_IMPORTED_MODULE_0___default().memo((props) => {
    const { setAttachContextOpen, loading, dataframesLength, tokens, maxTokens, isPro } = props;
    const completePercent = Math.ceil((tokens / maxTokens) * 100);
    const rawPercentage = Math.round((tokens / maxTokens) * 100);
    const percentage = rawPercentage > 100 ? 100 : rawPercentage;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "chat-footer" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Style__WEBPACK_IMPORTED_MODULE_4__.Style, { asChildName: "style" }, styleOfFooter),
        !isPro && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "token" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "bar", "data-testid": "token-count-bar" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "filled", style: { width: `${percentage >= 100 ? 100 : completePercent}%` } })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "text", style: tokens >= maxTokens ? { color: 'red' } : {} },
                "Chat ",
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "count" },
                    percentage,
                    "%"),
                "full"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "attach-context" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Button__WEBPACK_IMPORTED_MODULE_3__.Button, { asChildName: "button", disabled: loading || !dataframesLength, onClick: () => setAttachContextOpen(true) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "icon" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_1__.Icons.Clip, null)),
                "Attach to chat"))));
});


/***/ }),

/***/ "../../lib/assistant-components/lib/chat-elements/Header.js":
/*!******************************************************************!*\
  !*** ../../lib/assistant-components/lib/chat-elements/Header.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* binding */ Header),
/* harmony export */   styleOfHeader: () => (/* binding */ styleOfHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tooltip */ "../../node_modules/react-tooltip/dist/react-tooltip.min.mjs");
/* harmony import */ var _base_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-elements */ "../../lib/assistant-components/lib/base-elements/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons */ "../../lib/assistant-components/lib/icons.js");




/**
 * Style for the Footer component.
 * @alpha
 */
const styleOfHeader = `
.anaconda-assistant-header {
  display: flex;
  padding: 8px 16px;
  align-items: center;
  font-family: 'Inter', sans-serif;
  border-bottom: 1px solid var(--as-border-color-light, #ced2d9);
  background: var(--as-main-bg-color-primary, #fff);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
}

.anaconda-assistant-header-title {
  display: flex;
  flex: 1;
  align-items: center;
}

.anaconda-assistant-header-buttons,
.anaconda-assistant-header-buttons-disabled {
  display: flex;
}

[class^='anaconda-assistant-header-buttons-icon'],
[class^='anaconda-assistant-header-buttons-disabled-icon'] {
  background-color: transparent;
  border: none;
  display: flex;
  width: 36px;
  height: 36px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  margin-right: 16px;
  color: var(--as-main-font-color-secondary, #52596b);
  cursor: pointer;
}

[class^='anaconda-assistant-header-buttons-disabled-icon']:last-child,
[class^='anaconda-assistant-header-buttons-icon']:last-child {
  margin-right: 0;
}

[class^='anaconda-assistant-header-buttons-icon'] {
  &:hover,
  &:focus {
    background-color: #cdd2da;
    color: #3c7529;
  }
}

.anaconda-assistant-header-buttons-icon-open {
    background-color: #e5e8eb;
    color: #0cca4a;
}

[class^='anaconda-assistant-header-buttons-disabled-icon'],
[class^='anaconda-assistant-header-buttons-disabled-icon']:hover,
.anaconda-assistant-header-buttons-disabled-icon-open {
  background: none;
  cursor: auto;
  color: var(--as-main-disabled-color, #abb1bf);
}

.anaconda-assistant-header-title-icon {
  width: 24px;
  height: 24px;
  color: #31a824;
}

.anaconda-assistant-header-title-text {
  color: var(--as-main-font-color, #2c303a);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  margin-left: 4px;
}

.anaconda-assistant-header-title-version {
  color: var(--as-main-font-color, #2c303a);
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  margin-left: 4px;
}
`;
/**
 * Header component.
 * @alpha
 */
const Header = (props) => {
    const { disableMenu, activeChat, clientVersion, chatsHistoryOpen, showSettings, settingsOpen, toggleChatsHistory, newChatClicked, toggleSettings } = props;
    const resetButtons = () => {
        chatsHistoryOpen && toggleChatsHistory();
        settingsOpen && toggleSettings();
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "header" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Style, { asChildName: "style" }, styleOfHeader),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "title" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "icon" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.Icons.AnacondaLogo, null)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "text" }, "Anaconda Assistant"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "version" }, clientVersion)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: `buttons${disableMenu ? '-disabled' : ''}` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Button, { asChildName: `icon${!activeChat && !chatsHistoryOpen && !settingsOpen ? '-open' : ''}`, "data-tooltip-id": "anaconda-assistant-header-button-new-chat", "data-tooltip-hidden": disableMenu, disabled: disableMenu, "data-tooltip-content": "New chat", onClick: () => {
                    if (!disableMenu) {
                        resetButtons();
                        newChatClicked();
                    }
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.Icons.NewChat, null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_1__.Tooltip, { className: "anaconda-assistant-tooltip", id: "anaconda-assistant-header-button-new-chat", place: "bottom" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Button, { asChildName: `icon${chatsHistoryOpen ? '-open' : ''}`, "data-tooltip-id": "anaconda-assistant-header-button-history", "data-tooltip-content": "Chats history", "data-tooltip-hidden": disableMenu, disabled: disableMenu, onClick: () => {
                    if (!disableMenu) {
                        resetButtons();
                        !chatsHistoryOpen && toggleChatsHistory();
                    }
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.Icons.History, null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_1__.Tooltip, { className: "anaconda-assistant-tooltip", id: "anaconda-assistant-header-button-history", place: "bottom" })),
            showSettings && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Button, { asChildName: `icon${settingsOpen ? '-open' : ''}`, "data-tooltip-id": "anaconda-assistant-header-button-settings", "data-tooltip-content": "Settings", "data-tooltip-hidden": disableMenu, disabled: disableMenu, onClick: () => {
                        if (!disableMenu) {
                            resetButtons();
                            !settingsOpen && toggleSettings();
                        }
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.Icons.Settings, null),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_1__.Tooltip, { className: "anaconda-assistant-tooltip", id: "anaconda-assistant-header-button-settings", place: "bottom" })))))));
};


/***/ }),

/***/ "../../lib/assistant-components/lib/chat-elements/MessageButtons.js":
/*!**************************************************************************!*\
  !*** ../../lib/assistant-components/lib/chat-elements/MessageButtons.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageButtons: () => (/* binding */ MessageButtons),
/* harmony export */   styleOfMessageButtons: () => (/* binding */ styleOfMessageButtons)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tooltip */ "../../node_modules/react-tooltip/dist/react-tooltip.min.mjs");
/* harmony import */ var _AssistantComponentContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AssistantComponentContext */ "../../lib/assistant-components/lib/AssistantComponentContext.js");
/* harmony import */ var _base_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-elements */ "../../lib/assistant-components/lib/base-elements/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons */ "../../lib/assistant-components/lib/icons.js");
/* harmony import */ var _pages_childFixer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/childFixer */ "../../lib/assistant-components/lib/pages/childFixer.js");
/* harmony import */ var _store_AssistantStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/AssistantStore */ "../../lib/assistant-components/lib/store/AssistantStore.js");
/* harmony import */ var _feedback_CompletedThumbs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feedback/CompletedThumbs */ "../../lib/assistant-components/lib/chat-elements/feedback/CompletedThumbs.js");
/* harmony import */ var _feedback_FeedbackButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./feedback/FeedbackButton */ "../../lib/assistant-components/lib/chat-elements/feedback/FeedbackButton.js");
/* harmony import */ var _feedback_FeedbackButtonsWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./feedback/FeedbackButtonsWrapper */ "../../lib/assistant-components/lib/chat-elements/feedback/FeedbackButtonsWrapper.js");











/**
 * Style for the message buttons.
 * @alpha
 */
const styleOfMessageButtons = `
.anaconda-assistant-message-buttons {
  display: flex;
  align-items: center;
  margin: 16px 0 0;
  width: 100%;

}

.anaconda-assistant-message-buttons svg {
  color: #abb1bf;
  cursor: pointer;
  width: 20px;
  height: 20px;
}

.anaconda-assistant-message-buttons Button {
  border: none;
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  padding: 8px;

  &:hover,
  &:focus {
    svg {
      color: #6a718a;
    }
  }
}

.anaconda-assistant-message-buttons-thumbs-icons {
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
}
`;
/**
 * Message buttons.
 * @alpha
 */
const MessageButtons = (props) => {
    const { canDelete, canExport, canSubmitFeedback, message, modalWidth, exportMessage, deleteMessagesAfterId, handleFeedback } = props;
    const { replaceChildren } = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(_AssistantComponentContext__WEBPACK_IMPORTED_MODULE_3__.AssistantComponentContext);
    const assistantMessage = message;
    if (canSubmitFeedback && !handleFeedback) {
        throw new Error('handleFeedback must be provided if canSubmitFeedback is true');
    }
    let feedbackComponents = null;
    const canRenderFeedback = canSubmitFeedback && handleFeedback;
    if (canRenderFeedback) {
        if (assistantMessage.feedback) {
            feedbackComponents = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                canSubmitFeedback && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_feedback_CompletedThumbs__WEBPACK_IMPORTED_MODULE_8__.CompletedThumbs, { direction: "up", selected: assistantMessage.feedback.sentiment === 'positive' })),
                canSubmitFeedback && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_feedback_CompletedThumbs__WEBPACK_IMPORTED_MODULE_8__.CompletedThumbs, { direction: "down", selected: assistantMessage.feedback.sentiment === 'negative' }))));
        }
        else {
            // Feedback buttons use css animation to beat, but if the sidebar menu is open, this will
            // cause them to appear in front of the menu, so we hide them when the menu is open.
            // See - https://stackoverflow.com/questions/61243945/checkboxes-behind-a-div-turned-visible-when-their-opacity-is-changed
            feedbackComponents = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, canSubmitFeedback && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_feedback_FeedbackButtonsWrapper__WEBPACK_IMPORTED_MODULE_10__.FeedbackButtonsWrapper, { modalWidth: modalWidth, onSubmitFeedback: handleFeedback }))));
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "message-buttons", style: props.style },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_4__.Style, { asChildName: "style" }, styleOfMessageButtons),
        canExport && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_4__.Button, { asChildName: "export-button", "data-testid": "export-icon", "data-tooltip-id": "export-tooltip", "data-tooltip-content": `Export and run this message in the ${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.startCase)((0,_store_AssistantStore__WEBPACK_IMPORTED_MODULE_7__.getAssistantStore)().clientContextType)}`, onClick: () => exportMessage(message) },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_5__.Icons.Book, null),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_2__.Tooltip, { className: "anaconda-assistant-tooltip", id: "export-tooltip", place: "bottom" }))),
        canDelete && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_4__.Button, { asChildName: "delete-button", "data-testid": "delete-icon", "data-tooltip-id": "delete-tooltip", "data-tooltip-content": "Delete this and all messages below", onClick: () => deleteMessagesAfterId(message.messageId) },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_5__.Icons.Trash, null),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_2__.Tooltip, { className: "anaconda-assistant-tooltip", id: "delete-tooltip", place: "bottom" }))),
        canRenderFeedback && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "thumbs-icons" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_AssistantComponentContext__WEBPACK_IMPORTED_MODULE_3__.AssistantComponentContext.Provider, { value: (0,_pages_childFixer__WEBPACK_IMPORTED_MODULE_6__.childFixer)({
                    parentName: 'message-buttons',
                    childName: assistantMessage.feedback ? 'completed-thumbs' : 'feedback-button',
                    childrenStyle: assistantMessage.feedback
                        ? _feedback_CompletedThumbs__WEBPACK_IMPORTED_MODULE_8__.styleOfCompletedThumbs
                        : _feedback_FeedbackButton__WEBPACK_IMPORTED_MODULE_9__.styleOfFeedbackButton,
                    replaceChildren
                }) }, feedbackComponents)))));
};


/***/ }),

/***/ "../../lib/assistant-components/lib/chat-elements/SelectContext.js":
/*!*************************************************************************!*\
  !*** ../../lib/assistant-components/lib/chat-elements/SelectContext.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectContext: () => (/* binding */ SelectContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SelectDataframe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectDataframe */ "../../lib/assistant-components/lib/chat-elements/SelectDataframe.js");
/* harmony import */ var _base_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-elements */ "../../lib/assistant-components/lib/base-elements/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons */ "../../lib/assistant-components/lib/icons.js");




/**
 * Style for the SelectContent component.
 * @alpha
 */
const styleOfSelectContext = `
.anaconda-assistant-selectContext {
  margin: 20px;
}

.anaconda-assistant-selectContext-warning {
  margin-bottom: 20px;
  color: #757575;
  background: #fcfccc;
  padding: 10px;
  font-size: 11px;
  border-radius: 4px;
  border: 1px solid #ebebbe;
  display: flex;
}

.anaconda-assistant-selectContext-warning-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 12px 0 3px;
}

.anaconda-assistant-selectContext-warning-container-icon {
  width: 23px;
  color: #ffba0a;
}

.anaconda-assistant-selectContext-buttons {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-bottom: 15px;
}

.anaconda-assistant-selectContext-buttons-wrapper {
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 590;
  letter-spacing: 0.02em;
}

.anaconda-assistant-selectContext-buttons-wrapper-container {
  width: 26px;
  height: 26px;
  background: rgba(0, 178, 255, 0.1);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}

.anaconda-assistant-selectContext-buttons-wrapper-container-icon {
  width: 13px;
  color: #00b2ff;
}
`;
/**
 * Explain SelectContext component.
 * @alpha
 */
const SelectContext = (props) => {
    const { contextType, onSubmit, dataFrames, makeChatRequest, enableDataCollection } = props;
    let { buttonLabel } = props;
    const typesToButtonLabelsMap = {
        'graph-dataframe': 'Get Code',
        'describe-dataframe': 'Describe Dataframe',
        'assistant-suggestions': 'Generate suggestions'
    };
    if (!buttonLabel && contextType) {
        buttonLabel = typesToButtonLabelsMap[contextType];
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "selectContext" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Style, { asChildName: "style" }, styleOfSelectContext),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "warning" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "container" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "icon" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.Icons.Warning, null))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "message" }, `By attaching a dataframe to the conversation, the dataframe column names and types will be
                  sent to ${enableDataCollection ? 'the Anaconda Servers and to ' : ''}
                  OpenAI.`)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "buttons" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "wrapper" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "container" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "icon" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.Icons.Code, null))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "title" }, "Select Dataframe")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SelectDataframe__WEBPACK_IMPORTED_MODULE_1__.SelectDataFrame, { contextType: contextType, makeChatRequest: makeChatRequest, dataFrames: dataFrames, buttonLabel: buttonLabel, onSubmit: onSubmit }))));
};


/***/ }),

/***/ "../../lib/assistant-components/lib/chat-elements/SelectDataframe.js":
/*!***************************************************************************!*\
  !*** ../../lib/assistant-components/lib/chat-elements/SelectDataframe.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectDataFrame: () => (/* binding */ SelectDataFrame)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons */ "../../lib/assistant-components/lib/icons.js");
/* harmony import */ var _base_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-elements */ "../../lib/assistant-components/lib/base-elements/index.js");



/**
 * Style for the SelectDataFrame component.
 * @alpha
 */
const styleOfDataframeSelector = `
[class^='anaconda-assistant-'][class$='-dataframe-selector-select'] {
  margin: 0;
  box-sizing: border-box;
  appearance: none;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  display: inline-block;
  font: inherit;
  font-size: 13px;
  height: 40px;
  line-height: 1em;
  padding: 0.5em 3.5em 0.5em 1em;
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(100% - 20px) calc(1em + 4px),
    calc(100% - 15px) calc(1em + 4px),
    calc(100% - 2.5em) 9px;
  background-size:
    5px 5px,
    5px 5px,
    1px 20px;
  background-repeat: no-repeat;
  width: 100%;
}

[class^='anaconda-assistant-'][class$='-dataframe-selector-select']:invalid {
  color: gray;
}

[class^='anaconda-assistant-'][class$='-dataframe-selector-button'] {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  margin-top: 16px;
  height: 40px;
  border-radius: 4px;
  box-sizing: border-box;
  text-decoration: none;
  font-size: 13px;
  font-weight: 300;
  color: #06262d;
  text-align: center;
  transition: all 0.5s;
  background: #0cca4a;
  width: 100%;
}

[class^='anaconda-assistant-'][class$='-dataframe-selector-button'].disabled {
  background: #bdbdbd;
}

[class^='anaconda-assistant-'][class$='-dataframe-selector-button']:hover {
  background-color: #4fab4f;
  cursor: pointer;
}

[class^='anaconda-assistant-'][class$='-dataframe-selector-button']:hover.disabled {
  cursor: not-allowed;
  background: #bdbdbd;
}

[class^='anaconda-assistant-'][class$='-dataframe-selector-button-icon'] {
  width: 16px;
  height: 16px;
  margin-right: 10px;
}
`;
/**
 * SelectDataFrame component.
 * @alpha
 */
const SelectDataFrame = (props) => {
    const { buttonLabel, contextType, onSubmit, makeChatRequest, dataFrames, enableDataCollection } = props;
    if (contextType === 'assistant-suggestions' && !onSubmit) {
        throw new Error('onSubmit is required for assistant-suggestions');
    }
    let submit = () => void 0;
    if (contextType && contextType !== 'assistant-suggestions') {
        submit = (dataframe) => {
            makeChatRequest({
                context: { type: contextType, variables: { dataframe } },
                instruction: ''
            });
        };
    }
    if (!dataFrames)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DataframeSelector, { dataframes: dataFrames, submit: onSubmit || submit, buttonLabel: buttonLabel, enableDataCollection: enableDataCollection }));
};
/**
 * DataframeSelector component.
 * @alpha
 */
const DataframeSelector = (props) => {
    const { dataframes, submit, buttonLabel } = props;
    const [selectedDf, setSelectedDataframe] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    function onChange(value) {
        const dataframe = dataframes.find(v => v.name === value);
        if (dataframe)
            setSelectedDataframe(dataframe);
    }
    function handleClick() {
        if (selectedDf)
            submit(selectedDf);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "dataframe-selector" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Style, { asChildName: "style" }, styleOfDataframeSelector),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Select, { "data-testid": "dataframe-select", required: true, asChildName: "select", value: selectedDf?.name || '', onChange: e => onChange(e.currentTarget.value) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Option, { asChildName: "option", value: "", disabled: true, defaultValue: "Select", hidden: true }, "Select"),
            dataframes.map(df => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Option, { asChildName: "option", key: df.hash, value: df.name }, df.name)))),
        selectedDf && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Button, { "data-testid": "dataframe-selector-button", asChildName: "button", onClick: handleClick },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "icon" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_1__.Icons.MagicWand, null)),
            buttonLabel || 'Select Dataframe'))));
};


/***/ }),

/***/ "../../lib/assistant-components/lib/chat-elements/UserMessage.js":
/*!***********************************************************************!*\
  !*** ../../lib/assistant-components/lib/chat-elements/UserMessage.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserMessage: () => (/* binding */ UserMessage),
/* harmony export */   styleOfUserMessage: () => (/* binding */ styleOfUserMessage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons */ "../../lib/assistant-components/lib/icons.js");
/* harmony import */ var _MessageButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageButtons */ "../../lib/assistant-components/lib/chat-elements/MessageButtons.js");
/* harmony import */ var _base_elements_Div__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-elements/Div */ "../../lib/assistant-components/lib/base-elements/Div.js");
/* harmony import */ var _base_elements_Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-elements/Style */ "../../lib/assistant-components/lib/base-elements/Style.js");
/* harmony import */ var _AssistantComponentContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../AssistantComponentContext */ "../../lib/assistant-components/lib/AssistantComponentContext.js");
/* harmony import */ var _pages_childFixer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/childFixer */ "../../lib/assistant-components/lib/pages/childFixer.js");







/**
 * Style for the user message.
 * @alpha
 */
const styleOfUserMessage = `
.anaconda-assistant-user-message {
  display: flex;
  flex-direction: column;
  background: #e9e6fe;
  border-radius: 8px;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.87);
}

.anaconda-assistant-user-message-message-container {
  display: flex;
  padding: 12px;
  flex-direction: row;
  align-items: center;

}

.anaconda-assistant-user-message-message-container-icon {
  display: flex;
  width: 28px;
  height: 24px;
  color: #6c5af6;
}

.anaconda-assistant-user-message-message-container-message-text {
  word-break: break-word;
  white-space: pre-wrap;
  margin-left: 10px;
}
`;
/**
 * User message.
 * @alpha
 */
const UserMessage = (props) => {
    const { message, isInitialMessage, exportMessage, deleteMessagesAfterId, handleFeedback } = props;
    const { replaceChildren } = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(_AssistantComponentContext__WEBPACK_IMPORTED_MODULE_5__.AssistantComponentContext);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_3__.Div, { asChildName: "user-message" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Style__WEBPACK_IMPORTED_MODULE_4__.Style, { asChildName: "style" }, styleOfUserMessage),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_3__.Div, { asChildName: "message-container" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_3__.Div, { asChildName: "icon" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_1__.Icons.UserPrompt, null)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_3__.Div, { asChildName: "message-text" }, message.content))),
        !isInitialMessage && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AssistantComponentContext__WEBPACK_IMPORTED_MODULE_5__.AssistantComponentContext.Provider, { value: (0,_pages_childFixer__WEBPACK_IMPORTED_MODULE_6__.childFixer)({
                parentName: 'user-message',
                childName: 'message-buttons',
                childrenStyle: _MessageButtons__WEBPACK_IMPORTED_MODULE_2__.styleOfMessageButtons,
                replaceChildren
            }) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageButtons__WEBPACK_IMPORTED_MODULE_2__.MessageButtons, { canDelete: true, canExport: true, message: message, exportMessage: exportMessage, deleteMessagesAfterId: deleteMessagesAfterId, handleFeedback: handleFeedback })))));
};


/***/ }),

/***/ "../../lib/assistant-components/lib/chat-elements/feedback/CompletedThumbs.js":
/*!************************************************************************************!*\
  !*** ../../lib/assistant-components/lib/chat-elements/feedback/CompletedThumbs.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompletedThumbs: () => (/* binding */ CompletedThumbs),
/* harmony export */   styleOfCompletedThumbs: () => (/* binding */ styleOfCompletedThumbs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons */ "../../lib/assistant-components/lib/icons.js");
/* harmony import */ var _base_elements_Div__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base-elements/Div */ "../../lib/assistant-components/lib/base-elements/Div.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tooltip */ "../../node_modules/react-tooltip/dist/react-tooltip.min.mjs");
/* harmony import */ var _base_elements_Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base-elements/Style */ "../../lib/assistant-components/lib/base-elements/Style.js");





/**
 * Style for the completed thumbs.
 * @alpha
 */
const styleOfCompletedThumbs = `
.anaconda-assistant-completed-thumbs,
.anaconda-assistant-completed-thumbs-selected {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  margin-left: 8px;
  color: #e0e0e0;
}

.anaconda-assistant-completed-thumbs-selected.thumbs-up {
  animation: anaconda-assistant-code-thumbs-up-beat 0.5s infinite;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  color: #14d662;
}

.anaconda-assistant-completed-thumbs-selected.thumbs-up svg {
  color: #14d662;
}

@keyframes anaconda-assistant-code-thumbs-up-beat {
  0%,
  90% {
    transform: scale(1);
  }
  45% {
    transform: scale(1.25);
  }
}

.anaconda-assistant-completed-thumbs-selected.thumbs-down {
  animation: anaconda-assistant-code-thumbs-down-beat 0.5s infinite;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  color: #f29c9c;
}

.anaconda-assistant-completed-thumbs-selected.thumbs-down svg {
  color: #f29c9c;
}

@keyframes anaconda-assistant-code-thumbs-down-beat {
  0%,
  90% {
    transform: scale(1);
  }
  45% {
    transform: scale(1.25);
  }
}
`;
/**
 * Completed thumbs.
 * @alpha
 */
const CompletedThumbs = react__WEBPACK_IMPORTED_MODULE_0___default().memo(({ selected, direction }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: selected ? 'completed-thumbs-selected' : 'completed-thumbs', "data-testid": `completed-thumbs-${direction}`, className: `thumbs-${direction}` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Style__WEBPACK_IMPORTED_MODULE_4__.Style, { asChildName: "style" }, styleOfCompletedThumbs),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_2__.Div, { asChildName: "completed-thumbs-tooltip", "data-tooltip-id": "completed-thumbs-tooltip", "data-tooltip-content": direction === 'up' ? 'I liked this response' : "I didn't like this response" }, direction === 'up' ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_1__.Icons.ThumbsUp, null) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_1__.Icons.ThumbsDown, null)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_3__.Tooltip, { className: "anaconda-assistant-tooltip", id: "completed-thumbs-tooltip" })));
});


/***/ }),

/***/ "../../lib/assistant-components/lib/chat-elements/feedback/FeedbackButton.js":
/*!***********************************************************************************!*\
  !*** ../../lib/assistant-components/lib/chat-elements/feedback/FeedbackButton.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedbackButton: () => (/* binding */ FeedbackButton),
/* harmony export */   styleOfFeedbackButton: () => (/* binding */ styleOfFeedbackButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-popper */ "../../node_modules/react-popper/lib/esm/usePopper.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tooltip */ "../../node_modules/react-tooltip/dist/react-tooltip.min.mjs");
/* harmony import */ var _AssistantComponentContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../AssistantComponentContext */ "../../lib/assistant-components/lib/AssistantComponentContext.js");
/* harmony import */ var _base_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base-elements */ "../../lib/assistant-components/lib/base-elements/index.js");
/* harmony import */ var _pages_childFixer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/childFixer */ "../../lib/assistant-components/lib/pages/childFixer.js");
/* harmony import */ var _FeedbackModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FeedbackModal */ "../../lib/assistant-components/lib/chat-elements/feedback/FeedbackModal.js");







/**
 * Style for the feedback button.
 * @alpha
 */
const styleOfFeedbackButton = `
.anaconda-assistant-feedback-button {
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 8px;
}

.anaconda-assistant-feedback-button-icon svg {
  width: 20px;
  height: 20px;
  color: #abb1bf;
}

.anaconda-assistant-feedback-button-icon svg:hover {
  color: #6a718a;
}
`;
/**
 * Feedback button.
 * @alpha
 */
const FeedbackButton = (props) => {
    const { open, setOpenFeedbackType, icon, tooltipTitle, feedbackType, modalWidth, onSubmitFeedback } = props;
    const [arrowElement, setArrowElement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [referenceElement, setReferenceElement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [popperElement, setPopperElement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { styles, attributes } = (0,react_popper__WEBPACK_IMPORTED_MODULE_6__.usePopper)(referenceElement, popperElement, {
        placement: 'top',
        modifiers: [{ name: 'arrow', options: { element: arrowElement } }]
    });
    const { replaceChildren } = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(_AssistantComponentContext__WEBPACK_IMPORTED_MODULE_2__.AssistantComponentContext);
    function toggleOpen() {
        setOpenFeedbackType(open ? undefined : feedbackType);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: setReferenceElement },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_3__.Style, { asChildName: "style" }, styleOfFeedbackButton),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_3__.Button, { mainContainer: true, asChildName: "feedback-button", "data-testid": "feedback-button-clickable", onClick: toggleOpen, "data-tooltip-id": `feedback-button-tooltip-${feedbackType}`, "data-tooltip-content": tooltipTitle },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_3__.Div, { asChildName: "wrap" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_3__.Div, { asChildName: "icon" }, icon)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_1__.Tooltip, { className: "anaconda-assistant-tooltip", id: `feedback-button-tooltip-${feedbackType}`, place: "bottom" })),
        open && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AssistantComponentContext__WEBPACK_IMPORTED_MODULE_2__.AssistantComponentContext.Provider, { value: (0,_pages_childFixer__WEBPACK_IMPORTED_MODULE_4__.childFixer)({
                parentName: 'feedback-button',
                childName: 'feedback-modal',
                childrenStyle: _FeedbackModal__WEBPACK_IMPORTED_MODULE_5__.styleOfFeedbackModal,
                replaceChildren
            }) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FeedbackModal__WEBPACK_IMPORTED_MODULE_5__.FeedbackModal, { feedbackType: feedbackType, width: modalWidth, onSubmitFeedback: onSubmitFeedback, wrapperStyles: styles.popper, arrowStyles: styles.arrow, wrapperAttributes: attributes.popper, setWrapperElement: setPopperElement, setArrowElement: setArrowElement, closeModal: () => setOpenFeedbackType(undefined) })))));
};


/***/ }),

/***/ "../../lib/assistant-components/lib/chat-elements/feedback/FeedbackButtonsWrapper.js":
/*!*******************************************************************************************!*\
  !*** ../../lib/assistant-components/lib/chat-elements/feedback/FeedbackButtonsWrapper.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedbackButtonsWrapper: () => (/* binding */ FeedbackButtonsWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons */ "../../lib/assistant-components/lib/icons.js");
/* harmony import */ var _FeedbackButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FeedbackButton */ "../../lib/assistant-components/lib/chat-elements/feedback/FeedbackButton.js");



/**
 * Feedback buttons wrapper.
 * @alpha
 */
const FeedbackButtonsWrapper = (props) => {
    const { modalWidth, onSubmitFeedback } = props;
    const [openFeedbackType, setOpenFeedbackType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FeedbackButton__WEBPACK_IMPORTED_MODULE_2__.FeedbackButton, { open: openFeedbackType === 'positive', setOpenFeedbackType: setOpenFeedbackType, tooltipTitle: "I liked this response", icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_1__.Icons.ThumbsUp, null), feedbackType: "positive", modalWidth: modalWidth, onSubmitFeedback: onSubmitFeedback }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FeedbackButton__WEBPACK_IMPORTED_MODULE_2__.FeedbackButton, { open: openFeedbackType === 'negative', setOpenFeedbackType: setOpenFeedbackType, tooltipTitle: "I didn't like this response", icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_1__.Icons.ThumbsDown, null), feedbackType: "negative", modalWidth: modalWidth, onSubmitFeedback: onSubmitFeedback })));
};


/***/ }),

/***/ "../../lib/assistant-components/lib/chat-elements/feedback/FeedbackModal.js":
/*!**********************************************************************************!*\
  !*** ../../lib/assistant-components/lib/chat-elements/feedback/FeedbackModal.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedbackModal: () => (/* binding */ FeedbackModal),
/* harmony export */   styleOfFeedbackModal: () => (/* binding */ styleOfFeedbackModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! usehooks-ts */ "../../node_modules/usehooks-ts/dist/index.mjs");
/* harmony import */ var _base_elements_Div__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base-elements/Div */ "../../lib/assistant-components/lib/base-elements/Div.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons */ "../../lib/assistant-components/lib/icons.js");
/* harmony import */ var _base_elements_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base-elements/Form */ "../../lib/assistant-components/lib/base-elements/Form.js");
/* harmony import */ var _base_elements_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base-elements/Button */ "../../lib/assistant-components/lib/base-elements/Button.js");
/* harmony import */ var _base_elements_Style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base-elements/Style */ "../../lib/assistant-components/lib/base-elements/Style.js");







/**
 * Style for the feedback modal.
 * @alpha
 */
const styleOfFeedbackModal = `
#static-anaconda-assistant-modal-arrow,
#static-anaconda-assistant-modal-arrow::before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #ced2d9;
}

#static-anaconda-assistant-modal-arrow {
  visibility: hidden;
}

#static-anaconda-assistant-modal-arrow::before {
  visibility: visible;
  content: '';
  transform: rotate(45deg);
  bottom: 4px;
}

.anaconda-assistant-feedback-modal {
  padding: 15px;
  background: #ced2d9;
  color: rgb(90, 86, 97);
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
}

.anaconda-assistant-feedback-modal-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: #2c303a;
}

.anaconda-assistant-feedback-modal-header-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  color: #2c303a;
}

.anaconda-assistant-feedback-modal-header .anaconda-assistant-feedback-modal-header-icon > svg {
  color: #2c303a;
  cursor: default;
}

.anaconda-assistant-feedback-modal-header .anaconda-assistant-feedback-modal-header-icon > svg:hover {
  color: #2c303a;
}

.anaconda-assistant-feedback-modal-header-title {
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
}

.anaconda-assistant-feedback-modal-form-text-area textarea,
.anaconda-assistant-feedback-modal-form-text-area textarea:focus-visible {
  width: calc(100% - 17px);
  min-height: 70px;
  height: 70px;
  align-items: center;
  display: flex;
  background: #f5faf6;
  border-radius: 4px;
  border: 1px solid #8c94a6;
  padding: 6px 5px 3px 10px;
  margin-bottom: 5px;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: #2c303a;
  outline-color: transparent;
}

.anaconda-assistant-feedback-modal-form-button-container {
  display: flex;
  justify-content: flex-end;
}

.anaconda-assistant-feedback-modal-form-button-container-submit-button {
  border: none;
  font-size: 12px;
  background: #fff;
  border: 1px solid #06262d;
  border-radius: 4px;
  padding-left: 12px;
  padding-right: 12px;
  margin-top: 5px;
  height: 32px;
  color: #06262d;
  cursor: pointer;
}

.anaconda-assistant-feedback-modal-form-button-container-submit-button:hover {
  background: #cdd2da;
}
`;
/**
 * Feedback modal.
 * @alpha
 */
const FeedbackModal = (props) => {
    const { feedbackType, width, onSubmitFeedback, wrapperStyles, arrowStyles, wrapperAttributes, setWrapperElement, setArrowElement, closeModal } = props;
    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_6__.useOnClickOutside)(ref, () => closeModal());
    function handleSubmit(e) {
        onSubmitFeedback(feedbackType, text);
        e?.preventDefault();
    }
    function handleKeyDown(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            handleSubmit(e);
        }
        else if (e.key === 'Escape') {
            closeModal();
        }
    }
    const formTextAreaPlaceholder = feedbackType === 'positive'
        ? 'What did you like about the generated code?'
        : 'What was the issue with the generated code? How could it improve?';
    const negativeClassName = feedbackType === 'negative' ? 'static-anaconda-assistant-negative' : '';
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: setWrapperElement, style: {
            ...wrapperStyles,
            ...{ width: '100%', marginBottom: 6, boxSizing: 'border-box', padding: '0 20px' }
        }, ...wrapperAttributes },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "feedback-modal", "data-testid": "feedback-modal", className: negativeClassName, style: { width } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: ref },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Style__WEBPACK_IMPORTED_MODULE_5__.Style, { asChildName: "style" }, styleOfFeedbackModal),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "header" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "icon" }, feedbackType === 'positive' ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.Icons.ThumbsUp, null) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.Icons.ThumbsDown, null)),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "title" }, "Provide additional feedback")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Form__WEBPACK_IMPORTED_MODULE_3__.Form, { onSubmit: handleSubmit, asChildName: "form" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "text-area", className: negativeClassName },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", { autoFocus: true, disabled: false, maxLength: 200, value: text, onKeyDown: handleKeyDown, onChange: e => setText(e.target.value), rows: 3, placeholder: formTextAreaPlaceholder })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "button-container" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Button__WEBPACK_IMPORTED_MODULE_4__.Button, { type: "submit", "data-testid": "submit-button", asChildName: "submit-button", className: negativeClassName }, "Submit"))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "static-anaconda-assistant-modal-arrow", className: negativeClassName, ref: setArrowElement, style: {
                ...arrowStyles,
                ...{
                    transform: 'none',
                    right: `${feedbackType === 'negative' ? 32 : 62}px`,
                    left: 'auto'
                }
            } })));
};


/***/ }),

/***/ "../../lib/assistant-components/lib/chat-elements/feedback/index.js":
/*!**************************************************************************!*\
  !*** ../../lib/assistant-components/lib/chat-elements/feedback/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompletedThumbs: () => (/* reexport safe */ _CompletedThumbs__WEBPACK_IMPORTED_MODULE_2__.CompletedThumbs),
/* harmony export */   FeedbackButton: () => (/* reexport safe */ _FeedbackButton__WEBPACK_IMPORTED_MODULE_0__.FeedbackButton),
/* harmony export */   FeedbackModal: () => (/* reexport safe */ _FeedbackModal__WEBPACK_IMPORTED_MODULE_1__.FeedbackModal),
/* harmony export */   styleOfCompletedThumbs: () => (/* reexport safe */ _CompletedThumbs__WEBPACK_IMPORTED_MODULE_2__.styleOfCompletedThumbs),
/* harmony export */   styleOfFeedbackButton: () => (/* reexport safe */ _FeedbackButton__WEBPACK_IMPORTED_MODULE_0__.styleOfFeedbackButton),
/* harmony export */   styleOfFeedbackModal: () => (/* reexport safe */ _FeedbackModal__WEBPACK_IMPORTED_MODULE_1__.styleOfFeedbackModal)
/* harmony export */ });
/* harmony import */ var _FeedbackButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackButton */ "../../lib/assistant-components/lib/chat-elements/feedback/FeedbackButton.js");
/* harmony import */ var _FeedbackModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackModal */ "../../lib/assistant-components/lib/chat-elements/feedback/FeedbackModal.js");
/* harmony import */ var _CompletedThumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompletedThumbs */ "../../lib/assistant-components/lib/chat-elements/feedback/CompletedThumbs.js");





/***/ }),

/***/ "../../lib/assistant-components/lib/chat-elements/index.js":
/*!*****************************************************************!*\
  !*** ../../lib/assistant-components/lib/chat-elements/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActiveMessage: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_11__.ActiveMessage),
/* harmony export */   AddContextPopup: () => (/* reexport safe */ _AddContextPopup__WEBPACK_IMPORTED_MODULE_8__.AddContextPopup),
/* harmony export */   ChatInput: () => (/* reexport safe */ _ChatInput__WEBPACK_IMPORTED_MODULE_0__.ChatInput),
/* harmony export */   ChatPanelFooter: () => (/* reexport safe */ _ChatPanelFooter__WEBPACK_IMPORTED_MODULE_1__.ChatPanelFooter),
/* harmony export */   CodeBlock: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_11__.CodeBlock),
/* harmony export */   CompletedMessage: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_11__.CompletedMessage),
/* harmony export */   CompletedThumbs: () => (/* reexport safe */ _feedback__WEBPACK_IMPORTED_MODULE_6__.CompletedThumbs),
/* harmony export */   ErrorMessage: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_11__.ErrorMessage),
/* harmony export */   ErrorPopup: () => (/* reexport safe */ _ErrorPopup__WEBPACK_IMPORTED_MODULE_7__.ErrorPopup),
/* harmony export */   FeedbackButton: () => (/* reexport safe */ _feedback__WEBPACK_IMPORTED_MODULE_6__.FeedbackButton),
/* harmony export */   FeedbackModal: () => (/* reexport safe */ _feedback__WEBPACK_IMPORTED_MODULE_6__.FeedbackModal),
/* harmony export */   Footer: () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_3__.Footer),
/* harmony export */   Header: () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_2__.Header),
/* harmony export */   MessageButtons: () => (/* reexport safe */ _MessageButtons__WEBPACK_IMPORTED_MODULE_5__.MessageButtons),
/* harmony export */   ResponseBlocks: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_11__.ResponseBlocks),
/* harmony export */   SelectContext: () => (/* reexport safe */ _SelectContext__WEBPACK_IMPORTED_MODULE_10__.SelectContext),
/* harmony export */   SelectDataFrame: () => (/* reexport safe */ _SelectDataframe__WEBPACK_IMPORTED_MODULE_9__.SelectDataFrame),
/* harmony export */   TextBlock: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_11__.TextBlock),
/* harmony export */   UserMessage: () => (/* reexport safe */ _UserMessage__WEBPACK_IMPORTED_MODULE_4__.UserMessage),
/* harmony export */   styleOfActiveMessage: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_11__.styleOfActiveMessage),
/* harmony export */   styleOfChatInput: () => (/* reexport safe */ _ChatInput__WEBPACK_IMPORTED_MODULE_0__.styleOfChatInput),
/* harmony export */   styleOfCodeBlock: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_11__.styleOfCodeBlock),
/* harmony export */   styleOfCompletedMessage: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_11__.styleOfCompletedMessage),
/* harmony export */   styleOfCompletedThumbs: () => (/* reexport safe */ _feedback__WEBPACK_IMPORTED_MODULE_6__.styleOfCompletedThumbs),
/* harmony export */   styleOfErrorMessage: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_11__.styleOfErrorMessage),
/* harmony export */   styleOfFeedbackButton: () => (/* reexport safe */ _feedback__WEBPACK_IMPORTED_MODULE_6__.styleOfFeedbackButton),
/* harmony export */   styleOfFeedbackModal: () => (/* reexport safe */ _feedback__WEBPACK_IMPORTED_MODULE_6__.styleOfFeedbackModal),
/* harmony export */   styleOfFooter: () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_3__.styleOfFooter),
/* harmony export */   styleOfHeader: () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_2__.styleOfHeader),
/* harmony export */   styleOfMessageButtons: () => (/* reexport safe */ _MessageButtons__WEBPACK_IMPORTED_MODULE_5__.styleOfMessageButtons),
/* harmony export */   styleOfTextBlock: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_11__.styleOfTextBlock),
/* harmony export */   styleOfUserMessage: () => (/* reexport safe */ _UserMessage__WEBPACK_IMPORTED_MODULE_4__.styleOfUserMessage)
/* harmony export */ });
/* harmony import */ var _ChatInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatInput */ "../../lib/assistant-components/lib/chat-elements/ChatInput.js");
/* harmony import */ var _ChatPanelFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatPanelFooter */ "../../lib/assistant-components/lib/chat-elements/ChatPanelFooter.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "../../lib/assistant-components/lib/chat-elements/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "../../lib/assistant-components/lib/chat-elements/Footer.js");
/* harmony import */ var _UserMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserMessage */ "../../lib/assistant-components/lib/chat-elements/UserMessage.js");
/* harmony import */ var _MessageButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MessageButtons */ "../../lib/assistant-components/lib/chat-elements/MessageButtons.js");
/* harmony import */ var _feedback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feedback */ "../../lib/assistant-components/lib/chat-elements/feedback/index.js");
/* harmony import */ var _ErrorPopup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorPopup */ "../../lib/assistant-components/lib/chat-elements/ErrorPopup.js");
/* harmony import */ var _AddContextPopup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AddContextPopup */ "../../lib/assistant-components/lib/chat-elements/AddContextPopup.js");
/* harmony import */ var _SelectDataframe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SelectDataframe */ "../../lib/assistant-components/lib/chat-elements/SelectDataframe.js");
/* harmony import */ var _SelectContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SelectContext */ "../../lib/assistant-components/lib/chat-elements/SelectContext.js");
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./response */ "../../lib/assistant-components/lib/chat-elements/response/index.js");














/***/ }),

/***/ "../../lib/assistant-components/lib/chat-elements/response/ActiveMessage.js":
/*!**********************************************************************************!*\
  !*** ../../lib/assistant-components/lib/chat-elements/response/ActiveMessage.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActiveMessage: () => (/* binding */ ActiveMessage),
/* harmony export */   styleOfActiveMessage: () => (/* binding */ styleOfActiveMessage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base-elements */ "../../lib/assistant-components/lib/base-elements/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons */ "../../lib/assistant-components/lib/icons.js");
/* harmony import */ var _ResponseBlocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ResponseBlocks */ "../../lib/assistant-components/lib/chat-elements/response/ResponseBlocks.js");




/**
 * Style for the ActiveMessage.
 * @alpha
 */
const styleOfActiveMessage = `
.anaconda-assistant-active-message {
  margin-bottom: 16px;
}

.anaconda-assistant-active-message-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
}

.anaconda-assistant-active-message-loading-icon {
  display: flex;
  width: 24px;
  height: 24px;
  color: #4fab4f;
}

.anaconda-assistant-active-message-loading-animation {
  font-size: 13px;
  font-weight: lighter;
  font-style: normal;
}

.anaconda-assistant-active-message-loading-animation:after {
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
  -webkit-animation: ellipsis steps(4, end) 1200ms infinite;
  -moz-animation: ellipsis steps(4, end) 1200ms infinite;
  -ms-animation: ellipsis steps(4, end) 1200ms infinite;
  animation: ellipsis steps(4, end) 1200ms infinite;
  content: '...';
  width: 0;
}
`;
/**
 * ActiveMessage.
 * @alpha
 */
const ActiveMessage = (props) => {
    const { response, selectedText, activeChatSession, scrollFn } = props;
    // If the code response is changing (streaming back from the server), scroll to the bottom
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        scrollFn();
    }, [response, scrollFn]);
    if (!response)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "active-message" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Style, { asChildName: "style" }, styleOfActiveMessage),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "loading" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "icon" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.Icons.Magic, null)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "animation" })),
        response.content !== '' && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ResponseBlocks__WEBPACK_IMPORTED_MODULE_3__.ResponseBlocks, { message: response, selectedText: selectedText, activeChatSession: activeChatSession }))));
};


/***/ }),

/***/ "../../lib/assistant-components/lib/chat-elements/response/CodeBlock.js":
/*!******************************************************************************!*\
  !*** ../../lib/assistant-components/lib/chat-elements/response/CodeBlock.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeBlock: () => (/* binding */ CodeBlock),
/* harmony export */   styleOfCodeBlock: () => (/* binding */ styleOfCodeBlock)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons */ "../../lib/assistant-components/lib/icons.js");
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prism-react-renderer */ "../../node_modules/prism-react-renderer/dist/index.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tooltip */ "../../node_modules/react-tooltip/dist/react-tooltip.min.mjs");
/* harmony import */ var _base_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base-elements */ "../../lib/assistant-components/lib/base-elements/index.js");
/* harmony import */ var _store_AssistantStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/AssistantStore */ "../../lib/assistant-components/lib/store/AssistantStore.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);







/**
 * Style for the code block.
 * @alpha
 */
const styleOfCodeBlock = `
.anaconda-assistant-code-buttons {
  display: flex;
  justify-content: flex-end;
  min-height: 16px;
  margin-bottom: 8px;
  gap: 10px;
}

[class^='anaconda-assistant-code-buttons-'][class$='-button'],
[class^='anaconda-assistant-code-buttons-'][class$='-disabled'],
[class^='anaconda-assistant-code-buttons-'][class$='-clicked'] {
  border: none;
  background: transparent;
  color: #6c5af6;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 400;
  font-style: normal;
  padding: 8px;
  cursor: pointer;
  display: flex;
  height: fit-content;
}

[class^='anaconda-assistant-code-buttons-'][class$='-disabled'] {
  color: #c9c2fa;
  cursor: not-allowed;
}

[class^='anaconda-assistant-code-buttons-'][class$='-button'] {
  &:hover,
  &:focus {
    background: #e5e8eb;
  }
}

[class^='anaconda-assistant-code-buttons-'][class$='-icon'] {
  width: 20px;
  height: 20px;
}
`;
/**
 * Code block.
 * @alpha
 */
const CodeBlock = (props) => {
    const { block, messageId, runCode, responseContainsPythonBlocks, selectedText, activeChatSession } = props;
    const [runCodeClicked, setRunCodeClicked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [replaceClicked, setReplaceClicked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [copyClicked, setCopyClicked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handleOnRun = (code) => {
        setRunCodeClicked(true);
        setTimeout(() => setRunCodeClicked(false), 750);
        if (activeChatSession && runCode) {
            runCode(code, messageId, activeChatSession);
        }
    };
    const handleOnReplace = (code) => {
        setReplaceClicked(true);
        setTimeout(() => setReplaceClicked(false), 750);
        if (activeChatSession && runCode) {
            runCode(code, messageId, activeChatSession, true);
        }
    };
    const handleOnCopy = (code) => {
        setCopyClicked(true);
        setTimeout(() => setCopyClicked(false), 750);
        navigator.clipboard.writeText(code);
    };
    // If response did not mark any blocks in the response as python, we assume all code blocks are
    // python and show the run code button
    const showRunCodeButton = runCode && (!responseContainsPythonBlocks || block.type === 'python');
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_3__.Style, { asChildName: "code-block-style" }, styleOfCodeBlock),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_3__.Div, { asChildName: "code-block" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(prism_react_renderer__WEBPACK_IMPORTED_MODULE_6__["default"], { ...prism_react_renderer__WEBPACK_IMPORTED_MODULE_6__.defaultProps, code: block.content, language: "python" }, ({ className, style, tokens, getLineProps, getTokenProps }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre", { className: className, style: {
                    ...style,
                    padding: '12px 10px 12px',
                    marginBottom: 8,
                    overflowX: 'scroll',
                    borderRadius: 4
                } }, tokens.map((line, i) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ...getLineProps({ line, key: i }) }, line.map((token, key) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { ...getTokenProps({ token, key }) })))))))))),
        showRunCodeButton && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_3__.Div, { asChildName: "code-buttons" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_3__.Button, { asChildName: `run-button${runCodeClicked ? '-clicked' : ''}`, "data-tooltip-id": "anaconda-assistant-code-run-button", "data-tooltip-content": `Run code in ${(0,lodash__WEBPACK_IMPORTED_MODULE_5__.startCase)((0,_store_AssistantStore__WEBPACK_IMPORTED_MODULE_4__.getAssistantStore)().clientContextType)}`, "data-testid": "run-button", onClick: () => handleOnRun(block.content) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_3__.Div, { asChildName: "icon" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_1__.Icons.Play, null)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_2__.Tooltip, { className: "anaconda-assistant-tooltip", id: "anaconda-assistant-code-run-button", place: "bottom" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_3__.Button, { disabled: !selectedText, asChildName: `replace-button${replaceClicked ? '-clicked' : ''}${selectedText ? '' : '-disabled'}`, "data-tooltip-id": "anaconda-assistant-code-replace-button", "data-tooltip-content": "Replace selection", "data-tooltip-hidden": !selectedText, "data-testid": "replace-button", onClick: () => handleOnReplace(block.content) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_3__.Div, { asChildName: "icon" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_1__.Icons.MagicWand, null)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_2__.Tooltip, { className: "anaconda-assistant-tooltip", id: "anaconda-assistant-code-replace-button", place: "bottom" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_3__.Button, { asChildName: `copy-button${copyClicked ? '-clicked' : ''}`, "data-tooltip-id": "anaconda-assistant-code-copy-button", "data-tooltip-content": "Copy", "data-testid": "copy-button", onClick: () => handleOnCopy(block.content) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_3__.Div, { asChildName: "icon" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_1__.Icons.Copy, null)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_2__.Tooltip, { className: "anaconda-assistant-tooltip", id: "anaconda-assistant-code-copy-button", place: "bottom" }))))));
};


/***/ }),

/***/ "../../lib/assistant-components/lib/chat-elements/response/CompletedMessage.js":
/*!*************************************************************************************!*\
  !*** ../../lib/assistant-components/lib/chat-elements/response/CompletedMessage.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompletedMessage: () => (/* binding */ CompletedMessage),
/* harmony export */   styleOfCompletedMessage: () => (/* binding */ styleOfCompletedMessage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base-elements */ "../../lib/assistant-components/lib/base-elements/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons */ "../../lib/assistant-components/lib/icons.js");
/* harmony import */ var _MessageButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MessageButtons */ "../../lib/assistant-components/lib/chat-elements/MessageButtons.js");
/* harmony import */ var _ResponseBlocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ResponseBlocks */ "../../lib/assistant-components/lib/chat-elements/response/ResponseBlocks.js");





/**
 * Style for the CompletedMessage.
 * @alpha
 */
const styleOfCompletedMessage = `
.anaconda-assistant-completed-message-response {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
}

.anaconda-assistant-completed-message-response-icon {
  display: flex;
  width: 24px;
  height: 24px;
  color: #4fab4f;
}
`;
/**
 * CompletedMessage.
 * @alpha
 */
const CompletedMessage = (props) => {
    const { assistantMessage, runCode, selectedText, activeChatSession, handleFeedback, handleExportMessage, handleDeleteMessageAfterId } = props;
    const handleMessageFeedback = (sentiment, message) => {
        handleFeedback(assistantMessage.messageId, sentiment, message);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Style, { asChildName: "style" }, styleOfCompletedMessage),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "completed-message-response" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "icon" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.Icons.Magic, null))),
        assistantMessage.content !== '' && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ResponseBlocks__WEBPACK_IMPORTED_MODULE_4__.ResponseBlocks, { message: assistantMessage, runCode: runCode, selectedText: selectedText, activeChatSession: activeChatSession })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageButtons__WEBPACK_IMPORTED_MODULE_3__.MessageButtons, { style: { marginBottom: '16px' }, canSubmitFeedback: true, canExport: true, message: assistantMessage, handleFeedback: handleMessageFeedback, exportMessage: handleExportMessage, deleteMessagesAfterId: handleDeleteMessageAfterId })));
};


/***/ }),

/***/ "../../lib/assistant-components/lib/chat-elements/response/ErrorMessage.js":
/*!*********************************************************************************!*\
  !*** ../../lib/assistant-components/lib/chat-elements/response/ErrorMessage.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorMessage: () => (/* binding */ ErrorMessage),
/* harmony export */   styleOfErrorMessage: () => (/* binding */ styleOfErrorMessage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base-elements */ "../../lib/assistant-components/lib/base-elements/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons */ "../../lib/assistant-components/lib/icons.js");



/**
 * Style for the ErrorMessage.
 * @alpha
 */
const styleOfErrorMessage = `
.anaconda-assistant-error-message {
  margin: 16px 0;
}

.anaconda-assistant-error-message-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
}

.anaconda-assistant-error-message-header-icon {
  display: flex;
  width: 24px;
  height: 24px;
  color: #4fab4f;
  margin-right: 10px;
}

.anaconda-assistant-error-message-header-title {
  font-size: 13px;
  font-weight: lighter;
  font-style: normal;
}

.anaconda-assistant-error-message-panel {
  margin-bottom: 20px;
  border-radius: 4px;
  background: #fef1f1;
  display: flex;
  padding: 16px;
}

.anaconda-assistant-error-message-panel-icon {
  width: 16px;
  height: 16px;
  min-width: 16px;
  min-height: 16px;
  color: #f44336;
  margin-right: 8px;
}

.anaconda-assistant-error-message-panel-text {
  font-size: 13px;
  font-style: normal;
  color: #2C303A;
}

.anaconda-assistant-error-message-footer {
  display: flex;
}

.anaconda-assistant-error-message-footer-button {
  display: flex;
  border: none;
  background: #3d3d3d;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-size: 13px;
  font-weight: lighter;
  font-style: normal;
  padding: 8px;
  margin-right: 8px;
  color: white;
  cursor: pointer;
}

.anaconda-assistant-error-message-footer-icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}

.anaconda-assistant-error-message-panel-text a {
  color: #6c5af6;
  text-decoration: underline;
}

.token-limit .anaconda-assistant-error-message-panel,
.upgrade .anaconda-assistant-error-message-panel {
  background: #43b04985;
}

.token-limit .anaconda-assistant-error-message-panel-text,
.upgrade .anaconda-assistant-error-message-panel-text {
  margin-left: 10px;
  font-size: 13px;
}

.upgrade .anaconda-assistant-error-message-panel-icon,
.token-limit .anaconda-assistant-error-message-panel-icon {
  color: #31a824;
}

.token-limit .token-limit-restart-button svg {
  width: 12px;
  margin-right: 4px;
}

.token-limit .anaconda-assistant-error-message-footer-retry-button,
.upgrade .anaconda-assistant-error-message-footer-retry-button {
  background: #4fab4f;
  color: white;
  font-size: 16px;
  margin-right: 20px;
  margin-bottom: 40px;
}

.token-limit .anaconda-assistant-error-message-footer-retry-button:hover,
.upgrade .anaconda-assistant-error-message-footer-retry-button:hover {
  background: #0cca4a;
  color: #06262d;
}
`;
/**
 * ErrorMessage.
 * @alpha
 */
const ErrorMessage = (props) => {
    const { errorMessage, showLogoutButton, isProTier, resetChat, retryError, logout } = props;
    const errors = [
        {
            match: /org_blacklisted/,
            className: '',
            hideChatTitle: true,
            message: (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                "Your organization does not have access to the Anaconda Assistant. Please",
                ' ',
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "https://www.anaconda.com/contact", target: "_blank", rel: "noopener noreferrer" }, "contact sales"),
                ' ',
                "to request access.")),
            messageIcon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.Icons.Error, null),
            buttonIcon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.Icons.RotateLeft, null),
            buttonText: 'Retry Request',
            onClick: retryError
        },
        {
            match: /Too many requests/,
            className: '',
            hideChatTitle: true,
            message: isProTier
                ? 'You have reached the maximum number of requests for today.'
                : 'You have reached the maximum number of requests for today. Upgrade to increase the number of daily requests.',
            messageIcon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.Icons.ChatBot, null),
            buttonIcon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.Icons.Sparkle, null),
            buttonText: isProTier ? 'Retry Request' : 'Upgrade',
            onClick: isProTier
                ? retryError
                : () => {
                    window.open('https://anaconda.cloud/pricing');
                }
        },
        {
            match: /requests allowed exceeded/,
            className: '',
            hideChatTitle: true,
            message: 'You have reached the maximum number of requests. Free tier accounts include a maximum of 30 total requests. Upgrade your account to remove this restriction.',
            messageIcon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.Icons.ChatBot, null),
            buttonIcon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.Icons.Sparkle, null),
            buttonText: 'Upgrade',
            onClick: () => {
                window.open('https://anaconda.cloud/pricing');
            }
        },
        {
            match: /maximum context length/,
            className: 'token-limit',
            hideChatTitle: true,
            message: (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
                "You\u2019ve exceeded the maximum context length. You can always press the \"",
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "token-limit-restart-button", "data-testid": "token-limit-restart-button", onClick: e => {
                        e.preventDefault();
                        resetChat ? resetChat() : null;
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.Icons.RotateRight, null),
                    "Restart"),
                "\" button at the bottom to restart the conversation and reset the context-length.",
                isProTier ? null : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null),
                    "Visit our",
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "https://anaconda.cloud/pricing", target: "_blank", rel: "noopener noreferrer" }, "pricing page"),
                    ' ',
                    "to upgrade to either Starter or Pro, to use a model with a larger context-window.")))),
            messageIcon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.Icons.ChatBot, null),
            buttonIcon: isProTier ? null : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.Icons.Sparkle, null),
            buttonText: 'Upgrade',
            onClick: () => {
                window.open('https://anaconda.cloud/pricing');
            }
        }
    ];
    const defaultError = {
        className: '',
        chatTitle: 'Something went wrong...',
        message: errorMessage,
        messageIcon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.Icons.Error, null),
        buttonIcon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.Icons.RotateLeft, null),
        buttonText: 'Retry Request',
        onClick: retryError
    };
    const error = errors.find(e => e.match && errorMessage.match(e.match)) || defaultError;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: `error-message`, className: error.className },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Style, { asChildName: "error-message-style" }, styleOfErrorMessage),
        error.hideChatTitle ? null : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "header" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "icon" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.Icons.ChatBot, null)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "title" }, error.chatTitle))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "panel" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "icon" }, error.messageIcon),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "text" }, error.message)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "footer" },
            error.buttonIcon ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Button, { asChildName: "button", "data-testid": "error-message-action-button", onClick: () => error.onClick() },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "icon" }, error.buttonIcon),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "text" }, error.buttonText))) : null,
            showLogoutButton ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Button, { asChildName: "button", onClick: () => (logout ? logout() : null) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "text" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Logout")))) : null)));
};


/***/ }),

/***/ "../../lib/assistant-components/lib/chat-elements/response/ResponseBlocks.js":
/*!***********************************************************************************!*\
  !*** ../../lib/assistant-components/lib/chat-elements/response/ResponseBlocks.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResponseBlocks: () => (/* binding */ ResponseBlocks)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextBlock */ "../../lib/assistant-components/lib/chat-elements/response/TextBlock.js");
/* harmony import */ var _CodeBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CodeBlock */ "../../lib/assistant-components/lib/chat-elements/response/CodeBlock.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "../../lib/assistant-components/lib/utils/index.js");




/**
 * ResponseBlocks.
 * @alpha
 */
const ResponseBlocks = (props) => {
    const { message, runCode, selectedText, activeChatSession } = props;
    const messageBlocks = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.extractMessageBlocks)(message.content);
    const messageId = message.messageId || message.message_id;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, messageBlocks.map((block, idx) => block.type === 'text' ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TextBlock__WEBPACK_IMPORTED_MODULE_1__.TextBlock, { key: idx, content: block.content })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CodeBlock__WEBPACK_IMPORTED_MODULE_2__.CodeBlock, { key: idx, block: block, runCode: runCode, responseContainsPythonBlocks: messageBlocks.some(block => block.type === 'python'), messageId: messageId, selectedText: selectedText, activeChatSession: activeChatSession })))));
};


/***/ }),

/***/ "../../lib/assistant-components/lib/chat-elements/response/TextBlock.js":
/*!******************************************************************************!*\
  !*** ../../lib/assistant-components/lib/chat-elements/response/TextBlock.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextBlock: () => (/* binding */ TextBlock),
/* harmony export */   styleOfTextBlock: () => (/* binding */ styleOfTextBlock)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base-elements */ "../../lib/assistant-components/lib/base-elements/index.js");


/**
 * Style for the text block.
 * @alpha
 */
const styleOfTextBlock = `
[class^='anaconda-assistant-'][class$='-text-block'] {
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  white-space: pre-wrap;
  word-break: break-word;
  margin-top: 16px;
}
`;
/**
 * Text block.
 * @alpha
 */
const TextBlock = (props) => {
    const { content } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Style, { asChildName: "style" }, styleOfTextBlock),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "text-block" }, content)));
};


/***/ }),

/***/ "../../lib/assistant-components/lib/chat-elements/response/index.js":
/*!**************************************************************************!*\
  !*** ../../lib/assistant-components/lib/chat-elements/response/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActiveMessage: () => (/* reexport safe */ _ActiveMessage__WEBPACK_IMPORTED_MODULE_0__.ActiveMessage),
/* harmony export */   CodeBlock: () => (/* reexport safe */ _CodeBlock__WEBPACK_IMPORTED_MODULE_2__.CodeBlock),
/* harmony export */   CompletedMessage: () => (/* reexport safe */ _CompletedMessage__WEBPACK_IMPORTED_MODULE_3__.CompletedMessage),
/* harmony export */   ErrorMessage: () => (/* reexport safe */ _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__.ErrorMessage),
/* harmony export */   ResponseBlocks: () => (/* reexport safe */ _ResponseBlocks__WEBPACK_IMPORTED_MODULE_1__.ResponseBlocks),
/* harmony export */   TextBlock: () => (/* reexport safe */ _TextBlock__WEBPACK_IMPORTED_MODULE_4__.TextBlock),
/* harmony export */   styleOfActiveMessage: () => (/* reexport safe */ _ActiveMessage__WEBPACK_IMPORTED_MODULE_0__.styleOfActiveMessage),
/* harmony export */   styleOfCodeBlock: () => (/* reexport safe */ _CodeBlock__WEBPACK_IMPORTED_MODULE_2__.styleOfCodeBlock),
/* harmony export */   styleOfCompletedMessage: () => (/* reexport safe */ _CompletedMessage__WEBPACK_IMPORTED_MODULE_3__.styleOfCompletedMessage),
/* harmony export */   styleOfErrorMessage: () => (/* reexport safe */ _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__.styleOfErrorMessage),
/* harmony export */   styleOfTextBlock: () => (/* reexport safe */ _TextBlock__WEBPACK_IMPORTED_MODULE_4__.styleOfTextBlock)
/* harmony export */ });
/* harmony import */ var _ActiveMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActiveMessage */ "../../lib/assistant-components/lib/chat-elements/response/ActiveMessage.js");
/* harmony import */ var _ResponseBlocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResponseBlocks */ "../../lib/assistant-components/lib/chat-elements/response/ResponseBlocks.js");
/* harmony import */ var _CodeBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CodeBlock */ "../../lib/assistant-components/lib/chat-elements/response/CodeBlock.js");
/* harmony import */ var _CompletedMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CompletedMessage */ "../../lib/assistant-components/lib/chat-elements/response/CompletedMessage.js");
/* harmony import */ var _TextBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextBlock */ "../../lib/assistant-components/lib/chat-elements/response/TextBlock.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "../../lib/assistant-components/lib/chat-elements/response/ErrorMessage.js");








/***/ }),

/***/ "../../lib/assistant-components/lib/contents/TermsAndConditions.js":
/*!*************************************************************************!*\
  !*** ../../lib/assistant-components/lib/contents/TermsAndConditions.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermsAndConditions: () => (/* binding */ TermsAndConditions),
/* harmony export */   styleOfTermsAndConditions: () => (/* binding */ styleOfTermsAndConditions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/Switch/Switch.js");
/* harmony import */ var _base_elements_Div__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-elements/Div */ "../../lib/assistant-components/lib/base-elements/Div.js");
/* harmony import */ var _base_elements_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-elements/Button */ "../../lib/assistant-components/lib/base-elements/Button.js");
/* harmony import */ var _base_elements_Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-elements/Style */ "../../lib/assistant-components/lib/base-elements/Style.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons */ "../../lib/assistant-components/lib/icons.js");






/**
 * Style for the TermsAndConditions component.
 * @alpha
 */
const styleOfTermsAndConditions = `
.anaconda-assistant-terms {
  display: flex;
  flex-direction: column;
  gap: 40px;
  color: var(--as-main-font-color, #52596b);
}

.anaconda-assistant-terms-age-confirmation-header,
.anaconda-assistant-terms-accept-terms-header,
.anaconda-assistant-terms-data-collection-header {
  font-weight: 600;
  color: var(--as-main-font-color, #2c303a);
}

.anaconda-assistant-terms-accept-terms-header {
  margin-bottom: 10px;
}

.anaconda-assistant-terms-data-collection-header span {
  font-weight: 400;
}

.anaconda-assistant-terms-data-collection-setting,
.anaconda-assistant-terms-accept-terms-setting {
  align-items: center;
  display: flex;
}

.anaconda-assistant-terms-accept-terms-content a {
  color: #6c5af6;
}

.anaconda-assistant-terms-age-confirmation-setting {
  align-items: center;
  display: flex;
  margin: 0 -10px;
}

.anaconda-assistant-terms-age-confirmation-setting
.anaconda-assistant-terms-age-confirmation-setting-switch span {
   color: var(--as-main-font-color-secondary, #2c303a);
}

.anaconda-assistant-terms-age-confirmation-setting
.anaconda-assistant-terms-age-confirmation-setting-switch
span.Mui-checked, span.MuiCheckbox-indeterminate {
  color: #43B049;
}

.anaconda-assistant-terms-data-collection-setting-switch
.MuiSwitch-root .MuiSwitch-track  {
  background-color: var(--as-main-disabled-color, #000);
}

.anaconda-assistant-terms-data-collection-setting-switch
.Mui-checked  {
  color: var(--primary, #0cca4a);
}

.anaconda-assistant-terms-data-collection-setting-switch
.MuiSwitch-root.MuiSwitch-sizeMedium .MuiSwitch-track {
  background-color: #43B049;
}

.anaconda-assistant-terms-data-collection-setting-description-disabled {
  color: var(--as-main-disabled-color, #8c94a6);
}

.anaconda-assistant-terms-data-collection-content {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}

.anaconda-assistant-terms-data-collection-content p svg {
  color: var(--as-main-disabled-color, #8b94a6);
  height: 18px;
}

.anaconda-assistant-terms-accept-terms-button {
  border-radius: 4px;
  border: 1px solid var(--primary, #0cca4a);
  background: #0cca4a;
  color: #06262d;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  display: inline-flex;
  padding: 8px 14px;
  justify-content: center;
  align-items: center;
}

.anaconda-assistant-terms-accept-terms-button:disabled {
  background-color: rgba(67, 176, 73, 0.50);
  border: none;
  color: var(--as-main-bg-color-primary, #fff);
  cursor: default;
}

.anaconda-assistant-terms-accept-terms-button {
  &:hover:enabled,
  &:focus:enabled {
    color: var(--as-main-font-color-black, #000);
    cursor: pointer;
    background: #4fab4f;
    border: 1px solid #4fab4f;
  }
}
`;
/**
 * Terms and Conditions component.
 * @alpha
 */
function TermsAndConditions(props) {
    const { accept, enableDataCollection, setEnableDataCollection, olderThan13, setOlderThan13 } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "terms" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Style__WEBPACK_IMPORTED_MODULE_3__.Style, { asChildName: "style" }, styleOfTermsAndConditions),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "accept-terms" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "header" }, "Terms and Conditions"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "content" },
                "By clicking the ",
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "continue"),
                " button, you agree to our",
                ' ',
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "https://legal.anaconda.com/policies/en/?name=terms-of-service#anaconda-terms-of-service", target: "_blank" }, "Terms and Conditions"),
                ' ',
                "and",
                ' ',
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "https://legal.anaconda.com/policies/en/?name=privacy-policy", target: "_blank" }, "Privacy Policy"),
                ".")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "age-confirmation" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "header" }, "Confirm Your Age"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "setting" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "switch" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { checked: olderThan13, onChange: (_, checked) => setOlderThan13(checked) })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "description" }, "I hereby confirm that I'm older than 13 years old."))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "data-collection" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "header" },
                "Data Collection ",
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "(Optional)")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "setting" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "switch" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { checked: enableDataCollection, onChange: (_, checked) => setEnableDataCollection(checked) })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: `description${!enableDataCollection ? '-disabled' : ''}` }, enableDataCollection ? 'Enabled' : 'Not enabled')),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "content" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Help us improve the Anaconda Assistant. Enabling data collection means you acknowledge and agree that we can collect messages and metadata, including sensitive information that may be in your conversations with Anaconda Assistant."),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
                    "You can opt out of this at any time in the ",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_4__.Icons.Settings, null),
                    " settings menu."))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Div__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "accept-terms" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Button__WEBPACK_IMPORTED_MODULE_2__.Button, { asChildName: "button", disabled: !olderThan13, onClick: () => {
                    if (!olderThan13) {
                        return;
                    }
                    accept();
                } }, "Continue"))));
}


/***/ }),

/***/ "../../lib/assistant-components/lib/contents/index.js":
/*!************************************************************!*\
  !*** ../../lib/assistant-components/lib/contents/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermsAndConditions: () => (/* reexport safe */ _TermsAndConditions__WEBPACK_IMPORTED_MODULE_0__.TermsAndConditions),
/* harmony export */   styleOfTermsAndConditions: () => (/* reexport safe */ _TermsAndConditions__WEBPACK_IMPORTED_MODULE_0__.styleOfTermsAndConditions)
/* harmony export */ });
/* harmony import */ var _TermsAndConditions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TermsAndConditions */ "../../lib/assistant-components/lib/contents/TermsAndConditions.js");



/***/ }),

/***/ "../../lib/assistant-components/lib/icons.js":
/*!***************************************************!*\
  !*** ../../lib/assistant-components/lib/icons.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Icons: () => (/* binding */ Icons)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Icons used in Anaconda Assistant.
 * @alpha
 */
var Icons;
(function (Icons) {
    /**
     * Anaconda Assistant logo.
     */
    function ChatBot(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M160 0C124.7 0 96 28.7 96 64V176H59.7c-5.5-9.6-15.9-16-27.7-16c-17.7 0-32 14.3-32 32s14.3 32 32 32c11.8 0 22.2-6.4 27.7-16H96V352c0 35.3 28.7 64 64 64h64v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L373.3 416H480c35.3 0 64-28.7 64-64V208h36.3c5.5 9.6 15.9 16 27.7 16c17.7 0 32-14.3 32-32s-14.3-32-32-32c-11.8 0-22.2 6.4-27.7 16H544V64c0-35.3-28.7-64-64-64H160zm0 128c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V256c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V128zm64 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm192 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" })));
    }
    Icons.ChatBot = ChatBot;
    /**
     * Anaconda logo.
     */
    function AnacondaLogo(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M3.69338 15.348V15.2893C3.69338 14.6966 3.75197 14.1333 3.84112 13.5713V13.5126L3.78253 13.4832C3.25018 13.2763 2.7484 12.9799 2.24662 12.713L2.18803 12.6836L2.15874 12.7423C1.83398 13.3938 1.56781 14.1052 1.33093 14.8167L1.30164 14.8754L1.36022 14.9048C2.09888 15.1117 2.83755 15.2599 3.60551 15.3199L3.69466 15.3493L3.69338 15.348Z", fill: "#3DAE2B" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M5.22926 5.18455C5.22926 5.16496 5.22926 5.16496 5.22926 5.18455C4.78606 5.18455 4.37215 5.21393 3.92896 5.24331C3.98754 5.68781 4.0474 6.10293 4.16584 6.54743C4.4613 6.04417 4.81535 5.5703 5.22926 5.18455Z", fill: "#3DAE2B" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M3.69337 15.8807V15.8219H3.63479C3.01456 15.7632 2.36505 15.6444 1.71426 15.4962L1.53723 15.4669L1.62638 15.615C2.18802 16.4746 2.89612 17.2449 3.72394 17.9257L3.84238 18.0445V17.8375C3.75323 17.1555 3.69464 16.4746 3.69464 15.882L3.69337 15.8807Z", fill: "#3DAE2B" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M6.79449 0.533936C6.02653 0.800892 5.28787 1.15598 4.60779 1.60048C5.10957 1.68989 5.61263 1.80741 6.11441 1.95557C6.32073 1.48169 6.52832 1.00781 6.79449 0.533936Z", fill: "#3DAE2B" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M10.0153 0C9.6307 0 9.24736 0.029378 8.89331 0.0587559C9.42566 0.413846 9.92744 0.828969 10.3999 1.27347L10.7845 1.62856L10.3999 2.01431C10.0752 2.31064 9.75042 2.66573 9.45495 3.0221V3.05148C9.45495 3.05148 9.39637 3.11023 9.30722 3.22902C9.5441 3.19964 9.77971 3.19964 10.0166 3.19964C13.7685 3.19964 16.811 6.25112 16.811 10.0141C16.811 13.777 13.7685 16.8285 10.0166 16.8285C8.71628 16.8285 7.50513 16.4734 6.471 15.8207C5.96921 15.8794 5.43686 15.9101 4.93508 15.9101C4.6982 15.9101 4.46259 15.9101 4.22571 15.8807C4.255 16.6509 4.31486 17.4505 4.43202 18.2808C6.0278 19.3767 7.94705 19.9987 10.0153 19.9987C15.54 19.9987 20 15.5243 20 9.98467C20 4.44501 15.5387 0 10.0153 0Z", fill: "#3DAE2B" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M8.68565 2.37066C8.89197 2.13308 9.09956 1.89678 9.30588 1.68858C8.83339 1.30283 8.3316 0.918363 7.82855 0.592651C7.50379 1.12656 7.23761 1.68858 7.00073 2.25187C7.44393 2.42941 7.88713 2.60696 8.33033 2.81516C8.50736 2.57758 8.65509 2.40003 8.68438 2.37066H8.68565Z", fill: "#3DAE2B" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M1.92056 8.08915L1.94985 8.1479L2.00843 8.11852C2.48093 7.79281 2.95342 7.4671 3.45647 7.20014L3.51506 7.17077V7.11201C3.36732 6.54872 3.24888 5.95605 3.1903 5.36338V5.30463H3.13171C2.39305 5.45279 1.65438 5.63034 0.975576 5.89729L0.916992 5.92667L0.946284 5.98543C1.1526 6.69689 1.50792 7.40707 1.92056 8.08915Z", fill: "#3DAE2B" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M1.80213 9.03692L1.74355 9.09568C1.2112 9.54018 0.70942 10.0141 0.236929 10.548L0.178345 10.6067L0.236929 10.6655C0.769277 11.11 1.30035 11.5251 1.89128 11.9096L1.94987 11.939L1.97916 11.8802C2.24533 11.4063 2.5408 10.9618 2.86556 10.5173L2.89485 10.4586L2.86556 10.4292C2.51151 10.0141 2.15619 9.59894 1.83143 9.12506L1.80213 9.03564V9.03692Z", fill: "#3DAE2B" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M5.73103 15.3774H5.90806L5.76032 15.2586C5.22797 14.8141 4.75548 14.3109 4.40143 13.7182V13.6888L4.28299 13.6301V13.7195C4.22441 14.2227 4.16455 14.7566 4.16455 15.2893V15.348H4.22313C4.46002 15.348 4.69563 15.3774 4.93251 15.3774H5.72976H5.73103Z", fill: "#3DAE2B" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M5.40623 4.29686C5.52467 3.7936 5.64311 3.31972 5.82014 2.84457C5.19991 2.66702 4.5504 2.51885 3.89961 2.42944C3.84102 3.11152 3.84102 3.73357 3.87031 4.38499C4.3721 4.32624 4.87515 4.29558 5.40623 4.29558V4.29686Z", fill: "#3DAE2B" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M6.3512 4.26617C6.7944 3.99921 7.26689 3.76291 7.73938 3.58409C7.38533 3.40654 7.03 3.25838 6.67595 3.13959C6.55751 3.49468 6.43907 3.88042 6.3512 4.26489V4.26617Z", fill: "#3DAE2B" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M1.71294 12.3847H1.65436C1.15258 12.059 0.649521 11.7027 0.17703 11.3182L0.0292969 11.1994L0.0585888 11.3769C0.17703 12.3247 0.443204 13.2737 0.855838 14.1615L0.914422 14.3096L0.973006 14.1615C1.17932 13.5982 1.4162 13.0362 1.68238 12.5023L1.71167 12.3835L1.71294 12.3847Z", fill: "#3DAE2B" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M2.98391 2.90332C2.39298 3.49598 1.86191 4.17679 1.448 4.88824C1.94978 4.74008 2.48213 4.62129 3.0132 4.5025C2.98391 3.96859 2.98391 3.43595 2.98391 2.90204V2.90332Z", fill: "#3DAE2B" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M3.27938 9.92594V9.7484C3.30867 9.12635 3.39782 8.53368 3.57484 7.97039L3.63343 7.79285L3.48569 7.88226C3.10108 8.11984 2.71774 8.35614 2.33312 8.62309L2.27454 8.65247L2.36369 8.71123C2.62986 9.06632 2.89603 9.45206 3.1915 9.77778L3.28065 9.92594H3.27938Z", fill: "#3DAE2B" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M3.36735 10.9631L3.33806 10.7855L3.24891 10.9337C2.98274 11.3194 2.71656 11.7333 2.48095 12.1484L2.45166 12.2072L2.51024 12.2365C2.92415 12.4741 3.36735 12.681 3.81055 12.888L3.95828 12.9467L3.8997 12.7986C3.63353 12.2353 3.4565 11.5838 3.36735 10.9618V10.9631Z", fill: "#3DAE2B" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M1.41747 8.56306L1.47606 8.53369L1.44677 8.47493C1.12201 7.97167 0.855833 7.43776 0.589659 6.90513L0.531075 6.75696L0.472491 6.9345C0.177025 7.85288 0.0292919 8.77126 0 9.74968V9.92722L0.118441 9.80843C0.503057 9.33455 0.946256 8.91943 1.41875 8.56434L1.41747 8.56306Z", fill: "#3DAE2B" }))));
    }
    Icons.AnacondaLogo = AnacondaLogo;
    /**
     * Sparkle icon.
     */
    function Sparkle(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "none", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M10.125 3.25C10.0312 3.1875 10 3.09375 10 3C10 2.90625 10.0312 2.84375 10.125 2.78125L12 2L12.75 0.15625C12.8125 0.0625 12.9062 0 13 0C13.0938 0 13.1562 0.0625 13.2188 0.15625L14 2L15.8438 2.78125C15.9375 2.84375 16 2.90625 16 3C16 3.09375 15.9375 3.1875 15.8438 3.25L14 4L13.2188 5.875C13.1562 5.96875 13.0938 6 13 6C12.9062 6 12.8125 5.96875 12.75 5.875L12 4L10.125 3.25ZM15.8438 12.7812C15.9375 12.8438 16 12.9062 16 13C16 13.0938 15.9375 13.1875 15.8438 13.25L14 14L13.2188 15.875C13.1562 15.9688 13.0938 16 13 16C12.9062 16 12.8125 15.9688 12.75 15.875L12 14L10.125 13.25C10.0312 13.1875 10 13.0938 10 13C10 12.9062 10.0312 12.8438 10.125 12.7812L12 12L12.75 10.1562C12.8125 10.0625 12.9062 10 13 10C13.0938 10 13.1562 10.0625 13.2188 10.1562L14 12L15.8438 12.7812ZM12 8C12 8.1875 11.875 8.375 11.7188 8.4375L8.1875 10.2188L6.4375 13.75C6.34375 13.9062 6.15625 14 6 14C5.78125 14 5.625 13.9062 5.53125 13.75L3.78125 10.2188L0.25 8.4375C0.09375 8.375 0 8.1875 0 8C0 7.8125 0.09375 7.625 0.25 7.5625L3.78125 5.78125L5.53125 2.28125C5.71875 1.9375 6.25 1.9375 6.4375 2.28125L8.1875 5.78125L11.7188 7.5625C11.875 7.625 12 7.8125 12 8Z", fill: "currentColor" })));
    }
    Icons.Sparkle = Sparkle;
    /**
     * Settings icon.
     */
    function Settings(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "21", viewBox: "0 0 20 21", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M19.4922 13.4688C19.4922 14.1719 17.7734 17.3359 16.9922 17.375C16.875 17.375 16.7578 17.3359 16.6797 17.2578L14.8438 16.2031C14.1406 16.7891 13.3594 17.2578 12.5 17.5703V19.6797C12.5 19.9922 12.2656 20.2266 11.9531 20.3047C11.2891 20.4609 10.5859 20.5 9.96094 20.5C9.29688 20.5 8.63281 20.4219 7.96875 20.3047C7.69531 20.2266 7.5 19.9922 7.5 19.6797V17.5703C6.60156 17.2578 5.82031 16.7891 5.11719 16.2031L3.28125 17.2578C3.20312 17.3359 3.08594 17.375 2.96875 17.375C2.10938 17.375 0.46875 14.0547 0.46875 13.4688C0.46875 13.2734 0.585938 13.0391 0.78125 12.9219L2.61719 11.9062C2.53906 11.4375 2.5 10.9688 2.5 10.5C2.5 10.0312 2.53906 9.60156 2.61719 9.13281L0.78125 8.11719C0.585938 8 0.46875 7.76562 0.46875 7.53125C0.46875 6.86719 2.1875 3.66406 2.96875 3.66406C3.08594 3.66406 3.20312 3.70312 3.28125 3.78125L5.11719 4.83594C5.82031 4.21094 6.60156 3.78125 7.5 3.46875V1.35938C7.5 1.04688 7.69531 0.8125 7.96875 0.734375C8.63281 0.578125 9.29688 0.5 10 0.5C10.6641 0.5 11.3281 0.578125 11.9922 0.734375C12.2656 0.773438 12.5 1.04688 12.5 1.35938V3.46875C13.3594 3.78125 14.1406 4.21094 14.8438 4.83594L16.6797 3.78125C16.7578 3.70312 16.875 3.66406 16.9922 3.66406C17.8516 3.66406 19.4922 6.98438 19.4922 7.53125C19.4922 7.76562 19.375 8 19.1797 8.11719L17.3438 9.13281C17.4219 9.60156 17.5 10.0703 17.5 10.5C17.5 10.9688 17.4219 11.4375 17.3438 11.9062L19.1797 12.9219C19.375 13.0391 19.4922 13.2734 19.4922 13.4688ZM10 13.625C11.7188 13.625 13.125 12.2578 13.125 10.5C13.125 8.78125 11.7188 7.375 10 7.375C8.24219 7.375 6.875 8.78125 6.875 10.5C6.875 12.2578 8.24219 13.625 10 13.625Z", fill: "currentColor" })));
    }
    Icons.Settings = Settings;
    /**
     * Magic icon.
     */
    function Magic(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M15.1875 4.875C15.0469 4.78125 15 4.64062 15 4.5C15 4.35938 15.0469 4.26562 15.1875 4.17188L18 3L19.125 0.234375C19.2188 0.09375 19.3594 0 19.5 0C19.6406 0 19.7344 0.09375 19.8281 0.234375L21 3L23.7656 4.17188C23.9062 4.26562 24 4.35938 24 4.5C24 4.64062 23.9062 4.78125 23.7656 4.875L21 6L19.8281 8.8125C19.7344 8.95312 19.6406 9 19.5 9C19.3594 9 19.2188 8.95312 19.125 8.8125L18 6L15.1875 4.875ZM23.7656 19.1719C23.9062 19.2656 24 19.3594 24 19.5C24 19.6406 23.9062 19.7812 23.7656 19.875L21 21L19.8281 23.8125C19.7344 23.9531 19.6406 24 19.5 24C19.3594 24 19.2188 23.9531 19.125 23.8125L18 21L15.1875 19.875C15.0469 19.7812 15 19.6406 15 19.5C15 19.3594 15.0469 19.2656 15.1875 19.1719L18 18L19.125 15.2344C19.2188 15.0938 19.3594 15 19.5 15C19.6406 15 19.7344 15.0938 19.8281 15.2344L21 18L23.7656 19.1719ZM18 12C18 12.2812 17.8125 12.5625 17.5781 12.6562L12.2812 15.3281L9.65625 20.625C9.51562 20.8594 9.23438 21 9 21C8.67188 21 8.4375 20.8594 8.29688 20.625L5.67188 15.3281L0.375 12.6562C0.140625 12.5625 0 12.2812 0 12C0 11.7188 0.140625 11.4375 0.375 11.3438L5.67188 8.67188L8.29688 3.42188C8.57812 2.90625 9.375 2.90625 9.65625 3.42188L12.2812 8.67188L17.5781 11.3438C17.8125 11.4375 18 11.7188 18 12Z", fill: "currentColor" })));
    }
    Icons.Magic = Magic;
    /**
     * Magic wand icon.
     */
    function MagicWand(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 22 21", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M3.30469 8.50781L2.48438 6.51562L0.570312 5.73438C0.492188 5.69531 0.414062 5.57812 0.414062 5.5C0.414062 5.42188 0.492188 5.34375 0.570312 5.26562L2.48438 4.48438L3.30469 2.53125C3.34375 2.45312 3.46094 2.375 3.53906 2.375C3.61719 2.41406 3.73438 2.45312 3.77344 2.53125L4.59375 4.44531V4.48438L6.50781 5.26562C6.58594 5.30469 6.66406 5.42188 6.66406 5.53906C6.66406 5.61719 6.58594 5.69531 6.50781 5.73438L4.59375 6.55469L3.77344 8.50781C3.73438 8.58594 3.61719 8.625 3.53906 8.625C3.46094 8.625 3.34375 8.58594 3.30469 8.50781ZM8.53906 3L7.36719 2.49219C7.32812 2.49219 7.28906 2.41406 7.28906 2.375C7.28906 2.33594 7.32812 2.29688 7.36719 2.25781L8.53906 1.75L9.04688 0.617188C9.04688 0.539062 9.16406 0.5 9.16406 0.5C9.20312 0.5 9.28125 0.539062 9.32031 0.617188L9.78906 1.75L10.9609 2.21875C11 2.25781 11.0391 2.29688 11.0391 2.375C11.0391 2.41406 11 2.49219 10.9609 2.49219L9.78906 3L9.32031 4.17188C9.28125 4.25 9.24219 4.25 9.16406 4.25C9.125 4.25 9.04688 4.25 9.04688 4.13281L8.53906 3ZM20.4141 2.375C21.1562 3.11719 21.1562 4.32812 20.4141 5.03125L5.49219 19.9531C4.78906 20.6953 3.57812 20.6953 2.83594 19.9531L1.54688 18.625C0.804688 17.9219 0.804688 16.7109 1.54688 16.0078L16.4688 1.08594C17.1719 0.34375 18.3828 0.34375 19.0859 1.08594L20.4141 2.375ZM14.5547 7.84375L18.6562 3.70312L17.7969 2.84375L13.6562 6.94531L14.5547 7.84375ZM20.2578 15.2656C20.3359 15.3438 20.4141 15.4219 20.4141 15.5391C20.4141 15.6172 20.3359 15.6953 20.2578 15.7344L18.3438 16.5547L17.5234 18.5078C17.4844 18.5859 17.3672 18.625 17.2891 18.625C17.2109 18.625 17.0938 18.5859 17.0547 18.5078L16.2344 16.5547L14.3203 15.7344C14.2422 15.6953 14.1641 15.6172 14.1641 15.5C14.1641 15.4219 14.2422 15.3438 14.3203 15.3047L16.2344 14.4844L17.0547 12.5312C17.0938 12.4531 17.2109 12.375 17.2891 12.375C17.3672 12.375 17.4844 12.4531 17.5234 12.5312L18.3438 14.4844L20.2578 15.2656Z", fill: "currentColor" })));
    }
    Icons.MagicWand = MagicWand;
    /**
     * Copy icon
     */
    function Copy(props) {
        // Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 21", xmlns: "http://www.w3.org/2000/svg", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M15 4.25C15 4.95312 15.5469 5.5 16.25 5.5H20V13.625C20 14.6797 19.1406 15.5 18.125 15.5H10.625C9.57031 15.5 8.75 14.6797 8.75 13.625V2.375C8.75 1.35938 9.57031 0.5 10.625 0.5H15V4.25ZM16.25 0.5L20 4.25H16.25V0.5ZM7.5 14.25C7.5 15.6562 8.59375 16.75 10 16.75H11.25V18.625C11.25 19.6797 10.3906 20.5 9.375 20.5H1.875C0.820312 20.5 0 19.6797 0 18.625V7.375C0 6.35938 0.820312 5.5 1.875 5.5H7.5V14.25Z", fill: "currentColor" })));
    }
    Icons.Copy = Copy;
    /**
     * User icon.
     */
    function User(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" })));
    }
    Icons.User = User;
    /**
     * Send icon.
     */
    function Send(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" })));
    }
    Icons.Send = Send;
    /**
     * Stop icon.
     */
    function Stop(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { width: "20", height: "20", viewBox: "0 0 22 23", xmlns: "http://www.w3.org/2000/svg", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M11 0.75C17.0586 0.75 22 5.69141 22 11.75C22 17.8516 17.0586 22.75 11 22.75C4.89844 22.75 0 17.8516 0 11.75C0 5.69141 4.89844 0.75 11 0.75ZM15.125 14.8438V8.65625C15.125 8.09766 14.6523 7.625 14.0938 7.625H7.90625C7.30469 7.625 6.875 8.09766 6.875 8.65625V14.8438C6.875 15.4453 7.30469 15.875 7.90625 15.875H14.0938C14.6523 15.875 15.125 15.4453 15.125 14.8438Z", fill: "currentColor" })));
    }
    Icons.Stop = Stop;
    /**
     * Rotate left icon.
     */
    function RotateLeft(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M126.9 142.9L184 200l-24 24H0V64L24 40 81.6 97.6l0 0c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0l45.3-45.3c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0l0 0z" })));
    }
    Icons.RotateLeft = RotateLeft;
    /**
     * Rotate right icon.
     */
    function RotateRight(props) {
        // <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z" })));
    }
    Icons.RotateRight = RotateRight;
    /**
     * Play icon.
     */
    function Play(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" })));
    }
    Icons.Play = Play;
    /**
     * Error icon.
     */
    function Error(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm24-384v24V264v24H232V264 152 128h48zM232 368V320h48v48H232z" })));
    }
    Icons.Error = Error;
    /**
     * Thumbs up icon.
     */
    function ThumbsUp(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { "data-testid": "thumbs-up", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z" })));
    }
    Icons.ThumbsUp = ThumbsUp;
    /**
     * Thumbs down icon.
     */
    function ThumbsDown(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { "data-testid": "thumbs-down", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z", transform: "rotate(180, 256, 256)" })));
    }
    Icons.ThumbsDown = ThumbsDown;
    /**
     * Change icon.
     */
    function Change(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M150.6 73.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 173.3V320c0 53 43 96 96 96H304c17.7 0 32-14.3 32-32s-14.3-32-32-32H192c-17.7 0-32-14.3-32-32V173.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96zM336 96c-17.7 0-32 14.3-32 32s14.3 32 32 32H448c17.7 0 32 14.3 32 32V338.7l-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L544 338.7V192c0-53-43-96-96-96H336z" })));
    }
    Icons.Change = Change;
    /**
     * Arrow right icon.
     */
    function ArrowRight(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" })));
    }
    Icons.ArrowRight = ArrowRight;
    /**
     * Bars icon.
     */
    function Bars(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" })));
    }
    Icons.Bars = Bars;
    /**
     * Plus icon.
     */
    function Plus(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M256 80V48H192V80 224H48 16v64H48 192V432v32h64V432 288H400h32V224H400 256V80z" })));
    }
    Icons.Plus = Plus;
    /**
     * Frame icon.
     */
    function Frame(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M448 128c0-17.7-14.3-32-32-32l-32 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L128 96l0-32c0-17.7-14.3-32-32-32S64 46.3 64 64l0 32L32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l32 0 0 192-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 192 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-192 32 0c17.7 0 32-14.3 32-32zM128 352l0-192 192 0 0 192-192 0z" })));
    }
    Icons.Frame = Frame;
    /**
     * Code icon.
     */
    function Code(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" })));
    }
    Icons.Code = Code;
    /**
     * Chevron right icon.
     */
    function ChevronRight(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" })));
    }
    Icons.ChevronRight = ChevronRight;
    /**
     * Chevron left icon.
     */
    function ChevronLeft(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { width: "8", height: "14", viewBox: "0 0 8 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M7.82582 11.9242L2.9016 6.99996L7.82582 2.0757L6.5 0.75L0.25 6.99996L6.5 13.25L7.82582 11.9242Z", fill: "currentColor" })));
    }
    Icons.ChevronLeft = ChevronLeft;
    /**
     * Message icon.
     */
    function Message(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z" })));
    }
    Icons.Message = Message;
    /**
     * Solid message icon.
     */
    function SolidMessage(props) {
        return (
        // Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" })));
    }
    Icons.SolidMessage = SolidMessage;
    /**
     * Close icon.
     */
    function Close(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })));
    }
    Icons.Close = Close;
    /**
     * Clip icon.
     */
    function Clip(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "10", height: "14", viewBox: "0 0 10 14", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M9.6875 3.875V9.15625C9.6875 11.7461 7.45312 13.8281 4.78711 13.5996C2.47656 13.3965 0.75 11.3398 0.75 9.00391V6.10938C0.75 5.75391 1.00391 5.52539 1.33398 5.52539C1.63867 5.52539 1.94336 5.7793 1.94336 6.10938V9.0293C1.94336 10.7051 3.28906 12.2793 4.96484 12.3809C6.89453 12.5332 8.46875 11.0352 8.46875 9.15625V4.00195C8.46875 2.93555 7.68164 1.9707 6.61523 1.86914C5.39648 1.76758 4.40625 2.70703 4.40625 3.875V9.15625C4.40625 9.63867 4.83789 10.0195 5.3457 9.94336C5.75195 9.89258 6.03125 9.51172 6.03125 9.10547V4.48438C6.03125 4.12891 6.28516 3.875 6.61523 3.875C6.91992 3.875 7.25 4.1543 7.25 4.48438V9.0293C7.25 10.1211 6.46289 11.0859 5.39648 11.1621C4.17773 11.2891 3.1875 10.3242 3.1875 9.15625L3.16211 4.02734C3.16211 2.32617 4.50781 0.751953 6.18359 0.650391C8.11328 0.523438 9.6875 2.02148 9.6875 3.875Z", fill: "currentColor" })));
    }
    Icons.Clip = Clip;
    /**
     * Warning icon.
     */
    function Warning(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })));
    }
    Icons.Warning = Warning;
    /**
     * Trash icon.
     */
    function Trash(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "1em", viewBox: "0 0 448 512", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" })));
    }
    Icons.Trash = Trash;
    /**
     * Book icon.
     */
    function Book(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { height: "1em", viewBox: "0 0 14 16", xmlns: "http://www.w3.org/2000/svg", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M14 11.25C14 11.5938 13.7812 11.875 13.5 11.9688V14.0625C13.7812 14.1562 14 14.4375 14 14.75V15.25C14 15.6875 13.6562 16 13.25 16H3C1.3125 16 0 14.6875 0 13V3C0 1.34375 1.3125 0 3 0H13.25C13.6562 0 14 0.34375 14 0.75V11.25ZM8.15625 6.1875L6.59375 6.8125C6.53125 6.84375 6.5 6.90625 6.5 7C6.5 7.0625 6.53125 7.15625 6.59375 7.1875L8.15625 7.8125L8.8125 9.375C8.84375 9.4375 8.90625 9.5 9 9.5C8.96875 9.5 9 9.5 9 9.5C9.0625 9.5 9.125 9.4375 9.15625 9.375L9.8125 7.8125L11.375 7.1875C11.4375 7.15625 11.5 7.0625 11.5 7C11.5 6.9375 11.4375 6.875 11.375 6.84375L9.8125 6.1875L9.15625 4.625C9.125 4.5625 9.0625 4.5 8.96875 4.5C8.90625 4.5 8.84375 4.5625 8.8125 4.625L8.15625 6.15625V6.1875ZM4.0625 3.40625C4 3.40625 4 3.46875 4 3.5C4 3.5625 4 3.59375 4.0625 3.625L4.96875 4L5.375 4.9375C5.40625 4.96875 5.375 5 5.46875 5C5.53125 5 5.5625 4.96875 5.59375 4.9375L5.96875 4L6.90625 3.625C6.96875 3.59375 7 3.5625 7 3.5C7 3.46875 6.96875 3.4375 6.90625 3.40625L5.96875 3L5.5625 2.09375C5.5625 2.03125 5.46875 2 5.46875 2C5.4375 2 5.40625 2.03125 5.34375 2.09375L4.96875 3L4.0625 3.40625ZM12 14V12H3C2.4375 12 2 12.4688 2 13C2 13.5625 2.4375 14 3 14H12Z", fill: "currentColor" })));
    }
    Icons.Book = Book;
    /**
     * DataCatalog icon.
     */
    function DataCatalog(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "31", viewBox: "0 0 30 31", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M30 4.8125C30 4.82031 30 4.82812 30 4.83594C29.9609 7.48438 23.2578 9.625 15 9.625C6.74219 9.625 0.0390625 7.48438 0 4.83594C0 4.82812 0 4.82031 0 4.8125C0 2.15625 6.71875 0 15 0C23.2812 0 30 2.15625 30 4.8125ZM30 8.4375C30 8.4375 30 8.45312 30 8.46094C29.9609 11.1094 23.2578 13.25 15 13.25C6.74219 13.25 0.0390625 11.1094 0 8.46094V8.4375L0.078125 15.2187C0.078125 15.2187 0.078125 15.25 0.078125 15.2578C0.117188 17.8906 6.78125 20.0234 15 20.0234C23.2188 20.0234 29.8828 17.8906 29.9219 15.2578C29.9219 15.25 29.9219 15.2187 29.9219 15.2187L30 8.4375ZM30 18.4375C30 18.4375 30 18.4531 30 18.4609C29.9609 21.1094 23.2578 23.25 15 23.25C6.74219 23.25 0.0390625 21.1094 0 18.4609V18.4375L0.078125 25.2188C0.078125 25.2188 0.078125 25.25 0.078125 25.2578C0.117188 27.8906 6.78125 30.0234 15 30.0234C23.2188 30.0234 29.8828 27.8906 29.9219 25.2578C29.9219 25.25 29.9219 25.2188 29.9219 25.2188L30 18.4375Z", fill: "currentColor" })));
    }
    Icons.DataCatalog = DataCatalog;
    /**
     * Share icon.
     */
    function Share(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { clipPath: "url(#clip0_289_5006)" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z", fill: "currentColor" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("clipPath", { id: "clip0_289_5006" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", { width: "24", height: "24", fill: "white" })))));
    }
    Icons.Share = Share;
    /**
     * Panel icon.
     */
    function Panel(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 18 18", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { clipPath: "url(#clip0_345_19040)" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M17.9113 0.428824C17.8716 0.1857 17.6841 0.0656821 17.3871 0.0427376C16.5951 -0.018595 15.8057 -0.0247723 15.0168 0.0970103C14.1202 0.23556 13.2544 0.476919 12.4179 0.823735C11.2931 1.28969 10.265 1.91801 9.31549 2.67783C9.26077 2.72151 9.17297 2.76034 9.10899 2.75019C8.68937 2.68313 8.27328 2.5962 7.8541 2.52648C6.92352 2.37161 6.0481 2.53134 5.27328 3.07362C4.92955 3.3141 4.6348 3.62826 4.33211 3.92345C3.58288 4.65415 2.22253 6.00435 2.09678 6.1279L1.17723 7.17364C1.00603 7.37573 1.10266 7.66651 1.40756 7.72078L2.94661 7.89507C3.66363 7.96125 4.38109 8.02215 5.09855 8.08745C5.14576 8.09186 5.19165 8.11348 5.24062 8.12804C5.09281 8.51987 4.95205 8.89183 4.81218 9.26468C4.73187 9.47868 4.7857 9.65783 4.9472 9.81667C5.25033 10.1145 5.54817 10.4172 5.8491 10.7172C6.6398 11.5071 7.43006 12.2969 8.22253 13.0849C8.3527 13.2147 8.51155 13.2584 8.69025 13.197C8.79526 13.1613 8.89984 13.1229 9.00397 13.0836C9.29475 12.9733 9.58509 12.8621 9.89043 12.7456C9.90057 12.8184 9.90984 12.8687 9.91469 12.9195C10.025 14.0861 10.1353 15.2532 10.2447 16.4199C10.2633 16.6166 10.3401 16.7724 10.5333 16.8492C10.7345 16.929 10.9084 16.8726 11.0544 16.727L14.8628 12.8502C14.9647 12.683 15.0741 12.5308 15.1558 12.3648C15.4695 11.7272 15.6041 11.0526 15.5048 10.3453C15.4386 9.87271 15.338 9.40544 15.2656 8.93375C15.2528 8.84991 15.2806 8.74049 15.3292 8.67033C15.6045 8.27277 15.909 7.89507 16.1715 7.49001C16.8409 6.45795 17.3421 5.34558 17.658 4.15599C17.8667 3.37014 17.9974 2.56929 17.9965 1.75211L18.0004 1.34925C17.9726 1.04215 17.9612 0.731957 17.9118 0.428383L17.9113 0.428824ZM16.2567 5.3769C15.5326 7.04171 14.4617 8.44883 13.1 9.64327C12.484 10.1833 11.82 10.6542 11.1197 11.076C11.0527 11.1161 10.9834 11.1523 10.8669 11.2167C10.5761 10.9114 10.2853 10.595 9.98265 10.2901C8.97044 9.27174 7.95646 8.25512 6.93631 7.24468C6.82159 7.13084 6.81056 7.05097 6.89087 6.91595C7.77511 5.43382 8.88484 4.15378 10.2655 3.11201C11.0632 2.5106 11.9268 2.02876 12.8445 1.63783C13.0329 1.55752 13.1499 1.57385 13.3003 1.72696C14.2199 2.66283 15.1496 3.58855 16.0819 4.51163C16.4649 4.8911 16.4707 4.8836 16.2562 5.37646L16.2567 5.3769Z", fill: "currentColor" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M11.9237 4.4438C11.016 4.44159 10.2959 5.16214 10.2959 6.07286C10.2959 6.99594 10.9962 7.70104 11.9135 7.70193C12.8269 7.70325 13.5452 6.99329 13.5523 6.08213C13.5589 5.18773 12.822 4.44601 11.9237 4.44336V4.4438Z", fill: "currentColor" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M0.733782 17.2304C0.573611 17.2304 0.413882 17.1655 0.297394 17.038C0.0776562 16.7971 0.0944234 16.4234 0.335782 16.2036L4.91013 12.0299C5.15105 11.8102 5.52478 11.8274 5.74452 12.0683C5.96426 12.3092 5.94749 12.683 5.70613 12.9027L1.13178 17.0759C1.01838 17.1792 0.875862 17.2304 0.733782 17.2304Z", fill: "currentColor" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4.13178 17.3977C3.97161 17.3977 3.81188 17.3328 3.6954 17.2053C3.47566 16.9644 3.49243 16.5906 3.73379 16.3709L5.55699 14.7074C5.79791 14.4877 6.17164 14.5049 6.39138 14.7458C6.61112 14.9867 6.59435 15.3604 6.35299 15.5802L4.52978 17.2437C4.41639 17.3469 4.27386 17.3981 4.13178 17.3981V17.3977Z", fill: "currentColor" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M0.590823 14.3828C0.430652 14.3828 0.270923 14.3179 0.154435 14.1904C-0.0653034 13.9495 -0.0485362 13.5757 0.192823 13.356L2.01603 11.6925C2.25695 11.4728 2.63024 11.49 2.85042 11.7309C3.07016 11.9718 3.05339 12.3455 2.81203 12.5653L0.988822 14.2288C0.875423 14.332 0.732902 14.3832 0.590823 14.3832V14.3828Z", fill: "currentColor" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("clipPath", { id: "clip0_345_19040" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", { width: "18", height: "17.3977", fill: "white" })))));
    }
    Icons.Panel = Panel;
    /**
     * Question icon.
     */
    function Question(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.75 10C18.75 14.832 14.832 18.75 10 18.75C5.16797 18.75 1.25 14.832 1.25 10C1.25 5.16797 5.16797 1.25 10 1.25C14.832 1.25 18.75 5.16797 18.75 10ZM17.5 10C17.5 5.85938 14.1406 2.5 10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10ZM13.75 7.5C13.75 9.26562 12.8359 10.0742 12.1641 10.6641C11.5742 11.1836 11.25 11.4727 11.25 12.5H8.75C8.75 10.3438 9.80859 9.40625 10.5117 8.78906C11.0508 8.31641 11.25 8.13672 11.25 7.5C11.25 6.8125 10.6875 6.25 10 6.25C9.3125 6.25 8.75 6.8125 8.75 7.5H6.25C6.25 5.42969 7.92969 3.75 10 3.75C12.0703 3.75 13.75 5.42969 13.75 7.5ZM11.25 16.25V13.75H8.75V16.25H11.25Z", fill: "currentColor" })));
    }
    Icons.Question = Question;
    /**
     * Bulb icon.
     */
    function Bulb(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "10", height: "14", viewBox: "0 0 10 14", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4.625 0.625C7.08789 0.650391 9.09375 2.63086 9.09375 5.09375C9.09375 6.23633 8.66211 7.25195 7.97656 8.01367C7.54492 8.49609 6.91016 9.51172 6.65625 10.3496C6.65625 10.3496 6.65625 10.3496 6.65625 10.375H2.56836C2.56836 10.3496 2.56836 10.3496 2.56836 10.3496C2.31445 9.51172 1.67969 8.49609 1.24805 8.01367C0.5625 7.22656 0.15625 6.21094 0.15625 5.09375C0.15625 2.73242 2.03516 0.650391 4.625 0.625ZM7.0625 7.25195C7.57031 6.64258 7.875 5.88086 7.875 5.09375C7.875 3.31641 6.40234 1.84375 4.59961 1.84375C2.59375 1.86914 1.375 3.51953 1.375 5.09375C1.375 5.88086 1.6543 6.64258 2.16211 7.25195C2.56836 7.68359 3.05078 8.41992 3.40625 9.15625H5.81836C6.17383 8.41992 6.65625 7.68359 7.0625 7.25195ZM2.59375 12.1777V11.1875H6.65625L6.63086 12.1777C6.63086 12.3047 6.58008 12.5078 6.50391 12.6348L6.07227 13.2695C5.94531 13.4727 5.64062 13.625 5.38672 13.625H3.83789C3.58398 13.625 3.2793 13.4727 3.15234 13.2695L2.7207 12.6348C2.64453 12.4824 2.59375 12.3301 2.59375 12.1777ZM4.59961 6.71875C5.05664 6.71875 5.4375 7.09961 5.4375 7.53125C5.4375 7.98828 5.05664 8.34375 4.625 8.34375C4.16797 8.34375 3.8125 7.98828 3.8125 7.53125C3.8125 7.09961 4.16797 6.71875 4.59961 6.71875ZM4.625 5.90625C4.26953 5.90625 4.01562 5.65234 4.01562 5.29688V3.26562C4.01562 2.93555 4.26953 2.68164 4.59961 2.68164C4.95508 2.68164 5.23438 2.93555 5.23438 3.26562V5.29688C5.23438 5.65234 4.95508 5.90625 4.625 5.90625Z", fill: "currentColor" })));
    }
    Icons.Bulb = Bulb;
    /**
     * UserPrompt icon.
     */
    function UserPrompt(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "28", height: "25", viewBox: "0 0 28 25", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M14 0.25C21.7109 0.25 27.9453 5.33594 27.9453 11.625C27.9453 17.8594 21.7656 23 14 23C11.9219 23 9.95312 22.5625 8.14844 21.9062C6.72656 23 4.10156 24.75 0.4375 24.75C0.273438 24.75 0.109375 24.6406 0.0546875 24.4766C0 24.3125 0 24.0938 0.164062 23.9844C0.164062 23.9844 2.46094 21.5234 3.11719 18.7344C1.20312 16.8203 0 14.3047 0 11.625C0 5.33594 6.23438 0.25 14 0.25ZM13.6172 17.75C14.4375 17.75 15.0391 17.1484 15.0391 16.3281C15.0391 15.5625 14.3828 14.9062 13.6172 14.9062C12.8516 14.9062 12.25 15.5625 12.25 16.3281C12.25 17.1484 12.8516 17.75 13.6172 17.75ZM16.7891 11.4062C17.7734 10.8047 18.375 9.76562 18.375 8.67188C18.375 6.92188 16.9531 5.5 15.1484 5.5H12.7969C10.9922 5.5 9.625 6.92188 9.625 8.67188C9.625 9.27344 10.1172 9.76562 10.6641 9.76562C11.2656 9.76562 11.7578 9.27344 11.7578 8.67188C11.7578 8.125 12.25 7.6875 12.7969 7.6875H15.1484C15.6953 7.6875 16.1875 8.125 16.1875 8.67188C16.1875 9.05469 15.9688 9.38281 15.6406 9.49219L13.0703 11.0234C12.6875 11.2422 12.5234 11.625 12.5234 12.0078V12.7734C12.5234 13.3203 13.0156 13.8672 13.6172 13.8672C14.2188 13.8672 14.7109 13.3203 14.7109 12.7734V12.6641L16.7891 11.4062Z", fill: "currentColor" })));
    }
    Icons.UserPrompt = UserPrompt;
    /**
     * NewChat icon.
     */
    function NewChat(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "23", height: "20", viewBox: "0 0 23 20", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M12 0.125C18.0586 0.125 22.957 4.16406 22.957 9.0625C22.957 14.0039 18.0586 18 12 18C10.3242 18 8.77734 17.6992 7.35938 17.1836C6.28516 18.043 4.17969 19.375 1.34375 19.375C1.17188 19.375 1.04297 19.332 1 19.2031C0.957031 19.0742 0.957031 18.9023 1.08594 18.8164C1.08594 18.7734 2.89062 16.8828 3.40625 14.6914C1.90234 13.1445 1 11.2109 1 9.0625C1 4.16406 5.89844 0.125 12 0.125ZM15.4375 10.0938C15.9961 10.0938 16.4688 9.66406 16.4688 9.0625C16.4688 8.50391 15.9961 8.03125 15.3945 8.03125H12.9883V5.625C12.9883 5.06641 12.5586 4.59375 12 4.59375C11.3984 4.59375 10.9688 5.06641 10.9258 5.625V8.07422H8.51953C7.96094 8.07422 7.53125 8.50391 7.53125 9.0625C7.53125 9.66406 7.96094 10.0938 8.51953 10.0938H10.9688V12.543C10.9688 13.1016 11.3984 13.5312 12 13.5312C12.5586 13.5312 12.9883 13.1016 13.0312 12.5V10.0938H15.4375Z", fill: "currentColor" })));
    }
    Icons.NewChat = NewChat;
    /**
     * History icon.
     */
    function History(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "21", height: "19", viewBox: "0 0 21 19", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M19.1797 7.625C20.3516 13.6406 15.7812 18.875 10 18.875C8.4375 18.875 6.99219 18.5234 5.70312 17.8594C4.96094 17.4688 4.80469 16.4531 5.39062 15.8672C5.78125 15.4766 6.36719 15.3984 6.875 15.6328C7.8125 16.1406 8.86719 16.375 10 16.375C14.2578 16.375 17.6562 12.4688 16.6797 8.01562C16.1328 5.28125 13.6328 2.625 10 2.625C9.49219 2.625 7.1875 2.58594 5.11719 4.65625L6.60156 6.14062C7.14844 6.6875 6.75781 7.625 5.97656 7.625H1.21094C0.898438 7.625 0.625 7.35156 0.625 7V2.27344C0.625 1.49219 1.5625 1.10156 2.10938 1.64844L3.35938 2.89844C4.88281 1.375 7.07031 0.125 10 0.125C16.8359 0.125 18.9062 6.21875 19.1797 7.625ZM10 4.5C10.5078 4.5 10.9375 4.92969 10.9375 5.4375V9.65625L13.0078 11.2578C13.4375 11.5703 13.5156 12.1562 13.2031 12.5859C13.0078 12.8203 12.7344 12.9375 12.4609 12.9375C12.2656 12.9375 12.0703 12.8984 11.9141 12.7812L9.41406 10.9062C9.17969 10.7109 9.0625 10.4375 9.0625 10.125V5.4375C9.0625 4.92969 9.45312 4.5 10 4.5Z", fill: "currentColor" })));
    }
    Icons.History = History;
    /**
     * Search icon.
     */
    function Search(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.7063 10H11.4156L15 13.5844L13.5844 15L10 11.4156V10.7063L9.16562 9.87187C8.30312 10.5781 7.2 11 6 11C3.2375 11 1 8.7625 1 6C1 3.2375 3.2375 1 6 1C8.7625 1 11 3.2375 11 6C11 7.2 10.5781 8.30312 9.87187 9.16562L10.7063 10ZM6 2C3.79063 2 2 3.79063 2 6C2 8.20937 3.79063 10 6 10C8.20937 10 10 8.20937 10 6C10 3.79063 8.20937 2 6 2Z", fill: "currentColor" })));
    }
    Icons.Search = Search;
    /**
     * External link icon.
     */
    function ExternalLink(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", ...props },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16 11.2V16H0V0H4.8V1.6H1.6V14.4H14.4V11.2H16ZM16 0H8L10.87 2.865L4.8 8.935L7.065 11.2L13.13 5.13L16 8V0Z", fill: "currentColor" })));
    }
    Icons.ExternalLink = ExternalLink;
})(Icons || (Icons = {}));


/***/ }),

/***/ "../../lib/assistant-components/lib/index.js":
/*!***************************************************!*\
  !*** ../../lib/assistant-components/lib/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_CODE_TO_NOTEBOOK_TYPES: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_6__.ADD_CODE_TO_NOTEBOOK_TYPES),
/* harmony export */   ASSISTANT_ERROR: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.ASSISTANT_ERROR),
/* harmony export */   ActiveMessage: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.ActiveMessage),
/* harmony export */   AddContextPopup: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.AddContextPopup),
/* harmony export */   AssistantComponentContext: () => (/* reexport safe */ _AssistantComponentContext__WEBPACK_IMPORTED_MODULE_3__.AssistantComponentContext),
/* harmony export */   AssistantError: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.AssistantError),
/* harmony export */   AssistantStore: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.AssistantStore),
/* harmony export */   BaseElement: () => (/* reexport safe */ _base_elements__WEBPACK_IMPORTED_MODULE_1__.BaseElement),
/* harmony export */   Button: () => (/* reexport safe */ _base_elements__WEBPACK_IMPORTED_MODULE_1__.Button),
/* harmony export */   ChatInput: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.ChatInput),
/* harmony export */   ChatPanelFooter: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.ChatPanelFooter),
/* harmony export */   CodeBlock: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.CodeBlock),
/* harmony export */   CodeOptions: () => (/* reexport safe */ _suggestion_elements__WEBPACK_IMPORTED_MODULE_8__.CodeOptions),
/* harmony export */   CompletedMessage: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.CompletedMessage),
/* harmony export */   CompletedThumbs: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.CompletedThumbs),
/* harmony export */   Div: () => (/* reexport safe */ _base_elements__WEBPACK_IMPORTED_MODULE_1__.Div),
/* harmony export */   Dropdown: () => (/* reexport safe */ _base_elements__WEBPACK_IMPORTED_MODULE_1__.Dropdown),
/* harmony export */   ErrorMessage: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage),
/* harmony export */   ErrorPopup: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.ErrorPopup),
/* harmony export */   FeedbackButton: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.FeedbackButton),
/* harmony export */   FeedbackModal: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.FeedbackModal),
/* harmony export */   Footer: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.Footer),
/* harmony export */   GenerateSuggestions: () => (/* reexport safe */ _suggestion_elements__WEBPACK_IMPORTED_MODULE_8__.GenerateSuggestions),
/* harmony export */   Header: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.Header),
/* harmony export */   HistoryPage: () => (/* reexport safe */ _pages__WEBPACK_IMPORTED_MODULE_5__.HistoryPage),
/* harmony export */   HomeScreen: () => (/* reexport safe */ _pages__WEBPACK_IMPORTED_MODULE_5__.HomeScreen),
/* harmony export */   Icons: () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_0__.Icons),
/* harmony export */   LoadADataframe: () => (/* reexport safe */ _suggestion_elements__WEBPACK_IMPORTED_MODULE_8__.LoadADataframe),
/* harmony export */   MessageButtons: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.MessageButtons),
/* harmony export */   Option: () => (/* reexport safe */ _base_elements__WEBPACK_IMPORTED_MODULE_1__.Option),
/* harmony export */   Popup: () => (/* reexport safe */ _base_elements__WEBPACK_IMPORTED_MODULE_1__.Popup),
/* harmony export */   RemoveAfter: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.RemoveAfter),
/* harmony export */   ResponseBlocks: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.ResponseBlocks),
/* harmony export */   STATE_VERSION: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.STATE_VERSION),
/* harmony export */   Select: () => (/* reexport safe */ _base_elements__WEBPACK_IMPORTED_MODULE_1__.Select),
/* harmony export */   SelectChatStarter: () => (/* reexport safe */ _suggestion_elements__WEBPACK_IMPORTED_MODULE_8__.SelectChatStarter),
/* harmony export */   SelectContext: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.SelectContext),
/* harmony export */   SelectDataFrame: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.SelectDataFrame),
/* harmony export */   SettingsPage: () => (/* reexport safe */ _pages__WEBPACK_IMPORTED_MODULE_5__.SettingsPage),
/* harmony export */   Style: () => (/* reexport safe */ _base_elements__WEBPACK_IMPORTED_MODULE_1__.Style),
/* harmony export */   TermsAndConditions: () => (/* reexport safe */ _contents__WEBPACK_IMPORTED_MODULE_4__.TermsAndConditions),
/* harmony export */   TermsAndConditionsPage: () => (/* reexport safe */ _pages__WEBPACK_IMPORTED_MODULE_5__.TermsAndConditionsPage),
/* harmony export */   TextBlock: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.TextBlock),
/* harmony export */   UserMessage: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.UserMessage),
/* harmony export */   _overrideMaxChatsForTesting: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__._overrideMaxChatsForTesting),
/* harmony export */   addNewInstruction: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.addNewInstruction),
/* harmony export */   attachmentDataframeInstruction: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.attachmentDataframeInstruction),
/* harmony export */   attachmentFileInstruction: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.attachmentFileInstruction),
/* harmony export */   attachmentMessagePrefix: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.attachmentMessagePrefix),
/* harmony export */   chatMessagesUnderLimit: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.chatMessagesUnderLimit),
/* harmony export */   cleanMessageWithAttachmentPrefix: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.cleanMessageWithAttachmentPrefix),
/* harmony export */   cleanSpecialPrefixes: () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_10__.cleanSpecialPrefixes),
/* harmony export */   cleanupError: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.cleanupError),
/* harmony export */   completeRequest: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.completeRequest),
/* harmony export */   countTokens: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.countTokens),
/* harmony export */   createContextInstructions: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.createContextInstructions),
/* harmony export */   createDataframe: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.createDataframe),
/* harmony export */   createEmptyState: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.createEmptyState),
/* harmony export */   createTestStorage: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.createTestStorage),
/* harmony export */   dataframeMessageIdentifier: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.dataframeMessageIdentifier),
/* harmony export */   exampleCodeResponses: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.exampleCodeResponses),
/* harmony export */   extractMessageBlocks: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.extractMessageBlocks),
/* harmony export */   fetchSummary: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.fetchSummary),
/* harmony export */   fileMessageIdentifier: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.fileMessageIdentifier),
/* harmony export */   formatContextVariables: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.formatContextVariables),
/* harmony export */   generateRequest: () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_10__.generateRequest),
/* harmony export */   getActiveChat: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.getActiveChat),
/* harmony export */   getActiveNotebook: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.getActiveNotebook),
/* harmony export */   getActiveNotebookChats: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.getActiveNotebookChats),
/* harmony export */   getAssistantStore: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.getAssistantStore),
/* harmony export */   getChatTitle: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.getChatTitle),
/* harmony export */   getInProgressResponse: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.getInProgressResponse),
/* harmony export */   getIsNewChat: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.getIsNewChat),
/* harmony export */   getIsOnChatStarter: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.getIsOnChatStarter),
/* harmony export */   getPreviousChat: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.getPreviousChat),
/* harmony export */   getPreviousChatName: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.getPreviousChatName),
/* harmony export */   getSuggestions: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.getSuggestions),
/* harmony export */   gotoPreviousChat: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.gotoPreviousChat),
/* harmony export */   graphChatType: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.graphChatType),
/* harmony export */   hasActiveCodeResponse: () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_10__.hasActiveCodeResponse),
/* harmony export */   initAssistantStore: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.initAssistantStore),
/* harmony export */   initialHomeScreenState: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.initialHomeScreenState),
/* harmony export */   isTestMode: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.isTestMode),
/* harmony export */   lastFetchedMaxTokens: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.lastFetchedMaxTokens),
/* harmony export */   matchChildName: () => (/* reexport safe */ _base_elements__WEBPACK_IMPORTED_MODULE_1__.matchChildName),
/* harmony export */   matchMultipleChildNames: () => (/* reexport safe */ _base_elements__WEBPACK_IMPORTED_MODULE_1__.matchMultipleChildNames),
/* harmony export */   messageId: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.messageId),
/* harmony export */   mockStream: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.mockStream),
/* harmony export */   mockStreamWithError: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.mockStreamWithError),
/* harmony export */   postExecutionResult: () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_10__.postExecutionResult),
/* harmony export */   postFeedback: () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_10__.postFeedback),
/* harmony export */   removeFailedMessages: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.removeFailedMessages),
/* harmony export */   requireChatState: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.requireChatState),
/* harmony export */   resetActiveChat: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.resetActiveChat),
/* harmony export */   resetSuggestions: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.resetSuggestions),
/* harmony export */   resetToHomeScreen: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.resetToHomeScreen),
/* harmony export */   selectChatStarter: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.selectChatStarter),
/* harmony export */   setActiveChat: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.setActiveChat),
/* harmony export */   setCellError: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.setCellError),
/* harmony export */   setNotebook: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.setNotebook),
/* harmony export */   setSuggestionsDataframe: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.setSuggestionsDataframe),
/* harmony export */   setSuggestionsError: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.setSuggestionsError),
/* harmony export */   setSuggestionsLoading: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.setSuggestionsLoading),
/* harmony export */   setTextSelection: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.setTextSelection),
/* harmony export */   settingAddCodeToNotebookTitles: () => (/* reexport safe */ _pages__WEBPACK_IMPORTED_MODULE_5__.settingAddCodeToNotebookTitles),
/* harmony export */   setupInitialRequestState: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.setupInitialRequestState),
/* harmony export */   showBackButton: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.showBackButton),
/* harmony export */   sleep: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.sleep),
/* harmony export */   styleOfActiveMessage: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.styleOfActiveMessage),
/* harmony export */   styleOfChatInput: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.styleOfChatInput),
/* harmony export */   styleOfCodeBlock: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.styleOfCodeBlock),
/* harmony export */   styleOfCodeOptions: () => (/* reexport safe */ _suggestion_elements__WEBPACK_IMPORTED_MODULE_8__.styleOfCodeOptions),
/* harmony export */   styleOfCompletedMessage: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.styleOfCompletedMessage),
/* harmony export */   styleOfCompletedThumbs: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.styleOfCompletedThumbs),
/* harmony export */   styleOfDropdown: () => (/* reexport safe */ _base_elements__WEBPACK_IMPORTED_MODULE_1__.styleOfDropdown),
/* harmony export */   styleOfErrorMessage: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.styleOfErrorMessage),
/* harmony export */   styleOfFeedbackButton: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.styleOfFeedbackButton),
/* harmony export */   styleOfFeedbackModal: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.styleOfFeedbackModal),
/* harmony export */   styleOfFooter: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.styleOfFooter),
/* harmony export */   styleOfGenerateSuggestions: () => (/* reexport safe */ _suggestion_elements__WEBPACK_IMPORTED_MODULE_8__.styleOfGenerateSuggestions),
/* harmony export */   styleOfHeader: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.styleOfHeader),
/* harmony export */   styleOfHistoryPage: () => (/* reexport safe */ _pages__WEBPACK_IMPORTED_MODULE_5__.styleOfHistoryPage),
/* harmony export */   styleOfHomeScreen: () => (/* reexport safe */ _pages__WEBPACK_IMPORTED_MODULE_5__.styleOfHomeScreen),
/* harmony export */   styleOfLoadADataframe: () => (/* reexport safe */ _suggestion_elements__WEBPACK_IMPORTED_MODULE_8__.styleOfLoadADataframe),
/* harmony export */   styleOfMessageButtons: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.styleOfMessageButtons),
/* harmony export */   styleOfSelectChatStarter: () => (/* reexport safe */ _suggestion_elements__WEBPACK_IMPORTED_MODULE_8__.styleOfSelectChatStarter),
/* harmony export */   styleOfSettingsPage: () => (/* reexport safe */ _pages__WEBPACK_IMPORTED_MODULE_5__.styleOfSettingsPage),
/* harmony export */   styleOfTermsAndConditions: () => (/* reexport safe */ _contents__WEBPACK_IMPORTED_MODULE_4__.styleOfTermsAndConditions),
/* harmony export */   styleOfTermsAndConditionsPage: () => (/* reexport safe */ _pages__WEBPACK_IMPORTED_MODULE_5__.styleOfTermsAndConditionsPage),
/* harmony export */   styleOfTextBlock: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.styleOfTextBlock),
/* harmony export */   styleOfUserMessage: () => (/* reexport safe */ _chat_elements__WEBPACK_IMPORTED_MODULE_2__.styleOfUserMessage),
/* harmony export */   submitFeedback: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.submitFeedback),
/* harmony export */   updateCode: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.updateCode),
/* harmony export */   updateHomeScreenState: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.updateHomeScreenState),
/* harmony export */   updateStoreState: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.updateStoreState),
/* harmony export */   updateSuggestions: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.updateSuggestions),
/* harmony export */   useStore: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_9__.useStore)
/* harmony export */ });
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons */ "../../lib/assistant-components/lib/icons.js");
/* harmony import */ var _base_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-elements */ "../../lib/assistant-components/lib/base-elements/index.js");
/* harmony import */ var _chat_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-elements */ "../../lib/assistant-components/lib/chat-elements/index.js");
/* harmony import */ var _AssistantComponentContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AssistantComponentContext */ "../../lib/assistant-components/lib/AssistantComponentContext.js");
/* harmony import */ var _contents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contents */ "../../lib/assistant-components/lib/contents/index.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages */ "../../lib/assistant-components/lib/pages/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types */ "../../lib/assistant-components/lib/types.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "../../lib/assistant-components/lib/utils/index.js");
/* harmony import */ var _suggestion_elements__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./suggestion-elements */ "../../lib/assistant-components/lib/suggestion-elements/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store */ "../../lib/assistant-components/lib/store/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api */ "../../lib/assistant-components/lib/api/index.js");













/***/ }),

/***/ "../../lib/assistant-components/lib/pages/HistoryPage.js":
/*!***************************************************************!*\
  !*** ../../lib/assistant-components/lib/pages/HistoryPage.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistoryPage: () => (/* binding */ HistoryPage),
/* harmony export */   styleOfHistoryPage: () => (/* binding */ styleOfHistoryPage)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tooltip */ "../../node_modules/react-tooltip/dist/react-tooltip.min.mjs");
/* harmony import */ var timeago_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! timeago-react */ "../../node_modules/timeago-react/esm/timeago-react.js");
/* harmony import */ var _base_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-elements */ "../../lib/assistant-components/lib/base-elements/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons */ "../../lib/assistant-components/lib/icons.js");






/**
 * Style for the chat history page.
 * (hierarchy of children styles is fixed automatically)
 * @alpha
 */
const styleOfHistoryPage = `
  .anaconda-assistant-history-page {
    font-family: 'Inter', sans-serif;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: var(--as-main-font-color, #2c303a);

    overflow-y: scroll;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 16px;
  }

  .anaconda-assistant-history-page-title {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 8px;
  }

  .anaconda-assistant-history-page-no-chats {
    height: calc(100% - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: var(--as-main-disabled-color:, #2121214d);
  }

  .anaconda-assistant-history-page-search {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    width: 100%;
    position: relative;

    svg {
      position: absolute;
      z-index: 1;
      right: 10px;
    }
  }

  .anaconda-assistant-history-page-search input {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    color: var(--as-main-font-color-black, #000);
    background: none;
    border-radius: 4px;
    border: 1px solid var(--as-border-color-secondary, #8c94a6);
    padding: 7px 36px 7px 12px;
    width: 100%;
    overflow: hidden;
  }

  .anaconda-assistant-history-page-sort {
    display: flex;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    margin: 0 0 12px 8px;
    align-items: center;
  }

  .anaconda-assistant-history-page-sort label {
    margin-right: 8px;
  }

  .anaconda-assistant-history-page-list {
    display: flex;
    flex-direction: column;
  }


  .anaconda-assistant-history-page-list-item,
  .anaconda-assistant-history-page-list-item-active
  {
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 8px;
    margin-bottom: 8px;
    color: var(--jp-ui-font-color1, rgba(0, 0, 0, 0.87));
    border: none;
    background: none;
  }

  .anaconda-assistant-history-page-list-item-active {
    background: #f3f4f6;
    color: rgba(0, 0, 0, 0.87);
  }

  .anaconda-assistant-history-page-list-item,
  .anaconda-assistant-history-page-list-item-active {
    &:hover,
    &:focus {
      background: #f3f4f6;
      color: #6c5af6;
      cursor: pointer;
    }
  }

  .anaconda-assistant-history-page-list-item-icon,
  .anaconda-assistant-history-page-list-item-active-icon {
    display: flex;
    align-items: center;
  }

  .anaconda-assistant-history-page-list-item-icon svg,
  .anaconda-assistant-history-page-list-item-active-icon svg {
    width: 20px;
    margin-right: 8px;
    color: #6c5af6;
  }

  .anaconda-assistant-history-page-list-item-text,
  .anaconda-assistant-history-page-list-item-active-text {
    overflow: hidden;
    font-size: 15px;
    font-style: normal;
    line-height: 20px;
    white-space: nowrap;
    text-align: left;
    text-overflow: ellipsis;
    flex: 1;
  }

  .anaconda-assistant-history-page-list-item-date,
  .anaconda-assistant-history-page-list-item-active-date,
  .anaconda-assistant-history-page-list-item-close-icon-date,
  .anaconda-assistant-history-page-list-item-active-close-icon-date {
    font-size: 0.9em;
    margin-left: 4px;
    color: #6c5af6;
  }

  .anaconda-assistant-history-page-list-item-close-icon,
  .anaconda-assistant-history-page-list-item-active-close-icon {
    cursor: pointer;
    border: none;
    background-color: transparent;
    padding: 0;
    display: flex;
    align-items: center;
  }

  .anaconda-assistant-history-page-list-item-close-icon svg,
  .anaconda-assistant-history-page-list-item-active-close-icon svg {
    width: 0;
    height: 20px;
    color: #6a718a;
  }

  .anaconda-assistant-history-page-list-item,
  .anaconda-assistant-history-page-list-item-close-icon {
    &:hover,
    &:focus {
      .anaconda-assistant-history-page-list-item-close-icon-date {
        display: none;
      }
      & svg {
        width: 20px;
      }
    }
  }
  `;
/**
 * History page
 * @alpha
 */
const HistoryPage = (props) => {
    const { chats, activeChat, setActiveChat, deleteChat, closeHistory } = props;
    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [filteredChats, setFilteredChats] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(chats);
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const sortOptions = [
        { value: 'desc', label: 'Most Recent' },
        { value: 'asc', label: 'Oldest' }
    ];
    const [sortOrder, setSortOrder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(sortOptions[0]);
    const handleSortChange = (option) => {
        setSortOrder(option);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const sortedChats = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.orderBy)(chats, ['lastUpdated'], [sortOrder.value]);
        setFilteredChats(sortedChats.filter(chat => chat.name.toLowerCase().includes(inputValue.toLowerCase())));
    }, [chats, inputValue, sortOrder]);
    function selectChat(chatKey) {
        // If the chat is already active, just close the menu
        if (!activeChat || activeChat.key !== chatKey) {
            const chat = chats.find(c => c.key === chatKey);
            // If a chat of the same name is already active, moving back and forward
            // might feel as if there was no change at all, so let's clear the active chat
            // while we come up with a better solution.
            if (activeChat?.name === chat?.name) {
                setActiveChat(null);
            }
            setActiveChat(chatKey);
        }
        closeHistory();
    }
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "history-page" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_4__.Style, { asChildName: "style" }, styleOfHistoryPage),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "title" }, "Chat History"),
        chats.length === 0 && react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "no-chats" }, "No Previous Chats"),
        chats.length > 0 && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "search" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", { type: "text", role: "searchbox", onChange: handleInputChange }),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_5__.Icons.Search, null)),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "sort" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", null, "Sort by: "),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_4__.Dropdown, { className: "as-history-sort-dropdown", options: sortOptions, selectionChanged: handleSortChange })),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "list" }, filteredChats.map(chat => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_4__.Button, { key: chat.key, role: "listitem", asChildName: `item${chat.key === activeChat?.key ? '-active' : ''}`, title: chat.name, onClick: () => selectChat(chat.key) },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "icon" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_5__.Icons.UserPrompt, null)),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "text" }, chat.name),
                chat.key === activeChat?.key ? (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "date" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(timeago_react__WEBPACK_IMPORTED_MODULE_3__["default"], { datetime: chat.lastUpdated, live: false }))) : (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_4__.Button, { "data-tooltip-id": `delete-tooltip-${chat.key}`, "data-tooltip-content": "Delete chat", "data-testid": `delete-tooltip-${chat.key}`, asChildName: "close-icon", onClick: e => {
                        e.stopPropagation();
                        deleteChat(chat.key);
                    } },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_4__.Div, { asChildName: "date" },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(timeago_react__WEBPACK_IMPORTED_MODULE_3__["default"], { datetime: chat.lastUpdated, live: false })),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_5__.Icons.Close, null),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_2__.Tooltip, { className: "anaconda-assistant-tooltip", id: `delete-tooltip-${chat.key}`, place: "top" })))))))))));
};


/***/ }),

/***/ "../../lib/assistant-components/lib/pages/HomeScreen.js":
/*!**************************************************************!*\
  !*** ../../lib/assistant-components/lib/pages/HomeScreen.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeScreen: () => (/* binding */ HomeScreen),
/* harmony export */   styleOfHomeScreen: () => (/* binding */ styleOfHomeScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-elements */ "../../lib/assistant-components/lib/base-elements/index.js");
/* harmony import */ var _suggestion_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../suggestion-elements */ "../../lib/assistant-components/lib/suggestion-elements/index.js");
/* harmony import */ var _chat_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chat-elements */ "../../lib/assistant-components/lib/chat-elements/index.js");




/**
 * Style for the HomeScreen component.
 * @alpha
 */
const styleOfHomeScreen = `

.anaconda-assistant-home-screen-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 44px;
}

.anaconda-assistant-home-screen-header h3 {
  margin: 0 0 24px;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
}

.anaconda-assistant-home-screen-header p {
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  max-width: 375px;
  margin: 0 0 32px;
}
`;
/**
 * Home Screen component.
 * @alpha
 */
const HomeScreen = (props) => {
    const { chatStarters, selectedChatStarter, selectChatStarter, makeChatRequest, getActiveCodeCell, dataFrames, enableDataCollection, activeNotebook, suggestionState, updateSuggestions, setSuggestionsDataframe, isProTier, resetActiveChat, showLogoutButton, logout, suggestionDataFrame } = props;
    if (!activeNotebook)
        return null;
    if (selectedChatStarter === null) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Style, { asChildName: "style" }, styleOfHomeScreen),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "home-screen-header" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "What would you like to do?"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "The Anaconda Assistant is an AI-powered chat application designed to enhance the productivity of data scientists, developers, and researchers.")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_suggestion_elements__WEBPACK_IMPORTED_MODULE_2__.SelectChatStarter, { chatStarters: chatStarters, setChatStarter: selectChatStarter, makeChatRequest: makeChatRequest })));
    }
    if (selectedChatStarter.suggestions) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_suggestion_elements__WEBPACK_IMPORTED_MODULE_2__.LoadADataframe, { options: selectedChatStarter.suggestions, makeChatRequest: makeChatRequest }));
    }
    else if (selectedChatStarter.generateSuggestions && selectedChatStarter.suggestionsType) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_suggestion_elements__WEBPACK_IMPORTED_MODULE_2__.GenerateSuggestions, { chatStarterName: selectedChatStarter.suggestionsType, buttonLabel: selectedChatStarter.buttonLabel, getActiveCodeCell: getActiveCodeCell, dataFrames: dataFrames, makeChatRequest: makeChatRequest, onSubmit: setSuggestionsDataframe, enableDataCollection: enableDataCollection, activeNotebook: activeNotebook, suggestionState: suggestionState, updateSuggestions: updateSuggestions, setSuggestionsDataframe: setSuggestionsDataframe, isProTier: isProTier, resetActiveChat: resetActiveChat, showLogoutButton: showLogoutButton, logout: logout, suggestionDataFrame: suggestionDataFrame }));
    }
    else if (selectedChatStarter.contextSelectionRequired) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chat_elements__WEBPACK_IMPORTED_MODULE_3__.SelectContext, { contextType: selectedChatStarter.contextType, buttonLabel: selectedChatStarter.buttonLabel, makeChatRequest: makeChatRequest, enableDataCollection: enableDataCollection, dataFrames: dataFrames }));
    }
    else {
        return null;
    }
};


/***/ }),

/***/ "../../lib/assistant-components/lib/pages/SettingsPage.js":
/*!****************************************************************!*\
  !*** ../../lib/assistant-components/lib/pages/SettingsPage.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsPage: () => (/* binding */ SettingsPage),
/* harmony export */   settingAddCodeToNotebookTitles: () => (/* binding */ settingAddCodeToNotebookTitles),
/* harmony export */   styleOfSettingsPage: () => (/* binding */ styleOfSettingsPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/Switch/Switch.js");
/* harmony import */ var _base_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-elements */ "../../lib/assistant-components/lib/base-elements/index.js");
/* harmony import */ var _base_elements_Style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-elements/Style */ "../../lib/assistant-components/lib/base-elements/Style.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons */ "../../lib/assistant-components/lib/icons.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "../../lib/assistant-components/lib/store/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);








/**
 * Style for the settings page.
 * (hierarchy of children styles is fixed automatically)
 * @alpha
 */
const styleOfSettingsPage = `
.anaconda-assistant-settings-page {
  --text-color: var(--as-main-font-color, #2c303a);
  --text-color-header-secondary: var(--as-main-font-color-secondary, #6a718a);
  font-family: 'Inter', sans-serif;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  padding: 16px;
  overflow-y: auto;
  color: var(--text-color);
  height: 100%;
}

.anaconda-assistant-settings-page-section-title {
  color: var(--text-color-header-secondary);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 20px;
}

.anaconda-assistant-settings-page-logout-control-title,
.anaconda-assistant-settings-page-upgrade-control-title,
.anaconda-assistant-settings-page-data-collection-control-container-title,
.anaconda-assistant-settings-page-run-code-control-container-title {
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}

.anaconda-assistant-settings-page-logout-control-container,
.anaconda-assistant-settings-page-data-collection-control-container,
.anaconda-assistant-settings-page-run-code-control-container,
.anaconda-assistant-settings-page-upgrade-control-container {
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
}

.anaconda-assistant-settings-page-logout-control-container-description,
.anaconda-assistant-settings-page-upgrade-control-container-description {
    max-width: 100%;
}

.anaconda-assistant-settings-page-upgrade-control-container-description-account {
  display: flex;
  gap: 20px;
  align-items: center;
}

.anaconda-assistant-settings-page-logout-control-container-action-logout-button {
  border-radius: 4px;
  border: 1px solid var(--primary, #0cca4a);
  background: #0cca4a;
  color: #06262d;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  display: inline-flex;
  padding: 8px 14px;
  justify-content: center;
  align-items: center;
}

.anaconda-assistant-settings-page-logout-control-container-action-logout-button:disabled {
  background-color: rgba(67, 176, 73, 0.50);
  border: none;
  color: #fff;
  cursor: default;
}

.anaconda-assistant-settings-page-logout-control-container-action-logout-button:hover:enabled {
  color: black;
  cursor: pointer;
  background: #4fab4f;
  border: 1px solid #4fab4f;
}

.anaconda-assistant-settings-page-data-collection-control-container-description,
.anaconda-assistant-settings-page-run-code-control-container-description {
  max-width: 77%;
}

.anaconda-assistant-settings-page-run-code-control-container-description a {
  color: #6c5af6;
  text-decoration: underline;
}

.anaconda-assistant-settings-page-upgrade-control-container-description {
  flex-grow: 1;
}

.anaconda-assistant-settings-page-upgrade-control-container-description svg {
  width: 12px;
  margin-right: 4px;
  display: inline-block;
}

.anaconda-assistant-settings-page-upgrade-control-container-description-upgrade-button {
  align-items: center;
  background: #4fab4f;
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-style: normal;
  justify-content: center;
  margin-bottom: 5px;
  margin-top: 15px;
  margin-left: auto;
  margin-right: 20px;
  padding: 8px;
}

.anaconda-assistant-settings-page-upgrade-control-container-description-upgrade-button:hover {
  background: #0cca4a;
  color: #06262d;
}

.anaconda-assistant-settings-page-upgrade-control-container-description a {
  color: #6c5af6;
  text-decoration: underline;
}

.anaconda-assistant-settings-page-data-collection-control-container-action,
.anaconda-assistant-settings-page-data-collection-control-container-action-disabled {
  align-items: center;
  display: flex;
  gap: 10px;
}

.anaconda-assistant-settings-page-data-collection-control-container-action
.Mui-checked  {
  color: var(--primary, #0cca4a);

}

.anaconda-assistant-settings-page-data-collection-control-container-action
.MuiSwitch-root.MuiSwitch-sizeMedium .MuiSwitch-track {
  background-color: #43B049;
}

.anaconda-assistant-settings-page-upgrade-control-container-description-account-link a {
  color: #0cca4a;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.anaconda-assistant-settings-page-upgrade-control-container-description-account-link a:hover {
  color: #337234;
}

.anaconda-assistant-settings-page-upgrade-control-container-description-account-link svg {
  width: 16px;
  margin-left: 10px;
}
`;
/**
 * Titles of where to add code to the notebook.
 * @alpha
 */
const settingAddCodeToNotebookTitles = {
    'below-active-cell': 'Below active cell',
    'at-end-of-notebook': 'At end of the notebook',
    'in-place': 'In the active cell'
};
/**
 * Settings page
 * @alpha
 */
function SettingsPage(props) {
    const { showLogout, enableDataCollection, setEnableDataCollection, addCodeToNotebook, setAddCodeToNotebook, isProTier, isStarterTier, isCloudNotebooks } = props;
    const logoutProps = showLogout ? showLogout() : null;
    const upgradeURL = 'https://anaconda.cloud/pricing';
    const addCodeToNotebookDropdownOptions = Object.entries(settingAddCodeToNotebookTitles).map(([key, value]) => ({
        value: key,
        label: value.replace('notebook', (0,_store__WEBPACK_IMPORTED_MODULE_4__.getAssistantStore)().clientContextType)
    }));
    let accountTierTitle = 'Free';
    let clientVersionTypeWording = 'In the local version';
    let messagesAllowedWording = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        "30 responses for free, and will need to",
        ' ',
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { "data-testid": "upgrade-link", href: "https://anaconda.cloud/pricing", target: "_blank" }, "upgrade"),
        ' ',
        "to continue using the Assistant"));
    if (isCloudNotebooks) {
        clientVersionTypeWording = 'In the cloud version';
        messagesAllowedWording =
            '60 responses per day the first week, then 30 responses per day afterwards';
    }
    let maxTokens = 4096;
    if (isProTier) {
        accountTierTitle = 'Pro';
        messagesAllowedWording = '120 responses per day';
        maxTokens = 16384;
    }
    else if (isStarterTier) {
        accountTierTitle = 'Starter';
        messagesAllowedWording = '60 responses per day';
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "settings-page" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Style__WEBPACK_IMPORTED_MODULE_2__.Style, { asChildName: "style" }, styleOfSettingsPage),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "section-title" }, "My Account"),
        showLogout && logoutProps ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "logout-control" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "container" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "description" },
                    "You're currently logged in as: ",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, logoutProps.accountUserEmail),
                    "."),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "action" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Button, { asChildName: "logout-button", onClick: () => logoutProps.logout() }, "Logout"))))) : null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "upgrade-control" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "title" }, "Account tier limits"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "container" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "description" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "account" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null,
                            "Your account tier is ",
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, accountTierTitle),
                            "."),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "link" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { target: "blank", href: "https://anaconda.cloud/profile/account-settings" },
                                "View your account",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.Icons.ExternalLink, null)))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { "data-testid": "client-version-type" }, clientVersionTypeWording),
                    " of the Anaconda Assistant, you can receive",
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { "data-testid": "messages-allowed" }, messagesAllowedWording),
                    ".",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { "data-testid": "context-limit" },
                        "Your current context limit is ",
                        maxTokens || 4096,
                        " tokens."),
                    isProTier ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { "data-testid": "infinite-chat" },
                        ' ',
                        "You're on the Pro tier, so your chats will seem infinite. Be aware that the longer you continue any chat, the less accurate it will become. See our",
                        ' ',
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "https://docs.anaconda.com/free/anaconda-notebooks/anaconda-assistant/#course-correcting-the-conversation", target: "_blank" }, "Assistant documentation"),
                        ' ',
                        "for more information.")) : null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null),
                    isProTier ? null : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                        "If you reach this limit during one of your chats, you can create a new chat by clicking the ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.Icons.NewChat, null),
                        " icon at the top of the chat window.",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null),
                        "Visit our",
                        ' ',
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { "data-testid": "pricing-link", href: "https://anaconda.cloud/pricing", target: "_blank", rel: "noopener noreferrer" }, "pricing page"),
                        ' ',
                        "to upgrade to a higher tier to increase the number of daily responses allowed or to use a model with a larger context-window.",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Button, { "data-testid": "upgrade-button", asChildName: "upgrade-button", onClick: () => {
                                window.open(upgradeURL);
                            } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "upgrade-icon" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.Icons.Sparkle, null)),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "text" }, "Upgrade"))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "section-title" }, "Settings"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "data-collection-control" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "container" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "title" }, "Data Collection"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "action" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { checked: enableDataCollection, onChange: (_, checked) => setEnableDataCollection(checked) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, enableDataCollection ? 'Enabled' : 'Not enabled'))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "description" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Enable to enjoy personalized recommendations and contribute to smarter features."),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "We prioritize your privacy:"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Your data is never sold"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Always secured"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "This setting only affects the data Anaconda stores"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "It does not affect the data that is sent to Open AI")))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "run-code-control" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "container" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "title" },
                    "Run code in ",
                    (0,lodash__WEBPACK_IMPORTED_MODULE_5__.startCase)((0,_store__WEBPACK_IMPORTED_MODULE_4__.getAssistantStore)().clientContextType)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "action" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Dropdown, { defaultSelection: addCodeToNotebookDropdownOptions.find(option => option.value === addCodeToNotebook), options: addCodeToNotebookDropdownOptions, selectionChanged: (option) => setAddCodeToNotebook(option.value) }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "description" },
                "When you run code in the Assistant, the code first gets added to your",
                ' ',
                (0,_store__WEBPACK_IMPORTED_MODULE_4__.getAssistantStore)().clientContextType,
                " before it is executed. You can choose where the code gets added here."))));
}


/***/ }),

/***/ "../../lib/assistant-components/lib/pages/TermsAndConditionsPage.js":
/*!**************************************************************************!*\
  !*** ../../lib/assistant-components/lib/pages/TermsAndConditionsPage.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermsAndConditionsPage: () => (/* binding */ TermsAndConditionsPage),
/* harmony export */   styleOfTermsAndConditionsPage: () => (/* binding */ styleOfTermsAndConditionsPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-elements */ "../../lib/assistant-components/lib/base-elements/index.js");
/* harmony import */ var _contents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contents */ "../../lib/assistant-components/lib/contents/index.js");
/* harmony import */ var _AssistantComponentContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AssistantComponentContext */ "../../lib/assistant-components/lib/AssistantComponentContext.js");
/* harmony import */ var _base_elements_Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-elements/Style */ "../../lib/assistant-components/lib/base-elements/Style.js");
/* harmony import */ var _childFixer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./childFixer */ "../../lib/assistant-components/lib/pages/childFixer.js");






/**
 * Style for the page for the terms and conditions.
 * (hierarchy of children styles is fixed automatically)
 * @alpha
 */
const styleOfTermsAndConditionsPage = `
.anaconda-assistant-terms-page {
  --text-color: var(--as-main-font-color, #2c303a);
  --text-color-secondary: var(--as-main-font-color, #52596b);
  font-family: 'Inter', sans-serif;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  padding: 16px;
  color: var(--text-color);
  overflow: auto;
  margin: 19px 24px 0 24px;
}

.anaconda-assistant-terms-page-branding {
  background: var(--as-main-bg-color-secondary, #fff);
  display: flex;
}

.anaconda-assistant-terms-page-branding-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.anaconda-assistant-terms-page-branding-content-header h1 {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  margin: 3px 0;
}

.anaconda-assistant-terms-page-branding-content-header p {
  line-height: 24px;
  margin: 0;
  color: var(--text-color-secondary);
}

.anaconda-assistant-terms-page-branding-icon {
  margin-right: 9px;
}

.anaconda-assistant-terms-page-branding-icon svg {
  width: 30px;
}
`;
/**
 * Page for the terms and conditions.
 * @alpha
 */
function TermsAndConditionsPage(props) {
    const { accept, enableDataCollection, setEnableDataCollection, olderThan13, setOlderThan13 } = props;
    const { replaceChildren } = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(_AssistantComponentContext__WEBPACK_IMPORTED_MODULE_3__.AssistantComponentContext);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "terms-page" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements_Style__WEBPACK_IMPORTED_MODULE_4__.Style, { asChildName: "style" }, styleOfTermsAndConditionsPage),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "branding" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "content" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "header" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Agree to use Assistant"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Anaconda Assistant is an AI-powered chat application designed to enhance the productivity of data scientists, developers, and researchers.")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AssistantComponentContext__WEBPACK_IMPORTED_MODULE_3__.AssistantComponentContext.Provider, { value: (0,_childFixer__WEBPACK_IMPORTED_MODULE_5__.childFixer)({
                        parentName: 'terms-page',
                        childName: 'terms',
                        childrenStyle: _contents__WEBPACK_IMPORTED_MODULE_2__.styleOfTermsAndConditions,
                        replaceChildren
                    }) },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_contents__WEBPACK_IMPORTED_MODULE_2__.TermsAndConditions, { accept: accept, enableDataCollection: enableDataCollection, setEnableDataCollection: setEnableDataCollection, olderThan13: olderThan13, setOlderThan13: setOlderThan13 }))))));
}


/***/ }),

/***/ "../../lib/assistant-components/lib/pages/childFixer.js":
/*!**************************************************************!*\
  !*** ../../lib/assistant-components/lib/pages/childFixer.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   childFixer: () => (/* binding */ childFixer)
/* harmony export */ });
/* harmony import */ var _style_styleUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/styleUtils */ "../../lib/assistant-components/lib/style/styleUtils.js");

/**
 * Creates the properties for AssistantComponentContext
 * in a way that fixes the hierarchy of the children and the styles.
 * @alpha
 */
function childFixer(params) {
    const { parentName, childName, childrenStyle, replaceChildren } = params;
    return {
        parentClassName: parentName,
        replaceChildren: (childClassName) => {
            let styleFixer = () => null;
            if (childrenStyle) {
                styleFixer = (0,_style_styleUtils__WEBPACK_IMPORTED_MODULE_0__.fixStyleHierarchy)(parentName, childName, childrenStyle);
            }
            return replaceChildren?.(childClassName) || styleFixer(childClassName) || null;
        }
    };
}


/***/ }),

/***/ "../../lib/assistant-components/lib/pages/index.js":
/*!*********************************************************!*\
  !*** ../../lib/assistant-components/lib/pages/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistoryPage: () => (/* reexport safe */ _HistoryPage__WEBPACK_IMPORTED_MODULE_2__.HistoryPage),
/* harmony export */   HomeScreen: () => (/* reexport safe */ _HomeScreen__WEBPACK_IMPORTED_MODULE_3__.HomeScreen),
/* harmony export */   SettingsPage: () => (/* reexport safe */ _SettingsPage__WEBPACK_IMPORTED_MODULE_1__.SettingsPage),
/* harmony export */   TermsAndConditionsPage: () => (/* reexport safe */ _TermsAndConditionsPage__WEBPACK_IMPORTED_MODULE_0__.TermsAndConditionsPage),
/* harmony export */   settingAddCodeToNotebookTitles: () => (/* reexport safe */ _SettingsPage__WEBPACK_IMPORTED_MODULE_1__.settingAddCodeToNotebookTitles),
/* harmony export */   styleOfHistoryPage: () => (/* reexport safe */ _HistoryPage__WEBPACK_IMPORTED_MODULE_2__.styleOfHistoryPage),
/* harmony export */   styleOfHomeScreen: () => (/* reexport safe */ _HomeScreen__WEBPACK_IMPORTED_MODULE_3__.styleOfHomeScreen),
/* harmony export */   styleOfSettingsPage: () => (/* reexport safe */ _SettingsPage__WEBPACK_IMPORTED_MODULE_1__.styleOfSettingsPage),
/* harmony export */   styleOfTermsAndConditionsPage: () => (/* reexport safe */ _TermsAndConditionsPage__WEBPACK_IMPORTED_MODULE_0__.styleOfTermsAndConditionsPage)
/* harmony export */ });
/* harmony import */ var _TermsAndConditionsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TermsAndConditionsPage */ "../../lib/assistant-components/lib/pages/TermsAndConditionsPage.js");
/* harmony import */ var _SettingsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsPage */ "../../lib/assistant-components/lib/pages/SettingsPage.js");
/* harmony import */ var _HistoryPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HistoryPage */ "../../lib/assistant-components/lib/pages/HistoryPage.js");
/* harmony import */ var _HomeScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomeScreen */ "../../lib/assistant-components/lib/pages/HomeScreen.js");






/***/ }),

/***/ "../../lib/assistant-components/lib/store/AssistantStore.js":
/*!******************************************************************!*\
  !*** ../../lib/assistant-components/lib/store/AssistantStore.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssistantStore: () => (/* binding */ AssistantStore),
/* harmony export */   getAssistantStore: () => (/* binding */ getAssistantStore),
/* harmony export */   initAssistantStore: () => (/* binding */ initAssistantStore)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "../../lib/assistant-components/lib/store/store.js");

let assistantStore;
const initAssistantStore = async (opts) => {
    assistantStore = new AssistantStore(opts);
    await _store__WEBPACK_IMPORTED_MODULE_0__.useStore;
    return assistantStore;
};
const getAssistantStore = () => {
    if (!assistantStore) {
        throw new Error('Assistant store not initialized');
    }
    return assistantStore;
};
class AssistantStore {
    _getAssistantSdk;
    _getServerUrl;
    _getNucleusAccount;
    _getAccountMaxTokens;
    _isLocalDev;
    _syncDiskStateChained;
    _unbindSyncDiskStateChained;
    clientContextType;
    deletedChatKeys;
    getFeatureFlagBool;
    constructor(opts) {
        this._getAssistantSdk = opts.getAssistantSdk;
        this._getServerUrl = opts.getServerUrl;
        this._getNucleusAccount = opts.getNucleusAccount;
        this._getAccountMaxTokens = opts.getAccountMaxTokens;
        this._isLocalDev = opts.isLocalDev;
        this._syncDiskStateChained = opts.syncDiskStateChained;
        this._unbindSyncDiskStateChained = opts.unbindSyncDiskStateChained;
        this.deletedChatKeys = opts.deletedChatKeys;
        this.clientContextType = opts.clientContextType || 'notebook';
        this.getFeatureFlagBool = opts.getFeatureFlagBool || (() => false);
    }
    getAssistantSdk = () => {
        return this._getAssistantSdk();
    };
    getServerUrl = () => {
        return this._getServerUrl();
    };
    getNucleusAccount = () => {
        return this._getNucleusAccount();
    };
    getAccountMaxTokens = (account) => {
        return this._getAccountMaxTokens(account);
    };
    isLocalDev = () => {
        return this._isLocalDev();
    };
    syncDiskStateChained = (termsAccepted) => {
        return this._syncDiskStateChained(termsAccepted);
    };
    unbindSyncDiskStateChained = () => {
        return this._unbindSyncDiskStateChained();
    };
}


/***/ }),

/***/ "../../lib/assistant-components/lib/store/home-screen-state-fns.js":
/*!*************************************************************************!*\
  !*** ../../lib/assistant-components/lib/store/home-screen-state-fns.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialHomeScreenState: () => (/* binding */ initialHomeScreenState),
/* harmony export */   resetToHomeScreen: () => (/* binding */ resetToHomeScreen),
/* harmony export */   selectChatStarter: () => (/* binding */ selectChatStarter),
/* harmony export */   updateHomeScreenState: () => (/* binding */ updateHomeScreenState)
/* harmony export */ });
/* harmony import */ var _state_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state-fns */ "../../lib/assistant-components/lib/store/state-fns.js");
// Chat starters - could be externalised in the fut

function initialHomeScreenState(dataframes, getChatStarters) {
    return {
        chatStarters: getChatStarters(dataframes.length === 0),
        selectedChatStarter: null
    };
}
function updateHomeScreenState(homeScreen, dataframes, getChatStarters) {
    if (selectedStarterNeedsDataframe(homeScreen) && dataframes.length === 0) {
        homeScreen.chatStarters = getChatStarters(true);
        homeScreen.selectedChatStarter = null;
        return;
    }
    homeScreen.chatStarters = getChatStarters(dataframes.length === 0);
}
function selectChatStarter(state, chatStarter) {
    const activeNotebook = (0,_state_fns__WEBPACK_IMPORTED_MODULE_0__.getActiveNotebook)(state);
    if (!activeNotebook)
        return;
    activeNotebook.homeScreen.selectedChatStarter = chatStarter;
}
function resetToHomeScreen(state) {
    const activeNotebook = (0,_state_fns__WEBPACK_IMPORTED_MODULE_0__.getActiveNotebook)(state);
    if (!activeNotebook)
        return;
    activeNotebook.homeScreen.selectedChatStarter = null;
    activeNotebook.previousChatKey = activeNotebook.activeChatKey;
    activeNotebook.activeChatKey = null;
}
function selectedStarterNeedsDataframe(homeScreen) {
    const { selectedChatStarter } = homeScreen;
    return (selectedChatStarter?.name === 'graph-dataframe' ||
        selectedChatStarter?.name === 'describe-dataframe' ||
        selectedChatStarter?.name === 'data-cleaning-suggestions' ||
        selectedChatStarter?.name === 'dataframe-suggestions');
}


/***/ }),

/***/ "../../lib/assistant-components/lib/store/index.js":
/*!*********************************************************!*\
  !*** ../../lib/assistant-components/lib/store/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssistantStore: () => (/* reexport safe */ _AssistantStore__WEBPACK_IMPORTED_MODULE_6__.AssistantStore),
/* harmony export */   STATE_VERSION: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_5__.STATE_VERSION),
/* harmony export */   _overrideMaxChatsForTesting: () => (/* reexport safe */ _rehydration_utils__WEBPACK_IMPORTED_MODULE_3__._overrideMaxChatsForTesting),
/* harmony export */   addNewInstruction: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.addNewInstruction),
/* harmony export */   cleanupError: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.cleanupError),
/* harmony export */   completeRequest: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.completeRequest),
/* harmony export */   createTestStorage: () => (/* reexport safe */ _test_storage__WEBPACK_IMPORTED_MODULE_0__.createTestStorage),
/* harmony export */   getActiveChat: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.getActiveChat),
/* harmony export */   getActiveNotebook: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.getActiveNotebook),
/* harmony export */   getActiveNotebookChats: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.getActiveNotebookChats),
/* harmony export */   getAssistantStore: () => (/* reexport safe */ _AssistantStore__WEBPACK_IMPORTED_MODULE_6__.getAssistantStore),
/* harmony export */   getChatTitle: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.getChatTitle),
/* harmony export */   getInProgressResponse: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.getInProgressResponse),
/* harmony export */   getIsNewChat: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.getIsNewChat),
/* harmony export */   getIsOnChatStarter: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.getIsOnChatStarter),
/* harmony export */   getPreviousChat: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.getPreviousChat),
/* harmony export */   getPreviousChatName: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.getPreviousChatName),
/* harmony export */   getSuggestions: () => (/* reexport safe */ _suggestions_fns__WEBPACK_IMPORTED_MODULE_1__.getSuggestions),
/* harmony export */   gotoPreviousChat: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.gotoPreviousChat),
/* harmony export */   initAssistantStore: () => (/* reexport safe */ _AssistantStore__WEBPACK_IMPORTED_MODULE_6__.initAssistantStore),
/* harmony export */   initialHomeScreenState: () => (/* reexport safe */ _home_screen_state_fns__WEBPACK_IMPORTED_MODULE_4__.initialHomeScreenState),
/* harmony export */   isTestMode: () => (/* reexport safe */ _test_storage__WEBPACK_IMPORTED_MODULE_0__.isTestMode),
/* harmony export */   lastFetchedMaxTokens: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_5__.lastFetchedMaxTokens),
/* harmony export */   messageId: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.messageId),
/* harmony export */   removeFailedMessages: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.removeFailedMessages),
/* harmony export */   requireChatState: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.requireChatState),
/* harmony export */   resetActiveChat: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.resetActiveChat),
/* harmony export */   resetSuggestions: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.resetSuggestions),
/* harmony export */   resetToHomeScreen: () => (/* reexport safe */ _home_screen_state_fns__WEBPACK_IMPORTED_MODULE_4__.resetToHomeScreen),
/* harmony export */   selectChatStarter: () => (/* reexport safe */ _home_screen_state_fns__WEBPACK_IMPORTED_MODULE_4__.selectChatStarter),
/* harmony export */   setActiveChat: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.setActiveChat),
/* harmony export */   setCellError: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.setCellError),
/* harmony export */   setNotebook: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.setNotebook),
/* harmony export */   setSuggestionsDataframe: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.setSuggestionsDataframe),
/* harmony export */   setSuggestionsError: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.setSuggestionsError),
/* harmony export */   setSuggestionsLoading: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.setSuggestionsLoading),
/* harmony export */   setTextSelection: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.setTextSelection),
/* harmony export */   setupInitialRequestState: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.setupInitialRequestState),
/* harmony export */   showBackButton: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.showBackButton),
/* harmony export */   submitFeedback: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.submitFeedback),
/* harmony export */   updateCode: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.updateCode),
/* harmony export */   updateHomeScreenState: () => (/* reexport safe */ _home_screen_state_fns__WEBPACK_IMPORTED_MODULE_4__.updateHomeScreenState),
/* harmony export */   updateStoreState: () => (/* reexport safe */ _rehydration_utils__WEBPACK_IMPORTED_MODULE_3__.updateStoreState),
/* harmony export */   updateSuggestions: () => (/* reexport safe */ _state_fns__WEBPACK_IMPORTED_MODULE_2__.updateSuggestions),
/* harmony export */   useStore: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_5__.useStore)
/* harmony export */ });
/* harmony import */ var _test_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-storage */ "../../lib/assistant-components/lib/store/test-storage.js");
/* harmony import */ var _suggestions_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./suggestions-fns */ "../../lib/assistant-components/lib/store/suggestions-fns.js");
/* harmony import */ var _state_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state-fns */ "../../lib/assistant-components/lib/store/state-fns.js");
/* harmony import */ var _rehydration_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rehydration-utils */ "../../lib/assistant-components/lib/store/rehydration-utils.js");
/* harmony import */ var _home_screen_state_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-screen-state-fns */ "../../lib/assistant-components/lib/store/home-screen-state-fns.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "../../lib/assistant-components/lib/store/store.js");
/* harmony import */ var _AssistantStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AssistantStore */ "../../lib/assistant-components/lib/store/AssistantStore.js");









/***/ }),

/***/ "../../lib/assistant-components/lib/store/rehydration-utils.js":
/*!*********************************************************************!*\
  !*** ../../lib/assistant-components/lib/store/rehydration-utils.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _overrideMaxChatsForTesting: () => (/* binding */ _overrideMaxChatsForTesting),
/* harmony export */   updateStoreState: () => (/* binding */ updateStoreState)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state-fns */ "../../lib/assistant-components/lib/store/state-fns.js");


let MAX_STORED_CHATS = 50;
function updateStoreState(state, error) {
    if (state) {
        const notebooks = state.notebooks;
        notebooks.forEach(nb => {
            (0,lodash__WEBPACK_IMPORTED_MODULE_0__.values)(nb.chats).forEach(chat => {
                // Need to ensure chat timestamps strings are converted to Date objects
                chat.lastUpdated = new Date(chat.lastUpdated);
            });
        });
        state.menuOpen = false;
        const notebook = (0,_state_fns__WEBPACK_IMPORTED_MODULE_1__.getActiveNotebook)(state);
        const activeChat = (0,_state_fns__WEBPACK_IMPORTED_MODULE_1__.getActiveChat)(state);
        if (notebook && activeChat) {
            if (activeChat.inProgress) {
                // If there is an in progress chat request, we want to remove it
                activeChat.inProgress = null;
                notebook.activeChatKey = null;
                if (activeChat.messages.length === 1) {
                    // If there is only one message in the chat, we want to remove the chat altogether
                    delete notebook.chats[activeChat.key];
                }
                else {
                    // Otherwise, we want to remove the last message from the chat
                    activeChat.messages.pop();
                }
            }
        }
        if (notebook) {
            // Don't want to rehydrate cell execution errors
            notebook.notebookState.error = null;
            // Don't want to rehydrate selected text
            notebook.notebookState.selectedText = null;
        }
        // Want to cap the total number of chats in case we fill up local storage
        // Get all chat lastUpdated dates, and remove any chats that are older than the
        // 50th most recent chat across all notebooks
        const allDates = getLastUpdatedOfAllChats(state);
        if (allDates.length > MAX_STORED_CHATS) {
            const sortedDates = allDates.sort((a, b) => b.getTime() - a.getTime());
            const cutoffDate = sortedDates[MAX_STORED_CHATS];
            notebooks.forEach(nb => {
                const chats = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.entries)(nb.chats);
                const chatKeysToDelete = chats
                    .filter(([_, chat]) => chat.lastUpdated <= cutoffDate)
                    .map(([key, _]) => key);
                chatKeysToDelete.forEach(key => delete nb.chats[key]);
            });
        }
        let i = notebooks.length;
        while (i--) {
            // If there are no chats in a notebook, and this is not the active notebook, remove it
            if (Object.values(notebooks[i].chats).length === 0 && notebooks[i].path !== state.path) {
                notebooks.splice(i, 1);
            }
        }
    }
}
function getLastUpdatedOfAllChats(state) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.flatten)(state.notebooks.map(nb => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.values)(nb.chats).map(chat => chat.lastUpdated)));
}
// Only use for testing
function _overrideMaxChatsForTesting(maxChats) {
    MAX_STORED_CHATS = maxChats;
}


/***/ }),

/***/ "../../lib/assistant-components/lib/store/state-fns.js":
/*!*************************************************************!*\
  !*** ../../lib/assistant-components/lib/store/state-fns.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewInstruction: () => (/* binding */ addNewInstruction),
/* harmony export */   cleanupError: () => (/* binding */ cleanupError),
/* harmony export */   completeRequest: () => (/* binding */ completeRequest),
/* harmony export */   getActiveChat: () => (/* binding */ getActiveChat),
/* harmony export */   getActiveNotebook: () => (/* binding */ getActiveNotebook),
/* harmony export */   getActiveNotebookChats: () => (/* binding */ getActiveNotebookChats),
/* harmony export */   getChatTitle: () => (/* binding */ getChatTitle),
/* harmony export */   getInProgressResponse: () => (/* binding */ getInProgressResponse),
/* harmony export */   getIsNewChat: () => (/* binding */ getIsNewChat),
/* harmony export */   getIsOnChatStarter: () => (/* binding */ getIsOnChatStarter),
/* harmony export */   getPreviousChat: () => (/* binding */ getPreviousChat),
/* harmony export */   getPreviousChatName: () => (/* binding */ getPreviousChatName),
/* harmony export */   gotoPreviousChat: () => (/* binding */ gotoPreviousChat),
/* harmony export */   messageId: () => (/* binding */ messageId),
/* harmony export */   removeFailedMessages: () => (/* binding */ removeFailedMessages),
/* harmony export */   requireChatState: () => (/* binding */ requireChatState),
/* harmony export */   resetActiveChat: () => (/* binding */ resetActiveChat),
/* harmony export */   resetSuggestions: () => (/* binding */ resetSuggestions),
/* harmony export */   setActiveChat: () => (/* binding */ setActiveChat),
/* harmony export */   setCellError: () => (/* binding */ setCellError),
/* harmony export */   setNotebook: () => (/* binding */ setNotebook),
/* harmony export */   setSuggestionsDataframe: () => (/* binding */ setSuggestionsDataframe),
/* harmony export */   setSuggestionsError: () => (/* binding */ setSuggestionsError),
/* harmony export */   setSuggestionsLoading: () => (/* binding */ setSuggestionsLoading),
/* harmony export */   setTextSelection: () => (/* binding */ setTextSelection),
/* harmony export */   setupInitialRequestState: () => (/* binding */ setupInitialRequestState),
/* harmony export */   showBackButton: () => (/* binding */ showBackButton),
/* harmony export */   submitFeedback: () => (/* binding */ submitFeedback),
/* harmony export */   updateCode: () => (/* binding */ updateCode),
/* harmony export */   updateSuggestions: () => (/* binding */ updateSuggestions)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "../../node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../. */ "../../lib/assistant-components/lib/index.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immer */ "../../node_modules/immer/dist/immer.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_screen_state_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-screen-state-fns */ "../../lib/assistant-components/lib/store/home-screen-state-fns.js");





function setNotebook(state, path, nbState, getChatStarters) {
    state.path = path;
    state.user = nbState.user;
    const notebook = state.notebooks.find(notebook => notebook.path === path);
    if (notebook) {
        notebook.notebookState.dataframes = nbState.dataframes;
        (0,_home_screen_state_fns__WEBPACK_IMPORTED_MODULE_2__.updateHomeScreenState)(notebook.homeScreen, nbState.dataframes, getChatStarters);
    }
    else {
        state.notebooks.push({
            path,
            activeChatKey: null,
            previousChatKey: null,
            chats: {},
            notebookState: {
                dataframes: nbState.dataframes,
                selectedCell: null,
                selectedText: null,
                error: null
            },
            homeScreen: (0,_home_screen_state_fns__WEBPACK_IMPORTED_MODULE_2__.initialHomeScreenState)(nbState.dataframes, getChatStarters),
            suggestionState: { loading: false, suggestions: null, dataframe: null, error: null }
        });
    }
    return state;
}
function setActiveChat(state, chatKey) {
    const notebook = getActiveNotebook(state);
    if (notebook) {
        notebook.previousChatKey = notebook.activeChatKey;
        if (chatKey === null) {
            notebook.activeChatKey = null;
        }
        else if (chatKey && notebook.chats[chatKey] != null) {
            notebook.activeChatKey = chatKey;
            const activeChat = notebook.chats[chatKey];
            if (activeChat.inProgress) {
                activeChat.inProgress = null;
            }
        }
    }
}
function getActiveNotebookChats(state) {
    const activeNotebook = getActiveNotebook(state);
    return activeNotebook
        ? (0,lodash__WEBPACK_IMPORTED_MODULE_1__.orderBy)((0,lodash__WEBPACK_IMPORTED_MODULE_1__.values)(activeNotebook.chats).map(chat => ({
            name: chat.name,
            key: chat.key,
            lastUpdated: chat.lastUpdated
        })), [chat => chat.lastUpdated.getTime()], ['desc'])
        : [];
}
function showBackButton(state) {
    const activeNotebook = getActiveNotebook(state);
    const previousChat = getPreviousChat(state);
    const activeChat = getActiveChat(state);
    const chatStarter = activeNotebook?.homeScreen.selectedChatStarter;
    const isNotSuggestions = chatStarter &&
        chatStarter.name !== 'data-cleaning-suggestions' &&
        chatStarter.name !== 'dataframe-suggestions';
    return Boolean(previousChat && (activeChat || isNotSuggestions));
}
function setupInitialRequestState(state, context, instruction) {
    const chatState = getActiveChat(state);
    state.attachContextOpen = false;
    state.hidePopups = true;
    if (chatState) {
        addNewInstruction(chatState, instruction);
    }
    else {
        setInitialChatState(state, context, instruction);
    }
}
function requireChatState(state) {
    const notebook = getActiveNotebook(state);
    const chatState = getActiveChat(state);
    const { path, settings } = state;
    if (!notebook?.activeChatKey || !chatState || !path)
        throw new Error('No active chat');
    const { activeChatKey } = notebook;
    return { notebook, chatState, activeChatKey: activeChatKey, path, settings };
}
function messageId(session, messageIdx) {
    return `${session.sessionId}-${messageIdx}`;
}
function updateCode(state, response) {
    const { chatState } = requireChatState(state);
    if ((0,___WEBPACK_IMPORTED_MODULE_0__.hasActiveCodeResponse)(chatState.inProgress)) {
        chatState.inProgress.content = response.content;
        if (response.tokens)
            chatState.tokens = response.tokens;
        if (response.maxTokens)
            chatState.maxTokens = response.maxTokens;
    }
}
async function completeRequest(state, wasAborted, onComplete) {
    const { chatState } = requireChatState(state);
    const code = (0,___WEBPACK_IMPORTED_MODULE_0__.hasActiveCodeResponse)(chatState.inProgress) ? chatState.inProgress.content : '';
    const message_id = messageId(chatState.session, chatState.messages.length + 1);
    const content = chatState.inProgress.content;
    if (!content && !wasAborted) {
        throw new ___WEBPACK_IMPORTED_MODULE_0__.AssistantError('error', 'Missing content', 200);
    }
    chatState.messages.push({
        role: 'assistant',
        content,
        messageId: message_id,
        feedback: null,
        tokens: chatState.tokens ?? 0,
        maxTokens: chatState.maxTokens
    });
    chatState.inProgress = null;
    chatState.lastUpdated = new Date();
    // chatState.session is a wrapped immer proxy at this point, need to unwrap it
    const session = (0,immer__WEBPACK_IMPORTED_MODULE_3__.original)(chatState.session);
    if (onComplete && session) {
        const blocks = (0,___WEBPACK_IMPORTED_MODULE_0__.extractMessageBlocks)(code);
        const firstCodeBlock = blocks.find(block => block.type === 'python' && block.content !== '');
        if (firstCodeBlock)
            onComplete(firstCodeBlock.content, message_id, session);
    }
}
function cleanupError(state, path, selectedChat, error) {
    const notebook = state.notebooks.find(nb => nb.path === path);
    const chatState = notebook?.chats[selectedChat];
    if (!notebook || !chatState)
        return;
    if (error) {
        chatState.inProgress = error;
    }
    else if (chatState.messages.length === 1) {
        delete notebook.chats[selectedChat];
    }
    else {
        chatState.messages.pop(); // Remove the last instruction
        chatState.inProgress = null;
    }
}
function removeFailedMessages(state) {
    const notebook = getActiveNotebook(state);
    const chatState = getActiveChat(state);
    if (!notebook?.activeChatKey || !chatState || chatState?.inProgress?.type !== 'error')
        return;
    if (chatState.messages.length === 0) {
        delete notebook.chats[notebook.activeChatKey];
    }
    else {
        chatState.messages.pop(); // Remove the last instruction
        chatState.inProgress = null;
    }
}
function resetActiveChat(state) {
    const { notebook, activeChatKey } = requireChatState(state);
    delete notebook.chats[activeChatKey];
}
function submitFeedback(state, feedback) {
    const { chatState } = requireChatState(state);
    const message = chatState.messages.find(msg => msg.messageId === feedback.messageId);
    if (message?.role === 'assistant')
        message.feedback = feedback;
}
function setCellError(state, outputError) {
    const activeNotebook = getActiveNotebook(state);
    state.hidePopups = false;
    if (activeNotebook)
        activeNotebook.notebookState.error = outputError;
}
function setTextSelection(state, selection) {
    const activeNotebook = getActiveNotebook(state);
    state.hidePopups = false;
    if (activeNotebook)
        activeNotebook.notebookState.selectedText = selection;
}
function setSuggestionsLoading(state, loading) {
    const activeNotebook = getActiveNotebook(state);
    if (activeNotebook) {
        activeNotebook.suggestionState = { ...activeNotebook.suggestionState, loading };
    }
}
function setSuggestionsError(state, error) {
    const activeNotebook = getActiveNotebook(state);
    if (activeNotebook) {
        activeNotebook.suggestionState = { ...activeNotebook.suggestionState, loading: false, error };
    }
}
function setSuggestionsDataframe(state, dataframe) {
    const activeNotebook = getActiveNotebook(state);
    if (activeNotebook) {
        activeNotebook.suggestionState = {
            ...activeNotebook.suggestionState,
            suggestions: null,
            error: null,
            loading: false,
            dataframe
        };
    }
}
function updateSuggestions(state, suggestions) {
    const activeNotebook = getActiveNotebook(state);
    if (activeNotebook) {
        activeNotebook.suggestionState = {
            ...activeNotebook.suggestionState,
            error: null,
            loading: false,
            suggestions: suggestions?.length ? suggestions : activeNotebook.suggestionState.suggestions
        };
    }
}
function resetSuggestions(state) {
    const activeNotebook = getActiveNotebook(state);
    if (activeNotebook) {
        activeNotebook.suggestionState = {
            dataframe: null,
            error: null,
            loading: false,
            suggestions: null
        };
    }
}
function addNewInstruction(chatState, instruction) {
    const { session, messages } = chatState;
    const message_id = messageId(session, messages.length + 1);
    const responseMessageId = messageId(session, messages.length + 2);
    chatState.messages.push({
        role: 'user',
        content: instruction,
        messageId: message_id
    });
    chatState.inProgress = { type: 'active', content: '', message_id: responseMessageId };
}
function setInitialChatState(state, context, instruction) {
    const notebook = getActiveNotebook(state);
    const chatKey = (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])();
    if (notebook) {
        notebook.chats[chatKey] = initialChatState(state.user || '', chatKey, context, instruction);
        notebook.activeChatKey = chatKey;
    }
}
function initialChatState(user_id, chatKey, context, instruction) {
    const session = { sessionId: (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])(), userId: user_id };
    const name = determineChatName(context, instruction);
    return {
        key: chatKey,
        name,
        context,
        messages: [
            {
                role: 'user',
                content: instruction,
                messageId: messageId(session, 1),
                tokens: 0
            }
        ],
        inProgress: { type: 'active', content: '', message_id: messageId(session, 2) },
        session,
        tokens: 0,
        lastUpdated: new Date(),
        maxTokens: 4096
    };
}
function getActiveChat(state) {
    const notebook = state.notebooks.find(notebook => notebook.path === state.path);
    return notebook?.activeChatKey ? notebook.chats[notebook.activeChatKey] || null : null;
}
function getInProgressResponse(state) {
    const activeChat = getActiveChat(state);
    return activeChat?.inProgress?.type === 'active' ? activeChat.inProgress : null;
}
function getPreviousChat(state) {
    const notebook = state.notebooks.find(notebook => notebook.path === state.path);
    return notebook?.previousChatKey ? notebook.chats[notebook.previousChatKey] || null : null;
}
function getActiveNotebook(state) {
    const notebook = state.notebooks.find(notebook => notebook.path === state.path);
    return notebook || null;
}
function getChatTitle(state) {
    const activeNotebook = getActiveNotebook(state);
    return !activeNotebook ? '' : titleFromChat(getActiveChat(state), activeNotebook);
}
function getIsNewChat(state) {
    const activeNotebook = getActiveNotebook(state);
    return !activeNotebook ? false : !activeNotebook.activeChatKey;
}
function getIsOnChatStarter(state) {
    const activeNotebook = getActiveNotebook(state);
    return !activeNotebook ? false : activeNotebook.homeScreen.selectedChatStarter !== null;
}
function getPreviousChatName(state) {
    const activeNotebook = getActiveNotebook(state);
    if (!activeNotebook)
        return '';
    const chat = getPreviousChat(state);
    return chat ? determineChatName(chat.context, chat.messages[0].content) : '';
}
function gotoPreviousChat(state) {
    const previousChat = getPreviousChat(state);
    setActiveChat(state, previousChat?.key || null);
}
function determineChatName(context, instruction) {
    const suffix = (0,___WEBPACK_IMPORTED_MODULE_0__.formatContextVariables)(context, instruction);
    switch (context.type) {
        case 'graph-dataframe':
            return `Graph ${suffix}`;
        case 'describe-dataframe':
            return `Describe data in ${suffix}`;
        case 'explain-code':
            return `Explain ${suffix}`;
        case 'comment-code':
            return `Comment ${suffix}`;
        case 'improve-code':
            return `Refactor ${suffix}`;
        case 'debug-error':
            return `Debugging ${suffix}`;
        case 'suggestions-chat':
        case 'default-python':
        default:
            if (instruction.startsWith(___WEBPACK_IMPORTED_MODULE_0__.attachmentMessagePrefix)) {
                return (0,___WEBPACK_IMPORTED_MODULE_0__.cleanMessageWithAttachmentPrefix)(instruction);
            }
            else {
                return `${instruction} (using ${suffix})`;
            }
    }
}
function titleFromChat(activeChat, activeNotebook) {
    if (activeChat) {
        return chatTitleFromContext(activeChat.context);
    }
    else if (activeNotebook.homeScreen.selectedChatStarter) {
        return chatTitleFromStarterName(activeNotebook.homeScreen.selectedChatStarter.name);
    }
    else {
        return 'New Chat';
    }
}
function chatTitleFromContext(context) {
    switch (context.type) {
        case 'graph-dataframe':
            return 'Generate graph from a Dataframe';
        case 'describe-dataframe':
            return 'Describe dataframe';
        case 'explain-code':
            return 'Explain code';
        case 'comment-code':
            return 'Comment code';
        case 'improve-code':
            return 'Format code';
        case 'debug-error':
            return 'Debug error';
        case 'suggestions-chat':
            return 'Assistant Suggestions';
        case 'default-python':
            return 'Generate Python code';
        default:
            return 'default-python';
    }
}
function chatTitleFromStarterName(name) {
    switch (name) {
        case 'load-volcano-data':
            return 'Volcano data from the Smithsonian Institute';
        case 'plot-fibonacci':
            return 'Plot Fibonacci numbers';
        case 'mask-emails':
            return 'Mask emails';
        case 'load-a-dataframe':
            return 'Load a DataFrame';
        case 'describe-dataframe':
            return 'Describe DataFrame';
        case 'graph-dataframe':
            return 'Generate graph from a DataFrame';
        case 'data-cleaning-suggestions':
            return 'Suggestions for cleaning data';
        case 'dataframe-suggestions':
            return 'Suggestions for working with DataFrames';
        default:
            return name;
    }
}


/***/ }),

/***/ "../../lib/assistant-components/lib/store/store.js":
/*!*********************************************************!*\
  !*** ../../lib/assistant-components/lib/store/store.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STATE_VERSION: () => (/* binding */ STATE_VERSION),
/* harmony export */   lastFetchedMaxTokens: () => (/* binding */ lastFetchedMaxTokens),
/* harmony export */   useStore: () => (/* binding */ useStore)
/* harmony export */ });
/* harmony import */ var zustand_traditional__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! zustand/traditional */ "../../node_modules/zustand/esm/traditional.mjs");
/* harmony import */ var zustand_shallow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! zustand/shallow */ "../../node_modules/zustand/esm/shallow.mjs");
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! zustand/middleware */ "../../node_modules/zustand/esm/middleware.mjs");
/* harmony import */ var zustand_middleware_immer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! zustand/middleware/immer */ "../../node_modules/zustand/esm/middleware/immer.mjs");
/* harmony import */ var _anaconda_assistant_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @anaconda/assistant-sdk */ "../../lib/assistant-sdk/lib/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../. */ "../../lib/assistant-components/lib/index.js");
/* harmony import */ var _test_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test-storage */ "../../lib/assistant-components/lib/store/test-storage.js");
/* harmony import */ var _state_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state-fns */ "../../lib/assistant-components/lib/store/state-fns.js");
/* harmony import */ var _home_screen_state_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-screen-state-fns */ "../../lib/assistant-components/lib/store/home-screen-state-fns.js");
/* harmony import */ var _rehydration_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rehydration-utils */ "../../lib/assistant-components/lib/store/rehydration-utils.js");
/* harmony import */ var _utils_contextUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/contextUtils */ "../../lib/assistant-components/lib/utils/contextUtils.js");
/* harmony import */ var _AssistantStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AssistantStore */ "../../lib/assistant-components/lib/store/AssistantStore.js");












const STATE_VERSION = 11;
let lastFetchedMaxTokens = 4096;
// The abortController is used to ensure we only have one in-flight request at a time
let abortController = null;
/**
 * This is where we define our global Zustand store. All actions that modify the store are also
 * defined here. We use the immer middleware to allow us to use immutable state in a more ergonomic way
 *
 * The store describes all the state of the application and the actions that can be taken to modify that state.
 * As such you should try and ensure to keep the store as clean as possible and extract any logic to external functions
 * such as the state-fns.ts file.
 *
 * In practice these external functions will be pure functions, since we are passing an immer 'draft' state to them
 * In the function, you can mutate the state as if it were mutable, and immer will take care of creating a new state
 *
 */
const useStore = (0,zustand_traditional__WEBPACK_IMPORTED_MODULE_8__.createWithEqualityFn)((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_9__.persist)((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_9__.devtools)((0,zustand_middleware_immer__WEBPACK_IMPORTED_MODULE_10__.immer)((set, get) => ({
    access: true,
    terms: {
        accepted: false,
        version: null
    },
    serverUrl: null,
    notebooks: [],
    path: null,
    settings: {
        enableDataCollection: false,
        open: false,
        addCodeToNotebook: null
    },
    user: null,
    account: null,
    menuOpen: false,
    attachContextOpen: false,
    summarizedFiles: {},
    setServerUrl: async () => {
        let _serverUrl = null;
        try {
            _serverUrl = await (0,_AssistantStore__WEBPACK_IMPORTED_MODULE_7__.getAssistantStore)().getServerUrl();
        }
        catch (e) {
            console.error('Error getting server url', e);
        }
        if (!_serverUrl) {
            set(state => void (state.serverUrl = _serverUrl));
        }
    },
    setPath: (path, nbState, getChatStarters) => {
        if (path !== get().path && abortController) {
            abortController.abort();
            get().resetToHomeScreen();
        }
        set(state => (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.setNotebook)(state, path, nbState, getChatStarters));
    },
    setAccess: (access) => {
        set(state => {
            if (!access) {
                state.logout();
            }
            else {
                state.access = true;
            }
        }, true);
    },
    setTermsVersion: (version) => {
        set(state => void (state.terms.version = version));
    },
    acceptTerms: (version, accepted) => {
        set(state => {
            state.terms.accepted = accepted;
            // Ensure that other copies of the app also accept terms and conditions.
            // We'll leave rejecting T&C to the API call that checks for the version on load.
            if (accepted) {
                (0,_AssistantStore__WEBPACK_IMPORTED_MODULE_7__.getAssistantStore)().syncDiskStateChained(accepted);
            }
        });
    },
    updateAccount: async () => {
        if ((0,_AssistantStore__WEBPACK_IMPORTED_MODULE_7__.getAssistantStore)().isLocalDev())
            return;
        const account = await (0,_AssistantStore__WEBPACK_IMPORTED_MODULE_7__.getAssistantStore)().getNucleusAccount();
        const maxTokens = await (0,_AssistantStore__WEBPACK_IMPORTED_MODULE_7__.getAssistantStore)().getAccountMaxTokens(account);
        lastFetchedMaxTokens = maxTokens;
        set(state => {
            state.account = account;
            const activeChat = (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.getActiveChat)(state);
            if (!activeChat)
                return;
            activeChat.maxTokens = maxTokens;
        }, true);
    },
    selectChatStarter: (chatStarter) => {
        set(state => (0,_home_screen_state_fns__WEBPACK_IMPORTED_MODULE_4__.selectChatStarter)(state, chatStarter));
    },
    resetToHomeScreen: () => {
        abortController?.abort();
        get().setAttachContextOpen(false);
        get().setHidePopups(true);
        set(state => void (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.resetSuggestions)(state));
        set(state => (0,_home_screen_state_fns__WEBPACK_IMPORTED_MODULE_4__.resetToHomeScreen)(state));
        get().setMenuOpen(false);
        set(state => void (state.settings.open = false));
    },
    setActiveChat: (chatKey) => {
        abortController?.abort();
        set(state => (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.setActiveChat)(state, chatKey));
    },
    setMenuOpen: (menuOpen) => {
        set(state => void (state.menuOpen = menuOpen));
    },
    setCellError: (error) => {
        set(state => void (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.setCellError)(state, error));
    },
    setTextSelection: (selection) => {
        set(state => void (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.setTextSelection)(state, selection));
    },
    updateSuggestions: async (activeCell, type, dataframe, assistantSdk) => {
        set(state => void (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.setSuggestionsLoading)(state, true));
        try {
            const suggestions = await (0,___WEBPACK_IMPORTED_MODULE_1__.getSuggestions)(get(), activeCell, type, dataframe, assistantSdk, (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.getActiveChat)(get()), (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.getActiveNotebook)(get()));
            set(state => void (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.updateSuggestions)(state, suggestions));
        }
        catch (e) {
            set(state => void (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.setSuggestionsLoading)(state, false));
            set(state => void (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.setSuggestionsError)(state, e.message));
        }
    },
    setSuggestionsDataframe: (dataframe) => {
        set(state => void (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.setSuggestionsDataframe)(state, dataframe));
    },
    toggleMenuOpen: () => {
        set(state => void (state.menuOpen = !state.menuOpen));
    },
    setAttachContextOpen: (attachContextOpen) => {
        set(state => {
            state.hidePopups = false;
            state.attachContextOpen = attachContextOpen;
        });
    },
    addInstruction: async ({ instruction, fetchFileSummary }) => {
        const chat = (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.getActiveChat)(get());
        const context = chat ? chat.context : { type: 'default-python', variables: {} };
        await get().makeChatRequest({ context, instruction, fetchFileSummary });
    },
    abortChatRequest: () => {
        const chat = (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.getActiveChat)(get());
        if (!chat?.inProgress)
            return;
        if (abortController) {
            abortController.abort('User aborted request');
            abortController = null;
        }
    },
    makeChatRequest: async ({ context, instruction, fetchFileSummary }) => {
        const account = await (0,_AssistantStore__WEBPACK_IMPORTED_MODULE_7__.getAssistantStore)().getNucleusAccount();
        const isPro = account?.metadata?.is_pro_tier;
        abortController = new AbortController();
        const signal = abortController.signal;
        set(state => (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.setupInitialRequestState)(state, context, instruction));
        const contextInstructions = await (0,_utils_contextUtils__WEBPACK_IMPORTED_MODULE_6__.createContextInstructions)(get(), instruction, fetchFileSummary, isPro, abortController);
        set(state => {
            const activeChat = (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.getActiveChat)(state);
            if (!activeChat)
                return;
            contextInstructions.forEach(instruction => {
                (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.addNewInstruction)(activeChat, instruction);
            });
        });
        const { path, activeChatKey, chatState } = (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.requireChatState)(get());
        const sdk = (0,_AssistantStore__WEBPACK_IMPORTED_MODULE_7__.getAssistantStore)().getAssistantSdk();
        let request = (0,___WEBPACK_IMPORTED_MODULE_1__.generateRequest)((0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.getActiveChat)(get()), (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.getActiveNotebook)(get()));
        if (isPro && chatState.summary) {
            request.chatSummary =
                chatState.summary.summary;
        }
        const onComplete = async () => {
            set(state => {
                (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.completeRequest)(state, Boolean(signal.aborted), () => {
                    // Sync the latest messages from the active chat up to the disk state
                    (0,_AssistantStore__WEBPACK_IMPORTED_MODULE_7__.getAssistantStore)().syncDiskStateChained();
                });
            });
            const activeChat = (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.getActiveChat)(get());
            if (activeChat && isPro) {
                try {
                    const summary = await (0,___WEBPACK_IMPORTED_MODULE_1__.fetchSummary)({
                        assistantSdk: sdk,
                        activeChat,
                        isPro
                    });
                    set(state => {
                        const activeChat = (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.getActiveChat)(state);
                        if (activeChat) {
                            activeChat.summary = summary;
                        }
                    });
                }
                catch (e) {
                    console.error('Error fetching summary', e);
                }
            }
        };
        try {
            for await (const code of sdk.streamResponse(request, { abortController, isPro })) {
                set(state => (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.updateCode)(state, code));
            }
            onComplete();
        }
        catch (e) {
            // If the request was aborted, we don't want to show an error.
            const isAborted = signal.aborted && signal.reason === 'User aborted request';
            if (isAborted) {
                onComplete();
                return; // In this case we don't want to show an error
            }
            console.error('Error making chat request', e);
            const error = refineError(e, instruction);
            set(state => (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.cleanupError)(state, path, activeChatKey, error));
        }
        finally {
            abortController = null;
        }
    },
    addSyncedChats: (notebook, chats) => {
        if (!(notebook && notebook.path))
            return;
        let findNotebook = (state) => state.notebooks.find(nb => nb.path === notebook.path);
        for (const chat of chats) {
            set(state => {
                let _foundNotebook = findNotebook(state);
                if (!_foundNotebook) {
                    console.log(`Adding notebook ${notebook.path} to state after sync`);
                    state.notebooks.push(notebook);
                    _foundNotebook = notebook;
                }
                // Only add the chat if it doesn't already exist
                if (!_foundNotebook.chats[chat.key]) {
                    _foundNotebook.chats[chat.key] = chat;
                }
            });
        }
    },
    resetActiveChat: () => {
        abortController?.abort();
        const chat = (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.getActiveChat)(get());
        set(state => (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.resetActiveChat)(state));
        if (chat && chat.messages.length > 0)
            get().makeChatRequest({ context: chat.context, instruction: chat.messages[0].content });
    },
    deleteMessagesStartingWith: (message_id) => {
        set(state => {
            const activeChat = (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.getActiveChat)(state);
            if (!activeChat)
                return;
            const index = activeChat.messages.findIndex(msg => msg.messageId === message_id);
            activeChat.messages = activeChat.messages.slice(0, index);
            activeChat.tokens = activeChat.messages[activeChat.messages.length - 1].tokens || 0;
        });
    },
    submitFeedback: async (feedback) => {
        set(state => void (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.submitFeedback)(state, feedback));
        const session = (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.getActiveChat)(get())?.session;
        if (session)
            await (0,___WEBPACK_IMPORTED_MODULE_1__.postFeedback)((0,_AssistantStore__WEBPACK_IMPORTED_MODULE_7__.getAssistantStore)().getAssistantSdk(), { session, feedback });
    },
    retryError: () => {
        const chatState = (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.getActiveChat)(get());
        if (chatState?.inProgress?.type === 'error') {
            const instruction = chatState.inProgress.failingInstruction;
            const context = chatState.context;
            set(state => (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.removeFailedMessages)(state));
            get().makeChatRequest({ context, instruction });
        }
    },
    gotoPreviousChat: () => {
        set(state => void (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.gotoPreviousChat)(state));
    },
    toggleSettings: () => {
        set(state => void (state.settings.open = !state.settings.open));
    },
    setEnableDataCollection: (enableDataCollection) => {
        const sdk = (0,_AssistantStore__WEBPACK_IMPORTED_MODULE_7__.getAssistantStore)().getAssistantSdk();
        if (enableDataCollection) {
            sdk.enableDataCollection();
        }
        else {
            sdk.disableDataCollection();
        }
        set(state => void (state.settings.enableDataCollection = enableDataCollection));
    },
    setAddCodeToNotebook: (addCodeToNotebook) => {
        set(state => void (state.settings.addCodeToNotebook = addCodeToNotebook));
    },
    deleteChat: (chatKey) => {
        set(state => {
            const notebook = (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.getActiveNotebook)(state);
            if (notebook && notebook.activeChatKey !== chatKey) {
                (0,_AssistantStore__WEBPACK_IMPORTED_MODULE_7__.getAssistantStore)().deletedChatKeys.push(chatKey);
                delete notebook.chats[chatKey];
                return state;
            }
        });
        (0,_AssistantStore__WEBPACK_IMPORTED_MODULE_7__.getAssistantStore)().syncDiskStateChained();
    },
    setHidePopups: (hidePopups) => {
        set(state => {
            state.hidePopups = hidePopups;
            state.attachContextOpen = false;
        });
    },
    addSummarizedFile: (path, summary, lastModified) => {
        if (!path)
            return;
        set(state => {
            state.summarizedFiles[path] = { summary, lastModified };
        });
    },
    logout: () => {
        set(state => {
            (0,_AssistantStore__WEBPACK_IMPORTED_MODULE_7__.getAssistantStore)().unbindSyncDiskStateChained();
            state.account = null;
            state.user = null;
            state.terms.accepted = false;
            state.terms.version = null;
            state.settings.open = false;
            state.settings.enableDataCollection = false;
            const notebook = (0,_state_fns__WEBPACK_IMPORTED_MODULE_3__.getActiveNotebook)(state);
            state.notebooks = [
                {
                    ...notebook,
                    path: notebook?.path,
                    activeChatKey: null,
                    previousChatKey: null,
                    chats: {},
                    notebookState: {
                        dataframes: [],
                        selectedCell: null,
                        selectedText: null,
                        error: null
                    },
                    suggestionState: {
                        loading: false,
                        suggestions: null,
                        dataframe: null,
                        error: null
                    },
                    homeScreen: {
                        chatStarters: notebook?.homeScreen.chatStarters,
                        selectedChatStarter: null
                    }
                }
            ];
            return state;
        }, true);
    }
})), { enabled: "development" === 'development' } // Only enable devtools in development
), {
    name: 'anaconda-assistant',
    version: STATE_VERSION,
    storage: (0,zustand_middleware__WEBPACK_IMPORTED_MODULE_9__.createJSONStorage)(() => ((0,_test_storage__WEBPACK_IMPORTED_MODULE_2__.isTestMode)() ? (0,_test_storage__WEBPACK_IMPORTED_MODULE_2__.createTestStorage)() : localStorage)),
    onRehydrateStorage: () => _rehydration_utils__WEBPACK_IMPORTED_MODULE_5__.updateStoreState
}), zustand_shallow__WEBPACK_IMPORTED_MODULE_11__.shallow);
function refineError(e, instruction) {
    if (abortController?.signal.aborted) {
        return null; // In this case we don't want to show an error
    }
    const name = e.name;
    const isKnownError = [
        ___WEBPACK_IMPORTED_MODULE_1__.ASSISTANT_ERROR,
        _anaconda_assistant_sdk__WEBPACK_IMPORTED_MODULE_0__.ASSISTANT_API_ERROR_NAME,
        _anaconda_assistant_sdk__WEBPACK_IMPORTED_MODULE_0__.ASSISTANT_API_NETWORK_ERROR_NAME,
        _anaconda_assistant_sdk__WEBPACK_IMPORTED_MODULE_0__.ASSISTANT_API_SERVER_ERROR_NAME,
        _anaconda_assistant_sdk__WEBPACK_IMPORTED_MODULE_0__.ASSISTANT_API_INVALID_RESPONSE_ERROR_NAME,
        _anaconda_assistant_sdk__WEBPACK_IMPORTED_MODULE_0__.ASSISTANT_API_UNKNOWN_ERROR_NAME,
        _anaconda_assistant_sdk__WEBPACK_IMPORTED_MODULE_0__.ASSISTANT_SDK_ERROR_NAME,
        _anaconda_assistant_sdk__WEBPACK_IMPORTED_MODULE_0__.ASSISTANT_SDK_INVALID_VERSION_ERROR_NAME,
        _anaconda_assistant_sdk__WEBPACK_IMPORTED_MODULE_0__.ASSISTANT_SDK_INVALID_API_URL_ERROR_NAME,
        _anaconda_assistant_sdk__WEBPACK_IMPORTED_MODULE_0__.ASSISTANT_SDK_UNKNOWN_ERROR_NAME
    ].includes(name);
    return {
        type: 'error',
        errorType: isKnownError ? e.type : 'unknown',
        status: isKnownError ? e.status : 0,
        message: isKnownError ? e.message : 'An unknown error occurred',
        failingInstruction: instruction || ''
    };
}


/***/ }),

/***/ "../../lib/assistant-components/lib/store/suggestions-fns.js":
/*!*******************************************************************!*\
  !*** ../../lib/assistant-components/lib/store/suggestions-fns.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSuggestions: () => (/* binding */ getSuggestions)
/* harmony export */ });
// Store an abort controller per path
const abortControllers = {};
async function getSuggestions(state, activeCell, type, dataframe, assistantSdk, activeChat, activeNotebook) {
    return activeNotebook && (!activeChat || !abortControllers[activeNotebook.path])
        ? _getSuggestions({
            state,
            activeNotebook,
            activeChat,
            activeCell,
            type,
            dataframe,
            assistantSdk
        })
        : null;
}
async function _getSuggestions(params) {
    const { assistantSdk, state, activeNotebook, activeChat, activeCell, type, dataframe } = params;
    if (!state.user) {
        throw new Error('User is not logged in');
    }
    try {
        const abortController = new AbortController();
        abortControllers[activeNotebook.path] = abortController;
        return await assistantSdk.fetchSuggestions({
            session: activeChat?.session || {
                userId: state.user,
                // TODO: This is a legacy session ID that we should remove
                // once we make suggestions create a new chat before fetching.
                // Attempting to do so today causes an error which says that the list of chats cannot be modified.
                // This is due to where I was trying to modify the chats.
                // I will deal with this after the release.
                sessionId: 'LEGACY_SUGGESTIONS'
            },
            type,
            variables: {
                code_cell: activeCell,
                name: dataframe?.name || '',
                dtypes_str: dataframe?.dtypesStr || ''
            }
        }, { abortController });
    }
    catch (e) {
        console.error('Error fetching suggestions', e);
        throw e;
    }
    finally {
        // Remove the abort controller
        abortControllers[activeNotebook.path] = null;
    }
}


/***/ }),

/***/ "../../lib/assistant-components/lib/store/test-storage.js":
/*!****************************************************************!*\
  !*** ../../lib/assistant-components/lib/store/test-storage.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTestStorage: () => (/* binding */ createTestStorage),
/* harmony export */   isTestMode: () => (/* binding */ isTestMode)
/* harmony export */ });
const items = {};
function isTestMode() {
    return typeof localStorage === 'undefined';
}
function createTestStorage() {
    return {
        getItem: (name) => {
            return items[name] ? JSON.parse(items[name]) : null;
        },
        setItem: (name, value) => {
            items[name] = JSON.stringify(value);
        },
        removeItem: (name) => {
            delete items[name];
        }
    };
}


/***/ }),

/***/ "../../lib/assistant-components/lib/style/styleUtils.js":
/*!**************************************************************!*\
  !*** ../../lib/assistant-components/lib/style/styleUtils.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fixStyleHierarchy: () => (/* binding */ fixStyleHierarchy),
/* harmony export */   rootClassName: () => (/* binding */ rootClassName)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const rootClassName = 'anaconda-assistant';
/**
 * Fix the style hierarchy for a child component.
 * @internal
 */
function fixStyleHierarchy(parentName, childName, childStyle) {
    const expectedChildName = `${rootClassName}-${parentName}-${childName}-style`.replace('style-style', 'style');
    return function innerFixStyleHierarchy(asChildName) {
        // If ends in `-style`, replace style to match parent's hierarchy
        if (asChildName === expectedChildName) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", { className: asChildName }, childStyle.replaceAll(`${rootClassName}-${childName}`, `${rootClassName}-${parentName}-${childName}`)));
        }
        return null;
    };
}


/***/ }),

/***/ "../../lib/assistant-components/lib/suggestion-elements/CodeOption.js":
/*!****************************************************************************!*\
  !*** ../../lib/assistant-components/lib/suggestion-elements/CodeOption.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeOption: () => (/* binding */ CodeOption),
/* harmony export */   styleOfCodeOption: () => (/* binding */ styleOfCodeOption)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-elements */ "../../lib/assistant-components/lib/base-elements/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons */ "../../lib/assistant-components/lib/icons.js");



/**
 * Style for the CodeOption component.
 * @alpha
 */
const styleOfCodeOption = `
.anaconda-assistant-code-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0;
  border-radius: 8px;
  border: 1px solid #8c94a6;
  padding: 8px 8px 8px 12px;
  cursor: pointer;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  width: 100%;
  background-color: transparent;
  color: var(--as-main-font-color, #2c303a);
}

.anaconda-assistant-code-option:hover,
.anaconda-assistant-code-option:focus {
  border-color: var(--as-border-color-secondary, #abb1bf);
  background-color: var(--as-background-hover, #f3f4f6);
}

.anaconda-assistant-code-option-icon {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid var(--as-border-color-secondary, #8c94a6);
  display: flex;
  align-items: center;
  width: 36px;
  height: 36px;
  box-sizing: border-box;
}

.anaconda-assistant-code-option-icon svg {
  width: 20px;
  height: 20px;
  color: #8c94a6;
}

.anaconda-assistant-code-option:hover,
.anaconda-assistant-code-option:focus {
  .anaconda-assistant-code-option-icon {
    background: #0cca4a;
    color: #fff;

    svg {
      color: white;
    }
  }
}
`;
/**
 * Code block.
 * @alpha
 */
const CodeOption = (props) => {
    const { label, instruction, submit } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Button, { mainContainer: true, asChildName: "code-option", onClick: () => submit(instruction ?? '') },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Style, { asChildName: "style" }, styleOfCodeOption),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "label" }, label),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "icon" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.Icons.Send, null))));
};


/***/ }),

/***/ "../../lib/assistant-components/lib/suggestion-elements/CodeOptions.js":
/*!*****************************************************************************!*\
  !*** ../../lib/assistant-components/lib/suggestion-elements/CodeOptions.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeOptions: () => (/* binding */ CodeOptions),
/* harmony export */   styleOfCodeOptions: () => (/* binding */ styleOfCodeOptions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-elements */ "../../lib/assistant-components/lib/base-elements/index.js");
/* harmony import */ var _chat_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat-elements */ "../../lib/assistant-components/lib/chat-elements/index.js");
/* harmony import */ var _CodeOption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CodeOption */ "../../lib/assistant-components/lib/suggestion-elements/CodeOption.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "../../lib/assistant-components/lib/store/index.js");





/**
 * Style for the CodeOptions component.
 * @alpha
 */
const styleOfCodeOptions = `
.anaconda-assistant-code-options {
  margin-bottom: 56px;
}

.anaconda-assistant-code-options-header {
  display: flex;
  align-items: center;
}

.anaconda-assistant-code-options-header h4 {
  flex: 1;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  padding: 0 0 0 12px;
  margin: 0;
}

.anaconda-assistant-code-options-header-loading:after {
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
  -webkit-animation: ellipsis steps(4, end) 1200ms infinite;
  animation: ellipsis steps(4, end) 1200ms infinite;
  content: '...';
  width: 0;
}

.anaconda-assistant-code-options-header-refresh {
  color: #6c5af6;
  cursor: pointer;
  margin-right: 12px;
}

.anaconda-assistant-code-options-header-refresh.disabled {
  color: rgb(56, 116, 203, 0.5);
  cursor: not-allowed;
}
`;
/**
 * Code block.
 * @alpha
 */
const CodeOptions = (props) => {
    const { suggestionState, defaultDataFrame, chatStarterName, getActiveCodeCell, makeChatRequest, updateSuggestions, setSuggestionsDataframe, isProTier, resetActiveChat, showLogoutButton, logout } = props;
    const { loading, suggestions, dataframe, error } = suggestionState ?? {
        loading: false,
        suggestions: null,
        dataframe: null,
        error: null
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        // If suggestions are null, kick off a request to get suggestions
        if (suggestions === null && !loading && !error) {
            updateSuggestions(getActiveCodeCell(), chatStarterName, dataframe || defaultDataFrame);
        }
    }, [
        chatStarterName,
        dataframe,
        defaultDataFrame,
        getActiveCodeCell,
        loading,
        error,
        suggestions,
        updateSuggestions
    ]);
    const activeDataFrame = defaultDataFrame || dataframe;
    function submit(instruction) {
        makeChatRequest({
            context: {
                type: 'suggestions-chat',
                variables: {
                    code_cell: getActiveCodeCell(),
                    name: activeDataFrame?.name || '',
                    dtypes_str: activeDataFrame?.dtypesStr || ''
                }
            },
            instruction
        });
    }
    function refreshSuggestions() {
        if (!loading)
            setSuggestionsDataframe(null);
    }
    const isCleaning = chatStarterName === 'data-cleaning-suggestions';
    return error ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chat_elements__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage, { errorMessage: error, retryError: refreshSuggestions, showLogoutButton: showLogoutButton, isProTier: isProTier, resetChat: resetActiveChat, logout: logout })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { mainContainer: true, asChildName: "code-options" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Style, { asChildName: "style" }, styleOfCodeOptions),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "header" },
            loading ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: "anaconda-assistant-code-options-header-loading" },
                ' ',
                "Fetching suggestions for",
                ' ',
                isCleaning ? 'data cleaning' : `this ${(0,_store__WEBPACK_IMPORTED_MODULE_4__.getAssistantStore)().clientContextType}`)) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, activeDataFrame
                ? `Some ideas to ${isCleaning ? 'clean' : 'make use of'} dataframe ${activeDataFrame.name}`
                : 'What would you like to do?')),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { onClick: refreshSuggestions, asChildName: "refresh", className: loading ? 'disabled' : '' }, "Refresh Suggestions")),
        !loading &&
            suggestions &&
            suggestions.map((suggestion, idx) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CodeOption__WEBPACK_IMPORTED_MODULE_3__.CodeOption, { key: idx, label: suggestion, instruction: suggestion, submit: submit })))));
};


/***/ }),

/***/ "../../lib/assistant-components/lib/suggestion-elements/GenerateSuggestions.js":
/*!*************************************************************************************!*\
  !*** ../../lib/assistant-components/lib/suggestion-elements/GenerateSuggestions.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenerateSuggestions: () => (/* binding */ GenerateSuggestions),
/* harmony export */   styleOfGenerateSuggestions: () => (/* binding */ styleOfGenerateSuggestions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CodeOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CodeOptions */ "../../lib/assistant-components/lib/suggestion-elements/CodeOptions.js");
/* harmony import */ var _chat_elements_SelectContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat-elements/SelectContext */ "../../lib/assistant-components/lib/chat-elements/SelectContext.js");



/**
 * Style for the GenerateSuggestions component.
 * @alpha
 */
const styleOfGenerateSuggestions = `
`;
/**
 * Code block.
 * @alpha
 */
const GenerateSuggestions = (props) => {
    const { dataFrames, makeChatRequest, onSubmit, buttonLabel, enableDataCollection, activeNotebook, suggestionState, chatStarterName, getActiveCodeCell, updateSuggestions, setSuggestionsDataframe, isProTier, resetActiveChat, showLogoutButton, logout, suggestionDataFrame } = props;
    if (!suggestionDataFrame && dataFrames) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chat_elements_SelectContext__WEBPACK_IMPORTED_MODULE_2__.SelectContext, { dataFrames: dataFrames, makeChatRequest: makeChatRequest, contextType: "assistant-suggestions", buttonLabel: buttonLabel, onSubmit: onSubmit, enableDataCollection: enableDataCollection }));
    }
    return activeNotebook ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CodeOptions__WEBPACK_IMPORTED_MODULE_1__.CodeOptions, { suggestionState: suggestionState, defaultDataFrame: null, chatStarterName: chatStarterName, getActiveCodeCell: getActiveCodeCell, makeChatRequest: makeChatRequest, updateSuggestions: updateSuggestions, setSuggestionsDataframe: setSuggestionsDataframe, isProTier: isProTier, resetActiveChat: resetActiveChat, showLogoutButton: showLogoutButton, logout: logout })) : null;
};


/***/ }),

/***/ "../../lib/assistant-components/lib/suggestion-elements/LoadADataframe.js":
/*!********************************************************************************!*\
  !*** ../../lib/assistant-components/lib/suggestion-elements/LoadADataframe.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadADataframe: () => (/* binding */ LoadADataframe),
/* harmony export */   styleOfLoadADataframe: () => (/* binding */ styleOfLoadADataframe)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-elements */ "../../lib/assistant-components/lib/base-elements/index.js");
/* harmony import */ var _CodeOption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CodeOption */ "../../lib/assistant-components/lib/suggestion-elements/CodeOption.js");



/**
 * Style for the LoadADataframe component.
 * @alpha
 */
const styleOfLoadADataframe = `
.anaconda-assistant-load-dataframe {
  margin-bottom: 56px;
}

.anaconda-assistant-load-dataframe h4 {
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  padding: 0 0 0 12px;
  margin: 0;
}
`;
/**
 * Code block.
 * @alpha
 */
const LoadADataframe = (props) => {
    const { options, makeChatRequest } = props;
    function submit(instruction) {
        makeChatRequest({ context: { type: 'default-python', variables: {} }, instruction });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { mainContainer: true, asChildName: "load-dataframe" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Style, { asChildName: "style" }, styleOfLoadADataframe),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "What would you like to do?"),
        options?.map((option, idx) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CodeOption__WEBPACK_IMPORTED_MODULE_2__.CodeOption, { key: idx, label: option.label, instruction: option.instruction, submit: submit })))));
};


/***/ }),

/***/ "../../lib/assistant-components/lib/suggestion-elements/SelectChatStarter.js":
/*!***********************************************************************************!*\
  !*** ../../lib/assistant-components/lib/suggestion-elements/SelectChatStarter.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectChatStarter: () => (/* binding */ SelectChatStarter),
/* harmony export */   styleOfSelectChatStarter: () => (/* binding */ styleOfSelectChatStarter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-elements */ "../../lib/assistant-components/lib/base-elements/index.js");
/* harmony import */ var _CodeOption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CodeOption */ "../../lib/assistant-components/lib/suggestion-elements/CodeOption.js");



/**
 * Style for the SelectChatStarter component.
 * @alpha
 */
const styleOfSelectChatStarter = `
.anaconda-asistant-select-chat-starter {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.anaconda-asistant-select-chat-starter-section {
  margin-bottom: 56px;
}

.anaconda-asistant-select-chat-starter-section h4 {
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  padding: 0 0 0 12px;
  margin: 0;
}
`;
/**
 * Code block.
 * @alpha
 */
const SelectChatStarter = (props) => {
    const { chatStarters, setChatStarter, makeChatRequest } = props;
    if (!chatStarters) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { mainContainer: true, asChildName: "select-chat-starter" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Style, { asChildName: "style" }, styleOfSelectChatStarter),
        chatStarters.categories.map((category, idx) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), { key: idx }, !category.doNotDisplay && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base_elements__WEBPACK_IMPORTED_MODULE_1__.Div, { asChildName: "section" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, category.label),
            category.starters.map((chatStarter, idc) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), { key: idc }, !chatStarter.doNotDisplay && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CodeOption__WEBPACK_IMPORTED_MODULE_2__.CodeOption, { label: chatStarter.label, submit: () => chatStarter.instruction
                    ? makeChatRequest({
                        context: { type: 'default-python', variables: {} },
                        instruction: chatStarter.instruction
                    })
                    : setChatStarter(chatStarter) }))))))))))));
};


/***/ }),

/***/ "../../lib/assistant-components/lib/suggestion-elements/index.js":
/*!***********************************************************************!*\
  !*** ../../lib/assistant-components/lib/suggestion-elements/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeOptions: () => (/* reexport safe */ _CodeOptions__WEBPACK_IMPORTED_MODULE_1__.CodeOptions),
/* harmony export */   GenerateSuggestions: () => (/* reexport safe */ _GenerateSuggestions__WEBPACK_IMPORTED_MODULE_2__.GenerateSuggestions),
/* harmony export */   LoadADataframe: () => (/* reexport safe */ _LoadADataframe__WEBPACK_IMPORTED_MODULE_3__.LoadADataframe),
/* harmony export */   SelectChatStarter: () => (/* reexport safe */ _SelectChatStarter__WEBPACK_IMPORTED_MODULE_0__.SelectChatStarter),
/* harmony export */   styleOfCodeOptions: () => (/* reexport safe */ _CodeOptions__WEBPACK_IMPORTED_MODULE_1__.styleOfCodeOptions),
/* harmony export */   styleOfGenerateSuggestions: () => (/* reexport safe */ _GenerateSuggestions__WEBPACK_IMPORTED_MODULE_2__.styleOfGenerateSuggestions),
/* harmony export */   styleOfLoadADataframe: () => (/* reexport safe */ _LoadADataframe__WEBPACK_IMPORTED_MODULE_3__.styleOfLoadADataframe),
/* harmony export */   styleOfSelectChatStarter: () => (/* reexport safe */ _SelectChatStarter__WEBPACK_IMPORTED_MODULE_0__.styleOfSelectChatStarter)
/* harmony export */ });
/* harmony import */ var _SelectChatStarter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectChatStarter */ "../../lib/assistant-components/lib/suggestion-elements/SelectChatStarter.js");
/* harmony import */ var _CodeOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CodeOptions */ "../../lib/assistant-components/lib/suggestion-elements/CodeOptions.js");
/* harmony import */ var _GenerateSuggestions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GenerateSuggestions */ "../../lib/assistant-components/lib/suggestion-elements/GenerateSuggestions.js");
/* harmony import */ var _LoadADataframe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoadADataframe */ "../../lib/assistant-components/lib/suggestion-elements/LoadADataframe.js");






/***/ }),

/***/ "../../lib/assistant-components/lib/types.js":
/*!***************************************************!*\
  !*** ../../lib/assistant-components/lib/types.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_CODE_TO_NOTEBOOK_TYPES: () => (/* binding */ ADD_CODE_TO_NOTEBOOK_TYPES)
/* harmony export */ });
/**
 * Array of available options for adding code to a notebook.
 * @alpha
 */
const ADD_CODE_TO_NOTEBOOK_TYPES = [
    'below-active-cell',
    'at-end-of-notebook',
    'in-place'
];


/***/ }),

/***/ "../../lib/assistant-components/lib/utils/CodeCleaner.js":
/*!***************************************************************!*\
  !*** ../../lib/assistant-components/lib/utils/CodeCleaner.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractMessageBlocks: () => (/* binding */ extractMessageBlocks)
/* harmony export */ });
const extractPartsRegex = /\n?``` ?(python)?\n?/gms;
function extractMessageBlocks(message) {
    const matches = message.matchAll(extractPartsRegex);
    const blocks = [];
    let currentIdx = 0;
    let currentType = 'text';
    for (const match of matches) {
        if (match.index !== undefined && match.index !== -1) {
            const part = message.substring(currentIdx, match.index);
            blocks.push({ type: currentType, content: part });
            currentIdx = match.index + match[0].length;
            currentType = currentType === 'text' ? (match[1] === 'python' ? 'python' : 'output') : 'text';
        }
    }
    if (currentIdx < message.length)
        blocks.push({ type: currentType, content: message.substring(currentIdx) });
    return blocks.filter(block => block.content !== '');
}


/***/ }),

/***/ "../../lib/assistant-components/lib/utils/ContextMessage.js":
/*!******************************************************************!*\
  !*** ../../lib/assistant-components/lib/utils/ContextMessage.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatContextVariables: () => (/* binding */ formatContextVariables)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SpecialPrefixes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpecialPrefixes */ "../../lib/assistant-components/lib/utils/SpecialPrefixes.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "../../lib/assistant-components/lib/store/index.js");



function formatContextVariables(context, content, notebookName) {
    const contextMessages = [];
    switch (context.type) {
        case 'graph-dataframe':
        case 'describe-dataframe':
            contextMessages.push(`dataframe ${context.variables.dataframe.name}`);
            break;
        case 'explain-code':
        case 'comment-code':
        case 'improve-code':
            if (context.variables.selected_code) {
                contextMessages.push('selected code');
            }
            break;
        case 'debug-error':
            if (context.variables.error_cell_code) {
                contextMessages.push('error cell');
            }
            if (context.variables.error_output) {
                contextMessages.push(`error output: ${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.truncate)(context.variables.error_output, { length: 100 })}`);
            }
            break;
        case 'suggestions-chat':
            if (context.variables.code_cell) {
                contextMessages.push('active code cell');
            }
            if (context.variables.name) {
                contextMessages.push(`dataframe ${context.variables.name}`);
            }
            break;
        case 'default-python':
        default:
            if (content.startsWith(_SpecialPrefixes__WEBPACK_IMPORTED_MODULE_1__.attachmentMessagePrefix)) {
                return '';
            }
            else {
                const contextTypeTitle = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.startCase)((0,_store__WEBPACK_IMPORTED_MODULE_2__.getAssistantStore)().clientContextType);
                contextMessages.push(notebookName
                    ? `${contextTypeTitle} ${notebookName}`
                    : `no context from ${contextTypeTitle}`);
            }
            break;
    }
    if (contextMessages.length === 0) {
        return '';
    }
    if (contextMessages.length === 1) {
        return contextMessages[0];
    }
    return `${contextMessages.slice(0, -1).join(', ')} and ${contextMessages.slice(-1)}`;
}


/***/ }),

/***/ "../../lib/assistant-components/lib/utils/RemoveAfterHide.js":
/*!*******************************************************************!*\
  !*** ../../lib/assistant-components/lib/utils/RemoveAfterHide.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoveAfter: () => (/* binding */ RemoveAfter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Function to clear timeout
 * @alpha
 */
function doClearTimeout(timeout) {
    if (timeout) {
        clearTimeout(timeout);
    }
}
/**
 * Remove DOM element after animation is done
 * @alpha
 */
function RemoveAfter(params) {
    const { delay, show, children } = params;
    // Used to remove elements from the DOM after an animation is done,
    // otherwise they might be visible in certain screens or after resizing the window.
    const [remove, setRemove] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true);
    // Debounce the removal of the popup, to allow the animation to finish
    const timeoutRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        doClearTimeout(timeoutRef.current);
        if (show) {
            setRemove(false);
        }
        else {
            timeoutRef.current = setTimeout(() => {
                setRemove(true);
            }, delay);
        }
        return () => {
            doClearTimeout(timeoutRef.current);
        };
    }, [show, delay]);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, remove ? null : children);
}


/***/ }),

/***/ "../../lib/assistant-components/lib/utils/SpecialPrefixes.js":
/*!*******************************************************************!*\
  !*** ../../lib/assistant-components/lib/utils/SpecialPrefixes.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attachmentDataframeInstruction: () => (/* binding */ attachmentDataframeInstruction),
/* harmony export */   attachmentFileInstruction: () => (/* binding */ attachmentFileInstruction),
/* harmony export */   attachmentMessagePrefix: () => (/* binding */ attachmentMessagePrefix),
/* harmony export */   cleanMessageWithAttachmentPrefix: () => (/* binding */ cleanMessageWithAttachmentPrefix),
/* harmony export */   dataframeMessageIdentifier: () => (/* binding */ dataframeMessageIdentifier),
/* harmony export */   fileMessageIdentifier: () => (/* binding */ fileMessageIdentifier)
/* harmony export */ });
/**
 * We will inject this prefix to all messages that contain attachments.
 * Before sending messages to our API, we will remove this prefix.
 * @alpha
 */
const attachmentMessagePrefix = 'attachment://';
/**
 * The identifier for a dataframe message.
 * @alpha
 */
const dataframeMessageIdentifier = 'DataFrame.dtypes>>>';
/**
 * The identifier for a file message.
 * @alpha
 */
const fileMessageIdentifier = 'File>>>';
/**
 * A helper function that instructs the AI to respond acknowledging the receipt of a dataframe.
 * @alpha
 */
function attachmentDataframeInstruction(name, cols) {
    return (`${attachmentMessagePrefix}` +
        `In a brief sentence, acknowledge you have received the following dataframe information: ` +
        `\`${dataframeMessageIdentifier} ${name}.dtypes\` outputs:\n\`\`\`\n${cols
            .map(col => `${col[0]} ${col[1]}`)
            .join('\n')}\n\`\`\``);
}
/**
 * A helper function that instructs the AI to observe the file, but only answer to the user's request.
 */
function attachmentFileInstruction(name, path, summary) {
    return (`${attachmentMessagePrefix}` +
        `<active-notebook>\n` +
        `\`${fileMessageIdentifier} ${name}\`\npath:${path}\nsummary:\n\`\`\`\n${summary}\n\`\`\`\n` +
        `</active-notebook>`);
}
/**
 * A helper function that cleans the message sent by the AI to the user.
 * @alpha
 */
function cleanMessageWithAttachmentPrefix(message) {
    // Extracting df.dtypes from the message.
    const matchDataframeMessage = message.match(/`DataFrame.dtypes>>> (.*)`/);
    const matchFileMessage = message.match(/`File>>> (.*)`/);
    if (matchDataframeMessage) {
        const name = matchDataframeMessage[1].split('.')[0];
        return `Attached the column names and types of dataframe ${name}: \`${matchDataframeMessage[1]}\`.`;
    }
    else if (matchFileMessage) {
        return `Attached the file ${matchFileMessage[1]}.`;
    }
    else {
        return message;
    }
}


/***/ }),

/***/ "../../lib/assistant-components/lib/utils/contextUtils.js":
/*!****************************************************************!*\
  !*** ../../lib/assistant-components/lib/utils/contextUtils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContextInstructions: () => (/* binding */ createContextInstructions)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../. */ "../../lib/assistant-components/lib/index.js");
/* harmony import */ var _store_state_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/state-fns */ "../../lib/assistant-components/lib/store/state-fns.js");


async function createContextInstructions(state, instruction, fetchFileSummary, isPro, abortController) {
    if (!isPro) {
        return [];
    }
    const activeNotebook = (0,_store_state_fns__WEBPACK_IMPORTED_MODULE_1__.getActiveNotebook)(state);
    const activeNotebookState = activeNotebook?.notebookState;
    const dataframes = activeNotebookState?.dataframes || [];
    const instructions = [];
    const activeChat = (0,_store_state_fns__WEBPACK_IMPORTED_MODULE_1__.getActiveChat)(___WEBPACK_IMPORTED_MODULE_0__.useStore.getState());
    if (!activeChat || !activeNotebook) {
        return instructions;
    }
    const summarizedFiles = ___WEBPACK_IMPORTED_MODULE_0__.useStore.getState().summarizedFiles;
    const summarizedFilesKeys = Object.keys(summarizedFiles);
    const activeNotebookSummaryKey = summarizedFilesKeys.find(path => path.slice(-activeNotebook.path.length) === activeNotebook.path);
    // Find active notebook by matching `@file:${name}`
    if (activeNotebookSummaryKey) {
        const activeNotebookSummary = summarizedFiles[activeNotebookSummaryKey];
        const name = activeNotebook.path.split('/').pop() || activeNotebook.path;
        const newInstruction = (0,___WEBPACK_IMPORTED_MODULE_0__.attachmentFileInstruction)(name, activeNotebook.path, activeNotebookSummary.summary);
        const alreadyAttached = activeChat.messages.length > 1;
        if (newInstruction && !alreadyAttached) {
            instructions.push(newInstruction);
        }
    }
    // Find dataframe by matching `@dataframe:${name}`
    for (const df of dataframes) {
        const isReferenced = instruction.includes(`@dataframe:${df.name}`);
        if (isReferenced) {
            const newInstruction = (0,___WEBPACK_IMPORTED_MODULE_0__.attachmentDataframeInstruction)(df.name, df.cols);
            const alreadyExistsInChatHistory = activeChat.messages.some(message => message.content === newInstruction);
            if (!alreadyExistsInChatHistory) {
                instructions.push(newInstruction);
            }
        }
    }
    // Find file by matching `@file:${name}`
    for (const fileName of summarizedFilesKeys) {
        try {
            const isReferenced = instruction.includes(`@file:${fileName}`);
            if (isReferenced && fetchFileSummary) {
                const summary = await fetchFileSummary(activeChat, fileName, summarizedFiles[fileName].lastModified, state.settings.enableDataCollection, undefined, abortController);
                if (!summary) {
                    continue;
                }
                const newInstruction = (0,___WEBPACK_IMPORTED_MODULE_0__.attachmentFileInstruction)(fileName, fileName, summary);
                const alreadyExistsInChatHistory = activeChat.messages.some(message => message.content === newInstruction);
                if (!alreadyExistsInChatHistory) {
                    instructions.push(newInstruction);
                }
            }
        }
        catch (error) {
            console.log('Error fetching file summary', error);
            return [];
        }
    }
    return instructions;
}


/***/ }),

/***/ "../../lib/assistant-components/lib/utils/errors.js":
/*!**********************************************************!*\
  !*** ../../lib/assistant-components/lib/utils/errors.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ASSISTANT_ERROR: () => (/* binding */ ASSISTANT_ERROR),
/* harmony export */   AssistantError: () => (/* binding */ AssistantError)
/* harmony export */ });
const ASSISTANT_ERROR = 'ASSISTANT_ERROR';
class AssistantError extends Error {
    name = ASSISTANT_ERROR;
    status;
    type;
    constructor(type, message, status) {
        super(message);
        this.status = status;
        this.type = type;
    }
}


/***/ }),

/***/ "../../lib/assistant-components/lib/utils/index.js":
/*!*********************************************************!*\
  !*** ../../lib/assistant-components/lib/utils/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ASSISTANT_ERROR: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_6__.ASSISTANT_ERROR),
/* harmony export */   AssistantError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_6__.AssistantError),
/* harmony export */   RemoveAfter: () => (/* reexport safe */ _RemoveAfterHide__WEBPACK_IMPORTED_MODULE_1__.RemoveAfter),
/* harmony export */   attachmentDataframeInstruction: () => (/* reexport safe */ _SpecialPrefixes__WEBPACK_IMPORTED_MODULE_0__.attachmentDataframeInstruction),
/* harmony export */   attachmentFileInstruction: () => (/* reexport safe */ _SpecialPrefixes__WEBPACK_IMPORTED_MODULE_0__.attachmentFileInstruction),
/* harmony export */   attachmentMessagePrefix: () => (/* reexport safe */ _SpecialPrefixes__WEBPACK_IMPORTED_MODULE_0__.attachmentMessagePrefix),
/* harmony export */   chatMessagesUnderLimit: () => (/* reexport safe */ _summaryUtils__WEBPACK_IMPORTED_MODULE_4__.chatMessagesUnderLimit),
/* harmony export */   cleanMessageWithAttachmentPrefix: () => (/* reexport safe */ _SpecialPrefixes__WEBPACK_IMPORTED_MODULE_0__.cleanMessageWithAttachmentPrefix),
/* harmony export */   countTokens: () => (/* reexport safe */ _tokenCounter__WEBPACK_IMPORTED_MODULE_9__.countTokens),
/* harmony export */   createContextInstructions: () => (/* reexport safe */ _contextUtils__WEBPACK_IMPORTED_MODULE_7__.createContextInstructions),
/* harmony export */   createDataframe: () => (/* reexport safe */ _testUtils__WEBPACK_IMPORTED_MODULE_5__.createDataframe),
/* harmony export */   createEmptyState: () => (/* reexport safe */ _testUtils__WEBPACK_IMPORTED_MODULE_5__.createEmptyState),
/* harmony export */   dataframeMessageIdentifier: () => (/* reexport safe */ _SpecialPrefixes__WEBPACK_IMPORTED_MODULE_0__.dataframeMessageIdentifier),
/* harmony export */   exampleCodeResponses: () => (/* reexport safe */ _testStoreUtils__WEBPACK_IMPORTED_MODULE_8__.exampleCodeResponses),
/* harmony export */   extractMessageBlocks: () => (/* reexport safe */ _CodeCleaner__WEBPACK_IMPORTED_MODULE_2__.extractMessageBlocks),
/* harmony export */   fetchSummary: () => (/* reexport safe */ _summaryUtils__WEBPACK_IMPORTED_MODULE_4__.fetchSummary),
/* harmony export */   fileMessageIdentifier: () => (/* reexport safe */ _SpecialPrefixes__WEBPACK_IMPORTED_MODULE_0__.fileMessageIdentifier),
/* harmony export */   formatContextVariables: () => (/* reexport safe */ _ContextMessage__WEBPACK_IMPORTED_MODULE_3__.formatContextVariables),
/* harmony export */   graphChatType: () => (/* reexport safe */ _testStoreUtils__WEBPACK_IMPORTED_MODULE_8__.graphChatType),
/* harmony export */   mockStream: () => (/* reexport safe */ _testStoreUtils__WEBPACK_IMPORTED_MODULE_8__.mockStream),
/* harmony export */   mockStreamWithError: () => (/* reexport safe */ _testStoreUtils__WEBPACK_IMPORTED_MODULE_8__.mockStreamWithError),
/* harmony export */   sleep: () => (/* reexport safe */ _testUtils__WEBPACK_IMPORTED_MODULE_5__.sleep)
/* harmony export */ });
/* harmony import */ var _SpecialPrefixes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpecialPrefixes */ "../../lib/assistant-components/lib/utils/SpecialPrefixes.js");
/* harmony import */ var _RemoveAfterHide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RemoveAfterHide */ "../../lib/assistant-components/lib/utils/RemoveAfterHide.js");
/* harmony import */ var _CodeCleaner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CodeCleaner */ "../../lib/assistant-components/lib/utils/CodeCleaner.js");
/* harmony import */ var _ContextMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextMessage */ "../../lib/assistant-components/lib/utils/ContextMessage.js");
/* harmony import */ var _summaryUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./summaryUtils */ "../../lib/assistant-components/lib/utils/summaryUtils.js");
/* harmony import */ var _testUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./testUtils */ "../../lib/assistant-components/lib/utils/testUtils.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./errors */ "../../lib/assistant-components/lib/utils/errors.js");
/* harmony import */ var _contextUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contextUtils */ "../../lib/assistant-components/lib/utils/contextUtils.js");
/* harmony import */ var _testStoreUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./testStoreUtils */ "../../lib/assistant-components/lib/utils/testStoreUtils.js");
/* harmony import */ var _tokenCounter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tokenCounter */ "../../lib/assistant-components/lib/utils/tokenCounter.js");












/***/ }),

/***/ "../../lib/assistant-components/lib/utils/summaryUtils.js":
/*!****************************************************************!*\
  !*** ../../lib/assistant-components/lib/utils/summaryUtils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chatMessagesUnderLimit: () => (/* binding */ chatMessagesUnderLimit),
/* harmony export */   fetchSummary: () => (/* binding */ fetchSummary)
/* harmony export */ });
async function fetchSummary({ assistantSdk, activeChat, isPro, maxTokens: number = 15565 // As received from the API
 }) {
    if (!(activeChat && isPro))
        return;
    const messages = chatMessagesUnderLimit(activeChat);
    return assistantSdk.proFetchSummary({
        session: activeChat.session,
        responseMessageId: activeChat.messages[activeChat.messages.length - 1].messageId,
        source: {
            name: 'chat-history',
            type: 'chat-history',
            data: messages.map(msg => ({
                role: msg.role,
                content: msg.content,
                messageId: msg.messageId,
                tokens: msg.tokens || 0
            }))
        }
    });
}
// If there is a summary in the active chat,
// And if the total tokens of the chat + the summary tokens exceed the max tokens of the model,
// we remove the oldest messages until the total tokens are under the limit.
function chatMessagesUnderLimit(activeChat, maxTokens = 15565 // As received from the API
) {
    let messages = Array.prototype.slice.call(activeChat.messages);
    // If there is no summary, return the messages as is
    if (!activeChat.summary) {
        return messages;
    }
    // The API currently doesn't return the number of tokens in the summary, but this should be enough for now.
    const summaryTokens = Math.ceil((activeChat.summary?.summary.length || 0) / 3);
    const totalTokens = activeChat.tokens + summaryTokens;
    const tokensOverTheLimit = totalTokens - maxTokens;
    if (tokensOverTheLimit > 0) {
        let messagesToRemove = 0;
        let tokensToRemove = tokensOverTheLimit;
        for (let i = 0; i < messages.length; i++) {
            const msg = messages[i];
            if (tokensToRemove > 0) {
                tokensToRemove -= msg.tokens || Math.ceil(msg.content.length / 3);
                messagesToRemove++;
            }
            else {
                break;
            }
        }
        messages = messages.slice(messagesToRemove);
    }
    return messages;
}


/***/ }),

/***/ "../../lib/assistant-components/lib/utils/testStoreUtils.js":
/*!******************************************************************!*\
  !*** ../../lib/assistant-components/lib/utils/testStoreUtils.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exampleCodeResponses: () => (/* binding */ exampleCodeResponses),
/* harmony export */   graphChatType: () => (/* binding */ graphChatType),
/* harmony export */   mockStream: () => (/* binding */ mockStream),
/* harmony export */   mockStreamWithError: () => (/* binding */ mockStreamWithError)
/* harmony export */ });
/* harmony import */ var _testUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testUtils */ "../../lib/assistant-components/lib/utils/testUtils.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "../../lib/assistant-components/lib/utils/errors.js");


function graphChatType(df1) {
    return {
        type: 'graph-dataframe',
        variables: { dataframe: df1 }
    };
}
const exampleCodeResponses = [
    'imp',
    'import',
    'import matplot',
    'import matplotlib.pyplot',
    'import matplotlib.pyplot as plt',
    'import matplotlib.pyplot as plt\ndf.plot()'
];
async function* mockStream(request, options) {
    let aborted = false;
    options?.abortController?.signal.addEventListener('abort', () => (aborted = true));
    for (const item of exampleCodeResponses) {
        if (aborted) {
            throw new DOMException('Aborted', 'AbortError');
        }
        await (0,_testUtils__WEBPACK_IMPORTED_MODULE_0__.sleep)(100);
        yield {
            content: item,
            tokens: Math.floor(item.length / 4),
            maxTokens: 0
        };
    }
}
async function* mockStreamWithError(request, options) {
    let count = 0;
    for (const item of exampleCodeResponses) {
        if (count++ === 2)
            throw new _errors__WEBPACK_IMPORTED_MODULE_1__.AssistantError('network error', 'network error', 400);
        await (0,_testUtils__WEBPACK_IMPORTED_MODULE_0__.sleep)(100);
        yield {
            content: item,
            tokens: Math.floor(item.length / 4),
            maxTokens: 0
        };
    }
}


/***/ }),

/***/ "../../lib/assistant-components/lib/utils/testUtils.js":
/*!*************************************************************!*\
  !*** ../../lib/assistant-components/lib/utils/testUtils.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDataframe: () => (/* binding */ createDataframe),
/* harmony export */   createEmptyState: () => (/* binding */ createEmptyState),
/* harmony export */   sleep: () => (/* binding */ sleep)
/* harmony export */ });
function createDataframe(name, hash) {
    return {
        name,
        hash: hash || 'dataframe_hash',
        type: 'DataFrame',
        cols: [
            ['PassengerId', 'int64'],
            ['Survived', 'int64']
        ],
        dtypesStr: 'dtypes_str'
    };
}
function createEmptyState(path, dataframe) {
    return {
        access: true,
        terms: {
            accepted: true,
            version: '1.0.0'
        },
        notebooks: [
            {
                path,
                activeChatKey: dataframe.hash,
                previousChatKey: null,
                notebookState: {
                    dataframes: [dataframe],
                    selectedCell: null,
                    selectedText: null,
                    error: null
                },
                chats: {
                    [dataframe.hash]: {
                        key: 'key',
                        name: 'Chat',
                        context: { type: 'graph-dataframe', variables: { dataframe } },
                        messages: [{ role: 'user', messageId: '123', content: '' }],
                        inProgress: { type: 'active', content: 'import p', message_id: '1' },
                        session: { sessionId: '1', userId: '1' },
                        tokens: 0,
                        lastUpdated: new Date(),
                        maxTokens: 4096
                    }
                },
                homeScreen: {
                    chatStarters: {}, // replace with mock chatStarters
                    selectedChatStarter: null
                },
                suggestionState: { loading: false, suggestions: null, dataframe: null, error: null }
            }
        ],
        path: './notebook1',
        settings: { open: false, enableDataCollection: false, addCodeToNotebook: 'below-active-cell' },
        user: 'assistant_user',
        account: null,
        menuOpen: false,
        attachContextOpen: false,
        serverUrl: null,
        summarizedFiles: {}
    };
}
async function sleep(time) {
    await new Promise(resolve => setTimeout(resolve, time));
}


/***/ }),

/***/ "../../lib/assistant-components/lib/utils/tokenCounter.js":
/*!****************************************************************!*\
  !*** ../../lib/assistant-components/lib/utils/tokenCounter.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   countTokens: () => (/* binding */ countTokens)
/* harmony export */ });
/* harmony import */ var _nem035_gpt_3_encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nem035/gpt-3-encoder */ "../../node_modules/@nem035/gpt-3-encoder/index.js");
/* harmony import */ var _nem035_gpt_3_encoder__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nem035_gpt_3_encoder__WEBPACK_IMPORTED_MODULE_0__);
// We use https://github.com/nem035/GPT-3-Encoder, which is a fork of https://github.com/latitudegames/GPT-3-Encoder
// since the original uses node apis which cannot be bundled in the library
// Should look at either vendoring it, or creating our own fork

function countTokens(message) {
    return (0,_nem035_gpt_3_encoder__WEBPACK_IMPORTED_MODULE_0__.encode)(message).length;
}


/***/ }),

/***/ "../../lib/assistant-sdk/lib/accessToken.js":
/*!**************************************************!*\
  !*** ../../lib/assistant-sdk/lib/accessToken.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnacondaAssistantAccessTokenManager: () => (/* binding */ AnacondaAssistantAccessTokenManager)
/* harmony export */ });
/**
 * Access token management
 * @alpha
 */
class AnacondaAssistantAccessTokenManager {
    _accessToken = null;
    _accessTokenExpiresAt = null;
    constructor(opts) {
        this._accessToken = opts.accessToken || null;
        this._accessTokenExpiresAt = opts.expiresAt || null;
    }
    setAccessToken(accessToken) {
        this._accessToken = accessToken.accessToken;
        this._accessTokenExpiresAt = accessToken.expiresAt || null;
    }
    ensureValidAccessToken() {
        if (this._accessToken === null) {
            throw new Error('No access token set');
        }
        if (this._accessTokenExpiresAt === null) {
            throw new Error('No access token expiration set');
        }
        if (this._accessTokenExpiresAt < Date.now()) {
            throw new Error('Access token expired');
        }
    }
    getAccessToken() {
        this.ensureValidAccessToken();
        return {
            accessToken: this._accessToken,
            expiresAt: this._accessTokenExpiresAt
        };
    }
}


/***/ }),

/***/ "../../lib/assistant-sdk/lib/assistant.js":
/*!************************************************!*\
  !*** ../../lib/assistant-sdk/lib/assistant.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnacondaAssistant: () => (/* binding */ AnacondaAssistant),
/* harmony export */   SDK_VERSION: () => (/* binding */ SDK_VERSION)
/* harmony export */ });
/* harmony import */ var _accessToken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessToken */ "../../lib/assistant-sdk/lib/accessToken.js");
/* harmony import */ var _environmentTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environmentTypes */ "../../lib/assistant-sdk/lib/environmentTypes.js");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http */ "../../lib/assistant-sdk/lib/http.js");
/* harmony import */ var _methods_fetchAccess__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/fetchAccess */ "../../lib/assistant-sdk/lib/methods/fetchAccess.js");
/* harmony import */ var _methods_fetchSuggestions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./methods/fetchSuggestions */ "../../lib/assistant-sdk/lib/methods/fetchSuggestions.js");
/* harmony import */ var _methods_fetchTermsAndConditions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./methods/fetchTermsAndConditions */ "../../lib/assistant-sdk/lib/methods/fetchTermsAndConditions.js");
/* harmony import */ var _methods_proStreamResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./methods/proStreamResponse */ "../../lib/assistant-sdk/lib/methods/proStreamResponse.js");
/* harmony import */ var _methods_proFetchSummary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./methods/proFetchSummary */ "../../lib/assistant-sdk/lib/methods/proFetchSummary.js");
/* harmony import */ var _methods_streamResponse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./methods/streamResponse */ "../../lib/assistant-sdk/lib/methods/streamResponse.js");
/* harmony import */ var _methods_submitCodeExecutionResult__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./methods/submitCodeExecutionResult */ "../../lib/assistant-sdk/lib/methods/submitCodeExecutionResult.js");
/* harmony import */ var _methods_submitFeedback__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./methods/submitFeedback */ "../../lib/assistant-sdk/lib/methods/submitFeedback.js");
/* harmony import */ var _publicTypes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./publicTypes */ "../../lib/assistant-sdk/lib/publicTypes.js");
/* harmony import */ var _transformations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transformations */ "../../lib/assistant-sdk/lib/transformations.js");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./validators */ "../../lib/assistant-sdk/lib/validators.js");














const SDK_VERSION = '0.0.1';
/**
 * Anaconda Assistant SDK
 * @alpha
 */
class AnacondaAssistant {
    sdkVersion = SDK_VERSION;
    apiUrl;
    clientVersion;
    accessToken;
    environmentTypes;
    _http;
    _enableDataCollection;
    _transformHeaders = headers => headers;
    constructor(opts) {
        const apiUrl = opts.apiUrl || _publicTypes__WEBPACK_IMPORTED_MODULE_11__.ANACONDA_ASSISTANT_PRODUCTION_API_URL;
        const routePrefix = opts.routePathPrefix || '';
        (0,_validators__WEBPACK_IMPORTED_MODULE_13__.validateAPIUrl)(apiUrl);
        this.apiUrl = apiUrl + routePrefix;
        this.clientVersion = opts.clientVersion;
        this._enableDataCollection = opts.enableDataCollection || false;
        this.accessToken = new _accessToken__WEBPACK_IMPORTED_MODULE_0__.AnacondaAssistantAccessTokenManager({
            accessToken: opts.authorization?.accessToken || '',
            expiresAt: opts.authorization?.expiresAt || 0
        });
        this.environmentTypes = new _environmentTypes__WEBPACK_IMPORTED_MODULE_1__.AssistantEnvironmentTypes(opts.environmentType);
        this._http = new _http__WEBPACK_IMPORTED_MODULE_2__.AnacondaAssistantHTTPClient({
            apiUrl: this.apiUrl,
            getHeaders: this.makeHeaders.bind(this)
        });
    }
    enableDataCollection() {
        this._enableDataCollection = true;
    }
    disableDataCollection() {
        this._enableDataCollection = false;
    }
    setTransformHeaders(transformHeaders) {
        this._transformHeaders = transformHeaders;
    }
    makeHeaders() {
        return this._transformHeaders({
            'X-Client-Version': this.clientVersion,
            'X-SDK-Version': SDK_VERSION,
            'Content-Type': 'application/json',
            'X-Client-Source': this.environmentTypes.getClientSource(),
            Authorization: `Bearer ${this.accessToken.getAccessToken()?.accessToken}`
        });
    }
    async fetchAccess() {
        return (0,_methods_fetchAccess__WEBPACK_IMPORTED_MODULE_3__.fetchAccess)({
            http: this._http
        });
    }
    async fetchTermsAndConditionsVersion() {
        return (0,_methods_fetchTermsAndConditions__WEBPACK_IMPORTED_MODULE_5__.fetchTermsAndConditionsVersion)({
            http: this._http
        });
    }
    async submitFeedback(request, options) {
        return (0,_methods_submitFeedback__WEBPACK_IMPORTED_MODULE_10__.submitFeedback)({
            version: options?.version || 'v2',
            http: this._http,
            request: (0,_transformations__WEBPACK_IMPORTED_MODULE_12__.transformSubmitFeedbackRequest)(request, this._enableDataCollection)
        });
    }
    async *streamResponse(request, options) {
        let stream;
        if (options?.isPro) {
            stream = (0,_methods_proStreamResponse__WEBPACK_IMPORTED_MODULE_6__.proStreamResponse)({
                version: options?.version || 'v1',
                http: this._http,
                request: (0,_transformations__WEBPACK_IMPORTED_MODULE_12__.transformProCompletionRequest)(request, this._enableDataCollection),
                abortController: options?.abortController
            });
        }
        else {
            stream = (0,_methods_streamResponse__WEBPACK_IMPORTED_MODULE_8__.streamResponse)({
                version: options?.version || 'v3',
                http: this._http,
                request: (0,_transformations__WEBPACK_IMPORTED_MODULE_12__.transformCompletionRequest)(request, this._enableDataCollection),
                abortController: options?.abortController
            });
        }
        for await (const response of stream) {
            yield response;
        }
    }
    async fetchSuggestions(request, options) {
        const suggestions = await (0,_methods_fetchSuggestions__WEBPACK_IMPORTED_MODULE_4__.fetchSuggestions)({
            version: options?.version || 'v2',
            http: this._http,
            request: (0,_transformations__WEBPACK_IMPORTED_MODULE_12__.transformFetchSuggestionsRequest)(request, this._enableDataCollection),
            abortController: options?.abortController
        });
        return suggestions.map(suggestion => suggestion.text);
    }
    async submitCodeExecutionResult(request, options) {
        return (0,_methods_submitCodeExecutionResult__WEBPACK_IMPORTED_MODULE_9__.submitCodeExecutionResult)({
            version: options?.version || 'v2',
            http: this._http,
            request: (0,_transformations__WEBPACK_IMPORTED_MODULE_12__.transformSubmitCodeExecutionRequest)(request, this._enableDataCollection),
            abortController: options?.abortController
        });
    }
    async proFetchSummary(request, options) {
        return (0,_methods_proFetchSummary__WEBPACK_IMPORTED_MODULE_7__.proFetchSummary)({
            version: options?.version || 'v1',
            http: this._http,
            request: (0,_transformations__WEBPACK_IMPORTED_MODULE_12__.transformProFetchSummaryRequest)(request, this._enableDataCollection)
        });
    }
}


/***/ }),

/***/ "../../lib/assistant-sdk/lib/environmentTypes.js":
/*!*******************************************************!*\
  !*** ../../lib/assistant-sdk/lib/environmentTypes.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssistantEnvironmentTypes: () => (/* binding */ AssistantEnvironmentTypes)
/* harmony export */ });
/**
 * Anaconda Assistant Environment Types
 * @alpha
 */
class AssistantEnvironmentTypes {
    _environmentType;
    constructor(_environmentType) {
        this._environmentType = _environmentType;
    }
    isLocalDev() {
        return this._environmentType === 'local-dev';
    }
    isLocalNotebooks() {
        return this._environmentType === 'local-notebooks-prod' || this.isLocalNotebooksDev();
    }
    isLocalNotebooksDev() {
        return this._environmentType === 'local-notebooks-dev';
    }
    isCloudNotebooks() {
        return this._environmentType === 'cloud-notebooks-prod';
    }
    isCloudNotebooksStaging() {
        return this._environmentType === 'cloud-notebooks-staging';
    }
    isEnterpriseNotebooksDev() {
        return this._environmentType === 'enterprise-notebooks-dev';
    }
    isEnterpriseNotebooks() {
        return this._environmentType === 'enterprise-notebooks-prod' || this.isEnterpriseNotebooksDev();
    }
    isPyexcelDev() {
        return this._environmentType === 'pyexcel-dev';
    }
    isPyexcel() {
        return this._environmentType === 'pyexcel-prod' || this.isPyexcelDev();
    }
    getClientSource() {
        if (this.isLocalDev())
            return 'anaconda-local-dev';
        if (this.isCloudNotebooksStaging())
            return 'anaconda-cloud-notebooks-staging';
        if (this.isCloudNotebooks())
            return 'anaconda-cloud-notebooks-prod';
        if (this.isLocalNotebooksDev())
            return 'anaconda-local-notebooks-dev';
        if (this.isLocalNotebooks())
            return 'anaconda-local-notebooks-prod';
        if (this.isEnterpriseNotebooksDev())
            return 'anaconda-enterprise-notebooks-dev';
        if (this.isEnterpriseNotebooks())
            return 'anaconda-enterprise-notebooks-prod';
        if (this.isPyexcelDev())
            return 'anaconda-pyexcel-dev';
        if (this.isPyexcel())
            return 'anaconda-pyexcel-prod';
        throw new Error('Unknown environment type');
    }
}


/***/ }),

/***/ "../../lib/assistant-sdk/lib/http.js":
/*!*******************************************!*\
  !*** ../../lib/assistant-sdk/lib/http.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnacondaAssistantHTTPClient: () => (/* binding */ AnacondaAssistantHTTPClient),
/* harmony export */   matchesKnownError: () => (/* binding */ matchesKnownError)
/* harmony export */ });
/* harmony import */ var _publicTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publicTypes */ "../../lib/assistant-sdk/lib/publicTypes.js");

/**
 * Anaconda Assistant HTTP Client
 * @alpha
 */
class AnacondaAssistantHTTPClient {
    _apiUrl;
    _getHeaders;
    constructor(opts) {
        this._apiUrl = opts.apiUrl;
        this._getHeaders = opts.getHeaders;
    }
    async fetchSafely(options) {
        const { path, body, method, abortController } = options;
        const headers = this._getHeaders();
        const request = new Request(`${this._apiUrl}${path}`, {
            method,
            headers,
            body,
            signal: abortController?.signal
        });
        try {
            const response = await fetch(request);
            if (response.status > 299) {
                const text = await response.text();
                if (matchesKnownError(text)) {
                    throw new _publicTypes__WEBPACK_IMPORTED_MODULE_0__.AssistantAPIServerError(text, { request, response });
                }
                throw new _publicTypes__WEBPACK_IMPORTED_MODULE_0__.AssistantAPIServerError('There was an issue connecting to the Assistant server. Please try again.', { request, response });
            }
            return { request, response };
        }
        catch (e) {
            if (e.name === _publicTypes__WEBPACK_IMPORTED_MODULE_0__.ASSISTANT_API_SERVER_ERROR_NAME) {
                throw e;
            }
            throw new _publicTypes__WEBPACK_IMPORTED_MODULE_0__.AssistantAPINetworkError('There was an issue connecting to the Assistant server. Please try again.', { request });
        }
    }
}
function matchesKnownError(text) {
    if (text.includes('Too many requests') ||
        text.includes('requests allowed exceeded') ||
        text.includes('maximum context length') ||
        text.includes('org_blacklisted')) {
        return true;
    }
    return false;
}


/***/ }),

/***/ "../../lib/assistant-sdk/lib/index.js":
/*!********************************************!*\
  !*** ../../lib/assistant-sdk/lib/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ANACONDA_ASSISTANT_PRODUCTION_API_URL: () => (/* reexport safe */ _publicTypes__WEBPACK_IMPORTED_MODULE_4__.ANACONDA_ASSISTANT_PRODUCTION_API_URL),
/* harmony export */   ANACONDA_ASSISTANT_SUPPORTED_API_URLS: () => (/* reexport safe */ _publicTypes__WEBPACK_IMPORTED_MODULE_4__.ANACONDA_ASSISTANT_SUPPORTED_API_URLS),
/* harmony export */   ASSISTANT_API_ERROR_NAME: () => (/* reexport safe */ _publicTypes__WEBPACK_IMPORTED_MODULE_4__.ASSISTANT_API_ERROR_NAME),
/* harmony export */   ASSISTANT_API_INVALID_RESPONSE_ERROR_NAME: () => (/* reexport safe */ _publicTypes__WEBPACK_IMPORTED_MODULE_4__.ASSISTANT_API_INVALID_RESPONSE_ERROR_NAME),
/* harmony export */   ASSISTANT_API_NETWORK_ERROR_NAME: () => (/* reexport safe */ _publicTypes__WEBPACK_IMPORTED_MODULE_4__.ASSISTANT_API_NETWORK_ERROR_NAME),
/* harmony export */   ASSISTANT_API_SERVER_ERROR_NAME: () => (/* reexport safe */ _publicTypes__WEBPACK_IMPORTED_MODULE_4__.ASSISTANT_API_SERVER_ERROR_NAME),
/* harmony export */   ASSISTANT_API_UNKNOWN_ERROR_NAME: () => (/* reexport safe */ _publicTypes__WEBPACK_IMPORTED_MODULE_4__.ASSISTANT_API_UNKNOWN_ERROR_NAME),
/* harmony export */   ASSISTANT_ENVIRONMENT_TYPES: () => (/* reexport safe */ _publicTypes__WEBPACK_IMPORTED_MODULE_4__.ASSISTANT_ENVIRONMENT_TYPES),
/* harmony export */   ASSISTANT_SDK_ERROR_NAME: () => (/* reexport safe */ _publicTypes__WEBPACK_IMPORTED_MODULE_4__.ASSISTANT_SDK_ERROR_NAME),
/* harmony export */   ASSISTANT_SDK_INVALID_API_URL_ERROR_NAME: () => (/* reexport safe */ _publicTypes__WEBPACK_IMPORTED_MODULE_4__.ASSISTANT_SDK_INVALID_API_URL_ERROR_NAME),
/* harmony export */   ASSISTANT_SDK_INVALID_VERSION_ERROR_NAME: () => (/* reexport safe */ _publicTypes__WEBPACK_IMPORTED_MODULE_4__.ASSISTANT_SDK_INVALID_VERSION_ERROR_NAME),
/* harmony export */   ASSISTANT_SDK_UNKNOWN_ERROR_NAME: () => (/* reexport safe */ _publicTypes__WEBPACK_IMPORTED_MODULE_4__.ASSISTANT_SDK_UNKNOWN_ERROR_NAME),
/* harmony export */   AnacondaAssistant: () => (/* reexport safe */ _assistant__WEBPACK_IMPORTED_MODULE_3__.AnacondaAssistant),
/* harmony export */   AnacondaAssistantAccessToken: () => (/* reexport safe */ _accessToken__WEBPACK_IMPORTED_MODULE_0__.AnacondaAssistantAccessTokenManager),
/* harmony export */   AnacondaAssistantHTTPClient: () => (/* reexport safe */ _http__WEBPACK_IMPORTED_MODULE_2__.AnacondaAssistantHTTPClient),
/* harmony export */   AssistantAPIErrorBase: () => (/* reexport safe */ _publicTypes__WEBPACK_IMPORTED_MODULE_4__.AssistantAPIErrorBase),
/* harmony export */   AssistantAPIInvalidResponseError: () => (/* reexport safe */ _publicTypes__WEBPACK_IMPORTED_MODULE_4__.AssistantAPIInvalidResponseError),
/* harmony export */   AssistantAPINetworkError: () => (/* reexport safe */ _publicTypes__WEBPACK_IMPORTED_MODULE_4__.AssistantAPINetworkError),
/* harmony export */   AssistantAPIServerError: () => (/* reexport safe */ _publicTypes__WEBPACK_IMPORTED_MODULE_4__.AssistantAPIServerError),
/* harmony export */   AssistantAPIUnknownError: () => (/* reexport safe */ _publicTypes__WEBPACK_IMPORTED_MODULE_4__.AssistantAPIUnknownError),
/* harmony export */   AssistantContexts: () => (/* reexport safe */ _publicTypes__WEBPACK_IMPORTED_MODULE_4__.AssistantContexts),
/* harmony export */   AssistantEnvironmentTypes: () => (/* reexport safe */ _environmentTypes__WEBPACK_IMPORTED_MODULE_1__.AssistantEnvironmentTypes),
/* harmony export */   AssistantSDKErrorBase: () => (/* reexport safe */ _publicTypes__WEBPACK_IMPORTED_MODULE_4__.AssistantSDKErrorBase),
/* harmony export */   AssistantSDKInvalidAPIURLError: () => (/* reexport safe */ _publicTypes__WEBPACK_IMPORTED_MODULE_4__.AssistantSDKInvalidAPIURLError),
/* harmony export */   AssistantSDKInvalidVersionError: () => (/* reexport safe */ _publicTypes__WEBPACK_IMPORTED_MODULE_4__.AssistantSDKInvalidVersionError),
/* harmony export */   AssistantSDKUnknownError: () => (/* reexport safe */ _publicTypes__WEBPACK_IMPORTED_MODULE_4__.AssistantSDKUnknownError),
/* harmony export */   AssistantSupportedEndpointVersions: () => (/* reexport safe */ _publicTypes__WEBPACK_IMPORTED_MODULE_4__.AssistantSupportedEndpointVersions),
/* harmony export */   validateVersion: () => (/* reexport safe */ _publicTypes__WEBPACK_IMPORTED_MODULE_4__.validateVersion)
/* harmony export */ });
/* harmony import */ var _accessToken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessToken */ "../../lib/assistant-sdk/lib/accessToken.js");
/* harmony import */ var _environmentTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environmentTypes */ "../../lib/assistant-sdk/lib/environmentTypes.js");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http */ "../../lib/assistant-sdk/lib/http.js");
/* harmony import */ var _assistant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assistant */ "../../lib/assistant-sdk/lib/assistant.js");
/* harmony import */ var _publicTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./publicTypes */ "../../lib/assistant-sdk/lib/publicTypes.js");







/***/ }),

/***/ "../../lib/assistant-sdk/lib/methods/fetchAccess.js":
/*!**********************************************************!*\
  !*** ../../lib/assistant-sdk/lib/methods/fetchAccess.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAccess: () => (/* binding */ fetchAccess)
/* harmony export */ });
/* harmony import */ var _publicTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../publicTypes */ "../../lib/assistant-sdk/lib/publicTypes.js");

/**
 * Helps determine whether user has access to Assistant
 * @internal
 */
async function fetchAccess(opts) {
    const { http } = opts;
    const { request, response } = await http.fetchSafely({
        method: 'POST',
        path: '/access'
    });
    // Return false only if access denied due to org being blacklisted
    if (response.status === 403) {
        const data = await response.json();
        const errorCode = data.error.code;
        if (errorCode === 'org_blacklisted')
            return false;
    }
    // Handle other errors. User should not be allowed, if we can't determine
    // if they have access due to their org being blacklisted.
    if (response.status !== 200) {
        throw new _publicTypes__WEBPACK_IMPORTED_MODULE_0__.AssistantAPIServerError('Unable to determine if user has access.', {
            request,
            response
        });
    }
    return true;
}


/***/ }),

/***/ "../../lib/assistant-sdk/lib/methods/fetchSuggestions.js":
/*!***************************************************************!*\
  !*** ../../lib/assistant-sdk/lib/methods/fetchSuggestions.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchSuggestions: () => (/* binding */ fetchSuggestions)
/* harmony export */ });
/* harmony import */ var _publicTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../publicTypes */ "../../lib/assistant-sdk/lib/publicTypes.js");

/**
 * Fetch suggestions
 * @internal
 */
async function fetchSuggestions(opts) {
    const { version, http, request, abortController } = opts;
    (0,_publicTypes__WEBPACK_IMPORTED_MODULE_0__.validateVersion)(version, _publicTypes__WEBPACK_IMPORTED_MODULE_0__.AssistantSupportedEndpointVersions.FETCH_SUGGESTIONS_SUPPORTED_VERSIONS);
    const { request: fetchRequest, response } = await http.fetchSafely({
        method: 'POST',
        path: `/${version}/suggestions`,
        body: JSON.stringify(request),
        abortController
    });
    if (response.status !== 200) {
        throw new _publicTypes__WEBPACK_IMPORTED_MODULE_0__.AssistantAPIServerError('Unable to fetch suggestions.', {
            request: fetchRequest,
            response
        });
    }
    let suggestions;
    try {
        suggestions = (await response.json()).suggestions;
    }
    catch (e) {
        throw new _publicTypes__WEBPACK_IMPORTED_MODULE_0__.AssistantAPIInvalidResponseError('Unable to parse suggestions response.', {
            request: fetchRequest,
            response
        });
    }
    if (!Array.isArray(suggestions)) {
        throw new _publicTypes__WEBPACK_IMPORTED_MODULE_0__.AssistantAPIInvalidResponseError('Received suggestions is not an array.', {
            request: fetchRequest,
            response
        });
    }
    return suggestions;
}


/***/ }),

/***/ "../../lib/assistant-sdk/lib/methods/fetchTermsAndConditions.js":
/*!**********************************************************************!*\
  !*** ../../lib/assistant-sdk/lib/methods/fetchTermsAndConditions.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchTermsAndConditionsVersion: () => (/* binding */ fetchTermsAndConditionsVersion)
/* harmony export */ });
/* harmony import */ var _publicTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../publicTypes */ "../../lib/assistant-sdk/lib/publicTypes.js");

/**
 * Reads the last available version of the terms and conditions,
 * which should be used to force the user to accept the new ones if they have changed.
 * @internal
 */
async function fetchTermsAndConditionsVersion(opts) {
    const { http } = opts;
    const { request, response } = await http.fetchSafely({
        path: '/terms-and-conditions-version',
        method: 'GET'
    });
    if (response.status !== 200) {
        throw new _publicTypes__WEBPACK_IMPORTED_MODULE_0__.AssistantAPIServerError('Unable to fetch terms and conditions version.', {
            request,
            response
        });
    }
    try {
        const data = await response.json();
        return data.version;
    }
    catch (e) {
        throw new _publicTypes__WEBPACK_IMPORTED_MODULE_0__.AssistantAPIInvalidResponseError('Unable to parse terms and conditions version.', {
            request,
            response
        });
    }
}


/***/ }),

/***/ "../../lib/assistant-sdk/lib/methods/proFetchSummary.js":
/*!**************************************************************!*\
  !*** ../../lib/assistant-sdk/lib/methods/proFetchSummary.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   proFetchSummary: () => (/* binding */ proFetchSummary)
/* harmony export */ });
/* harmony import */ var _publicTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../publicTypes */ "../../lib/assistant-sdk/lib/publicTypes.js");

/**
 * Post feedback
 * @internal
 */
async function proFetchSummary(opts) {
    const { version, http, request } = opts;
    (0,_publicTypes__WEBPACK_IMPORTED_MODULE_0__.validateVersion)(version, _publicTypes__WEBPACK_IMPORTED_MODULE_0__.AssistantSupportedEndpointVersions.PRO_SUMMARIES_SUPPORTED_VERSIONS);
    const { request: fetchRequest, response } = await http.fetchSafely({
        method: 'POST',
        path: `/${version}/pro/summaries`,
        body: JSON.stringify(request)
    });
    if (response.status !== 200) {
        throw new _publicTypes__WEBPACK_IMPORTED_MODULE_0__.AssistantAPIServerError('Unable to create summary', {
            request: fetchRequest,
            response
        });
    }
    const json = await response.json();
    return {
        summary: json.data.summary,
        summaryDate: json.data.summary_date,
        summaryTechnique: json.data.summary_technique
    };
}


/***/ }),

/***/ "../../lib/assistant-sdk/lib/methods/proStreamResponse.js":
/*!****************************************************************!*\
  !*** ../../lib/assistant-sdk/lib/methods/proStreamResponse.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   proStreamResponse: () => (/* binding */ proStreamResponse)
/* harmony export */ });
/* harmony import */ var _publicTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../publicTypes */ "../../lib/assistant-sdk/lib/publicTypes.js");
/* harmony import */ var _responseTokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../responseTokens */ "../../lib/assistant-sdk/lib/responseTokens.js");


/**
 * Stream response
 * @internal
 */
async function* proStreamResponse(opts) {
    const { version, http, request, abortController } = opts;
    (0,_publicTypes__WEBPACK_IMPORTED_MODULE_0__.validateVersion)(version, _publicTypes__WEBPACK_IMPORTED_MODULE_0__.AssistantSupportedEndpointVersions.PRO_STREAM_RESPONSE_SUPPORTED_VERSIONS);
    // Similar streamed call as to OpenAI but to https://assistant.anaconda.cloud/v2/completions
    const { request: fetchRequest, response } = await http.fetchSafely({
        method: 'POST',
        path: `/${version}/pro/completions`,
        body: JSON.stringify(request),
        abortController
    });
    if (!response.body) {
        throw new _publicTypes__WEBPACK_IMPORTED_MODULE_0__.AssistantAPIInvalidResponseError('Empty stream when parsing response', {
            request: fetchRequest,
            response
        });
    }
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let done = false;
    let chunk = '';
    while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);
        chunk = chunk + chunkValue;
        if (!(0,_responseTokens__WEBPACK_IMPORTED_MODULE_1__.containsTokenCount)(chunk)) {
            yield {
                content: chunk
            };
        }
        else {
            const tokens = (0,_responseTokens__WEBPACK_IMPORTED_MODULE_1__.parseTokenCount)(chunk);
            const maxTokens = (0,_responseTokens__WEBPACK_IMPORTED_MODULE_1__.parseMaxTokenCount)(chunk);
            yield {
                content: (0,_responseTokens__WEBPACK_IMPORTED_MODULE_1__.removeTokenCount)(chunk),
                tokens,
                maxTokens
            };
        }
    }
}


/***/ }),

/***/ "../../lib/assistant-sdk/lib/methods/streamResponse.js":
/*!*************************************************************!*\
  !*** ../../lib/assistant-sdk/lib/methods/streamResponse.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   streamResponse: () => (/* binding */ streamResponse)
/* harmony export */ });
/* harmony import */ var _publicTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../publicTypes */ "../../lib/assistant-sdk/lib/publicTypes.js");
/* harmony import */ var _responseTokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../responseTokens */ "../../lib/assistant-sdk/lib/responseTokens.js");


/**
 * Stream response
 * @internal
 */
async function* streamResponse(opts) {
    const { version, http, request, abortController } = opts;
    (0,_publicTypes__WEBPACK_IMPORTED_MODULE_0__.validateVersion)(version, _publicTypes__WEBPACK_IMPORTED_MODULE_0__.AssistantSupportedEndpointVersions.STREAM_RESPONSE_SUPPORTED_VERSIONS);
    // Similar streamed call as to OpenAI but to https://assistant.anaconda.cloud/v2/completions
    const { request: fetchRequest, response } = await http.fetchSafely({
        method: 'POST',
        path: `/${version}/completions`,
        body: JSON.stringify(request),
        abortController
    });
    if (!response.body) {
        throw new _publicTypes__WEBPACK_IMPORTED_MODULE_0__.AssistantAPIInvalidResponseError('Empty stream when parsing response', {
            request: fetchRequest,
            response
        });
    }
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let done = false;
    let chunk = '';
    while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);
        chunk = chunk + chunkValue;
        if (!(0,_responseTokens__WEBPACK_IMPORTED_MODULE_1__.containsTokenCount)(chunk)) {
            yield {
                content: chunk
            };
        }
        else {
            const tokens = (0,_responseTokens__WEBPACK_IMPORTED_MODULE_1__.parseTokenCount)(chunk);
            const maxTokens = (0,_responseTokens__WEBPACK_IMPORTED_MODULE_1__.parseMaxTokenCount)(chunk);
            yield {
                content: (0,_responseTokens__WEBPACK_IMPORTED_MODULE_1__.removeTokenCount)(chunk),
                tokens,
                maxTokens
            };
        }
    }
}


/***/ }),

/***/ "../../lib/assistant-sdk/lib/methods/submitCodeExecutionResult.js":
/*!************************************************************************!*\
  !*** ../../lib/assistant-sdk/lib/methods/submitCodeExecutionResult.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   submitCodeExecutionResult: () => (/* binding */ submitCodeExecutionResult)
/* harmony export */ });
/* harmony import */ var _publicTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../publicTypes */ "../../lib/assistant-sdk/lib/publicTypes.js");

/**
 * Submit code executed, used to study effectiveness of generated code
 * @internal
 */
async function submitCodeExecutionResult(opts) {
    const { version, http, request, abortController } = opts;
    (0,_publicTypes__WEBPACK_IMPORTED_MODULE_0__.validateVersion)(version, _publicTypes__WEBPACK_IMPORTED_MODULE_0__.AssistantSupportedEndpointVersions.SUBMIT_CODE_EXECUTION_SUPPORTED_VERSIONS);
    const { request: fetchRequest, response } = await http.fetchSafely({
        method: 'POST',
        path: `/v2/execution_result`,
        body: JSON.stringify(request),
        abortController
    });
    if (response.status !== 201) {
        throw new _publicTypes__WEBPACK_IMPORTED_MODULE_0__.AssistantAPIServerError('Unable to fetch suggestions.', {
            request: fetchRequest,
            response
        });
    }
    return true;
}


/***/ }),

/***/ "../../lib/assistant-sdk/lib/methods/submitFeedback.js":
/*!*************************************************************!*\
  !*** ../../lib/assistant-sdk/lib/methods/submitFeedback.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   submitFeedback: () => (/* binding */ submitFeedback)
/* harmony export */ });
/* harmony import */ var _publicTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../publicTypes */ "../../lib/assistant-sdk/lib/publicTypes.js");

/**
 * Post feedback
 * @internal
 */
async function submitFeedback(opts) {
    const { version, http, request } = opts;
    (0,_publicTypes__WEBPACK_IMPORTED_MODULE_0__.validateVersion)(version, _publicTypes__WEBPACK_IMPORTED_MODULE_0__.AssistantSupportedEndpointVersions.SUBMIT_FEEDBACK_SUPPORTED_VERSIONS);
    const { request: fetchRequest, response } = await http.fetchSafely({
        method: 'POST',
        path: `/${version}/feedback`,
        body: JSON.stringify(request)
    });
    if (response.status !== 201) {
        throw new _publicTypes__WEBPACK_IMPORTED_MODULE_0__.AssistantAPIServerError('Unable to post feedback', {
            request: fetchRequest,
            response
        });
    }
    return true;
}


/***/ }),

/***/ "../../lib/assistant-sdk/lib/publicTypes.js":
/*!**************************************************!*\
  !*** ../../lib/assistant-sdk/lib/publicTypes.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ANACONDA_ASSISTANT_PRODUCTION_API_URL: () => (/* binding */ ANACONDA_ASSISTANT_PRODUCTION_API_URL),
/* harmony export */   ANACONDA_ASSISTANT_SUPPORTED_API_URLS: () => (/* binding */ ANACONDA_ASSISTANT_SUPPORTED_API_URLS),
/* harmony export */   ASSISTANT_API_ERROR_NAME: () => (/* binding */ ASSISTANT_API_ERROR_NAME),
/* harmony export */   ASSISTANT_API_INVALID_RESPONSE_ERROR_NAME: () => (/* binding */ ASSISTANT_API_INVALID_RESPONSE_ERROR_NAME),
/* harmony export */   ASSISTANT_API_NETWORK_ERROR_NAME: () => (/* binding */ ASSISTANT_API_NETWORK_ERROR_NAME),
/* harmony export */   ASSISTANT_API_SERVER_ERROR_NAME: () => (/* binding */ ASSISTANT_API_SERVER_ERROR_NAME),
/* harmony export */   ASSISTANT_API_UNKNOWN_ERROR_NAME: () => (/* binding */ ASSISTANT_API_UNKNOWN_ERROR_NAME),
/* harmony export */   ASSISTANT_ENVIRONMENT_TYPES: () => (/* binding */ ASSISTANT_ENVIRONMENT_TYPES),
/* harmony export */   ASSISTANT_SDK_ERROR_NAME: () => (/* binding */ ASSISTANT_SDK_ERROR_NAME),
/* harmony export */   ASSISTANT_SDK_INVALID_API_URL_ERROR_NAME: () => (/* binding */ ASSISTANT_SDK_INVALID_API_URL_ERROR_NAME),
/* harmony export */   ASSISTANT_SDK_INVALID_VERSION_ERROR_NAME: () => (/* binding */ ASSISTANT_SDK_INVALID_VERSION_ERROR_NAME),
/* harmony export */   ASSISTANT_SDK_UNKNOWN_ERROR_NAME: () => (/* binding */ ASSISTANT_SDK_UNKNOWN_ERROR_NAME),
/* harmony export */   AssistantAPIErrorBase: () => (/* binding */ AssistantAPIErrorBase),
/* harmony export */   AssistantAPIInvalidResponseError: () => (/* binding */ AssistantAPIInvalidResponseError),
/* harmony export */   AssistantAPINetworkError: () => (/* binding */ AssistantAPINetworkError),
/* harmony export */   AssistantAPIServerError: () => (/* binding */ AssistantAPIServerError),
/* harmony export */   AssistantAPIUnknownError: () => (/* binding */ AssistantAPIUnknownError),
/* harmony export */   AssistantContexts: () => (/* binding */ AssistantContexts),
/* harmony export */   AssistantSDKErrorBase: () => (/* binding */ AssistantSDKErrorBase),
/* harmony export */   AssistantSDKInvalidAPIURLError: () => (/* binding */ AssistantSDKInvalidAPIURLError),
/* harmony export */   AssistantSDKInvalidVersionError: () => (/* binding */ AssistantSDKInvalidVersionError),
/* harmony export */   AssistantSDKUnknownError: () => (/* binding */ AssistantSDKUnknownError),
/* harmony export */   AssistantSupportedEndpointVersions: () => (/* binding */ AssistantSupportedEndpointVersions),
/* harmony export */   validateVersion: () => (/* binding */ validateVersion)
/* harmony export */ });
/**
 * Anaconda Assistant SDK supported API URLs
 * @alpha
 */
const ANACONDA_ASSISTANT_SUPPORTED_API_URLS = [
    'https://jupyterassistant.anacondaconnect.com',
    'https://assistant.anaconda.cloud',
    'http://localhost:8000',
    'https://127.0.0.1:4200',
    'https://xltb.anacondaconnect.com',
    'https://xltb-unlocked.anacondaconnect.com',
    'https://xltb-staging.anaconda.cloud',
    'https://xltb.anaconda.cloud'
];
/**
 * Anaconda Assistant SDK production API URL
 * @alpha
 */
const ANACONDA_ASSISTANT_PRODUCTION_API_URL = 'https://assistant.anaconda.cloud';
/**
 * Anaconda Assistant SDK supported API endpoint versions
 * @alpha
 */
var AssistantSupportedEndpointVersions;
(function (AssistantSupportedEndpointVersions) {
    AssistantSupportedEndpointVersions.STREAM_RESPONSE_SUPPORTED_VERSIONS = ['v3'];
    AssistantSupportedEndpointVersions.FETCH_SUGGESTIONS_SUPPORTED_VERSIONS = ['v2'];
    AssistantSupportedEndpointVersions.SUBMIT_FEEDBACK_SUPPORTED_VERSIONS = ['v2'];
    AssistantSupportedEndpointVersions.SUBMIT_CODE_EXECUTION_SUPPORTED_VERSIONS = ['v2'];
    AssistantSupportedEndpointVersions.PRO_SUMMARIES_SUPPORTED_VERSIONS = ['v1'];
    AssistantSupportedEndpointVersions.PRO_STREAM_RESPONSE_SUPPORTED_VERSIONS = ['v1'];
})(AssistantSupportedEndpointVersions || (AssistantSupportedEndpointVersions = {}));
/**
 * Environment types for the Assistant SDK
 * @alpha
 */
const ASSISTANT_ENVIRONMENT_TYPES = [
    'local-notebooks-dev',
    'local-notebooks-prod',
    'local-dev',
    'cloud-notebooks-prod',
    'cloud-notebooks-staging',
    'enterprise-notebooks-dev',
    'enterprise-notebooks-prod',
    'pyexcel-dev',
    'pyexcel-prod'
];
/**
 * Assistant contexts
 * @alpha
 */
var AssistantContexts;
(function (AssistantContexts) {
    /**
     * Chat context types
     * @alpha
     */
    AssistantContexts.CHAT_CONTEXT_TYPES = [
        'graph-dataframe',
        'describe-dataframe',
        'explain-code',
        'comment-code',
        'improve-code',
        'debug-error',
        'default-python',
        'suggestions-chat'
    ];
})(AssistantContexts || (AssistantContexts = {}));
/**
 * Assistant API base error name
 * @alpha
 */
const ASSISTANT_API_ERROR_NAME = 'ASSISTANT_API_ERROR';
/**
 * Assistant API error
 * @alpha
 */
class AssistantAPIErrorBase extends Error {
    name = ASSISTANT_API_ERROR_NAME;
    request;
    response;
    constructor(message, options) {
        super(message);
        this.request = options.request;
        this.response = options.response;
    }
    toString() {
        let statusText = `failed to fetch ${this.request.url}`;
        if (this.response) {
            statusText = `(status: ${this.response.status})`;
        }
        return `[${this.name}] ${this.message} ${statusText}`;
    }
}
/**
 * AssistantAPINetworkError name
 * @alpha
 */
const ASSISTANT_API_NETWORK_ERROR_NAME = 'ASSISTANT_API_NETWORK_ERROR';
/**
 * Assistant API network error
 * @alpha
 */
class AssistantAPINetworkError extends AssistantAPIErrorBase {
    name = ASSISTANT_API_NETWORK_ERROR_NAME;
}
/**
 * AssistantAPIServerError name
 * @alpha
 */
const ASSISTANT_API_SERVER_ERROR_NAME = 'ASSISTANT_API_SERVER_ERROR';
/**
 * Assistant API server error
 * @alpha
 */
class AssistantAPIServerError extends AssistantAPIErrorBase {
    name = ASSISTANT_API_SERVER_ERROR_NAME;
}
/**
 * Assistant API invalid response error name
 * @alpha
 */
const ASSISTANT_API_INVALID_RESPONSE_ERROR_NAME = 'ASSISTANT_API_INVALID_RESPONSE_ERROR';
/**
 * Assistant API invalid response error
 * @alpha
 */
class AssistantAPIInvalidResponseError extends AssistantAPIErrorBase {
    name = ASSISTANT_API_INVALID_RESPONSE_ERROR_NAME;
}
/**
 * Assistant API unknown error name
 * @alpha
 */
const ASSISTANT_API_UNKNOWN_ERROR_NAME = 'ASSISTANT_API_UNKNOWN_ERROR';
/**
 * Assistant API unknown error
 * @alpha
 */
class AssistantAPIUnknownError extends AssistantAPIErrorBase {
    name = ASSISTANT_API_UNKNOWN_ERROR_NAME;
}
/**
 * Assistant SDK error name
 * @alpha
 */
const ASSISTANT_SDK_ERROR_NAME = 'ASSISTANT_SDK_ERROR';
/**
 * Assistant SDK error
 * @alpha
 */
class AssistantSDKErrorBase extends Error {
    name = ASSISTANT_SDK_ERROR_NAME;
    constructor(message) {
        super(message);
    }
    toString() {
        return `[${this.name}] ${this.message}`;
    }
}
/**
 * Assistant SDK error for invalid version name
 * @alpha
 */
const ASSISTANT_SDK_INVALID_VERSION_ERROR_NAME = 'ASSISTANT_SDK_INVALID_VERSION_ERROR';
/**
 * Assistant SDK error for invalid version
 * @alpha
 */
class AssistantSDKInvalidVersionError extends AssistantSDKErrorBase {
    name = ASSISTANT_SDK_INVALID_VERSION_ERROR_NAME;
}
/**
 * Validate version
 * @alpha
 */
function validateVersion(version, supportedVersions) {
    if (!supportedVersions.includes(version)) {
        throw new AssistantSDKInvalidVersionError(`Invalid version: ${version}. Supported versions: ${supportedVersions.join(', ')}`);
    }
}
/**
 * Assistant SDK error for invalid API URL name
 * @alpha
 */
const ASSISTANT_SDK_INVALID_API_URL_ERROR_NAME = 'ASSISTANT_SDK_INVALID_API_URL_ERROR';
/**
 * Assistant SDK error for invalid API URL
 * @alpha
 */
class AssistantSDKInvalidAPIURLError extends AssistantSDKErrorBase {
    name = ASSISTANT_SDK_INVALID_API_URL_ERROR_NAME;
}
/**
 * Assistant SDK error for unknown error name
 * @alpha
 */
const ASSISTANT_SDK_UNKNOWN_ERROR_NAME = 'ASSISTANT_SDK_UNKNOWN_ERROR';
/**
 * Assistant SDK error for unknown error
 * @alpha
 */
class AssistantSDKUnknownError extends AssistantSDKErrorBase {
    name = ASSISTANT_SDK_UNKNOWN_ERROR_NAME;
}


/***/ }),

/***/ "../../lib/assistant-sdk/lib/responseTokens.js":
/*!*****************************************************!*\
  !*** ../../lib/assistant-sdk/lib/responseTokens.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   containsTokenCount: () => (/* binding */ containsTokenCount),
/* harmony export */   parseMaxTokenCount: () => (/* binding */ parseMaxTokenCount),
/* harmony export */   parseTokenCount: () => (/* binding */ parseTokenCount),
/* harmony export */   removeTokenCount: () => (/* binding */ removeTokenCount)
/* harmony export */ });
const tokenCountIndicator = '__TOKENS_';
// Token count is added by the assistant server at the end of its response
const tokenCountRegex = /__TOKENS_([0-9]+)\/([0-9]+)__/ms;
function containsTokenCount(message) {
    return message.includes(tokenCountIndicator);
}
function parseTokenCount(message) {
    const matches = message.match(tokenCountRegex);
    return matches && matches[1] && !isNaN(+matches[1]) ? parseInt(matches[1]) : 0;
}
function parseMaxTokenCount(message) {
    const matches = message.match(tokenCountRegex);
    return matches && matches[2] && !isNaN(+matches[2]) ? parseInt(matches[2]) : 0;
}
function removeTokenCount(message) {
    const index = message.indexOf(tokenCountIndicator);
    return message.slice(0, index === -1 ? message.length : index);
}


/***/ }),

/***/ "../../lib/assistant-sdk/lib/transformations.js":
/*!******************************************************!*\
  !*** ../../lib/assistant-sdk/lib/transformations.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transformCompletionRequest: () => (/* binding */ transformCompletionRequest),
/* harmony export */   transformContext: () => (/* binding */ transformContext),
/* harmony export */   transformFetchSuggestionsRequest: () => (/* binding */ transformFetchSuggestionsRequest),
/* harmony export */   transformProCompletionRequest: () => (/* binding */ transformProCompletionRequest),
/* harmony export */   transformProFetchSummaryRequest: () => (/* binding */ transformProFetchSummaryRequest),
/* harmony export */   transformSession: () => (/* binding */ transformSession),
/* harmony export */   transformSubmitCodeExecutionRequest: () => (/* binding */ transformSubmitCodeExecutionRequest),
/* harmony export */   transformSubmitFeedbackRequest: () => (/* binding */ transformSubmitFeedbackRequest),
/* harmony export */   transformVariables: () => (/* binding */ transformVariables)
/* harmony export */ });
/**
 * IMPORTANT: DO NOT ADD SPREAD OPERATORS IN ANY OF THE TRANSFORMERS
 * Spread operators hide properties that are not explicitly defined in the types.
 */
function transformSession(session) {
    return {
        user_id: session.userId,
        session_id: session.sessionId,
        iteration_id: 0
    };
}
/**
 * Extracts the last 2000 characters of each variable value.
 */
function transformContext(context) {
    return {
        type: context.type,
        variables: transformVariables(context.variables)
    };
}
/**
 * Extracts the last 2000 characters of each variable value.
 */
function transformVariables(variables) {
    const transformedVariables = {};
    for (const key in variables) {
        if (variables.hasOwnProperty(key)) {
            const value = variables[key];
            transformedVariables[key] = value.slice(-2000);
        }
    }
    return transformedVariables;
}
function transformSubmitFeedbackRequest(publicRequest, enableDataCollection) {
    return {
        feedback: {
            text: publicRequest.feedback.text,
            sentiment: publicRequest.feedback.sentiment,
            message_id: publicRequest.feedback.messageId
        },
        skip_logging: !enableDataCollection,
        session: transformSession(publicRequest.session)
    };
}
function transformCompletionRequest(publicRequest, enableDataCollection) {
    return {
        skip_logging: !enableDataCollection,
        session: transformSession(publicRequest.session),
        chat_context: transformContext(publicRequest.chatContext),
        response_message_id: publicRequest.responseMessageId,
        messages: publicRequest.messages.map(message => ({
            role: message.role,
            content: message.content,
            message_id: message.messageId
        }))
    };
}
function transformProCompletionRequest(publicRequest, enableDataCollection) {
    return {
        skip_logging: !enableDataCollection,
        session: transformSession(publicRequest.session),
        chat_context: transformContext(publicRequest.chatContext),
        response_message_id: publicRequest.responseMessageId,
        chat_summary: publicRequest.chatSummary,
        messages: publicRequest.messages.map(message => ({
            role: message.role,
            content: message.content,
            message_id: message.messageId
        }))
    };
}
function transformFetchSuggestionsRequest(publicRequest, enableDataCollection) {
    return {
        skip_logging: !enableDataCollection,
        session: transformSession(publicRequest.session),
        type: publicRequest.type,
        variables: transformVariables(publicRequest.variables)
    };
}
function transformSubmitCodeExecutionRequest(publicRequest, enableDataCollection) {
    return {
        skip_logging: !enableDataCollection,
        session: transformSession(publicRequest.session),
        execution_result: {
            code: publicRequest.executionResult.code,
            error: publicRequest.executionResult.error,
            success: publicRequest.executionResult.success,
            message_id: publicRequest.executionResult.messageId
        }
    };
}
function transformProFetchSummaryRequest(publicRequest, enableDataCollection) {
    return {
        skip_logging: !enableDataCollection,
        session_id: publicRequest.session.sessionId,
        response_message_id: publicRequest.responseMessageId,
        source: {
            name: publicRequest.source.name,
            type: publicRequest.source.type,
            data: publicRequest.source.data.map(data => ({
                role: data.role,
                content: data.content,
                message_id: data.messageId,
                tokens: data.tokens
            }))
        }
    };
}


/***/ }),

/***/ "../../lib/assistant-sdk/lib/validators.js":
/*!*************************************************!*\
  !*** ../../lib/assistant-sdk/lib/validators.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAE5APIUrl: () => (/* binding */ isAE5APIUrl),
/* harmony export */   validateAPIUrl: () => (/* binding */ validateAPIUrl)
/* harmony export */ });
/* harmony import */ var _publicTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publicTypes */ "../../lib/assistant-sdk/lib/publicTypes.js");

function isAE5APIUrl(url) {
    // API URLs that match "https://*.dsp.anaconda.com" are considered AE5 API URLs
    return url.startsWith('https://') && url.endsWith('.dsp.anaconda.com');
}
function validateAPIUrl(url) {
    const _url = url;
    if (!_url || (_publicTypes__WEBPACK_IMPORTED_MODULE_0__.ANACONDA_ASSISTANT_SUPPORTED_API_URLS.indexOf(_url) === -1 && !isAE5APIUrl(_url))) {
        throw new _publicTypes__WEBPACK_IMPORTED_MODULE_0__.AssistantSDKInvalidAPIURLError(`Invalid API URL: ${url}`);
    }
}


/***/ }),

/***/ "../../lib/assistant/lib/api/access.js":
/*!*********************************************!*\
  !*** ../../lib/assistant/lib/api/access.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasAccess: () => (/* binding */ hasAccess)
/* harmony export */ });
/* harmony import */ var _utils_nucleus_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/nucleus/auth */ "../../lib/assistant/lib/utils/nucleus/auth.js");
/* harmony import */ var _assistant_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assistant-sdk */ "../../lib/assistant/lib/assistant-sdk.js");


async function hasAccess() {
    try {
        const accessToken = await (0,_utils_nucleus_auth__WEBPACK_IMPORTED_MODULE_0__.getAccessToken)();
        if (!accessToken) {
            throw new Error('No access token');
        }
        const sdk = (0,_assistant_sdk__WEBPACK_IMPORTED_MODULE_1__.getAssistantSdk)();
        sdk.accessToken.setAccessToken(accessToken);
        await sdk.fetchAccess();
        return true;
    }
    catch (e) {
        console.log('Error fetching access: ', e);
    }
    return false;
}


/***/ }),

/***/ "../../lib/assistant/lib/api/terms-and-conditions-version.js":
/*!*******************************************************************!*\
  !*** ../../lib/assistant/lib/api/terms-and-conditions-version.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchTermsAndConditionsVersion: () => (/* binding */ fetchTermsAndConditionsVersion)
/* harmony export */ });
/* harmony import */ var _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @anaconda/assistant-components */ "../../lib/assistant-components/lib/index.js");
/* harmony import */ var _assistant_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assistant-sdk */ "../../lib/assistant/lib/assistant-sdk.js");


async function fetchTermsAndConditionsVersion() {
    try {
        return await (0,_assistant_sdk__WEBPACK_IMPORTED_MODULE_1__.getAssistantSdk)().fetchTermsAndConditionsVersion();
    }
    catch (e) {
        throw new _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.AssistantError('network_error', 'There was an issue connecting to the Assistant server. Please try again.', 0);
    }
}


/***/ }),

/***/ "../../lib/assistant/lib/assistant-sdk.js":
/*!************************************************!*\
  !*** ../../lib/assistant/lib/assistant-sdk.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAssistantSdk: () => (/* binding */ getAssistantSdk),
/* harmony export */   initAssistantSdk: () => (/* binding */ initAssistantSdk)
/* harmony export */ });
/* harmony import */ var _anaconda_assistant_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @anaconda/assistant-sdk */ "../../lib/assistant-sdk/lib/index.js");
/* harmony import */ var _utils_nucleus_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/nucleus/auth */ "../../lib/assistant/lib/utils/nucleus/auth.js");


let assistantSdk;
function getAssistantSdk() {
    if (!assistantSdk) {
        throw new Error('Assistant not initialized');
    }
    return assistantSdk;
}
async function initAssistantSdk(options) {
    assistantSdk = new _anaconda_assistant_sdk__WEBPACK_IMPORTED_MODULE_0__.AnacondaAssistant(options);
    try {
        const accessToken = await (0,_utils_nucleus_auth__WEBPACK_IMPORTED_MODULE_1__.getAccessToken)();
        if (!accessToken) {
            throw new Error('No access token');
        }
        assistantSdk.accessToken.setAccessToken(accessToken);
    }
    catch (e) {
        console.log('Error fetching access: ', e);
    }
    return assistantSdk;
}


/***/ }),

/***/ "../../lib/assistant/lib/assistant_plugin.js":
/*!***************************************************!*\
  !*** ../../lib/assistant/lib/assistant_plugin.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assistantCellCommand: () => (/* binding */ assistantCellCommand),
/* harmony export */   assistantCommentCommand: () => (/* binding */ assistantCommentCommand),
/* harmony export */   assistantExplainCommand: () => (/* binding */ assistantExplainCommand),
/* harmony export */   assistantFocusChatInputCommand: () => (/* binding */ assistantFocusChatInputCommand),
/* harmony export */   assistantMenuHeader: () => (/* binding */ assistantMenuHeader),
/* harmony export */   assistantRefactorCommand: () => (/* binding */ assistantRefactorCommand),
/* harmony export */   assistantToggleCommand: () => (/* binding */ assistantToggleCommand),
/* harmony export */   "default": () => (/* binding */ AssistantPlugin)
/* harmony export */ });
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/icon */ "../../lib/assistant/lib/components/icon.js");
/* harmony import */ var _components_assistant_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/assistant-button */ "../../lib/assistant/lib/components/assistant-button.js");
/* harmony import */ var _jupyter_assistantSidebarWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jupyter/assistantSidebarWidget */ "../../lib/assistant/lib/jupyter/assistantSidebarWidget.js");
/* harmony import */ var _jupyter_activateAssistantWithCodeSelection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jupyter/activateAssistantWithCodeSelection */ "../../lib/assistant/lib/jupyter/activateAssistantWithCodeSelection.js");
/* harmony import */ var _jupyter_activateContextMenuAssistantWithCodeSelection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jupyter/activateContextMenuAssistantWithCodeSelection */ "../../lib/assistant/lib/jupyter/activateContextMenuAssistantWithCodeSelection.js");
/* harmony import */ var _jupyter_initializeAssistant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jupyter/initializeAssistant */ "../../lib/assistant/lib/jupyter/initializeAssistant.js");
/* harmony import */ var _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @anaconda/assistant-components */ "../../lib/assistant-components/lib/index.js");
/* harmony import */ var _jupyter_extension_load_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jupyter/extension-load-utils */ "../../lib/assistant/lib/jupyter/extension-load-utils.js");
/* harmony import */ var _assistant_sdk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assistant-sdk */ "../../lib/assistant/lib/assistant-sdk.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config */ "../../lib/assistant/lib/config.js");
/* harmony import */ var _jupyter_syncStateDebounced__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./jupyter/syncStateDebounced */ "../../lib/assistant/lib/jupyter/syncStateDebounced.js");
/* harmony import */ var _utils_nucleus_accountUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/nucleus/accountUtils */ "../../lib/assistant/lib/utils/nucleus/accountUtils.js");
/* harmony import */ var _utils_fileSummarizationUtils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/fileSummarizationUtils */ "../../lib/assistant/lib/utils/fileSummarizationUtils.js");
/* harmony import */ var _utils_nucleus_account__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/nucleus/account */ "../../lib/assistant/lib/utils/nucleus/account.js");
/* harmony import */ var _utils_environmentType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/environmentType */ "../../lib/assistant/lib/utils/environmentType.js");
/* harmony import */ var _jupyter_fetchDiskState__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./jupyter/fetchDiskState */ "../../lib/assistant/lib/jupyter/fetchDiskState.js");


















// This command doesn't do anything, but needs to be defined for the menu item to show up
const assistantMenuHeader = 'assistant:context-header';
const assistantRefactorCommand = 'assistant:refactor';
const assistantCommentCommand = 'assistant:comment';
const assistantExplainCommand = 'assistant:explain';
const assistantToggleCommand = 'assistant:toggle';
const assistantFocusChatInputCommand = 'assistant:focusInput';
const assistantCellCommand = 'assistant:cell';
class AssistantPlugin {
    async activate(app, opts) {
        const { corePlugin, notebookTracker, palette, isJupyterNotebook = false } = opts;
        await _jupyter_extension_load_utils__WEBPACK_IMPORTED_MODULE_7__.sharedCore.setCore(corePlugin);
        if (!_jupyter_extension_load_utils__WEBPACK_IMPORTED_MODULE_7__.sharedCore.getFeatureFlagBool('monorepo-assistant')) {
            return;
        }
        // Allowing login to create new notebooks
        (0,_utils_nucleus_accountUtils__WEBPACK_IMPORTED_MODULE_11__.shareJupyterFrontEndWithLogin)(app);
        const config = _jupyter_extension_load_utils__WEBPACK_IMPORTED_MODULE_7__.sharedCore.getCoreReady().config;
        await (0,_assistant_sdk__WEBPACK_IMPORTED_MODULE_8__.initAssistantSdk)({
            clientVersion: _config__WEBPACK_IMPORTED_MODULE_9__.CLIENT_VERSION,
            // The API URL might come as null from the shared core
            apiUrl: config.assistant.apiUrl || undefined,
            environmentType: config.assistant.environmentType,
            enableDataCollection: false
        });
        await (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_6__.initAssistantStore)({
            getAssistantSdk: _assistant_sdk__WEBPACK_IMPORTED_MODULE_8__.getAssistantSdk,
            getServerUrl: _config__WEBPACK_IMPORTED_MODULE_9__.getServerUrl,
            getNucleusAccount: _utils_nucleus_account__WEBPACK_IMPORTED_MODULE_13__.getNucleusAccount,
            getAccountMaxTokens: _utils_nucleus_accountUtils__WEBPACK_IMPORTED_MODULE_11__.getAccountMaxTokens,
            isLocalDev: _utils_environmentType__WEBPACK_IMPORTED_MODULE_14__.isLocalDev,
            syncDiskStateChained: _jupyter_syncStateDebounced__WEBPACK_IMPORTED_MODULE_10__.syncDiskStateChained,
            unbindSyncDiskStateChained: _jupyter_syncStateDebounced__WEBPACK_IMPORTED_MODULE_10__.unbindSyncDiskStateChained,
            deletedChatKeys: _jupyter_fetchDiskState__WEBPACK_IMPORTED_MODULE_15__.DELETED_CHAT_KEYS,
            getFeatureFlagBool: _jupyter_extension_load_utils__WEBPACK_IMPORTED_MODULE_7__.sharedCore.getCoreReady().featureFlag.getBool
        });
        if (_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_6__.useStore.getState().settings.enableDataCollection) {
            (0,_assistant_sdk__WEBPACK_IMPORTED_MODULE_8__.getAssistantSdk)().enableDataCollection();
        }
        console.log('Assistant extension activated!');
        // Sync state across different ports / windows
        await (0,_jupyter_syncStateDebounced__WEBPACK_IMPORTED_MODULE_10__.syncDiskStateChained)();
        (0,_jupyter_syncStateDebounced__WEBPACK_IMPORTED_MODULE_10__.bindSyncDiskStateChained)();
        // Sync files for summarization
        (0,_utils_fileSummarizationUtils__WEBPACK_IMPORTED_MODULE_12__.syncFilesForSummarization)();
        const assistantSidebarWidget = new _jupyter_assistantSidebarWidget__WEBPACK_IMPORTED_MODULE_2__.AssistantSidebarWidget({
            notebookTracker,
            jupyterFrontEnd: app,
            isJupyterNotebook
        });
        const assistantButton = new _components_assistant_button__WEBPACK_IMPORTED_MODULE_1__.AssistantButton(app.commands);
        (0,_jupyter_initializeAssistant__WEBPACK_IMPORTED_MODULE_5__.initializeAssistant)({ assistant: assistantSidebarWidget, jupyterFrontEnd: app });
        app.commands.addCommand(assistantMenuHeader, {
            icon: _components_icon__WEBPACK_IMPORTED_MODULE_0__.AssistantIcon,
            label: 'AI Assistant',
            isEnabled: () => false,
            // This menu item is just a heading. It doesn't need to do anything but this function is required.
            execute: () => { }
        });
        app.commands.addCommand(assistantRefactorCommand, {
            label: 'Refactor Code',
            execute: (0,_jupyter_activateContextMenuAssistantWithCodeSelection__WEBPACK_IMPORTED_MODULE_4__.getActivateContextMenuAssistantWithCodeSelection)({
                assistant: assistantSidebarWidget,
                command: 'improve-code',
                notebookTracker
            })
        });
        app.commands.addCommand(assistantCommentCommand, {
            label: 'Comment Code',
            execute: (0,_jupyter_activateContextMenuAssistantWithCodeSelection__WEBPACK_IMPORTED_MODULE_4__.getActivateContextMenuAssistantWithCodeSelection)({
                assistant: assistantSidebarWidget,
                command: 'comment-code',
                notebookTracker
            })
        });
        app.commands.addCommand(assistantExplainCommand, {
            label: 'Explain Code',
            execute: (0,_jupyter_activateContextMenuAssistantWithCodeSelection__WEBPACK_IMPORTED_MODULE_4__.getActivateContextMenuAssistantWithCodeSelection)({
                assistant: assistantSidebarWidget,
                command: 'explain-code',
                notebookTracker
            })
        });
        app.commands.addCommand(assistantToggleCommand, {
            label: 'Open Anaconda Assistant',
            execute: () => assistantSidebarWidget.toggleWidget()
        });
        app.commands.addCommand(assistantFocusChatInputCommand, {
            label: 'Focus Anaconda Assistant Chat Input Field',
            execute: () => {
                const assistantChatInputTextarea = document.querySelector('#as-instruction-input-textarea');
                if (assistantChatInputTextarea instanceof HTMLElement) {
                    assistantChatInputTextarea.focus();
                }
            }
        });
        app.contextMenu.addItem({
            rank: 0,
            command: assistantMenuHeader,
            selector: '.jp-Notebook'
        });
        app.contextMenu.addItem({
            rank: 0,
            command: assistantRefactorCommand,
            selector: '.jp-Notebook'
        });
        app.contextMenu.addItem({
            rank: 0,
            command: assistantCommentCommand,
            selector: '.jp-Notebook'
        });
        app.contextMenu.addItem({
            rank: 0,
            command: assistantExplainCommand,
            selector: '.jp-Notebook'
        });
        app.contextMenu.addItem({
            rank: 0,
            command: assistantToggleCommand,
            selector: '.jp-Notebook'
        });
        app.contextMenu.addItem({
            rank: 0,
            selector: '.jp-Notebook',
            type: 'separator'
        });
        palette.addItem({ command: assistantToggleCommand, category: 'Assistant' });
        app.docRegistry.addWidgetExtension('Notebook', assistantButton);
        app.commands.addCommand(assistantCellCommand, {
            icon: _components_icon__WEBPACK_IMPORTED_MODULE_0__.AssistantIcon,
            execute: (0,_jupyter_activateAssistantWithCodeSelection__WEBPACK_IMPORTED_MODULE_3__.getActivateAssistantWithCodeSelection)({
                assistant: assistantSidebarWidget,
                notebookTracker
            })
        });
        app.commands.addKeyBinding({
            command: assistantToggleCommand,
            keys: ['Accel Shift A'],
            selector: 'Body'
        });
        app.commands.addKeyBinding({
            command: assistantFocusChatInputCommand,
            keys: ['Accel Shift C'],
            selector: 'Body'
        });
        const accountInterval = setInterval(async () => {
            const state = _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_6__.useStore.getState();
            if (state.account) {
                clearInterval(accountInterval);
                const context = app.shell.currentWidget?.context;
                const factoryName = context?.factoryName;
                const isNotebook = factoryName && factoryName.toLowerCase() === 'notebook';
                if (!isNotebook &&
                    !Boolean(window.localStorage.getItem('anaconda-assistant-opened-once'))) {
                    await app.commands.execute('notebook:create-new');
                    window.localStorage.setItem('anaconda-assistant-opened-once', 'true');
                }
                await state.updateAccount();
            }
        }, 100);
        // Update account information every 5 minutes,
        // in case the user changes their account tier.
        setInterval(async () => {
            const state = _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_6__.useStore.getState();
            await state.updateAccount();
        }, 1000 * 60 * 5);
        // Detecting logouts from other tabs
        window.addEventListener('storage', async (e) => {
            try {
                if (e.key === 'anaconda-assistant' && e.oldValue && e.newValue) {
                    const previousStorage = JSON.parse(e.oldValue);
                    const newStorage = JSON.parse(e.newValue);
                    const previousStorageState = previousStorage.state;
                    const newStorageState = newStorage.state;
                    const previousTermsVersion = previousStorage.terms.version;
                    const newTermsVersion = newStorage.terms.version;
                    if (!previousStorageState || !newStorageState) {
                        return;
                    }
                    if (previousTermsVersion !== null && newTermsVersion === null) {
                        await (0,_utils_nucleus_accountUtils__WEBPACK_IMPORTED_MODULE_11__.logout)([
                            'An Assistant in another browser tab logged out.',
                            'You will need to log in again to use the Assistant.'
                        ].join(' '));
                    }
                }
            }
            catch (e) {
                console.error('Error detecting logouts from other tabs', e);
            }
        });
    }
}


/***/ }),

/***/ "../../lib/assistant/lib/components/access-screen.js":
/*!***********************************************************!*\
  !*** ../../lib/assistant/lib/components/access-screen.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessScreen: () => (/* binding */ AccessScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @anaconda/assistant-components */ "../../lib/assistant-components/lib/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "../../lib/assistant/lib/config.js");
/* harmony import */ var _utils_nucleus_accountUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/nucleus/accountUtils */ "../../lib/assistant/lib/utils/nucleus/accountUtils.js");




function AccessScreen() {
    const contact_url = 'https://www.anaconda.com/contact';
    const learn_url = 'https://www.anaconda.com/blog/anaconda-assistant-launches-to-bring-instant-data-analysis-code-generation-and-insights-to-users';
    function redirectToPage(url) {
        window.location.href = url;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-container" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { marginTop: 70 } }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-home-screen-container" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-home-screen-icon" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.Icons.ChatBot, null)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-title-text" },
                "Anaconda Assistant",
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-version-text" }, _config__WEBPACK_IMPORTED_MODULE_2__.CLIENT_VERSION)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-access-body-container" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-access-inner-container" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-access-header" }, "Welcome!"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-access-text" },
                        "Unfortunately, you do not seem to have access to the Anaconda Assistant. This could either occur for an issue with your credentials, or because your organization has not requested for access to the Anaconda Assistant for their users. To gain access, please reach out to your organization administrator or our support team. In the meantime, enjoy exploring the many other features and tools available to you. Thank you for being part of the Anaconda community!",
                        ' ',
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: learn_url, target: "_blank" }, 'Learn About Anaconda Assistant'),
                        '.')),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-access-inner-container-buttons" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "as-access-button", onClick: () => redirectToPage(contact_url) }, "Contact Us"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "as-logout-button", onClick: () => (0,_utils_nucleus_accountUtils__WEBPACK_IMPORTED_MODULE_3__.logout)() }, "Logout"))))));
}


/***/ }),

/***/ "../../lib/assistant/lib/components/assistant-button.js":
/*!**************************************************************!*\
  !*** ../../lib/assistant/lib/components/assistant-button.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssistantButton: () => (/* binding */ AssistantButton)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "../../lib/assistant/lib/components/icon.js");
/* harmony import */ var _assistant_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assistant_plugin */ "../../lib/assistant/lib/assistant_plugin.js");



class AssistantButton {
    /**
     * Instantiate a new Jupyter Assistant.
     * @param commands The command registry.
     */
    constructor(commands) {
        this._commands = commands;
    }
    /**
     * Create a new extension object.
     */
    createNew(panel) {
        const button = new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.ToolbarButton({
            tooltip: 'Anaconda Assistant',
            icon: _icon__WEBPACK_IMPORTED_MODULE_1__.AssistantIcon,
            onClick: () => {
                this._commands.execute(_assistant_plugin__WEBPACK_IMPORTED_MODULE_2__.assistantToggleCommand);
            }
        });
        // TODO:
        // This seems to be needed for v4.
        // On window reload, some extensions might not have loaded, therefore the Assistant can't be placed where it goes on Cloud Notebooks
        panel.toolbar.insertAfter('cellType', 'assistant', button);
        // Putting the assistant button before the spacer also means putting it after the Panel menu buttons
        panel.toolbar.insertBefore('spacer', 'assistant', button);
        return button;
    }
    _commands;
}


/***/ }),

/***/ "../../lib/assistant/lib/components/assistant-in-cell-widget.js":
/*!**********************************************************************!*\
  !*** ../../lib/assistant/lib/components/assistant-in-cell-widget.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InCellAssistantMenu: () => (/* binding */ InCellAssistantMenu),
/* harmony export */   showInCellMenuWidget: () => (/* binding */ showInCellMenuWidget)
/* harmony export */ });
/* harmony import */ var focus_trap_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! focus-trap-react */ "../../node_modules/focus-trap-react/dist/focus-trap-react.js");
/* harmony import */ var focus_trap_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(focus_trap_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-popper */ "../../node_modules/react-popper/lib/esm/usePopper.js");
/* harmony import */ var _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @anaconda/assistant-components */ "../../lib/assistant-components/lib/index.js");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lumino/widgets */ "webpack/sharing/consume/default/@lumino/widgets");
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lumino_widgets__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assistant_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assistant_plugin */ "../../lib/assistant/lib/assistant_plugin.js");







function showInCellMenuWidget({ activateWidget }) {
    const myWidget = _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_3__.ReactWidget.create(react__WEBPACK_IMPORTED_MODULE_1___default().createElement(InCellAssistantMenu, { onClose: () => _lumino_widgets__WEBPACK_IMPORTED_MODULE_4__.Widget.detach(myWidget), activateWidget: activateWidget }));
    _lumino_widgets__WEBPACK_IMPORTED_MODULE_4__.Widget.attach(myWidget, document.body);
}
function useGetCurrentCellAssistantButtonRef(setRef) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const buttonEls = document.querySelectorAll(`[data-command="${_assistant_plugin__WEBPACK_IMPORTED_MODULE_5__.assistantCellCommand}"]`);
        // Buttons can be found in multiple places in the DOM because of slots. We wanna find the one that is rendered.
        let positionedButtonEl = undefined;
        for (const buttonEl of buttonEls) {
            const buttonRect = buttonEl.getBoundingClientRect();
            if (buttonRect.x !== 0 && buttonRect.y !== 0) {
                console.log('Found button');
                positionedButtonEl = buttonEl;
                break;
            }
        }
        const lastButtonEl = buttonEls[buttonEls.length - 1]?.parentElement;
        const buttonRect = lastButtonEl?.getBoundingClientRect();
        console.log({
            positionedButtonEl,
            buttons: buttonEls,
            buttonEl: lastButtonEl,
            buttonRect: buttonRect?.toJSON()
        });
        setRef(positionedButtonEl);
    }, []);
}
function InCellAssistantMenu({ activateWidget, onClose }) {
    const [elementRef, setElementRef] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    const [popperElement, setPopperElement] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    const { styles, attributes } = (0,react_popper__WEBPACK_IMPORTED_MODULE_6__.usePopper)(elementRef, popperElement, {
        strategy: 'fixed',
        placement: 'bottom-end'
    });
    const [makeChatRequest, resetToHomeScreen, selectedText] = (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_2__.useStore)(state => [
        state.makeChatRequest,
        state.resetToHomeScreen,
        (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_2__.getActiveNotebook)(state)?.notebookState.selectedText
    ]);
    useGetCurrentCellAssistantButtonRef(setElementRef);
    function handleSelection(type) {
        activateWidget();
        resetToHomeScreen();
        makeChatRequest({
            context: {
                type,
                variables: {
                    active_cell_code: selectedText?.cell.source,
                    selected_code: selectedText?.text
                }
            },
            instruction: ''
        });
        onClose();
    }
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "as-in-cell-menu-backdrop", onClick: onClose }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { ref: setPopperElement, className: "lm-Widget lm-Menu as-in-cell-menu", style: styles.popper, ...attributes.popper },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement((focus_trap_react__WEBPACK_IMPORTED_MODULE_0___default()), { focusTrapOptions: {
                    allowOutsideClick: true,
                    // Doesn't work so we do click outside differently
                    // clickOutsideDeactivates: true,
                    escapeDeactivates: true,
                    onDeactivate: () => onClose,
                    isKeyForward: e => e.key === 'ArrowDown',
                    isKeyBackward: e => e.key === 'ArrowUp'
                } },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", { className: "lm-Menu-content", role: "menu", onKeyDown: e => {
                        if (e.key === 'Escape') {
                            onClose();
                        }
                    } },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(MenuItem, { label: "Explain the selected code", onSelect: () => handleSelection('explain-code') }),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(MenuItem, { label: "Add comments to the selected code", onSelect: () => handleSelection('comment-code') }),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(MenuItem, { label: "Refactor the selected code", onSelect: () => handleSelection('improve-code') }),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(WarningMenuItem, null))))));
}
function WarningMenuItem() {
    const [enableDataCollection] = (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_2__.useStore)(state => [state.settings.enableDataCollection]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", { className: "lm-Menu-item" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "lm-Menu-itemIcon" }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "lm-Menu-itemLabel as-menu-item-label-message" }, `
          By adding code to a conversation, the selected code cell will be sent to
          ${enableDataCollection ? 'the Anaconda Servers and to ' : ''}
          OpenAI.
        `)));
}
function MenuItem({ autoFocus, label, shortcut, onSelect }) {
    const [isHovered, setIsHovered] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", { autoFocus: autoFocus, tabIndex: 0, role: "menuitem", className: 'lm-Menu-item ' + (isHovered ? ' lm-mod-active' : ''), "data-type": "command", onMouseOver: () => setIsHovered(true), onMouseOut: () => setIsHovered(false), onFocus: () => setIsHovered(true), onBlur: () => setIsHovered(false), onKeyDown: e => {
            if (e.key === 'Enter') {
                onSelect?.();
            }
            // console.log('onKeyDown', e.key);
        }, onClick: onSelect },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "lm-Menu-itemIcon" }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "lm-Menu-itemLabel" }, label),
        shortcut && react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "lm-Menu-itemShortcut" }, shortcut)));
}


/***/ }),

/***/ "../../lib/assistant/lib/components/assistant-login.js":
/*!*************************************************************!*\
  !*** ../../lib/assistant/lib/components/assistant-login.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssistantLogin: () => (/* binding */ AssistantLogin)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_nucleus_accountUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/nucleus/accountUtils */ "../../lib/assistant/lib/utils/nucleus/accountUtils.js");
/* harmony import */ var _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @anaconda/assistant-components */ "../../lib/assistant-components/lib/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "../../lib/assistant/lib/config.js");




function AssistantLogin() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-container" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-login-container" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-login-header" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-login-icon" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_2__.Icons.AnacondaLogo, null)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-title-text" },
                    "Anaconda Assistant",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-subtitle-text" }, "AI-powered coding, insights and debugging in your notebooks."))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-login-body" },
                "To enable the following extensions, create an account or sign in.",
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_2__.Icons.Sparkle, null),
                        " Anaconda Assistant",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-version-text" }, _config__WEBPACK_IMPORTED_MODULE_3__.CLIENT_VERSION)),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "coming-soon" }, "Coming soon!"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "disabled" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_2__.Icons.DataCatalog, null),
                        " Data Catalogs"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "disabled" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_2__.Icons.Panel, null),
                        " Panel Deployments"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "disabled" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_2__.Icons.Share, null),
                        " Sharing")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "as-create-account-button", onClick: _utils_nucleus_accountUtils__WEBPACK_IMPORTED_MODULE_1__.login }, "Create Account"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-login-sign-in-text" },
                    "Already have an account? ",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { onClick: _utils_nucleus_accountUtils__WEBPACK_IMPORTED_MODULE_1__.login }, "Sign In"))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-login-footer" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-login-help" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_2__.Icons.Question, null)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-login-footer-text" },
                    "For more information, read our",
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "https://docs.anaconda.com/free/anaconda-notebooks/anaconda-assistant/", target: "_blank" }, "Anaconda Assistant documentation"),
                    ".")))));
}


/***/ }),

/***/ "../../lib/assistant/lib/components/assistant-panel-container.js":
/*!***********************************************************************!*\
  !*** ../../lib/assistant/lib/components/assistant-panel-container.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssistantPanelContainer: () => (/* binding */ AssistantPanelContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_dataframe_checker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dataframe-checker */ "../../lib/assistant/lib/utils/dataframe-checker.js");
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyterlab/notebook */ "webpack/sharing/consume/default/@jupyterlab/notebook");
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jupyterlab_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jupyterlab/services */ "webpack/sharing/consume/default/@jupyterlab/services");
/* harmony import */ var _jupyterlab_services__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_services__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assistant_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assistant-panel */ "../../lib/assistant/lib/components/assistant-panel.js");
/* harmony import */ var _notebook_error_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notebook-error-helper */ "../../lib/assistant/lib/components/notebook-error-helper.js");
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! usehooks-ts */ "../../node_modules/usehooks-ts/dist/index.mjs");
/* harmony import */ var _utils_text_selection_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/text-selection-utils */ "../../lib/assistant/lib/utils/text-selection-utils.js");
/* harmony import */ var _assistant_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assistant-login */ "../../lib/assistant/lib/components/assistant-login.js");
/* harmony import */ var _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @anaconda/assistant-components */ "../../lib/assistant-components/lib/index.js");
/* harmony import */ var _utils_environmentType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/environmentType */ "../../lib/assistant/lib/utils/environmentType.js");
/* harmony import */ var _jupyter_syncStateDebounced__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../jupyter/syncStateDebounced */ "../../lib/assistant/lib/jupyter/syncStateDebounced.js");
/* harmony import */ var _utils_ChatStarters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/ChatStarters */ "../../lib/assistant/lib/utils/ChatStarters.js");
/* harmony import */ var _assistant_sdk__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assistant-sdk */ "../../lib/assistant/lib/assistant-sdk.js");















function AssistantPanelContainer({ tracker }) {
    const [account, path, setPath, setCellError] = (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_8__.useStore)(state => [
        state.account,
        state.path,
        state.setPath,
        state.setCellError
    ]);
    const restarted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const executingCode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const jupyterSelection = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_13__.useInterval)(() => {
        // Every 800ms we check the current text selection
        checkTextSelection(tracker);
    }, 800);
    const checkNotebookVariables = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        const requestExecute = getKernel(tracker)?.requestExecute({ code: _utils_dataframe_checker__WEBPACK_IMPORTED_MODULE_1__.dataFrameCheckerPython }, false);
        if (requestExecute) {
            requestExecute.onIOPub = (msg) => {
                if (_jupyterlab_services__WEBPACK_IMPORTED_MODULE_3__.KernelMessage.isExecuteResultMsg(msg)) {
                    if (msg.content.data && msg.content.data['text/plain']) {
                        const nbState = (0,_utils_dataframe_checker__WEBPACK_IMPORTED_MODULE_1__.parsePythonResult)(msg.content.data['text/plain']);
                        if (nbState) {
                            const path = tracker.currentWidget?.context.path || '';
                            setPath(path, nbState, _utils_ChatStarters__WEBPACK_IMPORTED_MODULE_11__.getNewChatStarters);
                        }
                    }
                }
            };
        }
    }, [setPath, tracker]);
    const cellExecuted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_, context) => {
        const { cell, notebook, success, error } = context;
        if (!success && error) {
            setCellError((0,_notebook_error_helper__WEBPACK_IMPORTED_MODULE_5__.extractErrorContext)(cell, notebook, error.message));
        }
        if (executingCode.current?.cellId && executingCode.current?.cellId === cell.model.id) {
            (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_8__.postExecutionResult)((0,_assistant_sdk__WEBPACK_IMPORTED_MODULE_12__.getAssistantSdk)(), { ...executingCode.current }, success, error);
            executingCode.current = null;
        }
        checkNotebookVariables();
    }, [setCellError]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        function notebookChanged(_, context) {
            // We want to set the path to the new notebook as soon as we switch, even if we don't
            // have the notebook state yet.
            setPath(context?.sessionContext.path || '', { user: '', dataframes: [] }, _utils_ChatStarters__WEBPACK_IMPORTED_MODULE_11__.getNewChatStarters);
            // When the notebook changes, we sync the disk state to the store
            (0,_jupyter_syncStateDebounced__WEBPACK_IMPORTED_MODULE_10__.syncDiskStateChained)();
            if (!context?.sessionContext.session) {
                // When opening a new notebook, the session may not be available yet, so we need to
                // wait a bit before checking the notebook variables.
                setTimeout(checkNotebookVariables, 1000);
            }
            else {
                checkNotebookVariables();
            }
        }
        function kernelStatusChanged(_, status) {
            if (status === 'restarting' || status === 'autorestarting') {
                restarted.current = true;
            }
            else if (status === 'idle' && restarted.current) {
                restarted.current = false;
                checkNotebookVariables();
            }
        }
        checkNotebookVariables();
        _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_2__.NotebookActions.executed.connect(cellExecuted);
        tracker.currentChanged.connect(notebookChanged);
        getKernel(tracker)?.statusChanged.connect(kernelStatusChanged);
        return () => {
            _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_2__.NotebookActions.executed.disconnect(cellExecuted);
            tracker.currentChanged.disconnect(notebookChanged);
            getKernel(tracker)?.statusChanged.disconnect(kernelStatusChanged);
        };
    }, [checkNotebookVariables, cellExecuted, setPath, tracker]);
    function checkTextSelection(tracker) {
        const editor = tracker.currentWidget?.content?.activeCell?.editor;
        const isMarkdown = editor?.model.mimeType === 'text/x-ipythongfm';
        if (editor && !isMarkdown) {
            const selection = editor.getSelection();
            // We use the jupyterSelection ref as a first check to see if any selection has
            // changed. If it has, we update the selected text on the global store
            const selectionEqual = (0,_utils_text_selection_utils__WEBPACK_IMPORTED_MODULE_6__.isSelectionEqual)(jupyterSelection.current, selection);
            if (!selectionEqual) {
                const selectedText = (0,_utils_text_selection_utils__WEBPACK_IMPORTED_MODULE_6__.getSelectionFromEditor)(editor, selection);
                _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_8__.useStore.getState().setTextSelection(selectedText);
                jupyterSelection.current = (0,_utils_text_selection_utils__WEBPACK_IMPORTED_MODULE_6__.convertSelection)(selection);
            }
        }
    }
    async function addCodeToNotebook(code, activeMessageId, session, inPlace = false) {
        const notebook = tracker.currentWidget;
        const _addCodeToNotebook = _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_8__.useStore.getState().settings.addCodeToNotebook || 'below-active-cell';
        if (notebook) {
            if (!inPlace) {
                switch (_addCodeToNotebook) {
                    case 'below-active-cell':
                        _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_2__.NotebookActions.insertBelow(notebook.content);
                        break;
                    case 'at-end-of-notebook':
                        notebook.content.activeCellIndex = notebook.content.widgets.length - 1;
                        _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_2__.NotebookActions.insertBelow(notebook.content);
                        break;
                    case 'in-place':
                        break;
                }
            }
            await notebook.content?.activeCell?.ready;
            _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_2__.NotebookActions.replaceSelection(notebook.content, code);
            const cellId = notebook.content.activeCell?.model.id;
            executingCode.current = { code, cellId, activeMessageId, session };
            await _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_2__.NotebookActions.run(notebook.content, notebook.sessionContext);
        }
    }
    function getActiveCodeCell() {
        // TODO: This seems only needed in v3 in the monorepo, not in the jupyterassistant repo
        return (tracker.currentWidget?.content.activeCell?.model.sharedModel).source || '';
    }
    if (!account && (0,_utils_environmentType__WEBPACK_IMPORTED_MODULE_9__.isLocalNotebooks)()) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_assistant_login__WEBPACK_IMPORTED_MODULE_7__.AssistantLogin, null);
    }
    return path ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_assistant_panel__WEBPACK_IMPORTED_MODULE_4__.AssistantPanel, { tracker: tracker, addCodeToNotebook: addCodeToNotebook, getActiveCodeCell: getActiveCodeCell })) : null;
}
function getKernel(tracker) {
    return tracker.currentWidget?.sessionContext.session?.kernel;
}


/***/ }),

/***/ "../../lib/assistant/lib/components/assistant-panel-widget.js":
/*!********************************************************************!*\
  !*** ../../lib/assistant/lib/components/assistant-panel-widget.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssistantPanelWidget: () => (/* binding */ AssistantPanelWidget)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assistant_panel_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assistant-panel-container */ "../../lib/assistant/lib/components/assistant-panel-container.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/styles/createTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/styles/ThemeProvider.js");




class AssistantPanelWidget extends _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.ReactWidget {
    _notebookTracker;
    constructor(notebookTracker) {
        super();
        this._notebookTracker = notebookTracker;
    }
    render() {
        const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"])({
            palette: {
                primary: {
                    main: '#43B049'
                }
            }
        });
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { theme: theme },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_assistant_panel_container__WEBPACK_IMPORTED_MODULE_2__.AssistantPanelContainer, { tracker: this._notebookTracker })));
    }
}


/***/ }),

/***/ "../../lib/assistant/lib/components/assistant-panel.js":
/*!*************************************************************!*\
  !*** ../../lib/assistant/lib/components/assistant-panel.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssistantPanel: () => (/* binding */ AssistantPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @anaconda/assistant-components */ "../../lib/assistant-components/lib/index.js");
/* harmony import */ var _chat_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-panel */ "../../lib/assistant/lib/components/chat-panel.js");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-error-boundary */ "../../node_modules/react-error-boundary/dist/react-error-boundary.development.esm.js");
/* harmony import */ var _error_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-screen */ "../../lib/assistant/lib/components/error-screen.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings */ "../../lib/assistant/lib/components/settings.js");
/* harmony import */ var _access_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./access-screen */ "../../lib/assistant/lib/components/access-screen.js");
/* harmony import */ var _api_terms_and_conditions_version__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/terms-and-conditions-version */ "../../lib/assistant/lib/api/terms-and-conditions-version.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "../../lib/assistant/lib/config.js");









function AssistantPanel(props) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_error_boundary__WEBPACK_IMPORTED_MODULE_8__.ErrorBoundary, { FallbackComponent: _error_screen__WEBPACK_IMPORTED_MODULE_3__.ErrorScreen },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(InnerPanel, { ...props })));
}
function InnerPanel(props) {
    const [olderThan13, setOlderThan13] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const [access, accepted, acceptTerms, settingsOpen, enableDataCollection, setEnableDataCollection, menuOpen, setMenuOpen, toggleMenuOpen, resetToHomeScreen, toggleSettings, chats, activeChat, setActiveChat, deleteChat] = (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.useStore)(state => [
        state.access,
        state.terms.accepted,
        state.acceptTerms,
        state.settings.open,
        state.settings.enableDataCollection,
        state.setEnableDataCollection,
        state.menuOpen,
        state.setMenuOpen,
        state.toggleMenuOpen,
        state.resetToHomeScreen,
        state.toggleSettings,
        (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.getActiveNotebookChats)(state),
        (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.getActiveChat)(state),
        state.setActiveChat,
        state.deleteChat
    ]);
    if (!access) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_access_screen__WEBPACK_IMPORTED_MODULE_5__.AccessScreen, null);
    }
    if (!accepted) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "as-container" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.Header, { disableMenu: true, activeChat: !!activeChat, clientVersion: _config__WEBPACK_IMPORTED_MODULE_7__.CLIENT_VERSION, chatsHistoryOpen: menuOpen, showSettings: _config__WEBPACK_IMPORTED_MODULE_7__.SHOW_SETTINGS, settingsOpen: settingsOpen, toggleChatsHistory: toggleMenuOpen, newChatClicked: resetToHomeScreen, toggleSettings: toggleSettings }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.TermsAndConditionsPage, { accept: async () => {
                    let version = _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.useStore.getState().terms.version;
                    if (!version) {
                        try {
                            version = await (0,_api_terms_and_conditions_version__WEBPACK_IMPORTED_MODULE_6__.fetchTermsAndConditionsVersion)();
                        }
                        catch (e) {
                            console.error('Failed to fetch terms version');
                            _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.useStore.getState().logout();
                            return;
                        }
                    }
                    acceptTerms(version, true);
                }, enableDataCollection: enableDataCollection, setEnableDataCollection: setEnableDataCollection, olderThan13: olderThan13, setOlderThan13: setOlderThan13 })));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "as-container" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.Header, { activeChat: !!activeChat, clientVersion: _config__WEBPACK_IMPORTED_MODULE_7__.CLIENT_VERSION, chatsHistoryOpen: menuOpen, showSettings: _config__WEBPACK_IMPORTED_MODULE_7__.SHOW_SETTINGS, settingsOpen: settingsOpen, toggleChatsHistory: toggleMenuOpen, newChatClicked: resetToHomeScreen, toggleSettings: toggleSettings }),
        settingsOpen ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_settings__WEBPACK_IMPORTED_MODULE_4__.SettingsWrapper, null)) : menuOpen ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.HistoryPage, { chats: chats, activeChat: activeChat, setActiveChat: setActiveChat, deleteChat: deleteChat, closeHistory: () => setMenuOpen(false) })) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chat_panel__WEBPACK_IMPORTED_MODULE_2__.ChatPanel, { ...props }))));
}


/***/ }),

/***/ "../../lib/assistant/lib/components/back-button.js":
/*!*********************************************************!*\
  !*** ../../lib/assistant/lib/components/back-button.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackButton: () => (/* binding */ BackButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @anaconda/assistant-components */ "../../lib/assistant-components/lib/index.js");


function BackButton() {
    const [shouldShowBackButton, previousChatName, gotoPreviousChat] = (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.useStore)(state => [
        (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.showBackButton)(state),
        (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.getPreviousChatName)(state),
        state.gotoPreviousChat
    ]);
    // Don't show the back button unless necessary (see showBackButton in state-fns.ts)
    if (!shouldShowBackButton) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-back-button-container" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "as-back-button", onClick: gotoPreviousChat },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.Icons.ChevronLeft, null)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-back-button-title" },
                    "Resume previous chat: ",
                    previousChatName)))));
}


/***/ }),

/***/ "../../lib/assistant/lib/components/chat-messages.js":
/*!***********************************************************!*\
  !*** ../../lib/assistant/lib/components/chat-messages.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatMessages: () => (/* binding */ ChatMessages)
/* harmony export */ });
/* harmony import */ var _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @anaconda/assistant-components */ "../../lib/assistant-components/lib/index.js");
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/notebook */ "webpack/sharing/consume/default/@jupyterlab/notebook");
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_environmentType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/environmentType */ "../../lib/assistant/lib/utils/environmentType.js");
/* harmony import */ var _utils_nucleus_accountUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/nucleus/accountUtils */ "../../lib/assistant/lib/utils/nucleus/accountUtils.js");
/* harmony import */ var _back_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./back-button */ "../../lib/assistant/lib/components/back-button.js");






const exportMessageToNotebook = (tracker) => async (message) => {
    const notebook = tracker.currentWidget;
    if (!notebook)
        return;
    let addCodeToNotebook = _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.useStore.getState().settings.addCodeToNotebook || 'below-active-cell';
    if (addCodeToNotebook === 'in-place') {
        addCodeToNotebook = 'below-active-cell';
    }
    const messageBlocks = (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.extractMessageBlocks)(message.content);
    let hasPrintedRole = false;
    for (const block of messageBlocks) {
        switch (addCodeToNotebook) {
            case 'below-active-cell':
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook.content);
                break;
            case 'at-end-of-notebook':
                notebook.content.activeCellIndex = notebook.content.widgets.length - 1;
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook.content);
                break;
        }
        if (block.type === 'python') {
            _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook.content, 'code');
        }
        else {
            _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook.content, 'markdown');
        }
        const role = message.role === 'user' ? 'User' : 'Assistant';
        const parts = [`# ${role}`, block.content];
        if (hasPrintedRole) {
            parts.shift();
        }
        else {
            hasPrintedRole = true;
        }
        const content = parts.join('\n');
        await notebook.content?.activeCell?.ready;
        _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.replaceSelection(notebook.content, content);
        await _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.run(notebook.content, notebook.sessionContext);
    }
};
function ChatMessages({ tracker, addCodeToNotebook, scrollFn }) {
    const contextSelectorFeatureFlagEnabled = (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.getAssistantStore)().getFeatureFlagBool('assistant-show-context-selector', false);
    const [messages, chatContext, inProgressResponse, inProgressType, activeChatSession, retryError, selectedText, activeNotebookName, deleteMessagesAfterId, submitFeedback, response, isProTier, resetActiveChat] = (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.useStore)(state => {
        const activeChat = (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.getActiveChat)(state);
        const activeNotebook = (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.getActiveNotebook)(state);
        return [
            activeChat?.messages,
            activeChat?.context,
            activeChat?.inProgress,
            activeChat?.inProgress?.type,
            activeChat?.session,
            state.retryError,
            activeNotebook?.notebookState.selectedText?.text,
            activeNotebook?.path,
            state.deleteMessagesStartingWith,
            state.submitFeedback,
            (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.getInProgressResponse)(state),
            state.account?.metadata?.is_pro_tier,
            state.resetActiveChat
        ];
    });
    if (!messages || !chatContext)
        return null;
    const initialMessage = messages[0];
    async function exportChatToNotebook() {
        const notebook = tracker.currentWidget;
        if (!(notebook && messages))
            return;
        let addCodeToNotebook = _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.useStore.getState().settings.addCodeToNotebook || 'below-active-cell';
        if (addCodeToNotebook === 'in-place') {
            addCodeToNotebook = 'below-active-cell';
        }
        for (const message of messages) {
            const messageBlocks = (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.extractMessageBlocks)(message.content);
            let hasPrintedRole = false;
            for (const block of messageBlocks) {
                switch (addCodeToNotebook) {
                    case 'below-active-cell':
                        _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook.content);
                        break;
                    case 'at-end-of-notebook':
                        notebook.content.activeCellIndex = notebook.content.widgets.length - 1;
                        _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.insertBelow(notebook.content);
                        break;
                }
                if (block.type === 'python') {
                    _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook.content, 'code');
                }
                else {
                    _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.changeCellType(notebook.content, 'markdown');
                }
                const role = message.role === 'user' ? 'User' : 'Assistant';
                const parts = [`# ${role}`, block.content];
                if (hasPrintedRole) {
                    parts.shift();
                }
                else {
                    hasPrintedRole = true;
                }
                const content = parts.join('\n');
                await notebook.content?.activeCell?.ready;
                _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.replaceSelection(notebook.content, content);
                await _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.NotebookActions.run(notebook.content, notebook.sessionContext);
            }
        }
    }
    function handleFeedback(messageId, sentiment, text) {
        submitFeedback({ messageId, sentiment, text });
    }
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_back_button__WEBPACK_IMPORTED_MODULE_5__.BackButton, null),
        initialMessage?.role === 'user' && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.UserMessage, { isInitialMessage: true, deleteMessagesAfterId: (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.useStore)(state => state.deleteMessagesStartingWith), exportMessage: exportMessageToNotebook(tracker), message: {
                ...initialMessage,
                content: determineFirstMessageText(chatContext, initialMessage.content, contextSelectorFeatureFlagEnabled ? activeNotebookName : undefined)
            } })),
        messages.slice(1).map((message) => {
            // Skip attachment messages,
            // this include the message at the beginning of a chat and subsequent messages after the user tags a file with `@`
            if (message.content.startsWith(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.attachmentMessagePrefix) &&
                (message.content.includes(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.dataframeMessageIdentifier) ||
                    message.content.includes(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.fileMessageIdentifier))) {
                return null;
            }
            switch (message.role) {
                case 'user':
                    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.UserMessage, { key: message.messageId, deleteMessagesAfterId: deleteMessagesAfterId, exportMessage: exportMessageToNotebook(tracker), message: {
                            ...message,
                            content: (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.cleanMessageWithAttachmentPrefix)(message.content)
                        } }));
                case 'assistant':
                    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.CompletedMessage, { key: message.messageId, runCode: addCodeToNotebook, assistantMessage: message, selectedText: selectedText, activeChatSession: activeChatSession, handleFeedback: handleFeedback, handleExportMessage: exportMessageToNotebook(tracker), handleDeleteMessageAfterId: deleteMessagesAfterId }));
            }
        }),
        inProgressType === 'active' && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.ActiveMessage, { response: response, selectedText: selectedText, activeChatSession: activeChatSession, scrollFn: scrollFn })),
        inProgressType === 'error' && inProgressResponse && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.ErrorMessage, { errorMessage: 'message' in inProgressResponse ? inProgressResponse.message : 'unknown error', retryError: retryError, showLogoutButton: Boolean((0,_utils_environmentType__WEBPACK_IMPORTED_MODULE_3__.isLocalNotebooks)()), isProTier: isProTier, resetChat: resetActiveChat, logout: _utils_nucleus_accountUtils__WEBPACK_IMPORTED_MODULE_4__.logout })),
        inProgressType ? null : (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.Button, { asChildName: "export-chat", onClick: exportChatToNotebook },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.Icons.ChevronLeft, null),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, "Export and run this chat in your Notebook")))));
}
function determineFirstMessageText(context, content, notebookName) {
    const suffix = (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.formatContextVariables)(context, content, notebookName);
    switch (context.type) {
        case 'graph-dataframe':
            return `Generate graph for ${suffix}`;
        case 'describe-dataframe':
            return `Explain data in ${suffix}`;
        case 'explain-code':
            return `Explain ${suffix}`;
        case 'comment-code':
            return `Comment ${suffix}`;
        case 'improve-code':
            return `Refactor ${suffix}`;
        case 'debug-error':
            return `Debug error using ${suffix}`;
        case 'suggestions-chat':
        case 'default-python':
            if (content.startsWith(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.attachmentMessagePrefix)) {
                return (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.cleanMessageWithAttachmentPrefix)(content);
            }
            else {
                return `${content} (using ${suffix})`;
            }
        default:
            // Unknown context type
            return content;
    }
}


/***/ }),

/***/ "../../lib/assistant/lib/components/chat-panel.js":
/*!********************************************************!*\
  !*** ../../lib/assistant/lib/components/chat-panel.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatPanel: () => (/* binding */ ChatPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @anaconda/assistant-components */ "../../lib/assistant-components/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chat_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-messages */ "../../lib/assistant/lib/components/chat-messages.js");
/* harmony import */ var _utils_environmentType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/environmentType */ "../../lib/assistant/lib/utils/environmentType.js");
/* harmony import */ var _utils_nucleus_accountUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/nucleus/accountUtils */ "../../lib/assistant/lib/utils/nucleus/accountUtils.js");
/* harmony import */ var _assistant_sdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assistant-sdk */ "../../lib/assistant/lib/assistant-sdk.js");
/* harmony import */ var _utils_fileSummarizationUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/fileSummarizationUtils */ "../../lib/assistant/lib/utils/fileSummarizationUtils.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "../../lib/assistant/lib/config.js");









function ChatPanel({ tracker, addCodeToNotebook, getActiveCodeCell }) {
    const activeChatKey = (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.useStore)(state => (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.getActiveNotebook)(state)?.activeChatKey);
    const messageEndRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [activeNotebook, selectChatStarter, makeChatRequest, enableDataCollection, suggestionDataFrame, dataFrames, isProTier, updateSuggestions, resetActiveChat, setSuggestionsDataframe] = (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.useStore)(state => {
        const activeNotebook = (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.getActiveNotebook)(state);
        return [
            activeNotebook,
            state.selectChatStarter,
            state.makeChatRequest,
            state.settings.enableDataCollection,
            activeNotebook?.suggestionState.dataframe,
            activeNotebook?.notebookState.dataframes,
            state.account?.metadata?.is_pro_tier,
            state.updateSuggestions,
            state.resetActiveChat,
            state.setSuggestionsDataframe
        ];
    });
    const showLogoutButton = Boolean((0,_utils_environmentType__WEBPACK_IMPORTED_MODULE_4__.isLocalNotebooks)());
    const chatStarters = activeNotebook?.homeScreen?.chatStarters ?? null;
    const selectedChatStarter = activeNotebook?.homeScreen?.selectedChatStarter ?? null;
    const suggestionState = activeNotebook?.suggestionState;
    function scrollToBottom() {
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const throttledScroll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((0,lodash__WEBPACK_IMPORTED_MODULE_2__.throttle)(scrollToBottom, 500), []);
    const handleUpdateSuggestions = (activeCell, type, dataframe) => {
        updateSuggestions(activeCell, type, dataframe, (0,_assistant_sdk__WEBPACK_IMPORTED_MODULE_6__.getAssistantSdk)());
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-chat-main-section" },
            !activeChatKey ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.HomeScreen, { chatStarters: chatStarters, selectedChatStarter: selectedChatStarter, selectChatStarter: selectChatStarter, makeChatRequest: makeChatRequest, getActiveCodeCell: getActiveCodeCell, dataFrames: dataFrames, enableDataCollection: enableDataCollection, activeNotebook: Boolean(activeNotebook), suggestionState: suggestionState, updateSuggestions: handleUpdateSuggestions, setSuggestionsDataframe: setSuggestionsDataframe, isProTier: isProTier, resetActiveChat: resetActiveChat, showLogoutButton: showLogoutButton, logout: _utils_nucleus_accountUtils__WEBPACK_IMPORTED_MODULE_5__.logout, suggestionDataFrame: suggestionDataFrame })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chat_messages__WEBPACK_IMPORTED_MODULE_3__.ChatMessages, { tracker: tracker, addCodeToNotebook: addCodeToNotebook, scrollFn: throttledScroll })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { float: 'left', clear: 'both' }, ref: messageEndRef })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.ChatPanelFooter, { scrollFn: throttledScroll, tokenLimit: _config__WEBPACK_IMPORTED_MODULE_8__.TOKEN_LIMIT, fetchFileSummary: _utils_fileSummarizationUtils__WEBPACK_IMPORTED_MODULE_7__.fetchFileSummary })));
}


/***/ }),

/***/ "../../lib/assistant/lib/components/error-screen.js":
/*!**********************************************************!*\
  !*** ../../lib/assistant/lib/components/error-screen.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorScreen: () => (/* binding */ ErrorScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @anaconda/assistant-components */ "../../lib/assistant-components/lib/index.js");
/* harmony import */ var _utils_nucleus_accountUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/nucleus/accountUtils */ "../../lib/assistant/lib/utils/nucleus/accountUtils.js");



function ErrorScreen({ error, resetErrorBoundary }) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "as-error-screen" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.ErrorMessage, { showLogoutButton: true, errorMessage: error.message, retryError: resetErrorBoundary, logout: () => (0,_utils_nucleus_accountUtils__WEBPACK_IMPORTED_MODULE_2__.logout)() })));
}


/***/ }),

/***/ "../../lib/assistant/lib/components/icon.js":
/*!**************************************************!*\
  !*** ../../lib/assistant/lib/components/icon.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssistantIcon: () => (/* binding */ AssistantIcon)
/* harmony export */ });
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/ui-components */ "webpack/sharing/consume/default/@jupyterlab/ui-components");
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__);

const AssistantIcon = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
    name: 'assistant:wizard',
    svgstr: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none">
  <path
    d="M10.125 3.25C10.0312 3.1875 10 3.09375 10 3C10 2.90625 10.0312 2.84375 10.125 2.78125L12 2L12.75 0.15625C12.8125 0.0625 12.9062 0 13 0C13.0938 0 13.1562 0.0625 13.2188 0.15625L14 2L15.8438 2.78125C15.9375 2.84375 16 2.90625 16 3C16 3.09375 15.9375 3.1875 15.8438 3.25L14 4L13.2188 5.875C13.1562 5.96875 13.0938 6 13 6C12.9062 6 12.8125 5.96875 12.75 5.875L12 4L10.125 3.25ZM15.8438 12.7812C15.9375 12.8438 16 12.9062 16 13C16 13.0938 15.9375 13.1875 15.8438 13.25L14 14L13.2188 15.875C13.1562 15.9688 13.0938 16 13 16C12.9062 16 12.8125 15.9688 12.75 15.875L12 14L10.125 13.25C10.0312 13.1875 10 13.0938 10 13C10 12.9062 10.0312 12.8438 10.125 12.7812L12 12L12.75 10.1562C12.8125 10.0625 12.9062 10 13 10C13.0938 10 13.1562 10.0625 13.2188 10.1562L14 12L15.8438 12.7812ZM12 8C12 8.1875 11.875 8.375 11.7188 8.4375L8.1875 10.2188L6.4375 13.75C6.34375 13.9062 6.15625 14 6 14C5.78125 14 5.625 13.9062 5.53125 13.75L3.78125 10.2188L0.25 8.4375C0.09375 8.375 0 8.1875 0 8C0 7.8125 0.09375 7.625 0.25 7.5625L3.78125 5.78125L5.53125 2.28125C5.71875 1.9375 6.25 1.9375 6.4375 2.28125L8.1875 5.78125L11.7188 7.5625C11.875 7.625 12 7.8125 12 8Z"
    fill="#31a824"
  />
</svg>`
});


/***/ }),

/***/ "../../lib/assistant/lib/components/notebook-error-helper.js":
/*!*******************************************************************!*\
  !*** ../../lib/assistant/lib/components/notebook-error-helper.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractErrorContext: () => (/* binding */ extractErrorContext),
/* harmony export */   trimPrecedingCells: () => (/* binding */ trimPrecedingCells)
/* harmony export */ });
const MAX_LENGTH = 2500;
function extractErrorContext(errorCell, notebook, error) {
    const errorCellId = errorCell.model.sharedModel.getId();
    const idx = notebook.widgets.findIndex(cell => cell.model.sharedModel.getId() === errorCellId);
    if (idx === -1)
        return null; // Cell not found (shouldn't happen)
    // Get the source for the cells preceding the error cell
    const precedingCells = trimPrecedingCells(notebook.widgets
        .slice(0, idx)
        .filter(cell => cell.model.type === 'code')
        .map(cell => ({
        id: cell.model.sharedModel.getId(),
        source: cell.model.sharedModel.getSource()
    })));
    return {
        precedingCells,
        cell: {
            id: errorCellId,
            source: errorCell.model.sharedModel.getSource()
        },
        errorText: error
    };
}
/**
 * Trims the preceding cells to a maximum length of 1250 characters
 * Tries to keep cells closest to the error (last in the array) intact
 * @param precedingCells
 */
function trimPrecedingCells(precedingCells) {
    let totalLength = 0;
    return precedingCells
        .reverse() // Start with cells closest to the error
        .map(cell => {
        totalLength += cell.source.length;
        return { id: cell.id, source: truncateIfTooLong(totalLength, cell) };
    })
        .reverse();
}
function truncateIfTooLong(totalLength, cell) {
    if (totalLength > MAX_LENGTH && totalLength - cell.source.length < MAX_LENGTH) {
        // This cell has pushed length over the limit, so truncate the cell to fit the max length
        return cell.source.slice(0, MAX_LENGTH - (totalLength - cell.source.length) - 3) + '...';
    }
    else if (totalLength > MAX_LENGTH) {
        // Over the limit, so truncate entirely
        return '...';
    }
    else {
        // Under the limit, so return the full cell
        return cell.source;
    }
}


/***/ }),

/***/ "../../lib/assistant/lib/components/settings.js":
/*!******************************************************!*\
  !*** ../../lib/assistant/lib/components/settings.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsWrapper: () => (/* binding */ SettingsWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @anaconda/assistant-components */ "../../lib/assistant-components/lib/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/styles/createTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/styles/ThemeProvider.js");
/* harmony import */ var _utils_nucleus_accountUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/nucleus/accountUtils */ "../../lib/assistant/lib/utils/nucleus/accountUtils.js");
/* harmony import */ var _utils_environmentType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/environmentType */ "../../lib/assistant/lib/utils/environmentType.js");





function SettingsWrapper() {
    const [account, enableDataCollection, setEnableDataCollection, _addCodeToNotebook, setAddCodeToNotebook] = (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.useStore)(state => [
        state.account,
        state.settings.enableDataCollection,
        state.setEnableDataCollection,
        state.settings.addCodeToNotebook,
        state.setAddCodeToNotebook,
        (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.getActiveChat)(state)
    ]);
    const isStarterTier = Boolean(account?.metadata?.is_starter_tier);
    const isProTier = Boolean(account?.metadata?.is_pro_tier);
    const addCodeToNotebook = _addCodeToNotebook || 'below-active-cell';
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"])({
        palette: {
            primary: {
                main: '#43B049'
            }
        },
        typography: {
            fontSize: 11
        }
    });
    const showLogout = () => {
        if (account && (0,_utils_environmentType__WEBPACK_IMPORTED_MODULE_3__.isLocalNotebooks)()) {
            return {
                logout: _utils_nucleus_accountUtils__WEBPACK_IMPORTED_MODULE_2__.logout,
                accountUserEmail: account?.user.email || ''
            };
        }
        return null;
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { theme: theme },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.SettingsPage, { showLogout: showLogout, enableDataCollection: enableDataCollection, setEnableDataCollection: setEnableDataCollection, addCodeToNotebook: addCodeToNotebook, setAddCodeToNotebook: setAddCodeToNotebook, isProTier: isProTier, isStarterTier: isStarterTier, isCloudNotebooks: (0,_utils_environmentType__WEBPACK_IMPORTED_MODULE_3__.isCloudNotebooks)() })));
}


/***/ }),

/***/ "../../lib/assistant/lib/config.js":
/*!*****************************************!*\
  !*** ../../lib/assistant/lib/config.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ASSISTANT_EXTENSION_NAMESPACE: () => (/* binding */ ASSISTANT_EXTENSION_NAMESPACE),
/* harmony export */   CLIENT_VERSION: () => (/* binding */ CLIENT_VERSION),
/* harmony export */   ENV: () => (/* binding */ ENV),
/* harmony export */   LD_KEY_ASSISTANT_USE_DEV_API_ENDPOINT: () => (/* binding */ LD_KEY_ASSISTANT_USE_DEV_API_ENDPOINT),
/* harmony export */   SHOW_SETTINGS: () => (/* binding */ SHOW_SETTINGS),
/* harmony export */   TOKEN_LIMIT: () => (/* binding */ TOKEN_LIMIT),
/* harmony export */   getServerUrl: () => (/* binding */ getServerUrl)
/* harmony export */ });
/* harmony import */ var _jupyter_extension_load_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jupyter/extension-load-utils */ "../../lib/assistant/lib/jupyter/extension-load-utils.js");
/* harmony import */ var _utils_environmentType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/environmentType */ "../../lib/assistant/lib/utils/environmentType.js");


const LD_KEY_ASSISTANT_USE_DEV_API_ENDPOINT = 'assistant-use-dev-api-endpoint';
const ASSISTANT_EXTENSION_NAMESPACE = 'aext_assistant_server';
// TODO:
// Make this dynamic by reading it from the backend
const CLIENT_VERSION = '4.1.0';
// The maximum amount of input tokens to allow sending up. The current model, gpt-3.5-turbo-0613, supports 4096
// and so it looks like we will want to adjust this based on the model in the future. We're limiting to 3/4 in the
// input in order to allow tokens in the response.
const TOKEN_LIMIT = 4096;
// We can use this to show/hide the settings button
// which will open the settings page when we have configurable settings in the future
const SHOW_SETTINGS = true;
// We specify the server URL based on the account we are logged into.
// We fetch the account only once and cache the response.
let serverUrlPromise = null;
function getServerUrl() {
    if (!serverUrlPromise) {
        serverUrlPromise = (async () => {
            if ((0,_utils_environmentType__WEBPACK_IMPORTED_MODULE_1__.isLocalDev)()) {
                return 'http://localhost:8000';
            }
            const useDevServer = _jupyter_extension_load_utils__WEBPACK_IMPORTED_MODULE_0__.sharedCore.getFeatureFlagBool(LD_KEY_ASSISTANT_USE_DEV_API_ENDPOINT);
            console.log('[Assistant] Using dev server because of LD feature flag:', useDevServer);
            if (useDevServer) {
                return 'https://jupyterassistant.anacondaconnect.com';
            }
            else {
                return (_jupyter_extension_load_utils__WEBPACK_IMPORTED_MODULE_0__.sharedCore.getCoreReady().config.assistant.apiUrl || 'https://assistant.anaconda.cloud');
            }
        })();
    }
    return serverUrlPromise;
}
function getHostName() {
    if (typeof window === 'undefined') {
        return 'anaconda.cloud';
    }
    return window.location.host.replace(/^nb\./, '');
}
const ENV = {
    PROD: {
        LEGACY_CLOUD_API_BASE_URL: 'https://anaconda.cloud/api',
        CLOUD_API_BASE_URL: `https://${getHostName()}/api`,
        STAGING_CLOUD_API_BASE_URL: 'https://nucleus-latest.anacondaconnect.com/api'
    }
};


/***/ }),

/***/ "../../lib/assistant/lib/index.js":
/*!****************************************!*\
  !*** ../../lib/assistant/lib/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssistantPlugin: () => (/* reexport safe */ _assistant_plugin__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _assistant_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assistant_plugin */ "../../lib/assistant/lib/assistant_plugin.js");




/***/ }),

/***/ "../../lib/assistant/lib/jupyter/activateAssistantWithCodeSelection.js":
/*!*****************************************************************************!*\
  !*** ../../lib/assistant/lib/jupyter/activateAssistantWithCodeSelection.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getActivateAssistantWithCodeSelection: () => (/* binding */ getActivateAssistantWithCodeSelection)
/* harmony export */ });
/* harmony import */ var _getSelectedTextAndUpdateStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSelectedTextAndUpdateStore */ "../../lib/assistant/lib/jupyter/getSelectedTextAndUpdateStore.js");

function getActivateAssistantWithCodeSelection(opts) {
    return async function () {
        const { assistant, notebookTracker } = opts;
        (0,_getSelectedTextAndUpdateStore__WEBPACK_IMPORTED_MODULE_0__.getSelectedTextAndUpdateStore)(notebookTracker);
        assistant.showInCellMenuWidget();
    };
}


/***/ }),

/***/ "../../lib/assistant/lib/jupyter/activateContextMenuAssistantWithCodeSelection.js":
/*!****************************************************************************************!*\
  !*** ../../lib/assistant/lib/jupyter/activateContextMenuAssistantWithCodeSelection.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getActivateContextMenuAssistantWithCodeSelection: () => (/* binding */ getActivateContextMenuAssistantWithCodeSelection)
/* harmony export */ });
/* harmony import */ var _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @anaconda/assistant-components */ "../../lib/assistant-components/lib/index.js");
/* harmony import */ var _getSelectedTextAndUpdateStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getSelectedTextAndUpdateStore */ "../../lib/assistant/lib/jupyter/getSelectedTextAndUpdateStore.js");


function getActivateContextMenuAssistantWithCodeSelection(opts) {
    return async function () {
        const { assistant, command, notebookTracker } = opts;
        const selectedText = (0,_getSelectedTextAndUpdateStore__WEBPACK_IMPORTED_MODULE_1__.getSelectedTextAndUpdateStore)(notebookTracker);
        assistant.activateWidget(false);
        _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.useStore.getState().resetToHomeScreen();
        _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.useStore.getState().makeChatRequest({
            context: {
                type: command,
                variables: {
                    active_cell_code: selectedText?.cell.source ?? '',
                    selected_code: (selectedText?.text || selectedText?.cell.source) ?? ''
                }
            },
            instruction: ''
        });
    };
}


/***/ }),

/***/ "../../lib/assistant/lib/jupyter/assistantSidebarWidget.js":
/*!*****************************************************************!*\
  !*** ../../lib/assistant/lib/jupyter/assistantSidebarWidget.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssistantSidebarWidget: () => (/* binding */ AssistantSidebarWidget)
/* harmony export */ });
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lumino/widgets */ "webpack/sharing/consume/default/@lumino/widgets");
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lumino_widgets__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/icon */ "../../lib/assistant/lib/components/icon.js");
/* harmony import */ var _extension_load_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extension-load-utils */ "../../lib/assistant/lib/jupyter/extension-load-utils.js");
/* harmony import */ var _components_assistant_panel_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/assistant-panel-widget */ "../../lib/assistant/lib/components/assistant-panel-widget.js");
/* harmony import */ var _components_assistant_in_cell_widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/assistant-in-cell-widget */ "../../lib/assistant/lib/components/assistant-in-cell-widget.js");





class AssistantSidebarWidget extends _lumino_widgets__WEBPACK_IMPORTED_MODULE_0__.Widget {
    opts;
    content = null;
    manuallyClosed = window.localStorage.getItem('anaconda-assistant-keep-hidden') === 'true';
    constructor(opts) {
        super();
        this.opts = opts;
        this.initialize();
        // Menu option name: `Show Anaconda Assistant`
        this.title.caption = 'Anaconda Assistant';
        // save a copy of this.processMessage, then overwrite it
        const oldProcessMessage = this.processMessage.bind(this);
        this.processMessage = (msg) => {
            if (this._onMessageFn) {
                this._onMessageFn(msg);
            }
            oldProcessMessage(msg);
        };
        // If the user closes the widget, it shouldn't be opened automatically
        // However, if the system closes the widget, it should be opened automatically.
        // We detect this by checking if the widget was hidden and detached in the last second.
        // Also, if the widget is shown, we clear the manuallyClosed flag.
        const onMessage = (message) => {
            (0,_extension_load_utils__WEBPACK_IMPORTED_MODULE_2__.onMessageAccumulator)(message, (messages) => {
                const recentlyHidden = messages.find(m => m.type === 'after-hide');
                const recentlyDetached = messages.find(m => m.type === 'after-detach');
                const recentlyShown = messages.find(m => m.type === 'after-show');
                if (recentlyHidden && !recentlyDetached) {
                    this.keepAssistantHidden(true);
                    // Hack to only track actual close from user interaction
                    if (messages.length === 2) {
                        this.hideFirstTimeLoginPage();
                    }
                }
                if (recentlyShown) {
                    this.keepAssistantHidden(false);
                }
            });
        };
        this.onMessage(onMessage);
    }
    /**
     * Initializes the widget
     */
    initialize() {
        const layout = (this.layout = new _lumino_widgets__WEBPACK_IMPORTED_MODULE_0__.PanelLayout());
        this.addClass('jp-SidePanel');
        this.content = new _lumino_widgets__WEBPACK_IMPORTED_MODULE_0__.Panel();
        const assistantPanelWidget = new _components_assistant_panel_widget__WEBPACK_IMPORTED_MODULE_3__.AssistantPanelWidget(this.opts.notebookTracker);
        assistantPanelWidget.addClass('as-widget-content');
        this.content.addWidget(assistantPanelWidget);
        this.content.node.setAttribute('role', 'region');
        this.content.node.setAttribute('aria-label', 'Assistant content');
        this.content.addClass('as-widget-content');
        this.addClass('as-widget-container');
        layout.addWidget(this.content);
        this.id = 'anaconda-assistant';
        this.title.icon = _components_icon__WEBPACK_IMPORTED_MODULE_1__.AssistantIcon;
        this.title.closable = true;
    }
    /**
     * A function that allows subscribing to messages sent to this this.
     */
    _onMessageFn = null;
    onMessage(fn) {
        this._onMessageFn = fn;
    }
    // Shows the widget
    // If the widget is visible, we don't do anything.
    // If the widget is disposed, we regenerate it.
    // If the widget is not attached, we add it to the main area.
    // If the main area is not visible, we show it, unless keepHidden is true.
    // Finally, we activate the widget, if keepHidden is false.
    activateWidget(keepHidden = this.manuallyClosed) {
        const app = this.opts.jupyterFrontEnd;
        // If the widget is visible, don't do anything
        if (this.isAttached && this.parent?.isVisible) {
            return;
        }
        // Regenerate the widget if disposed
        if (this.isDisposed) {
            this.initialize();
        }
        // Add the widget to the main work area if it's not there
        if (!this.isAttached) {
            app.shell.add(this, 'right');
            if (this.opts.isJupyterNotebook) {
                app.shell.addClass('as-notebook-container');
            }
        }
        // If the main area is not visible, and the widget is hidden, show the widget and the main area
        if (!this.parent?.isVisible && !keepHidden) {
            this.manuallyClosed = false;
            this.show();
            this.parent?.show();
        }
        // Activate the widget if keepHidden is false
        if (!keepHidden) {
            app.shell.activateById(this.id);
        }
    }
    showInCellMenuWidget() {
        (0,_components_assistant_in_cell_widget__WEBPACK_IMPORTED_MODULE_4__.showInCellMenuWidget)({ activateWidget: () => this.activateWidget(false) });
    }
    // Hides the widget and the parent widget
    hideWidget() {
        this.hide();
        this.parent?.hide();
        this.hideFirstTimeLoginPage();
    }
    hideFirstTimeLoginPage() {
        window.localStorage.setItem('anaconda-assistant-opened-once', 'true');
    }
    keepAssistantHidden(hide) {
        window.localStorage.setItem('anaconda-assistant-keep-hidden', hide ? 'true' : 'false');
        this.manuallyClosed = hide;
    }
    // Toggles the widget
    // If the widget is attached and the parent is visible, we close the parent.
    // We indicate that this was done manually.
    // Otherwise, we clear the manuallyClosed flag and activate the widget
    toggleWidget() {
        // If the widget is attached and the parent is visible, we close the parent.
        if (this.isAttached && this.parent?.isVisible) {
            // Once changed manually, it shouldn't be changed automatically
            this.manuallyClosed = true;
            this.hideWidget();
            return;
        }
        this.manuallyClosed = false;
        return this.activateWidget();
    }
}


/***/ }),

/***/ "../../lib/assistant/lib/jupyter/extension-load-utils.js":
/*!***************************************************************!*\
  !*** ../../lib/assistant/lib/jupyter/extension-load-utils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedCorePlugin: () => (/* binding */ SharedCorePlugin),
/* harmony export */   onMessageAccumulator: () => (/* binding */ onMessageAccumulator),
/* harmony export */   sharedCore: () => (/* binding */ sharedCore)
/* harmony export */ });
/**
 * This function is used to detect if the user manually closed the widget.
 * It works by accumulating all messages from the widget that happened
 * within the time specified by the timeout parameter.
 * After the timeout, the accumulated messages are passed to the callback.
 */
let messagesInTheLastSecond = [];
let messageAccumulatorTimeout;
const onMessageAccumulator = (message, callback, timeout = 100) => {
    messagesInTheLastSecond.push(message);
    clearTimeout(messageAccumulatorTimeout);
    messageAccumulatorTimeout = setTimeout(() => {
        if (messagesInTheLastSecond.length > 0 && callback) {
            callback(messagesInTheLastSecond);
        }
        messagesInTheLastSecond = [];
    }, timeout);
};
/**
 * Helper to load the core plugin
 */
class SharedCorePlugin {
    corePlugin = null;
    coreReady = null;
    constructor() { }
    async setCore(corePlugin) {
        this.corePlugin = corePlugin;
        this.coreReady = await corePlugin.ready();
    }
    getCore() {
        if (!this.corePlugin) {
            throw new Error('Core not set');
        }
        return this.corePlugin;
    }
    getCoreReady() {
        this.getCore();
        if (!this.coreReady) {
            throw new Error('Core not ready');
        }
        return this.coreReady;
    }
    getFeatureFlagBool(name) {
        return this.getCoreReady().featureFlag.getBool(name, false);
    }
}
const sharedCore = new SharedCorePlugin();


/***/ }),

/***/ "../../lib/assistant/lib/jupyter/fetchDiskState.js":
/*!*********************************************************!*\
  !*** ../../lib/assistant/lib/jupyter/fetchDiskState.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DELETED_CHAT_KEYS: () => (/* binding */ DELETED_CHAT_KEYS),
/* harmony export */   fetchAndNormalizeDiskState: () => (/* binding */ fetchAndNormalizeDiskState),
/* harmony export */   fetchDiskState: () => (/* binding */ fetchDiskState),
/* harmony export */   normalizeDiskState: () => (/* binding */ normalizeDiskState)
/* harmony export */ });
/* harmony import */ var _api_terms_and_conditions_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/terms-and-conditions-version */ "../../lib/assistant/lib/api/terms-and-conditions-version.js");
/* harmony import */ var _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @anaconda/assistant-components */ "../../lib/assistant-components/lib/index.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/request */ "../../lib/assistant/lib/utils/request.js");
/* harmony import */ var _utils_nucleus_accountUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/nucleus/accountUtils */ "../../lib/assistant/lib/utils/nucleus/accountUtils.js");





const DELETED_CHAT_KEYS = [];
function normalizeDiskState(diskState, currentAppState, chatStarters) {
    // Extract as minimal state as possible
    let addCodeToNotebook = diskState.settings?.addCodeToNotebook;
    if (!addCodeToNotebook || !_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.ADD_CODE_TO_NOTEBOOK_TYPES.includes(addCodeToNotebook)) {
        addCodeToNotebook = currentAppState.settings?.addCodeToNotebook;
    }
    let notebooks = [];
    if (diskState.notebooks) {
        for (const notebook of diskState.notebooks) {
            if (typeof notebook.path !== 'string')
                continue;
            if (!notebook.path)
                continue;
            if (!notebook.chats)
                continue;
            const chats = {};
            for (const chat of Object.values(notebook.chats)) {
                if (typeof chat.key !== 'string')
                    continue;
                if (typeof chat.name !== 'string')
                    continue;
                if (DELETED_CHAT_KEYS.includes(chat.key)) {
                    DELETED_CHAT_KEYS.splice(DELETED_CHAT_KEYS.indexOf(chat.key), 1);
                    continue;
                }
                chats[chat.key] = {
                    // Being permissive here since the corruption would have to be surgical to break here,
                    // and chats are of too many types to be able to validate them all
                    // in this iteration.
                    ...chat,
                    lastUpdated: new Date(chat.lastUpdated || 0)
                };
            }
            notebooks.push({
                path: notebook.path,
                notebookState: {
                    dataframes: [],
                    selectedCell: null,
                    selectedText: null,
                    error: null
                },
                homeScreen: {
                    chatStarters: chatStarters,
                    selectedChatStarter: null
                },
                suggestionState: {
                    loading: false,
                    suggestions: null,
                    dataframe: null,
                    error: null
                },
                chats,
                activeChatKey: null,
                previousChatKey: null
            });
        }
    }
    return {
        terms: {
            accepted: Boolean(diskState.terms?.accepted || currentAppState.terms?.accepted),
            version: diskState.terms?.version || currentAppState.terms?.version || null
        },
        notebooks,
        settings: {
            open: Boolean(diskState.settings?.open),
            enableDataCollection: Boolean(diskState.settings?.enableDataCollection),
            addCodeToNotebook
        }
    };
}
/**
 * Fetches the state from disk.
 * Ignores the state if the received state is not an object (meaning JSON parsing failed).
 * Ignores the state if the version does not match.
 * @returns The state from disk or null if there is no state.
 */
async function fetchAndNormalizeDiskState(currentAppState, chatStarters) {
    const diskStateResponse = await (0,_utils_request__WEBPACK_IMPORTED_MODULE_2__.extensionAPIRequest)('get_disk_state');
    const isObject = Boolean(diskStateResponse && typeof diskStateResponse === 'object');
    const hasState = Boolean(isObject && diskStateResponse.state && typeof diskStateResponse.state === 'object');
    const hasVersion = Boolean(isObject && diskStateResponse.version && typeof diskStateResponse.version === 'number');
    const versionIsUpToDate = Boolean(isObject && diskStateResponse.version && diskStateResponse.version === _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.STATE_VERSION);
    if (isObject && hasState && hasVersion && versionIsUpToDate) {
        return normalizeDiskState(diskStateResponse.state, currentAppState, chatStarters);
    }
    return null;
}
/**
 * Fetches the state from disk and merges it with the app state.
 */
function fetchDiskState(chatStarters) {
    return new Promise(async (resolve, reject) => {
        try {
            // Fetching state from disk
            const diskState = await fetchAndNormalizeDiskState(_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.useStore.getState(), chatStarters);
            if (!diskState) {
                // If we didn't receive a valid state and we are logged in, try to log out
                if (_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.useStore.getState()?.terms?.accepted) {
                    console.log('No state found on disk and locally the Assistant is already loaded. Logging out.');
                    await (0,_utils_nucleus_accountUtils__WEBPACK_IMPORTED_MODULE_3__.logout)([
                        'An Assistant in another Jupyter Lab session or browser tab logged out.',
                        'Do you want to log out as well?',
                        'Logging out will remove all your Anaconda Assistant data,',
                        'but if you decide to stay some features will not be available.'
                    ].join(' '));
                    resolve(void 0);
                    return;
                }
                console.log('No state found on disk. Skipping state update.');
                resolve(void 0);
                return;
            }
            // If we can't fetch the terms version, the user doesn't have access to our API.
            let fetchedVersion = null;
            try {
                fetchedVersion = await (0,_api_terms_and_conditions_version__WEBPACK_IMPORTED_MODULE_0__.fetchTermsAndConditionsVersion)();
            }
            catch (e) {
                console.error('Error fetching terms and conditions version', e);
            }
            if (!fetchedVersion) {
                console.log('No terms and conditions version found. The user is not allowed to use our API.');
                _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.useStore.getState()?.setAccess(false);
            }
            // Accepting terms locally if they are accepted on disk
            const version = diskState.terms?.version || _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.useStore.getState()?.terms?.version || fetchedVersion;
            if (!_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.useStore.getState()?.terms?.accepted && diskState.terms?.accepted && version) {
                console.log('Terms and conditions accepted on disk. Accepting them locally.');
                _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.useStore.getState()?.acceptTerms(version, true);
            }
            // Syncing chats
            for (const notebook of diskState.notebooks || []) {
                const chats = Object.values(notebook.chats);
                console.log(`Syncing ${chats.length} chats to ${notebook.path}`);
                _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.useStore.getState()?.addSyncedChats(notebook, chats);
            }
            resolve(void 0);
        }
        catch (e) {
            console.error('Error updating state from disk', e);
            reject(e);
        }
    });
}


/***/ }),

/***/ "../../lib/assistant/lib/jupyter/getSelectedTextAndUpdateStore.js":
/*!************************************************************************!*\
  !*** ../../lib/assistant/lib/jupyter/getSelectedTextAndUpdateStore.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSelectedTextAndUpdateStore: () => (/* binding */ getSelectedTextAndUpdateStore)
/* harmony export */ });
/* harmony import */ var _jupyterlab_cells__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/cells */ "webpack/sharing/consume/default/@jupyterlab/cells");
/* harmony import */ var _jupyterlab_cells__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_cells__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_text_selection_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/text-selection-utils */ "../../lib/assistant/lib/utils/text-selection-utils.js");
/* harmony import */ var _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @anaconda/assistant-components */ "../../lib/assistant-components/lib/index.js");



function getSelectedTextAndUpdateStore(tracker) {
    const activeCell = tracker.activeCell;
    const editor = activeCell?.editor;
    if (!editor) {
        return;
    }
    // If there is a selection, use it
    const currentSelection = editor?.getSelection();
    const selectedText = (0,_utils_text_selection_utils__WEBPACK_IMPORTED_MODULE_1__.getSelectionFromEditor)(editor, currentSelection);
    if (selectedText.text) {
        _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_2__.useStore.getState().setTextSelection(selectedText);
        return selectedText;
    }
    // Only select text in code cells
    if (activeCell instanceof _jupyterlab_cells__WEBPACK_IMPORTED_MODULE_0__.CodeCell) {
        const lastLine = editor.getLine(editor.lineCount - 1) || '';
        const totalLines = editor.lineCount - 1;
        editor.setSelection({
            start: { line: 0, column: 0 },
            end: { line: totalLines, column: lastLine.length }
        });
        const selection = editor.getSelection();
        const selectedText = (0,_utils_text_selection_utils__WEBPACK_IMPORTED_MODULE_1__.getSelectionFromEditor)(editor, selection);
        _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_2__.useStore.getState().setTextSelection(selectedText);
    }
    return selectedText;
}


/***/ }),

/***/ "../../lib/assistant/lib/jupyter/initializeAssistant.js":
/*!**************************************************************!*\
  !*** ../../lib/assistant/lib/jupyter/initializeAssistant.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeAssistant: () => (/* binding */ initializeAssistant)
/* harmony export */ });
/* harmony import */ var _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @anaconda/assistant-components */ "../../lib/assistant-components/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_ChatStarters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/ChatStarters */ "../../lib/assistant/lib/utils/ChatStarters.js");



/**
 * Initializes the assistant by hiding it if there's no active notebook.
 * Also, if the current widget is a notebook and has a path,
 * sets the path in the store if it's not set.
 */
function initializeAssistant(opts) {
    const { assistant, jupyterFrontEnd: app } = opts;
    const onCurrentWidgetChanged = typeof app.shell?._currentChanged?.connect === 'function';
    if (!onCurrentWidgetChanged) {
        return;
    }
    let hadUrlParam = false;
    async function onConnect() {
        const context = app.shell.currentWidget?.context;
        const factoryName = context?.factoryName;
        const isNotebook = factoryName && factoryName.toLowerCase() === 'notebook';
        // Get ?open_assistant=true from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const openAssistant = urlParams.get('open_assistant');
        // Remove the query param from the URL
        urlParams.delete('open_assistant');
        window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`);
        if (openAssistant === 'true') {
            hadUrlParam = true;
            if (!isNotebook && _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.useStore.getState().account) {
                // If the user already logged in, but the current widget is not a notebook,
                // we must create a notebook.
                // The only view that works without a notebook is the login view.
                await app.commands.execute('notebook:create-new');
            }
            assistant.activateWidget();
            return;
        }
        if ((!hadUrlParam || _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.useStore.getState().account) &&
            !isNotebook &&
            Boolean(window.localStorage.getItem('anaconda-assistant-opened-once'))) {
            assistant.hideWidget();
            assistant.close();
            return;
        }
        // TODO:
        // `!assistant.parent` seems to be necessary for JupyterLab v4
        if (!assistant.parent || !(assistant.isAttached && assistant.parent?.isVisible)) {
            assistant.activateWidget(assistant.manuallyClosed);
        }
        const state = _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.useStore.getState();
        if (context?.path && (!state.path || state.path !== context.path)) {
            _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.useStore
                .getState()
                .setPath(context?.path || '', { user: state.user || '', dataframes: [] }, _utils_ChatStarters__WEBPACK_IMPORTED_MODULE_2__.getNewChatStarters);
        }
    }
    // TODO: This code seems to be necessary for JupyterLab v4
    const debouncedOnConnect = lodash__WEBPACK_IMPORTED_MODULE_1___default().debounce(onConnect, 100);
    app.shell._currentChanged.connect(debouncedOnConnect);
    // TODO:
    // This code seems to be necessary for JupyterLab v4
    debouncedOnConnect();
}


/***/ }),

/***/ "../../lib/assistant/lib/jupyter/syncDiskState.js":
/*!********************************************************!*\
  !*** ../../lib/assistant/lib/jupyter/syncDiskState.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearDiskState: () => (/* binding */ clearDiskState),
/* harmony export */   syncDiskState: () => (/* binding */ syncDiskState)
/* harmony export */ });
/* harmony import */ var _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @anaconda/assistant-components */ "../../lib/assistant-components/lib/index.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/request */ "../../lib/assistant/lib/utils/request.js");
/* harmony import */ var _utils_nucleus_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/nucleus/auth */ "../../lib/assistant/lib/utils/nucleus/auth.js");



/**
 * Synchronizes the state of the store with the server.
 * Does so by sending the state to the server,
 * except for the terms and conditions, which
 * are only sent if they have been accepted.
 */
async function syncDiskState(termsAccepted) {
    const accessToken = await (0,_utils_nucleus_auth__WEBPACK_IMPORTED_MODULE_2__.getAccessToken)();
    if (!accessToken) {
        console.log('Could not sync state, no access token');
        return;
    }
    const appState = _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.useStore.getState();
    const state = {
        ...appState,
        terms: {
            accepted: false,
            version: appState.terms?.version || null
        }
    };
    // Special case for terms and conditions
    if (appState.terms?.accepted === true || termsAccepted) {
        state.terms.accepted = true;
    }
    (0,_utils_request__WEBPACK_IMPORTED_MODULE_1__.extensionAPIRequest)('sync_disk_state', {
        headers: { 'X-Nucleus-Token': accessToken.accessToken },
        method: 'POST',
        body: JSON.stringify({
            state,
            version: _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.STATE_VERSION
        })
    });
}
async function clearDiskState() {
    const accessToken = await (0,_utils_nucleus_auth__WEBPACK_IMPORTED_MODULE_2__.getAccessToken)();
    if (!accessToken) {
        console.log('Could not sync state, no access token');
        return;
    }
    (0,_utils_request__WEBPACK_IMPORTED_MODULE_1__.extensionAPIRequest)('sync_disk_state', {
        headers: { 'X-Nucleus-Token': accessToken.accessToken },
        method: 'POST',
        body: JSON.stringify({})
    });
}


/***/ }),

/***/ "../../lib/assistant/lib/jupyter/syncStateDebounced.js":
/*!*************************************************************!*\
  !*** ../../lib/assistant/lib/jupyter/syncStateDebounced.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindSyncDiskStateChained: () => (/* binding */ bindSyncDiskStateChained),
/* harmony export */   syncDiskStateChained: () => (/* binding */ syncDiskStateChained),
/* harmony export */   syncDiskStateChainedEventFunction: () => (/* binding */ syncDiskStateChainedEventFunction),
/* harmony export */   unbindSyncDiskStateChained: () => (/* binding */ unbindSyncDiskStateChained)
/* harmony export */ });
/* harmony import */ var _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @anaconda/assistant-components */ "../../lib/assistant-components/lib/index.js");
/* harmony import */ var _fetchDiskState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchDiskState */ "../../lib/assistant/lib/jupyter/fetchDiskState.js");
/* harmony import */ var _syncDiskState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./syncDiskState */ "../../lib/assistant/lib/jupyter/syncDiskState.js");
/* harmony import */ var _api_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/access */ "../../lib/assistant/lib/api/access.js");
/* harmony import */ var _utils_ChatStarters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/ChatStarters */ "../../lib/assistant/lib/utils/ChatStarters.js");





let chainedPromise = null;
/**
 * Synchronizes the state of the store with the server.
 * First, it checks if there is a promise running.
 * If there is, it waits for it to finish.
 * Then, it checks if the user has access to our API.
 * If not, it sets the access to false in the store.
 * If the user has access, it updates the account in the store.
 * Then, it fetches the state from disk and merges it with the app state.
 * Finally, it synchronizes the state with the server.
 */
function syncDiskStateChained(termsAccepted) {
    chainedPromise = (async () => {
        if (chainedPromise) {
            await chainedPromise;
        }
        if (!(await (0,_api_access__WEBPACK_IMPORTED_MODULE_3__.hasAccess)())) {
            console.log('The user is not allowed to use our API.');
            _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.useStore.getState().setAccess(false);
            return;
        }
        try {
            await _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.useStore.getState().updateAccount();
        }
        catch (e) {
            console.log('Unable to pre-load account. The user is not logged in');
        }
        await (0,_fetchDiskState__WEBPACK_IMPORTED_MODULE_1__.fetchDiskState)((0,_utils_ChatStarters__WEBPACK_IMPORTED_MODULE_4__.getNewChatStarters)(true));
        await (0,_syncDiskState__WEBPACK_IMPORTED_MODULE_2__.syncDiskState)(termsAccepted);
        chainedPromise = null;
    })();
    return chainedPromise;
}
function syncDiskStateChainedEventFunction() {
    syncDiskStateChained();
}
function bindSyncDiskStateChained() {
    window.addEventListener('blur', syncDiskStateChainedEventFunction);
    window.addEventListener('focus', syncDiskStateChainedEventFunction);
}
function unbindSyncDiskStateChained() {
    try {
        window.removeEventListener('blur', syncDiskStateChainedEventFunction);
        window.removeEventListener('focus', syncDiskStateChainedEventFunction);
    }
    catch (e) {
        console.log('Error unbinding syncDiskStateChained', e);
    }
}


/***/ }),

/***/ "../../lib/assistant/lib/utils/ChatStarters.js":
/*!*****************************************************!*\
  !*** ../../lib/assistant/lib/utils/ChatStarters.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNewChatStarters: () => (/* binding */ getNewChatStarters)
/* harmony export */ });
/* harmony import */ var _environmentType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environmentType */ "../../lib/assistant/lib/utils/environmentType.js");

const getNewChatStarters = (noDataframes) => {
    const chatStarters = {
        categories: [
            {
                id: 'tutorial',
                label: 'Get started',
                starters: [
                    {
                        name: 'load-volcano-data',
                        label: 'Load volcano data from the Smithsonian Institute',
                        instruction: `Load 'https://gist.githubusercontent.com/mattkram/9684863843254402942dfede27af2cb7/raw/2590dd8185b833aacf247c0595edbb07a025a6d7/Smithsonian_VOTW_Holocene_Volcanoes.csv' in a code block. Use \`pd.read_csv\` and show the first 10 rows`
                    },
                    {
                        name: 'plot-fibonacci',
                        label: 'Plot the first 100 Fibonacci numbers',
                        instruction: 'Plot the first 100 fibonacci numbers'
                    },
                    {
                        name: 'mask-emails',
                        label: 'Create a function to mask emails',
                        instruction: (0,_environmentType__WEBPACK_IMPORTED_MODULE_0__.isEnterpriseNotebooks)()
                            ? `Create a Python function called \`mask_email\` that takes an email address as input and returns a masked version of the email. The function should:
\n1. Replace the local part of the email (before the '@' symbol) with '[MASKED]', while keeping the domain part (after the '@' symbol) unchanged.
2. Ensure the masked email maintains the same format as a standard email address.
3. Include error handling to manage invalid email formats gracefully, returning a message indicating the input is not a valid email.
\nPlease provide the complete function code, along with at least 3 example function calls demonstrating the function with valid email addresses, an invalid email address, and an email address with a unique domain.`
                            : `Create a function to mask email addresses, show examples`
                    }
                ]
            },
            {
                id: 'dataframes',
                label: 'Working with dataframes',
                starters: [
                    {
                        name: 'load-a-dataframe',
                        label: 'Load a DataFrame',
                        suggestions: [
                            {
                                label: 'Generate a DataFrame with random data',
                                instruction: 'Generate code that creates a DataFrame with random data'
                            },
                            {
                                label: 'Load 2023 NCAA Basketball Results',
                                instruction: "Generate a DataFrame from this url - 'https://raw.githubusercontent.com/bbwieland/ncaa-projections/main/data/KenPomGamesCleaned.csv' and show the first 10 rows"
                            },
                            {
                                label: 'Load 2023 NCAA Basketball Team Ratings',
                                instruction: "Generate a DataFrame from this url - 'https://raw.githubusercontent.com/bbwieland/ncaa-projections/main/data/TeamRatings.csv' and show the first 10 rows"
                            },
                            {
                                label: '(FiveThirtyEight) Which US state has the worst drivers?',
                                instruction: "Generate a DataFrame from this url - 'https://raw.githubusercontent.com/fivethirtyeight/data/master/bad-drivers/bad-drivers.csv' and show the first 10 rows."
                            },
                            {
                                label: '(FiveThirtyEight) Where do people go to check the weather?',
                                instruction: "Generate a DataFrame from this url - 'https://raw.githubusercontent.com/fivethirtyeight/data/master/weather-check/weather-check.csv' and show the first 10 rows."
                            },
                            {
                                label: '(FiveThirtyEight) District Urbanization Index 2022',
                                instruction: "Generate a DataFrame from this url - 'https://raw.githubusercontent.com/fivethirtyeight/data/master/district-urbanization-index-2022/urbanization-index-2022.csv' and show the first 10 rows."
                            },
                            {
                                label: 'Load the US Wind Turbine Database from usgs.gov',
                                instruction: "Generate a DataFrame from this url - 'https://gist.githubusercontent.com/mattkram/5078f1cb198694274cb708253b0dc210/raw/f90167d071abe328f7f437f3d68dbd5deb6012c8/uswtdb_v5_3_20230113.csv"
                            },
                            {
                                label: 'Load volcano data from the Smithsonian Institute',
                                instruction: "Load 'https://gist.githubusercontent.com/mattkram/9684863843254402942dfede27af2cb7/raw/2590dd8185b833aacf247c0595edbb07a025a6d7/Smithsonian_VOTW_Holocene_Volcanoes.csv' in a code block. Use `pd.read_csv` and show the first 10 rows"
                            },
                            {
                                label: 'Load US population estimates (2010-2019) from census.gov',
                                instruction: "Generate a DataFrame from this url - 'https://gist.githubusercontent.com/mattkram/d3880a3a23ca36ccf10f22c1f49adb29/raw/e3dbe9bde709604252f291e1df92ffa7b3bd098f/nst-est2020.csv' and show the first 10 rows."
                            },
                            {
                                label: 'Load US population estimates (2020-2022) from census.gov',
                                instruction: "Generate a DataFrame from this url - 'https://gist.githubusercontent.com/mattkram/d3880a3a23ca36ccf10f22c1f49adb29/raw/f4602d2b9a17eb0d17355897264f4bad80c5528f/NST-EST2022-POPCHG2020_2022.csv' and show the first 10 rows."
                            },
                            {
                                label: 'Load Pittsburgh bike-share rides data',
                                instruction: "Generate a DataFrame from this url - 'https://gist.github.com/mattkram/16ff06942c100c00466ea5022567bdaa/raw/386da24f5ede4e70496cde1dc9e98c9d02bb177e/bikeshare.csv' and show the first 10 rows."
                            }
                        ]
                    },
                    {
                        name: 'describe-dataframe',
                        label: 'Describe the data in a DataFrame',
                        doNotDisplay: noDataframes,
                        buttonLabel: 'Describe Dataframe',
                        contextSelectionRequired: true,
                        contextType: 'describe-dataframe'
                    },
                    {
                        name: 'graph-dataframe',
                        label: 'Generate a graph for data in a DataFrame',
                        doNotDisplay: noDataframes,
                        buttonLabel: 'Get Code',
                        contextSelectionRequired: true,
                        contextType: 'graph-dataframe'
                    }
                ]
            }
        ]
    };
    // Only adding suggestions if the Assistant is not in the enterprise environment
    if (!(0,_environmentType__WEBPACK_IMPORTED_MODULE_0__.isEnterpriseNotebooks)()) {
        chatStarters.categories
            .find(x => x.id === 'dataframes')
            ?.starters.push({
            name: 'data-cleaning-suggestions',
            label: 'Suggestions for cleaning data',
            doNotDisplay: noDataframes,
            buttonLabel: 'Generate cleaning suggestions',
            contextSelectionRequired: true,
            suggestionsType: 'data-cleaning-suggestions',
            generateSuggestions: true
        }, {
            name: 'dataframe-suggestions',
            label: 'More suggestions...',
            doNotDisplay: noDataframes,
            buttonLabel: 'Generate suggestions',
            contextSelectionRequired: true,
            suggestionsType: 'dataframe-suggestions',
            generateSuggestions: true
        });
    }
    return chatStarters;
};


/***/ }),

/***/ "../../lib/assistant/lib/utils/dataframe-checker.js":
/*!**********************************************************!*\
  !*** ../../lib/assistant/lib/utils/dataframe-checker.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataFrameCheckerPython: () => (/* binding */ dataFrameCheckerPython),
/* harmony export */   parsePythonResult: () => (/* binding */ parsePythonResult)
/* harmony export */ });
function parsePythonResult(result) {
    try {
        if (typeof result !== 'string')
            return null;
        const stripped = result.replace(/^'/, '').replace(/'$/, '');
        const parsed = JSON.parse(stripped);
        // Transform dataframe to a proper SDK Python Dataframe
        if (!parsed.dataframes) {
            parsed.dataframes = [];
        }
        parsed.dataframes = parsed.dataframes.map((df) => {
            const resultingDataframe = {
                cols: df.cols,
                hash: df.hash,
                name: df.name,
                type: df.type,
                dtypesStr: df.dtypesStr
            };
            return resultingDataframe;
        });
        return parsed;
    }
    catch (e) {
        console.error('Could not parse variables', e);
        return null;
    }
}
const dataFrameCheckerPython = `
import json
import getpass
import hashlib

def import_pandas_safely():
    try:
        return __import__('pandas')
    except ImportError:
        return False


__pandas = import_pandas_safely()


def is_data_frame(v: str):
    obj = eval(v)
    if  isinstance(obj, __pandas.core.frame.DataFrame) or isinstance(obj, __pandas.core.series.Series):
        return True


def dataframe_columns(var):
    df = eval(var)
    if isinstance(df, __pandas.core.series.Series):
        return [[df.name, str(df.dtype)]]
    return list(map(lambda col: [col, str(df[col].dtype)], df.columns))


def dtypes_str(frame):
    return str(eval(frame).dtypes)

def dataframe_hash(var):
    # Return a hash including the column names and number of rows
    df = eval(var)
    if isinstance(df, __pandas.core.series.Series):
        return hashlib.sha256(f"{var}-{df.name},{len(df)}".encode('utf-8')).hexdigest()
    return hashlib.sha256(f"{var}-{','.join(df.columns)},{len(df)}".encode('utf-8')).hexdigest()

def get_dataframes():
    if __pandas is None:
        return []
    user = getpass.getuser()
    values = %who_ls
    dataframes = [
        {
            "name": var,
            "type": type(eval(var)).__name__,
            "hash": dataframe_hash(var),
            "cols": dataframe_columns(var),
            "dtypesStr": dtypes_str(var),
        }
        for var in values if is_data_frame(var)
    ]
    result = {"dataframes": dataframes, "user": user}
    return json.dumps(result, ensure_ascii=False)


get_dataframes()
`;


/***/ }),

/***/ "../../lib/assistant/lib/utils/environmentType.js":
/*!********************************************************!*\
  !*** ../../lib/assistant/lib/utils/environmentType.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getClientSource: () => (/* binding */ getClientSource),
/* harmony export */   isCloudNotebooks: () => (/* binding */ isCloudNotebooks),
/* harmony export */   isCloudNotebooksStaging: () => (/* binding */ isCloudNotebooksStaging),
/* harmony export */   isEnterpriseNotebooks: () => (/* binding */ isEnterpriseNotebooks),
/* harmony export */   isEnterpriseNotebooksDev: () => (/* binding */ isEnterpriseNotebooksDev),
/* harmony export */   isLocalDev: () => (/* binding */ isLocalDev),
/* harmony export */   isLocalNotebooks: () => (/* binding */ isLocalNotebooks),
/* harmony export */   isLocalNotebooksDev: () => (/* binding */ isLocalNotebooksDev)
/* harmony export */ });
/* harmony import */ var _jupyter_extension_load_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jupyter/extension-load-utils */ "../../lib/assistant/lib/jupyter/extension-load-utils.js");

function getEnvironmentType() {
    try {
        const environmentType = _jupyter_extension_load_utils__WEBPACK_IMPORTED_MODULE_0__.sharedCore.getCoreReady().config.assistant.environmentType;
        return environmentType;
    }
    catch (e) {
        console.error('Error getting environment type', e);
        return 'local-notebooks-dev';
    }
}
function isLocalDev() {
    return getEnvironmentType() === 'local-dev';
}
function isLocalNotebooks() {
    return getEnvironmentType() === 'local-notebooks-prod' || isLocalNotebooksDev();
}
function isLocalNotebooksDev() {
    return getEnvironmentType() === 'local-notebooks-dev';
}
function isCloudNotebooks() {
    return getEnvironmentType() === 'cloud-notebooks-prod' || isCloudNotebooksStaging();
}
function isCloudNotebooksStaging() {
    return getEnvironmentType() === 'cloud-notebooks-staging';
}
function isEnterpriseNotebooksDev() {
    return getEnvironmentType() === 'enterprise-notebooks-dev';
}
function isEnterpriseNotebooks() {
    return getEnvironmentType() === 'enterprise-notebooks-prod' || isEnterpriseNotebooksDev();
}
function getClientSource() {
    if (isLocalDev())
        return 'anaconda-local-dev';
    if (isCloudNotebooksStaging())
        return 'anaconda-cloud-notebooks-staging';
    if (isCloudNotebooks())
        return 'anaconda-cloud-notebooks-prod';
    if (isLocalNotebooksDev())
        return 'anaconda-local-notebooks-dev';
    if (isLocalNotebooks())
        return 'anaconda-local-notebooks-prod';
    if (isEnterpriseNotebooksDev())
        return 'anaconda-enterprise-notebooks-dev';
    if (isEnterpriseNotebooks())
        return 'anaconda-enterprise-notebooks-prod';
    return 'unknown';
}


/***/ }),

/***/ "../../lib/assistant/lib/utils/fileSummarizationUtils.js":
/*!***************************************************************!*\
  !*** ../../lib/assistant/lib/utils/fileSummarizationUtils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAndSummarize: () => (/* binding */ fetchAndSummarize),
/* harmony export */   fetchFileSummary: () => (/* binding */ fetchFileSummary),
/* harmony export */   syncFilesForSummarization: () => (/* binding */ syncFilesForSummarization)
/* harmony export */ });
/* harmony import */ var _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @anaconda/assistant-components */ "../../lib/assistant-components/lib/index.js");
/* harmony import */ var _nucleus_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nucleus/auth */ "../../lib/assistant/lib/utils/nucleus/auth.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request */ "../../lib/assistant/lib/utils/request.js");
/* harmony import */ var _assistant_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assistant-sdk */ "../../lib/assistant/lib/assistant-sdk.js");




// Calls to the extension server's /monitor_file_changes endpoint
// to update summarizedFiles with the latest file changes
// without updating the "summary" field.
// If the file is the current active notebook,
// calls to the extension server's /summarize_file endpoint
// to update the "summary" field.
async function syncFilesForSummarization() {
    // We need an access token to summarize files
    const accessToken = await (0,_nucleus_auth__WEBPACK_IMPORTED_MODULE_1__.getAccessToken)();
    if (!accessToken) {
        console.log('Could not sync state, no access token');
        return;
    }
    // If the user isn't a Pro user, we don't summarize files
    const state = _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.useStore.getState();
    if (!state.account?.metadata?.is_pro_tier) {
        return;
    }
    // We keep checking for file changes and summarizing files
    while (_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.useStore.getState().account?.metadata?.is_pro_tier) {
        try {
            await fetchAndSummarize();
        }
        catch (e) {
            // We'll try again in a second
        }
        // Wait 1 second before checking for file changes again
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}
async function fetchAndSummarize() {
    const accessToken = await (0,_nucleus_auth__WEBPACK_IMPORTED_MODULE_1__.getAccessToken)();
    if (!accessToken) {
        console.log('Could not sync state, no access token');
        return;
    }
    // Wait for the extension server to notify us of a file change
    const fileChanged = await (0,_request__WEBPACK_IMPORTED_MODULE_2__.extensionAPIRequest)('monitor_file_changes');
    if (fileChanged) {
        const { path, last_modified } = fileChanged;
        const state = _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.useStore.getState();
        const activeNotebook = (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.getActiveNotebook)(state);
        const activeChat = (0,_anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.getActiveChat)(state);
        // If the file is the current active notebook, summarize it
        if (activeNotebook && activeNotebook.path === path) {
            await fetchFileSummary(activeChat, path, last_modified, state.settings.enableDataCollection, accessToken);
        }
        else {
            _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.useStore.getState().addSummarizedFile(path, '', last_modified);
        }
    }
}
async function fetchFileSummary(activeChat, filePath, last_modified, enableDataCollection, accessToken, abortController) {
    let _accessToken = accessToken;
    if (!_accessToken) {
        _accessToken = await (0,_nucleus_auth__WEBPACK_IMPORTED_MODULE_1__.getAccessToken)();
        if (!_accessToken) {
            console.log('Could not sync state, no access token');
            throw new Error('Could not sync state, no access token');
        }
    }
    try {
        const summary = await (0,_request__WEBPACK_IMPORTED_MODULE_2__.extensionAPIRequest)('summarize_file', {
            headers: { 'X-Nucleus-Token': _accessToken.accessToken },
            method: 'POST',
            body: JSON.stringify({
                x_client_version: (0,_assistant_sdk__WEBPACK_IMPORTED_MODULE_3__.getAssistantSdk)().clientVersion,
                access_token: (0,_assistant_sdk__WEBPACK_IMPORTED_MODULE_3__.getAssistantSdk)().accessToken.getAccessToken()?.accessToken || '',
                x_client_source: (0,_assistant_sdk__WEBPACK_IMPORTED_MODULE_3__.getAssistantSdk)().environmentTypes.getClientSource(),
                file_path: filePath,
                session_id: activeChat?.session?.sessionId || '',
                response_message_id: activeChat?.messages[activeChat?.messages.length - 1]?.messageId || '',
                skip_logging: !enableDataCollection
            }),
            signal: abortController?.signal
        });
        _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_0__.useStore.getState().addSummarizedFile(filePath, summary.data.summary, last_modified);
        return summary.data.summary;
    }
    catch (error) {
        console.log('Error fetching file summary', error);
        throw error;
    }
}


/***/ }),

/***/ "../../lib/assistant/lib/utils/getCookies.js":
/*!***************************************************!*\
  !*** ../../lib/assistant/lib/utils/getCookies.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCookies: () => (/* binding */ getCookies)
/* harmony export */ });
let cachedCookies = null;
function getCookies() {
    if (cachedCookies) {
        return cachedCookies;
    }
    if (typeof document === 'undefined') {
        return {};
    }
    const pairs = document.cookie.split(';');
    const cookies = {};
    for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i].split('=');
        cookies[(pair[0] + '').trim()] = unescape(pair.slice(1).join('='));
    }
    cachedCookies = cookies;
    return cookies;
}


/***/ }),

/***/ "../../lib/assistant/lib/utils/nucleus/account.js":
/*!********************************************************!*\
  !*** ../../lib/assistant/lib/utils/nucleus/account.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearNucleusAccountPromise: () => (/* binding */ clearNucleusAccountPromise),
/* harmony export */   getNucleusAccount: () => (/* binding */ getNucleusAccount)
/* harmony export */ });
/* harmony import */ var _environmentType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environmentType */ "../../lib/assistant/lib/utils/environmentType.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request */ "../../lib/assistant/lib/utils/request.js");
/* harmony import */ var _accountUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accountUtils */ "../../lib/assistant/lib/utils/nucleus/accountUtils.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth */ "../../lib/assistant/lib/utils/nucleus/auth.js");




/**
 * Returns the Nucleus account of the current user.
 * This function is memoized, so it will only make one request to the server
 * until the page is reloaded.
 */
let nucleusAccountPromise = null;
function getNucleusAccount() {
    if ((0,_environmentType__WEBPACK_IMPORTED_MODULE_0__.isEnterpriseNotebooks)()) {
        return Promise.resolve({
            metadata: {
                is_starter_tier: false,
                is_pro_tier: true,
                is_enterprise_tier: true
            },
            profile: {
                is_confirmed: true,
                is_disabled: false
            },
            subscriptions: [],
            user: {
                id: '0',
                company: 'Anaconda Enterprise',
                company_size: 'none',
                country: null,
                created_at: '0',
                email: 'Anaconda Enterprise',
                external_id: undefined,
                first_home_visit: false,
                first_name: undefined,
                last_name: undefined,
                industry: undefined,
                partner_customer_id: undefined,
                partner_id: undefined,
                position: undefined,
                promotional_content: undefined,
                state: 'TX',
                updated_at: '0'
            }
        });
    }
    if (nucleusAccountPromise) {
        return nucleusAccountPromise;
    }
    nucleusAccountPromise = (async () => {
        const accessToken = await (0,_auth__WEBPACK_IMPORTED_MODULE_3__.getAccessToken)();
        if (!accessToken) {
            throw new Error('No access token');
        }
        const accountResponse = await (0,_request__WEBPACK_IMPORTED_MODULE_1__.extensionAPIRequest)('nucleus_user', {
            headers: { 'X-Nucleus-Token': accessToken.accessToken }
        });
        const account = await (0,_request__WEBPACK_IMPORTED_MODULE_1__.getJsonFromExtension)(accountResponse);
        const isStarterTier = (0,_accountUtils__WEBPACK_IMPORTED_MODULE_2__.getIsStarterTier)(account);
        const isProTier = (0,_accountUtils__WEBPACK_IMPORTED_MODULE_2__.getIsProTier)(account);
        return {
            ...account,
            metadata: {
                is_starter_tier: isStarterTier,
                is_pro_tier: isProTier
            }
        };
    })();
    return nucleusAccountPromise;
}
/**
 * Clears the memoized Nucleus account.
 */
function clearNucleusAccountPromise() {
    nucleusAccountPromise = null;
}


/***/ }),

/***/ "../../lib/assistant/lib/utils/nucleus/accountUtils.js":
/*!*************************************************************!*\
  !*** ../../lib/assistant/lib/utils/nucleus/accountUtils.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRO_TIER_SUBSCRIPTIONS: () => (/* binding */ PRO_TIER_SUBSCRIPTIONS),
/* harmony export */   STARTER_TIER_SUBSCRIPTION: () => (/* binding */ STARTER_TIER_SUBSCRIPTION),
/* harmony export */   getAccountMaxTokens: () => (/* binding */ getAccountMaxTokens),
/* harmony export */   getIsProTier: () => (/* binding */ getIsProTier),
/* harmony export */   getIsStarterTier: () => (/* binding */ getIsStarterTier),
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   logout: () => (/* binding */ logout),
/* harmony export */   shareJupyterFrontEndWithLogin: () => (/* binding */ shareJupyterFrontEndWithLogin)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request */ "../../lib/assistant/lib/utils/request.js");
/* harmony import */ var _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @anaconda/assistant-components */ "../../lib/assistant-components/lib/index.js");
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account */ "../../lib/assistant/lib/utils/nucleus/account.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth */ "../../lib/assistant/lib/utils/nucleus/auth.js");
/* harmony import */ var _assistant_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assistant-sdk */ "../../lib/assistant/lib/assistant-sdk.js");
/* harmony import */ var _api_terms_and_conditions_version__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/terms-and-conditions-version */ "../../lib/assistant/lib/api/terms-and-conditions-version.js");
/* harmony import */ var _jupyter_syncStateDebounced__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../jupyter/syncStateDebounced */ "../../lib/assistant/lib/jupyter/syncStateDebounced.js");
/* harmony import */ var _jupyter_syncDiskState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../jupyter/syncDiskState */ "../../lib/assistant/lib/jupyter/syncDiskState.js");
/* harmony import */ var _environmentType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environmentType */ "../../lib/assistant/lib/utils/environmentType.js");









const PRO_TIER_SUBSCRIPTIONS = [
    'commercial_subscription',
    'security_subscription',
    'enterprise_subscription'
];
const STARTER_TIER_SUBSCRIPTION = 'starter_subscription';
const defaultMaxTokens = 4096;
async function getAccountMaxTokens(account) {
    if ((0,_environmentType__WEBPACK_IMPORTED_MODULE_8__.isEnterpriseNotebooks)() ||
        account?.metadata?.is_enterprise_tier ||
        account?.metadata?.is_pro_tier ||
        getIsProTier(account)) {
        return 16384;
    }
    return defaultMaxTokens;
}
function getIsProTier(account) {
    if (!account) {
        return false;
    }
    const subscription = account.subscriptions;
    if (!subscription.length) {
        return false;
    }
    const productCodes = subscription.map(sub => sub.product_code);
    return productCodes.some(code => PRO_TIER_SUBSCRIPTIONS.includes(code));
}
function getIsStarterTier(account) {
    if (!account) {
        return false;
    }
    const subscription = account.subscriptions;
    if (!subscription.length) {
        return false;
    }
    const productCodes = subscription.map(sub => sub.product_code);
    return productCodes.some(code => code === STARTER_TIER_SUBSCRIPTION);
}
/**
 * Logs out the current user.
 */
async function logout(message) {
    if (window.confirm(message ||
        'Are you sure you want to log out? Logging out will remove all your Anaconda Assistant data.')) {
        try {
            await (0,_jupyter_syncDiskState__WEBPACK_IMPORTED_MODULE_7__.clearDiskState)();
        }
        catch (e) {
            console.error('Error clearing disk state', e);
        }
        (0,_account__WEBPACK_IMPORTED_MODULE_2__.clearNucleusAccountPromise)();
        (0,_auth__WEBPACK_IMPORTED_MODULE_3__.clearTokenPromise)();
        try {
            await (0,_request__WEBPACK_IMPORTED_MODULE_0__.extensionAPIRequest)('logout');
        }
        catch (e) {
            console.error('Error logging out', e);
        }
        _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.useStore.getState().logout();
    }
}
/**
 * Logs in the current user.
 */
async function login() {
    (0,_jupyter_syncStateDebounced__WEBPACK_IMPORTED_MODULE_6__.unbindSyncDiskStateChained)();
    (0,_account__WEBPACK_IMPORTED_MODULE_2__.clearNucleusAccountPromise)();
    (0,_auth__WEBPACK_IMPORTED_MODULE_3__.clearTokenPromise)();
    await (0,_request__WEBPACK_IMPORTED_MODULE_0__.extensionAPIRequest)('login');
    const accessToken = await (0,_auth__WEBPACK_IMPORTED_MODULE_3__.getAccessToken)();
    if (!accessToken) {
        return logout();
    }
    const sdk = (0,_assistant_sdk__WEBPACK_IMPORTED_MODULE_4__.getAssistantSdk)();
    sdk.accessToken.setAccessToken(accessToken);
    const version = await (0,_api_terms_and_conditions_version__WEBPACK_IMPORTED_MODULE_5__.fetchTermsAndConditionsVersion)();
    const state = _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.useStore.getState();
    state.setAccess(Boolean(version));
    await state.updateAccount();
    const app = _jupyterFrontEnd;
    if (!app) {
        console.error('Could not find Jupyter Front End');
        return;
    }
    const context = app.shell.currentWidget?.context;
    const factoryName = context?.factoryName;
    const isNotebook = factoryName && factoryName.toLowerCase() === 'notebook';
    if (!isNotebook && _anaconda_assistant_components__WEBPACK_IMPORTED_MODULE_1__.useStore.getState().account) {
        // If the user already logged in, but the current widget is not a notebook,
        // we must create a notebook.
        // The only view that works without a notebook is the login view.
        await app.commands.execute('notebook:create-new');
    }
    await (0,_jupyter_syncStateDebounced__WEBPACK_IMPORTED_MODULE_6__.syncDiskStateChained)();
    state.resetToHomeScreen();
    (0,_jupyter_syncStateDebounced__WEBPACK_IMPORTED_MODULE_6__.bindSyncDiskStateChained)();
}
let _jupyterFrontEnd = null;
function shareJupyterFrontEndWithLogin(jupyterFrontEnd) {
    _jupyterFrontEnd = jupyterFrontEnd;
}


/***/ }),

/***/ "../../lib/assistant/lib/utils/nucleus/auth.js":
/*!*****************************************************!*\
  !*** ../../lib/assistant/lib/utils/nucleus/auth.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearTokenPromise: () => (/* binding */ clearTokenPromise),
/* harmony export */   getAccessToken: () => (/* binding */ getAccessToken),
/* harmony export */   getNucleusAccessToken: () => (/* binding */ getNucleusAccessToken)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request */ "../../lib/assistant/lib/utils/request.js");
/* harmony import */ var _getCookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getCookies */ "../../lib/assistant/lib/utils/getCookies.js");
/* harmony import */ var _environmentType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environmentType */ "../../lib/assistant/lib/utils/environmentType.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "../../lib/assistant/lib/config.js");




let statePromise = null;
const authenticationMethod = [
    {
        unavailable: false,
        getUrl: () => `${_config__WEBPACK_IMPORTED_MODULE_3__.ENV.PROD.LEGACY_CLOUD_API_BASE_URL}/iam/token`,
        getOptions: () => ({
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ grant_type: 'refresh_token' })
        })
    },
    {
        unavailable: false,
        getUrl: () => `${_config__WEBPACK_IMPORTED_MODULE_3__.ENV.PROD.CLOUD_API_BASE_URL}/iam/token`,
        getOptions: () => ({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                grant_type: 'refresh_token',
                refresh_token: (0,_getCookies__WEBPACK_IMPORTED_MODULE_1__.getCookies)().refresh_token
            })
        })
    },
    {
        unavailable: false,
        getUrl: () => `${_config__WEBPACK_IMPORTED_MODULE_3__.ENV.PROD.STAGING_CLOUD_API_BASE_URL}/iam/token`,
        getOptions: () => ({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                grant_type: 'refresh_token',
                refresh_token: (0,_getCookies__WEBPACK_IMPORTED_MODULE_1__.getCookies)().refresh_token
            })
        })
    }
];
async function initState() {
    let tokenResponse = null;
    for (const method of authenticationMethod) {
        if (method.unavailable) {
            continue;
        }
        console.log('[Assistant] Trying to get access token from', method.getUrl());
        try {
            tokenResponse = await fetch(method.getUrl(), method.getOptions());
            if (tokenResponse.status === 200) {
                break;
            }
        }
        catch (e) {
            console.error(e);
            method.unavailable = true;
        }
    }
    if (!tokenResponse || tokenResponse.status !== 200) {
        throw new Error('Unable to get access token');
    }
    const { access_token, expires_in } = await (0,_request__WEBPACK_IMPORTED_MODULE_0__.getJson)(tokenResponse);
    const expires = new Date();
    expires.setSeconds(expires.getSeconds() + expires_in);
    return { token: access_token, expires };
}
let tokenPromise = null;
function getNucleusAccessToken(path) {
    if (tokenPromise) {
        return tokenPromise;
    }
    tokenPromise = (async () => {
        const response = await (0,_request__WEBPACK_IMPORTED_MODULE_0__.extensionAPIRequest)(path);
        if (response.access_token === null) {
            return null;
        }
        return {
            accessToken: response.access_token,
            expiresAt: response.expires_at
        };
    })();
    return tokenPromise;
}
function clearTokenPromise() {
    tokenPromise = null;
}
async function getAccessToken(loopCount = 0) {
    // If localhost, don't try to get an access token
    if ((0,_environmentType__WEBPACK_IMPORTED_MODULE_2__.isLocalDev)()) {
        return null;
    }
    // If local notebooks
    if ((0,_environmentType__WEBPACK_IMPORTED_MODULE_2__.isLocalNotebooks)()) {
        return getNucleusAccessToken('nucleus_token');
    }
    // If enterprise notebooks
    if ((0,_environmentType__WEBPACK_IMPORTED_MODULE_2__.isEnterpriseNotebooks)()) {
        return getNucleusAccessToken('ae5_nucleus_token');
    }
    // Otherwise, get the access token
    if (loopCount > 2) {
        throw new Error('The access token expires_at is causing a loop');
    }
    if (!statePromise) {
        statePromise = initState();
    }
    const state = await statePromise;
    const now = new Date();
    // Invalidate the token when it gets within 30 seconds of expiration
    // to avoid clock drift etc.
    if (now >= state.expires) {
        statePromise = null;
        return getAccessToken(loopCount++);
    }
    return {
        accessToken: state.token,
        expiresAt: state.expires.getTime()
    };
}


/***/ }),

/***/ "../../lib/assistant/lib/utils/request.js":
/*!************************************************!*\
  !*** ../../lib/assistant/lib/utils/request.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extensionAPIRequest: () => (/* binding */ extensionAPIRequest),
/* harmony export */   getJson: () => (/* binding */ getJson),
/* harmony export */   getJsonFromExtension: () => (/* binding */ getJsonFromExtension)
/* harmony export */ });
/* harmony import */ var _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/coreutils */ "webpack/sharing/consume/default/@jupyterlab/coreutils");
/* harmony import */ var _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/services */ "webpack/sharing/consume/default/@jupyterlab/services");
/* harmony import */ var _jupyterlab_services__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_services__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "../../lib/assistant/lib/config.js");



/**
 * Call the API extension
 *
 * @param endPoint API REST end point for the extension
 * @param init Initial values for the request
 * @returns The response body interpreted as JSON
 */
async function extensionAPIRequest(endPoint = '', init = {}) {
    // Make request to Jupyter API
    const settings = _jupyterlab_services__WEBPACK_IMPORTED_MODULE_1__.ServerConnection.makeSettings();
    const requestUrl = _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0__.URLExt.join(settings.baseUrl, _config__WEBPACK_IMPORTED_MODULE_2__.ASSISTANT_EXTENSION_NAMESPACE, // API Namespace
    endPoint);
    let response;
    try {
        response = await _jupyterlab_services__WEBPACK_IMPORTED_MODULE_1__.ServerConnection.makeRequest(requestUrl, init, settings);
    }
    catch (error) {
        throw new _jupyterlab_services__WEBPACK_IMPORTED_MODULE_1__.ServerConnection.NetworkError(error);
    }
    let data = await response.text();
    if (data.length > 0) {
        try {
            data = JSON.parse(data);
        }
        catch (error) {
            console.error(error);
        }
    }
    if (!response.ok) {
        throw new _jupyterlab_services__WEBPACK_IMPORTED_MODULE_1__.ServerConnection.ResponseError(response, data.message || data);
    }
    return data;
}
async function getJson(response) {
    if (!response.ok) {
        try {
            const text = await response.text();
            return Promise.reject(`Failed with status ${response.status} and body ${text}`);
        }
        catch (e) {
            return Promise.reject(`Failed with status ${response.status}`);
        }
    }
    return response.json();
}
async function getJsonFromExtension(response) {
    if (response.remote_status_code < 200 || response.remote_status_code >= 300) {
        throw new Error(`Failed with status ${response.remote_status_code} and body ${response.remote_data}`);
    }
    return response.remote_data;
}


/***/ }),

/***/ "../../lib/assistant/lib/utils/text-selection-utils.js":
/*!*************************************************************!*\
  !*** ../../lib/assistant/lib/utils/text-selection-utils.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertSelection: () => (/* binding */ convertSelection),
/* harmony export */   getSelectionFromEditor: () => (/* binding */ getSelectionFromEditor),
/* harmony export */   isSelectionEqual: () => (/* binding */ isSelectionEqual)
/* harmony export */ });
function isSelectionEqual(current, selection) {
    return (current !== null &&
        current.uuid === selection.uuid &&
        current.startColumn === selection.start.column &&
        current.endColumn === selection.end.column &&
        current.startRow === selection.start.line &&
        current.endRow === selection.end.line);
}
function getSelectionFromEditor(editor, selection) {
    const startPos = editor.getOffsetAt(selection.start);
    const endPos = editor.getOffsetAt(selection.end);
    const source = editor.model.sharedModel.getSource();
    const text = source.substring(startPos, endPos);
    const cell = { id: selection.uuid?.toString() || '', source };
    return { text, cell };
}
function convertSelection(selection) {
    return {
        uuid: selection.uuid?.toString() || '',
        startColumn: selection.start.column,
        startRow: selection.start.line,
        endColumn: selection.end.column,
        endRow: selection.end.line
    };
}


/***/ })

}]);
//# sourceMappingURL=lib_assistant_lib_index_js-webpack_sharing_consume_default_react-dom.afb7ad50102e42876d6c.js.map