import React from 'react';
import {UserCardsContainer} from '../viewModels/UserCardsContainer.viewModel';
import {PageContent} from '../views/PageContent/PageContent.view';

export const Dashboard: React.FC = () => (
    <PageContent align="center">
        <UserCardsContainer />
    </PageContent>
);
