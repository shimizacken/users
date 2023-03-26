import React from 'react';
import {UserDetailsContainer} from '../viewModels/UserDetails.viewModel';
import {PageContent} from '../views/PageContent/PageContent.view';

export const UserDetails: React.FC = () => (
    <PageContent>
        <UserDetailsContainer />
    </PageContent>
);
