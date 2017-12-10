webpackJsonp([0],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bands__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__genres__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__instruments__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_scss__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__profile_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_profile_actions__ = __webpack_require__(298);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var Profile = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(function (store) {
  return {
    profile: store.profile
  };
}), _dec(_class = function (_Component) {
  _inherits(Profile, _Component);

  function Profile(props) {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
  }

  _createClass(Profile, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actions_profile_actions__["a" /* fetchProfile */])());
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'profile-component' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'profile-box' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'profile-img' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'stage-name' },
            this.props.profile.stageName
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'bio' },
            this.props.profile.bio
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'profile-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'profile-nav' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'ul',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */],
                  { to: this.props.match.url + '/mybands' },
                  'My bands'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */],
                  { to: this.props.match.url + '/mygenres' },
                  'My Genres'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */],
                  { to: this.props.match.url + '/myinstruments' },
                  'My Instruments'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'profile-body' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Route */], { path: this.props.match.url + '/mybands', component: __WEBPACK_IMPORTED_MODULE_3__bands__["a" /* default */] }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Route */], { path: this.props.match.url + '/mygenres', render: function render(props) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__genres__["a" /* default */], { genres: _this2.props.profile.genres });
              } }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Route */], { path: this.props.match.url + '/myinstruments', render: function render(props) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__instruments__["a" /* default */], { instruments: _this2.props.profile.instruments });
              } })
          )
        )
      );
    }
  }]);

  return Profile;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class);


/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fetchProfile;
/* unused harmony export setInstruments */
/* unused harmony export setGenre */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);


// TODO: All that is to see firebase realtime database integrated
var userId = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().currentUser.uid;

function fetchProfile() {

  return function (dispatch) {
    __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.database().ref().child('profiles/' + userId).on('value', function (data) {
      dispatch({
        type: "FETCH_PROFILE",
        data: data.val()
      });
    });
  };
};

function setInstruments(instruments) {
  return {
    type: "SET_INSTRUMENTS",
    data: instruments
  };
};

function setGenre(genre) {
  return {
    type: "SET_GENRE",
    data: genre
  };
};

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var TagsCloud = function (_Component) {
  _inherits(TagsCloud, _Component);

  function TagsCloud(props) {
    _classCallCheck(this, TagsCloud);

    return _possibleConstructorReturn(this, (TagsCloud.__proto__ || Object.getPrototypeOf(TagsCloud)).call(this, props));
  }

  _createClass(TagsCloud, [{
    key: "onClick",
    value: function onClick(tag) {
      if (this.props.onTagClick) {
        this.props.onTagClick(tag);
      }
    }
  }, {
    key: "renderTags",
    value: function renderTags() {
      var _this2 = this;

      var list = [];

      if (this.props.tags) {
        Object.keys(this.props.tags).forEach(function (value, key) {
          list.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "li",
            { key: key, onClick: function onClick(event) {
                return _this2.onClick(value);
              } },
            value
          ));
        });
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "ul",
        null,
        list
      );
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "tags-cloud-component" },
        this.renderTags()
      );
    }
  }]);

  return TagsCloud;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (TagsCloud);

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var MyBands = function (_Component) {
  _inherits(MyBands, _Component);

  function MyBands() {
    _classCallCheck(this, MyBands);

    return _possibleConstructorReturn(this, (MyBands.__proto__ || Object.getPrototypeOf(MyBands)).apply(this, arguments));
  }

  _createClass(MyBands, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "my-bands-component" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "ul",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "li",
            null,
            "Band 1..."
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "li",
            null,
            "Band 2..."
          )
        )
      );
    }
  }]);

  return MyBands;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MyBands);

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_tags_cloud_tags_cloud__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_profile_actions__ = __webpack_require__(298);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var MyGenres = function (_Component) {
  _inherits(MyGenres, _Component);

  function MyGenres() {
    _classCallCheck(this, MyGenres);

    return _possibleConstructorReturn(this, (MyGenres.__proto__ || Object.getPrototypeOf(MyGenres)).apply(this, arguments));
  }

  _createClass(MyGenres, [{
    key: 'onTagClick',
    value: function onTagClick(tag) {
      // tag.selected = !tag.selected;
      // this.props.dispatch(setGenres(this.selectGenre(tag)));
      // this.setState({
      //   tags: this.tags
      // });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'my-genres-component' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_tags_cloud_tags_cloud__["a" /* default */], { tags: this.props.genres, onTagClick: function onTagClick(tag) {
            return _this2.onTagClick(tag);
          } })
      );
    }
  }]);

  return MyGenres;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MyGenres);

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_tags_cloud_tags_cloud__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_profile_actions__ = __webpack_require__(298);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var MyInstruments = function (_Component) {
  _inherits(MyInstruments, _Component);

  function MyInstruments() {
    _classCallCheck(this, MyInstruments);

    return _possibleConstructorReturn(this, (MyInstruments.__proto__ || Object.getPrototypeOf(MyInstruments)).apply(this, arguments));
  }

  _createClass(MyInstruments, [{
    key: 'onTagClick',
    value: function onTagClick(tag) {
      // tag.selected = !tag.selected;
      // this.setState({
      //   tags: this.tags
      // });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'my-instruments-component' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_tags_cloud_tags_cloud__["a" /* default */], { tags: this.props.instruments, onTagClick: function onTagClick(tag) {
            return _this2.onTagClick(tag);
          } })
      );
    }
  }]);

  return MyInstruments;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MyInstruments);

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(306);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(294)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-2!../../node_modules/sass-loader/lib/loader.js!./profile.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--1-2!../../node_modules/sass-loader/lib/loader.js!./profile.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(293)(undefined);
// imports


// module
exports.push([module.i, "*{padding:0;margin:0}body,html{height:100%}ul{list-style:none}a{color:inherit}.profile-component{padding:2%}.profile-component .profile-box img.profile-img{min-width:200px;min-height:200px;background-color:#000}.profile-component .profile-content{display:flex;flex-direction:row}.profile-component .profile-content .profile-nav{padding:2% 0;flex-wrap:nowrap}.profile-component .profile-content .profile-body{padding:2% 0;margin-left:10px}", ""]);

// exports


/***/ })

});