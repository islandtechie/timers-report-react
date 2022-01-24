import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Start from "./pages/Start";
import SessionInformation from "./pages/SessionInformation";
import Session from "./pages/Session";
import Report from "./pages/Report";



ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Start />} />
                <Route path="sessioninformation" element={<SessionInformation />} />
                <Route path="session" element={<Session />} />
                <Route path="report" element={<Report />} />
            </Route>
        </Routes>
    </BrowserRouter>
, document.getElementById('root'));