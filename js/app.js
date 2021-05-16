
		let btn = document.getElementById('btnAdd');
            btn.addEventListener('click', function(){
        let newToDO = document.getElementById('new-task').value;
        let list = document.getElementById('incomplete-tasks');
        list.innerHTML += '<li><input type="checkbox"><label class="lableValue">'+ newToDO +'</label><input class="inputValue" type="text"><button class="edit">Edit</button><button class="delete">Delete</button></li>';
        setHandlers();
            });
            function setHandlers(){
                let buttons_delete = document.querySelectorAll('.delete');
                for(let index=0; index<buttons_delete.length; index++){
                    let one_button = buttons_delete[index];
                    one_button.addEventListener('click',function(event){
                        let el = event.target;
                        let li = el.parentElement;
                        li.remove();
                    })
                }
                let buttons_edit = document.querySelectorAll('.edit');
                for(let index=0; index<buttons_edit.length; index++){
                    let one_button_edit = buttons_edit[index];
                    one_button_edit.onclick = function(event){
                        let el = event.target;
                        let li = el.parentElement;
                        li.classList.toggle("editMode");
                        let lable = li.children[1];
                        let input = li.children[2];
                        if(li.classList.contains('editMode')){
                            input.value = lable.innerHTML;
                        } else {
                            lable.innerHTML = input.value;
                        }
                    }
                }
               	let check_icon = document.querySelectorAll('#incomplete-tasks input[type="checkbox"]');
                	for(let index=0; index<check_icon.length; index++){
                    let one_check_icon = check_icon[index];
                    one_check_icon.onclick = function(event){
                        let el_check = event.target;
                        let li_check = el_check.parentElement;
                        let lable = li_check.children[1];
                        li_check.remove();
                        let completed_icon = document.querySelector("#completed-tasks")
                        completed_icon.innerHTML += '<li><input type="checkbox" checked><label>' + lable.innerText + '</label><input type="text"><button class="edit">Edit</button><button class="delete">Delete</button></li>';
                        setHandlers();
                    }
                    }
            }
            setHandlers();