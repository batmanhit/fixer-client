import * as React from 'react';
import { FunctionComponent } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Button, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-bootstrap.css';

import './app.css';

import List from './pages/list';
import Create from './pages/create';
import Edit from './pages/edit';

export const App: FunctionComponent<{}> = () => {
  return (
    <div className="App">
      <Navbar color="dark" expand="md">
        <NavbarBrand href="/" className="mr-auto text-white">FIXER TEST</NavbarBrand>
        <Nav className="ml-auto" navbar={true}>
          <NavItem>
            <NavLink href="/create">
              <Button color="primary">Create</Button>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Switch>
				<Route exact={true} path="/" component={List} />
        <Route exact={true} path="/create" component={Create} />
        <Route exact={true} path="/:id" component={Edit} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
