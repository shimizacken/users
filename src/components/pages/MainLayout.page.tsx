import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {Header, Footer} from '../../packages/components';
import {BackButtonContainer} from '../viewModels/BackButton.viewModel';
import {Logo, LogoWrapper} from '../views/AppLogo/Logo.view';
import {Dashboard} from './Dashboard.page';
import {UserDetailsPage} from './UserDetails.page';

export const MainLayout: React.FC = () => (
    <>
        <Header
            start={<BackButtonContainer />}
            middle={
                <LogoWrapper>
                    <Link to="/">
                        <Logo />
                    </Link>
                </LogoWrapper>
            }
            centerPosition="center"
        />
        <main>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route
                    index
                    path="user/:userId"
                    element={<UserDetailsPage />}
                />
            </Routes>
        </main>
        <Footer />
    </>
);
