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
                todo: {
                    id: 'abc123',
                    text: 'Something to do',
                    completed: false,
                    createdAt: 300
                }
            };
            let res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);
        });

        it('should update todo', () => {
            let todos = [{
                id: 2,
                text: 'Walk the cat',
                completed: true,
                createdAt: 234,
                completedAt: 345
            }];
            let updates = {
                completed: false,
                completedAt: null
            };
            let action = {
                type: 'UPDATE_TODO',
                id: todos[0].id,
                updates
            };
            let res = reducers.todosReducer(df(todos), df(action));


            expect(res[0].completed).toEqual(updates.completed);
            expect(res[0].completedAt).toEqual(updates.completedAt);
            expect(res[0].text).toEqual(todos[0].text);
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
