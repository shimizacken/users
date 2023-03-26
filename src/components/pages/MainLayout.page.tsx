import React from 'react';
import {Header, Footer} from '../../packages/components';
import {Link, Route, Routes} from 'react-router-dom';
import {BackButtonContainer} from '../viewModels/BackButton.viewModel';
import {Dashboard} from './Dashboard.page';
import {UserDetails} from './UserDetails.page';

export const MainLayout: React.FC = () => (
    <>
        <Header
            start={<BackButtonContainer />}
            middle={
                <div>
                    <Link to="/">Logo</Link>
                </div>
            }
            centerPosition="center"
        />
        <main>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route index path="user/:userId" element={<UserDetails />} />
            </Routes>
        </main>
        <Footer />
    </>
);
