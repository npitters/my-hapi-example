'use strict';

module.exports = {
    method: 'GET',
    path: '/pre-admit-patients',
    options: {
        tags: ['api'],
        handler: async (request, h) => {
            return [
                {
                    id: 1,
                    name: 'adam'
                },
                {
                    id: 2,
                    name: 'neville'
                }
            ];
        }
    }
};
