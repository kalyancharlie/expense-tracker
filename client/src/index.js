import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseTrackerApp from './App';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

ReactDOM.render(
  <React.StrictMode>
    <ExpenseTrackerApp />
  </React.StrictMode>,
  document.getElementById('root')
);

