import React from 'react';  

import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';


export function renderDevTools(store) {  
  if (__DEV__) {
    const DevTools = createDevTools(
  		<DockMonitor toggleVisibilityKey='ctrl-h'
               changePositionKey='ctrl-q'>
    		<LogMonitor theme='tomorrow' />
  		</DockMonitor>
	);
	DevTools.instrument();
    return (
        <DevTools store={store}/>
    );
  }
  return null;
}