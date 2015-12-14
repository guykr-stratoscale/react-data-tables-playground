import './css/style.css';
import '../node_modules/react-datagrid/dist/index.css';

import React from 'react';
import ReactDom from 'react-dom';
import Hello from './components/hello';

ReactDom.render(<Hello />, document.getElementById('root'));
