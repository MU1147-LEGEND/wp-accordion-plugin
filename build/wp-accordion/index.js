/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/wp-accordion/block.json":
/*!*************************************!*\
  !*** ./src/wp-accordion/block.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/wp-accordion","version":"0.1.0","title":"WP Accordion","category":"text","icon":"editor-ul","description":"An accordion block for WordPress.","example":{},"supports":{"html":false,"typography":{"fontSize":false},"color":{"gradients":false,"linkColor":false}},"textdomain":"wp-accordion","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","attributes":{"title":{"type":"string","default":"My Accordion"},"backgroundColor":{"type":"string","default":"#ffffff"},"textColor":{"type":"string","default":"#000000"},"individualItemBgColor":{"type":"boolean","default":false},"items":{"type":"array","default":[{"title":"Accordion Title 1","description":"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","backgroundColor":"#ffffff"},{"title":"Accordion Title 2","description":"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","backgroundColor":"#ffffff"}]}}}');

/***/ }),

/***/ "./src/wp-accordion/edit.js":
/*!**********************************!*\
  !*** ./src/wp-accordion/edit.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinalBlock: () => (/* binding */ FinalBlock),
/* harmony export */   "default": () => (/* binding */ Edit),
/* harmony export */   faqStyle: () => (/* binding */ faqStyle)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/wp-accordion/editor.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style-index.scss */ "./src/wp-accordion/style-index.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






// styles

const blockStyle = {
  border: "1px solid #ccc",
  padding: "4px 10px",
  borderRadius: "5px",
  backgroundColor: "#f9f9f9",
  color: "#333"
};
const titleStyle = {
  textAlign: "center",
  fontWeight: "600"
};
const itemBoxStyle = {
  border: "1px solid #ddd",
  padding: "10px",
  margin: "5px 0",
  backgroundColor: "#fff",
  borderRadius: "4px"
};
const faqStyle = {};
// styles end

