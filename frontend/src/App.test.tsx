import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";
import {getStuffHandler, postStuffErrorHandler, postStuffHandler} from "./mocks/handlerFactory";
import setUpMSW from "./mocks/setUpMSW";

const server = setUpMSW();

it('should display stuff', async () => {
    const stuff = [
        {id: 1, name: "boots"},
        {id: 2, name: "belt"},
        {id: 3, name: "cowboy hat"},
    ];
    server.use(getStuffHandler(stuff))

    render(<App/>);

    expect(screen.getByText(/stuff/i)).toBeInTheDocument();

    expect(await screen.findByText(/boots/i)).toBeInTheDocument();
    expect(await screen.findByText(/belt/i)).toBeInTheDocument();
    expect(await screen.findByText(/cowboy hat/i)).toBeInTheDocument();
});

it('should allow adding an item to the closet', async () => {
    const stuff = [
        {id: 1, name: "boots"},
        {id: 2, name: "belt"},
        {id: 3, name: "cowboy hat"},
    ];
    server.use(getStuffHandler(stuff), postStuffHandler('junk', 4))

    render(<App/>);

    userEvent.type(screen.getByLabelText(/item to add/i), 'junk');
    userEvent.click(screen.getByRole('button', {name: /put in closet/i}));

    expect(await screen.findByText(/junk/i)).toBeInTheDocument();
})

it('should not list the new item if adding failed', async () => {
    const stuff = [
        {id: 1, name: "boots"},
        {id: 2, name: "belt"},
        {id: 3, name: "cowboy hat"},
    ];
    server.use(getStuffHandler(stuff), postStuffErrorHandler('backend was angry'))

    render(<App/>);

    userEvent.type(screen.getByLabelText(/item to add/i), 'junk');
    userEvent.click(screen.getByRole('button', {name: /put in closet/i}));

    expect(await screen.queryByText(/junk/i)).not.toBeInTheDocument();
})

export {}
