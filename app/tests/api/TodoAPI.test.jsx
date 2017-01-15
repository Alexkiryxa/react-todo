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
});
