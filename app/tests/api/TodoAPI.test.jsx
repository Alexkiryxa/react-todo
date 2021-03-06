let expect = require('expect');

let TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {//Mocha method
    beforeEach(() => {
        localStorage.removeItem('todos');
    });
    it('should exist', () => {
        expect(TodoAPI).toExist();
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
