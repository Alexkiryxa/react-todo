let expect = require('expect');

let TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {//Mocha method
    beforeEach(() => {
        localStorage.removeItem('todos');
    });
    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            let todos = [{
                id: 12,
                text: 'Test text',
                completed: false
            }];

            TodoAPI.setTodos(todos);

            let actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid todos array', () => {
            let todos = {
                id: 12,
                text: 'Test text',
                completed: false
            };

            TodoAPI.setTodos(todos);

            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('getTodos', () => {
        it('should return empty array for bad local storage data', () => {
            let actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual([]);
        });

        it('should return todos if valid array in local storage', () => {
            let todos = [{
                id: 12,
                text: 'Test text',
                completed: false
            }];

            localStorage.setItem('todos', JSON.stringify(todos));

            let actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual(todos);
        });
    });

    describe('filterTodos', () => {
        let todos = [{
            id: 1,
            text: 'some text',
            completed: true
        }, {
            id: 2,
            text: 'some text other',
            completed: false
        }, {
            id: 3,
            text: 'text3',
            completed: true
        }];

        it('should return all items if show completed is true', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '');

            expect(filteredTodos.length).toBe(3);
        });

        it('should return non-completed items if show completed is false', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, false, '');

            expect(filteredTodos.length).toBe(1);
        });

        it('should sort by completed status', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '');

            expect(filteredTodos[0].completed).toBe(false);
        });

        it('should filter todos by searchText', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, 'some');

            expect(filteredTodos.length).toBe(2);
        });

        it('should return all todos if searchText is empty', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '');

            expect(filteredTodos.length).toBe(3);
        });
    });
});
