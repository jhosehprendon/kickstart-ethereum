'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/admin/Desktop/JS/ethereum/kickstart/pages/campaigns/requests/index.js?entry';


var RequestIndex = function (_Component) {
    (0, _inherits3.default)(RequestIndex, _Component);

    function RequestIndex() {
        (0, _classCallCheck3.default)(this, RequestIndex);

        return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestIndex, [{
        key: 'renderRow',
        value: function renderRow() {
            var _this2 = this;

            return this.props.requests.map(function (request, index) {
                return _react2.default.createElement(_RequestRow2.default, {
                    key: index,
                    id: index,
                    request: request,
                    address: _this2.props.address,
                    approversCount: _this2.props.approversCount,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, 'Request List'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { style: { marginBottom: 10 }, floated: 'right', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'Description'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'Amount'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Recipient'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Aproval Count'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'Approve'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'Finalize'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, this.renderRow())), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, 'Found ', this.props.requestCount, ' requests.'));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, campaign, requestCount, approversCount, requests;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                campaign = (0, _campaign2.default)(address);
                                _context.next = 4;
                                return campaign.methods.getRequestCount().call();

                            case 4:
                                requestCount = _context.sent;
                                _context.next = 7;
                                return campaign.methods.approversCount().call();

                            case 7:
                                approversCount = _context.sent;
                                _context.next = 10;
                                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                                    return campaign.methods.requests(index).call();
                                }));

                            case 10:
                                requests = _context.sent;
                                return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestIndex;
}(_react.Component);

;

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsIkxheW91dCIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiYXBwcm92ZXJzQ291bnQiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclJvdyIsInJlcXVlc3RDb3VudCIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiZ2V0UmVxdWVzdENvdW50IiwiY2FsbCIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFROztBQUNqQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7O29DQWlCUzt5QkFDUDs7d0JBQU8sQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUMvQzt1Q0FBTyxBQUFDO3lCQUFELEFBQ0csQUFDTjt3QkFGRyxBQUVHLEFBQ047NkJBSEcsQUFHUSxBQUNYOzZCQUFXLE9BQUEsQUFBSyxNQUpiLEFBSW1CLEFBQ3RCO29DQUFrQixPQUFBLEFBQUssTUFMcEIsQUFLMEI7O2tDQUwxQjtvQ0FBUCxBQUFPLEFBT1Y7QUFQVTtBQUNILGlCQURHO0FBRFgsQUFBTyxBQVNWLGFBVFU7Ozs7aUNBV0g7Z0JBQUEsQUFFSSxTQUZKLEFBRXNDLHVCQUZ0QyxBQUVJO2dCQUZKLEFBRVksTUFGWixBQUVzQyx1QkFGdEMsQUFFWTtnQkFGWixBQUVpQixhQUZqQixBQUVzQyx1QkFGdEMsQUFFaUI7Z0JBRmpCLEFBRTZCLE9BRjdCLEFBRXNDLHVCQUZ0QyxBQUU2QixBQUVqQzs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsaUNBQUEsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLE9BQU8sRUFBQyxjQUFoQixBQUFlLEFBQWUsTUFBSyxTQUFuQyxBQUEyQyxTQUFRLFNBQW5EOzhCQUFBO2dDQUFBO0FBQUE7ZUFKWixBQUVJLEFBQ0ksQUFDSSxBQUdSLGtDQUFBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSx1QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGSixBQUVJLEFBQ0EsZ0NBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSEosQUFHSSxBQUNBLDJCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUpKLEFBSUksQUFDQSw4QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFMSixBQUtJLEFBQ0Esa0NBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBTkosQUFNSSxBQUNBLDRCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQVRaLEFBQ0ksQUFDSSxBQU9JLEFBR1IsK0JBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSztBQURMO0FBQUEsb0JBbkJSLEFBT0ksQUFZSSxBQUNLLEFBQUssQUFHZCwrQkFBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBWSxlQUFBLEFBQUssTUFBakIsQUFBdUIsY0F4Qi9CLEFBQ0ksQUF1QkksQUFHWDs7Ozs7aUhBM0Q0QixBOzs7OztpQ0FDbEI7QSwwQ0FBVyxNQUFNLEEsTUFBakIsQSxBQUNEO0EsMkNBQVksd0IsQUFBQSxBQUFTOzt1Q0FDQSxTQUFBLEFBQVMsUUFBVCxBQUFpQixrQkFBakIsQUFBbUMsQTs7aUNBQXhEO0E7O3VDQUN1QixTQUFBLEFBQVMsUUFBVCxBQUFpQixpQkFBakIsQUFBa0MsQTs7aUNBQXpEO0E7O3lEQUVpQixBQUFRLFVBQ3JCLFNBQU4sQUFBTSxBQUFTLGVBQWYsQUFBOEIsT0FBOUIsQUFBcUMsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDekQ7MkNBQU8sU0FBQSxBQUFTLFFBQVQsQUFBaUIsU0FBakIsQUFBMEIsT0FBakMsQUFBTyxBQUFpQyxBQUMzQztBQUhrQixBQUNuQixBLGlDQUFBLENBRG1COztpQ0FBakI7QTtpRUFPQyxFQUFDLFNBQUQsU0FBVSxVQUFWLFVBQW9CLGNBQXBCLGNBQWtDLGdCQUFsQyxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZFksQTs7QUE2RDFCLEFBRUQ7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FkbWluL0Rlc2t0b3AvSlMvZXRoZXJldW0va2lja3N0YXJ0In0=