(function() {
    "use strict";

    var todoApp = (function() {
        document.addEventListener("DOMContentLoaded", function() {
            init();
        });

        var init = function() {
            document.getElementById("add-task").addEventListener("click", function() {
                var newTitle = document.getElementById("title").value,
                    newContent = document.getElementById("content").value;
                if (validate(newTitle)) {
                    addTodo(newTitle, newContent);
                }
            }, false);

            document.getElementById("todos").addEventListener("click", function(e) {
                if (e.target && e.target.nodeName == "BUTTON") {
                    deleteTodo(e.target.parentNode);
                }
            }, false);
        };

        var validate = function(newTitle, newContent) {
            if (newTitle.length === 0) {
                var target = document.getElementById("title");
                target.className = target.className + " error";
                return false;
            } else {
                return true;
            }
        };

        var addTodo = function(title, content) {
            var newTodo = document.createElement("section"),
                h2 = document.createElement("h2"),
                newTitle = document.createTextNode(title),
                p = document.createElement("p"),
                newContent = document.createTextNode(content),
                button = document.createElement("button"),
                deleteBtn = document.createTextNode("delete");

            h2.appendChild(newTitle);
            newTodo.appendChild(h2);
            p.appendChild(newContent);
            newTodo.appendChild(p);
            button.appendChild(deleteBtn);
            newTodo.appendChild(button);

            document.getElementById("todos").appendChild(newTodo);
            document.getElementById("form").reset();
        };

        var deleteTodo = function(todo) {
            todo.parentNode.removeChild(todo);
        };
    }());
}());