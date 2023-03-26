import React from 'react';
import {Header, Footer} from '../../packages/components';
import {Link, Route, Routes} from 'react-router-dom';
import {BackButtonContainer} from '../viewModels/BackButton.viewModel';

export const MainLayout: React.FC = () => (
    <>
        <Header
            start={<BackButtonContainer />}
            middle={
                <div>
                    <Link to="/">Logo</Link>
                </div>
            }
            end={<div />}
        />
        <main>
            <Routes>
                <Route path="/" element={<div>Users</div>} />
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
