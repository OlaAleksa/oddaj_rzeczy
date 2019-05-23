export class ActionsService {
    getActionsSummary() {
        return Promise.resolve([
            {
                type: 'bags',
                number: 10,
            }, {
                type: 'organizations',
                number: 5
            }, {
                type: 'collections',
                number: 7,
            }
        ]);
    }
}
