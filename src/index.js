import ReactDOM from 'react-dom/client';
import LifecycleApp from './LifecyleApp';
import EventApp from './EventApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 함수 기반 컴포넌트 사용
    // <App name="송승아" age="2"/>
    // <LifecycleApp/>
    // <App />
    // 클래스 기반 컴포넌트 사용
    //<ClassApp name="김기정"/>
    <EventApp />
);
