'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/admin/Desktop/JS/ethereum/kickstart/pages/index.js?entry';


var CampaignIndex = function (_Component) {
    (0, _inherits3.default)(CampaignIndex, _Component);

    function CampaignIndex() {
        (0, _classCallCheck3.default)(this, CampaignIndex);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: 'renderCampaigns',
        value: function renderCampaigns() {
            var items = this.props.campaigns.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        }
                    }, 'View Campaign')),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, 'Open Campaigns'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Create Campaign',
                icon: 'add circle',
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }))), this.renderCampaigns()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedCampaigns().call();

                            case 2:
                                campaigns = _context.sent;
                                return _context.abrupt('return', { campaigns: campaigns });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsImZhY3RvcnkiLCJMYXlvdXQiLCJMaW5rIiwiQ2FtcGFpZ25JbmRleCIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckNhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOzs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7MENBT2UsQUFDYjtnQkFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxtQkFBVyxBQUM5Qzs7NEJBQU8sQUFDSyxBQUNSO2lEQUNBLEFBQUMsOEJBQUssdUJBQU4sQUFBMkI7c0NBQTNCO3dDQUFBLEFBQ0k7QUFESjtxQkFBQSxrQkFDSSxjQUFBOztzQ0FBQTt3Q0FBQTtBQUFBO0FBQUEsdUJBSkQsQUFHSCxBQUNJLEFBR0o7MkJBUEosQUFBTyxBQU9JLEFBRWQ7QUFUVSxBQUNIO0FBRlIsQUFBYyxBQVlkLGFBWmM7O2lEQVlQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7Ozs7aUNBR0gsQUFDSjttQ0FDQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFFQSxtQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTs4QkFBWjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQzt5QkFBRCxBQUNRLEFBQ1I7eUJBRkEsQUFFUSxBQUNSO3NCQUhBLEFBR0ssQUFDTDt5QkFKQTs7OEJBQUE7Z0NBTFosQUFHSSxBQUNJLEFBQ0ksQUFTUDtBQVRPO0FBQ0EsdUJBUmhCLEFBQ0EsQUFDSSxBQWNLLEFBQUssQUFJakI7Ozs7Ozs7Ozs7Ozt1Q0F6QzJCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QkFBaEIsQUFBdUMsQTs7aUNBQXpEO0E7aUVBQ0MsRUFBRSxXQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFKYSxBLEFBK0M1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWRtaW4vRGVza3RvcC9KUy9ldGhlcmV1bS9raWNrc3RhcnQifQ==