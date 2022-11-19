import { setupServer } from 'msw/node';

const setupMsw = () => {
    const server = setupServer();
    afterEach(() => server.resetHandlers());
    beforeAll(() => server.listen());
    afterAll(() => server.close());
    return server;
};

export default setupMsw;