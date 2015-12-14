import './css/style.css';
import '../node_modules/fixed-data-table/dist/fixed-data-table.css';

import React from 'react';
import ReactDom from 'react-dom';
import Hello from './components/hello';

ReactDom.render(<Hello />, document.getElementById('root'));
