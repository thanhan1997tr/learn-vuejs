Vue.component('todo-item', {
     props: ['todo'],
     template: '<li>{{ todo.text }}</li>',
});

var app = new Vue({
     el: '#root',
     data: {
          title: 'Bài học vuejs đầu tiên',
          message: 'You loaded this page on ' + new Date().toLocaleString(),
          seen: true,
          todos: [{ text: 'Learn JavaScript' }, { text: 'Learn Vue' }, { text: 'Build something awesome' }],
          messageButton: 'Before Click',
          messageInput: 'Hello',
          groceryList: [
               { id: 0, text: 'Vegetables' },
               { id: 1, text: 'Cheese' },
               { id: 2, text: 'Whatever else humans are supposed to eat' },
          ],
     },
     methods: {
          onClick: function () {
               this.messageButton = 'After Click';
          },
     },
});
