'use strict';

var dispatcher = require('./dispatcher');

var pageAction = {
  navigateHome: function() {
    dispatcher.dispatch({
      actionType: 'NAVIGATE_HOME',
    });
  },
  navigateExpenseAdd: function() {
    dispatcher.dispatch({
      actionType: 'NAVIGATE_EXPENSE_ADD',
    });
  },
  navigateAccount: function(account) {
    dispatcher.dispatch({
      actionType: 'NAVIGATE_ACCOUNT',
      account: account,
    });
  },
  navigateExpenseEdit: function() {
    dispatcher.dispatch({
      actionType: 'NAVIGATE_EXPENSE_EDIT',
    });
  },
  showDialog: function(name) {
    dispatcher.dispatch({
      actionType: 'SHOW_DIALOG',
      name: name,
    });
  },
  dismissDialog: function() {
    dispatcher.dispatch({
      actionType: 'DISMISS_DIALOG',
    });
  },
};

module.exports = pageAction;