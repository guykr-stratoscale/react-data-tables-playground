import './css/style.css';
import '../node_modules/react-datagrid/dist/index.css';

import React from 'react';
import ReactDom from 'react-dom';
import Perf from './components/perf';

ReactDom.render(<Perf />, document.getElementById('root'));
