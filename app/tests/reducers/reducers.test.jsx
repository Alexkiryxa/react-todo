let expect = require('expect');
let df = require('deep-freeze-strict');// To check reducer to be pure function

let reducers = require('reducers');

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            let action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };
            let res = reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should toggle showCompleted', () => {
            let action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            let res = reducers.showCompletedReducer(df(false), df(action));

            expect(res).toEqual(true);
            res = reducers.showCompletedReducer(df(true), df(action));
            expect(res).toEqual(false);
        });
    });

    describe('todosReducer', () => {
        it('should add new todo', () => {
            let action = {
                type: 'ADD_TODO',
                text: 'Walk the dog'
            };
            let res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });

        it('should toggle completed and set/unset completedAt', () => {
            let todos = [{
                id: 1,
                text: 'Walk the dog',
                completed: false,
                createdAt: 123,
                completedAt: undefined
            }, {
                id: 2,
                text: 'Walk the cat',
                completed: true,
                createdAt: 234,
                completedAt: 345
            }];
            let actionOnCompletedFalse = {
                type: 'TOGGLE_TODO',
                id: 1
            };
            let actionOnCompletedTrue = {
                type: 'TOGGLE_TODO',
                id: 2
            };
            let resOnCompletedFalse = reducers.todosReducer(df(todos), df(actionOnCompletedFalse));
            let resOnCompletedTrue = reducers.todosReducer(df(todos), df(actionOnCompletedTrue));

            expect(resOnCompletedFalse[0].completed).toEqual(!todos[0].completed);
            expect(resOnCompletedFalse[1].completed).toEqual(todos[1].completed);
            expect(resOnCompletedFalse[0].completedAt).toBeA('number');

            expect(resOnCompletedTrue[1].completed).toEqual(false);
            expect(resOnCompletedTrue[0].completed).toEqual(todos[0].completed);
            expect(resOnCompletedTrue[1].completedAt).toNotExist();
        });

        it('should add existing todos', () => {
            let todos = [{
                id: '111',
                text: 'anything',
                completed: false,
                completedAt: undefined,
                createdAt: 33000
            }];
            let action = {
                type: 'ADD_TODOS',
                todos
            };
            let res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        });
    });
});
