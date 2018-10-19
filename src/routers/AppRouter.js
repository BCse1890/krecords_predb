import React from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import AddRecordPage from '../components/AddRecordPage';
import EditRecordPage from '../components/EditRecordPage';
import EntryPage from '../components/EntryPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import PageNotFound from '../components/PageNotFound';
import RegistrationContactPage from '../components/RegistrationContactPage';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={EntryPage} exact={true}/>
                <Route path="/add" component={AddRecordPage} />
                <Route path="/edit/:id" component={EditRecordPage} /> 
                <Route path="/contact/:id" component={RegistrationContactPage} />               
                <Route path="/help" component={HelpPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);
    

export default AppRouter;