function Edit({
  attributes,
  setAttributes
}) {
  const title = attributes.title;
  const items = attributes.items || [];
  const textColor = attributes.textColor || "#0000ff";
  // dynamic styles
  faqStyle.backgroundColor = attributes.backgroundColor || "#ffffff";
  faqStyle.color = attributes.textColor || "#0000ff";
  faqStyle.individualItemBgColor = attributes.individualItemBgColor || false;
  // dynamic styles end
  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setAttributes({
      items: newItems
    });
  };
  const addItem = () => {
    const newItems = [...items, {
      title: `Accordion Title ${items.length + 1}`,
      description: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    }];
    setAttributes({
      items: newItems
    });
  };
  const removeItem = index => {
    const newItems = items.filter((_, i) => i !== index);
    setAttributes({
      items: newItems
    });
  };
  const domain = "wp-accordion";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Settings", domain),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Main Title", domain),
          value: title,
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Name of your accordion", domain),
          onChange: newTitle => {
            setAttributes({
              title: newTitle
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
            style: {
              display: "block",
              marginBottom: "5px",
              textTransform: "uppercase"
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Text Color", domain)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
            value: attributes.textColor,
            onChange: value => setAttributes({
              textColor: value
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          style: {
            marginBottom: "10px"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
            style: {
              display: "block",
              marginBottom: "5px",
              textTransform: "uppercase"
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Background Color", domain)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
            value: attributes.backgroundColor,
            onChange: value => setAttributes({
              backgroundColor: value
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
          className: "no-select",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Individual Item Background Color", domain),
          checked: attributes.individualItemBgColor || false,
          onChange: value => setAttributes({
            individualItemBgColor: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Accordion Items", domain)
        }), items.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          style: itemBoxStyle,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Title", domain)} ${index + 1}`,
            value: item.title,
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Accordion title", domain),
            onChange: value => updateItem(index, "title", value)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Description", domain)} ${index + 1}`,
            value: item.description,
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Accordion description", domain),
            onChange: value => updateItem(index, "description", value)
          }), attributes.individualItemBgColor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              marginBottom: "10px"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
              style: {
                display: "block",
                marginBottom: "5px"
              },
              children: `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Background Color", domain)} ${index + 1}`
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
              value: item.backgroundColor,
              onChange: value => updateItem(index, "backgroundColor", value)
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            isDestructive: true,
            onClick: () => removeItem(index),
            style: {
              marginTop: "5px",
              backgroundColor: "#ff4d4d",
              borderColor: "#ff4d4d",
              color: "#fff"
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Remove", domain)
          })]
        }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          isPrimary: true,
          onClick: addItem,
          style: {
            marginTop: "10px"
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Add Item", domain)
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)(),
      style: blockStyle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(FinalBlock, {
        title: title,
        items: items
      })
    })]
  });
}
const FinalBlock = ({
  title,
  items
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
      style: titleStyle,
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      children: items && items.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(AccordionItem, {
        item: item,
        index: index
      }, index))
    })]
  });
};
const AccordionItem = ({
  item,
  index
}) => {
  const {
    title,
    description,
    backgroundColor
  } = item;
  const bgColor = faqStyle.individualItemBgColor ? backgroundColor || "#ffffff" : faqStyle.backgroundColor;
  const checkboxId = `accordion-${index}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    style: {
      marginBottom: "5px",
      border: "1px solid #ccc"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
      type: "checkbox",
      id: checkboxId,
      className: "acc-checkbox",
      style: {
        display: "none"
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
      htmlFor: checkboxId,
      style: {
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "4px 10px",
        borderBottom: "1px solid #ccc",
        backgroundColor: bgColor,
        margin: 0
      },
      className: "acc-item",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
        style: {
          color: faqStyle.color,
          margin: 0
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(title, "wp-accordion")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        style: {
          fontSize: "20px",
          fontWeight: "bold",
          color: faqStyle.color
        },
        className: "acc-icon",
        children: "\u25B6"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "acc-content",
      style: {
        height: "auto",
        overflow: "hidden"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        style: {
          color: faqStyle.color,
          backgroundColor: bgColor,
          padding: "6px 10px",
          margin: "2px auto",
          fontSize: "16px"
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(description, "wp-accordion")
      })
    })]
  });
};

/***/ }),

/***/ "./src/wp-accordion/editor.scss":
/*!**************************************!*\
  !*** ./src/wp-accordion/editor.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/wp-accordion/icon.js":
/*!**********************************!*\
  !*** ./src/wp-accordion/icon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  width: "48",
  height: "48",
  viewBox: "0 0 1024 1024",
  class: "icon",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "#000000",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M732.1 399.3C534.6 356 696.5 82.1 425.9 104.8s-527.2 645.8-46.8 791.7 728-415 353-497.2z",
      fill: "#464BD8"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M346.2 718.8a9.05 9.05 0 0 1-8.8-10.7l10.2-50.7a8.9 8.9 0 0 1 8.8-7.2h46.1a9.05 9.05 0 0 1 8.8 10.7L401 711.6a8.9 8.9 0 0 1-8.8 7.2h-46z",
      fill: "#514DDF"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M402.5 659.1l-10.2 50.7h-46.1l10.2-50.7h46.1m0-17.9h-46.1c-8.5 0-15.9 6-17.5 14.4l-10.2 50.7c-1.1 5.3 0.3 10.7 3.7 14.9 3.4 4.1 8.5 6.6 13.8 6.6h46.1c8.5 0 15.9-6 17.5-14.4l10.2-50.7c1.1-5.3-0.3-10.7-3.7-14.9-3.4-4.2-8.5-6.6-13.8-6.6z m0 35.8z",
      fill: "#151B28"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M631.7 718.8c-4.3 0-7.9-3-8.8-7.2l-10.2-50.7c-0.5-2.6 0.2-5.4 1.9-7.4s4.2-3.3 6.9-3.3h46.1c4.3 0 7.9 3 8.8 7.2l10.2 50.7c0.5 2.6-0.2 5.4-1.9 7.4s-4.2 3.3-6.9 3.3h-46.1z",
      fill: "#514DDF"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M667.7 659.1l10.2 50.7h-46.1l-10.2-50.7h46.1m0-17.9h-46.1c-5.4 0-10.4 2.4-13.8 6.6-3.4 4.1-4.8 9.6-3.7 14.9l10.2 50.7c1.7 8.4 9 14.4 17.5 14.4h46.1c5.4 0 10.4-2.4 13.8 6.6 3.4-4.1 4.8-9.6 3.7-14.9l-10.2-50.7c-1.7-8.4-9-14.4-17.5-14.4z",
      fill: "#151B28"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M325.9 679.9c-16.9 0-30.7-13.8-30.7-30.7v-313c0-16.9 13.8-30.7 30.7-30.7h372.2c16.9 0 30.7 13.8 30.7 30.7v313c0 16.9-13.8 30.7-30.7 30.7H325.9z",
      fill: "#FFFFFF"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M698.1 314.8c11.8 0 21.4 9.6 21.4 21.4v313c0 11.8-9.6 21.4-21.4 21.4H325.9c-11.8 0-21.4-9.6-21.4-21.4v-313c0-11.8 9.6-21.4 21.4-21.4h372.2m0-18.6H325.9c-22 0-40 17.9-40 40v313c0 22 17.9 40 40 40h372.2c22 0 40-17.9 40-40v-313c0-22-18-40-40-40z",
      fill: "#151B28"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M692.3 659.1H373.4c-9.9 0-17.9-8-17.9-17.9V385.9c0-9.9 8-17.9 17.9-17.9h318.9c9.9 0 17.9 8 17.9 17.9v255.3c0 9.9-8 17.9-17.9 17.9z",
      fill: "#2AEFC8"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M678.5 484.1h-333c-9.3 0-16.9-7.6-16.9-16.9V358c0-9.3 7.6-16.9 16.9-16.9h333.1c9.3 0 16.9 7.6 16.9 16.9v109.2a17.1 17.1 0 0 1-17 16.9z m-333-133.6c-4.1 0-7.5 3.4-7.5 7.5v109.2c0 4.1 3.4 7.5 7.5 7.5h333.1c4.1 0 7.5-3.4 7.5-7.5V358c0-4.1-3.4-7.5-7.5-7.5H345.5z m333 293.8h-333c-9.3 0-16.9-7.6-16.9-16.9V518.2c0-9.3 7.6-16.9 16.9-16.9h333.1c9.3 0 16.9 7.6 16.9 16.9v109.2a17.1 17.1 0 0 1-17 16.9z m-333-133.6c-4.1 0-7.5 3.4-7.5 7.5v109.2c0 4.1 3.4 7.5 7.5 7.5h333.1c4.1 0 7.5-3.4 7.5-7.5V518.2c0-4.1-3.4-7.5-7.5-7.5H345.5z",
      fill: "#151B28"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M512 382.4m-17.3 0a17.3 17.3 0 1 0 34.6 0 17.3 17.3 0 1 0-34.6 0Z",
      fill: "#514DDF"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M512 404.4c-12.1 0-22-9.9-22-22s9.9-22 22-22 22 9.9 22 22-9.9 22-22 22z m0-34.6a12.61 12.61 0 0 0 0 25.2 12.61 12.61 0 0 0 0-25.2z",
      fill: "#151B28"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M512 540.9m-17.3 0a17.3 17.3 0 1 0 34.6 0 17.3 17.3 0 1 0-34.6 0Z",
      fill: "#514DDF"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M512 562.9c-12.1 0-22-9.9-22-22s9.9-22 22-22 22 9.9 22 22-9.9 22-22 22z m0-34.6a12.61 12.61 0 1 0 0.02 25.22 12.61 12.61 0 0 0-0.02-25.22z",
      fill: "#151B28"
    })]
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icon);

/***/ }),

/***/ "./src/wp-accordion/index.js":
/*!***********************************!*\
  !*** ./src/wp-accordion/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/wp-accordion/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/wp-accordion/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/wp-accordion/edit.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/wp-accordion/icon.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/wp-accordion/save.js");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__.name, {
  icon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/wp-accordion/save.js":
/*!**********************************!*\
  !*** ./src/wp-accordion/save.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-index.scss */ "./src/wp-accordion/style-index.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// styles

const blockStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  borderRadius: "5px",
  backgroundColor: "#f9f9f9",
  color: "#333"
};
const titleStyle = {
  textAlign: "center",
  fontWeight: "600"
};
// styles end

function save({
  attributes
}) {
  const title = attributes.title;
  const items = attributes.items || [];
  const backgroundColor = attributes.backgroundColor || "#ffffff";
  const textColor = attributes.textColor || "#0000ff";
  const individualItemBgColor = attributes.individualItemBgColor || false;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(),
    style: blockStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
      style: titleStyle,
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "wp-accordion-items",
      children: items.map((item, index) => {
        const bgColor = individualItemBgColor ? item.backgroundColor || backgroundColor : backgroundColor;
        const checkboxId = `accordion-${index}`;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          style: {
            marginBottom: "5px",
            border: "1px solid #ccc"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            type: "checkbox",
            id: checkboxId,
            className: "acc-checkbox",
            style: {
              display: "none"
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label", {
            htmlFor: checkboxId,
            style: {
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "4px 10px",
              borderBottom: "1px solid #ccc",
              backgroundColor: bgColor,
              margin: 0
            },
            className: "acc-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4", {
              style: {
                color: textColor,
                margin: 0
              },
              children: item.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              style: {
                color: textColor,
                fontSize: "20px",
                fontWeight: "bold"
              },
              className: "acc-icon",
              children: "\u25B6"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "acc-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              style: {
                color: textColor,
                backgroundColor: bgColor,
                padding: "6px 10px",
                margin: "2px auto",
                fontSize: "16px"
              },
              children: item.description
            })
          })]
        }, index);
      })
    })]
  });
}

/***/ }),

/***/ "./src/wp-accordion/style-index.scss":
/*!*******************************************!*\
  !*** ./src/wp-accordion/style-index.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/wp-accordion/style.scss":
/*!*************************************!*\
  !*** ./src/wp-accordion/style.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"wp-accordion/index": 0,
/******/ 			"wp-accordion/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkwp_accordion"] = globalThis["webpackChunkwp_accordion"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["wp-accordion/style-index"], () => (__webpack_require__("./src/wp-accordion/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map