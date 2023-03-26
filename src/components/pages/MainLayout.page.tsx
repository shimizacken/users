import React from 'react';
import {Header, Footer} from '../../packages/components';
import {Link, Route, Routes} from 'react-router-dom';
import {BackButtonContainer} from '../viewModels/BackButton.viewModel';
import {Dashboard} from './Dashboard.page';

export const MainLayout: React.FC = () => (
    <>
        <Header
            start={<BackButtonContainer />}
            middle={
                <div>
                    <Link to="/">Logo</Link>
                </div>
            }
            end={<div>end</div>}
        />
        <main>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route
                    index
                    path="user/:userId"
                    element={<div>User details</div>}
                />
            </Routes>
        </main>
        <Footer />
    </>
);
